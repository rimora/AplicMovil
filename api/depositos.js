// depositos
function listarecibos(){
	var cliente=window.localStorage.getItem("clave");
		consultadb().transaction(poblarfac, function(err){
    	 		 alert("Error poblar recibos para deposito: "+err.code+err.message);
         		});		
	function poblarfac(tx){  
				alert('entra poblarfac');
			var sql='SELECT a.recibo,a.mondoc,b.nombre FROM ENCOBROS a ';		
				sql+=' left outer join CLIENTES b on b.clave=a.cliente WHERE a.depositado is null ORDER BY a.recibo';
				alert(sql);
				tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error select recibos: "+err.code+err.message);
         		});    	
	}
	function listo(tx,results){ 
			  alert('entra de depositos');
		      $("#gridrecibosdep").empty();				  
			  var html = "";			 
			  var montot=0;			  		      
			  //agrega encabezado de grid
			  html+=' <div class="ui-block-a" style="width:70px;height:20px" > ';            
              html+=' <div class="ui-bar ui-bar-a">Selec.</div></div> ';           
              html+=' <div class="ui-block-b" style="width:110px"><div class="ui-bar ui-bar-a">Recibo</div></div>';
              html+=' <div class="ui-block-c" style="width:300px"><div class="ui-bar ui-bar-a">Cliente</div></div>';
              html+=' <div class="ui-block-d" style="width:90px"><div class="ui-bar ui-bar-a">Monto</div></div>';

			  $.each(results.rows,function(index){				  
				  var row = results.rows.item(index); 				     			     
				     //descuento=(row['precio']/100)*row['descuento'];
					 montot+=Number(row['mondoc']);
					 
					html+='<div class="ui-block-a" style="width:70px;height:20px" >';              
           			html+='<div class="ui-bar ui-bar-e"  >';      		 		
                   	html+='<div style="padding:0px; margin-top:-8px; margin-left:-10px">'; 
			        html+='     <label for="D'+row['recibo']+'" >&nbsp</label>';  
            		html+='     <input type="checkbox" id="D'+row['recibo']+'" name="'+row['recibo']+'" value="'+row['mondoc']+'" class="clasedep"  />';
                   	html+='		</div>';	
		            html+='   </div>';
            		html+='</div>';            
                    html+='<div class="ui-block-b" style="width:110px"><div class="ui-bar ui-bar-b">'+row['recibo']+'</div></div>';
                    html+='<div class="ui-block-c" style="width:300px"><div class="ui-bar ui-bar-b">'+row['nombre']+'</div></div>';
                    html+='<div class="ui-block-d" style="width:90px"><div class="ui-bar ui-bar-b">'+row['mondoc']+'</div></div>';


                  	 
			  });//.each
					$("#gridrecibosdep").append(html); 
					//$("#tpedido").attr("value",total); 			
					//$("#montodep").val(montot.toFixed(2)); 			
					
					//alert('total'+total);					 
			
	   }//function exito

 // });	//$('#pclientes').live('pageshow',function(event, ui){
	
}// listarecibos()
function poblarcuentadep(){
		consultadb().transaction(poblarc, function(err){
    	 		 alert("Error poblar cuentasbancarias para depositos: "+err.code+err.message);
         		});		
		function poblarc(tx){  
			var sql='SELECT b.descripcion FROM CUENTASDEP a inner join CUENTASB b on b.codigo=a.codigo ';		
			tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error select CUENTASDEP : "+err.code+err.message);
         		});    	
		}
		function listo(tx,results){  
			 $("#menucuentad").empty();				 
			  var html = "";			  
 				    html+='    <option value="Banco">';
		            html+='        Banco';
        		    html+='    </option>';
			  $.each(results.rows,function(index){				  
				  var row = results.rows.item(index); 				     			     
				    html+='    <option value="'+row['codigo']+'">';
		            html+='        '+row['descripcion'];
        		    html+='    </option>';
			  });//.each
				$("#menucuentad").append(html); 
				$("select#menucuentad").val("Banco").selectmenu("refresh");
 	}

 // });	//$('#pclientes').live('pageshow',function(event, ui){
	
}// poblarcuentadep
function guardadep(){	

var totalrecibo=0;
var tipo='5';//recibo 5 o nt credito 7
var tipoaso='1';//documento abonado,factura 1 o nt credito 7
var estado='A'; //A=activo, N=anulado
var monefe=Number(window.localStorage.getItem("efectivo"));
var monche=Number(window.localStorage.getItem("cheque"));
var cliente=window.localStorage.getItem("clave");
var consecutivo=window.localStorage.getItem("conserec");
var ruta=window.localStorage.getItem("ruta");
var horaini=window.localStorage.getItem("fechahora");//fecha y hora actual guardada cuando inicio la devolución de la factura.
guardafechaactual();//guarda en memoria la fecha con hora, actuales
var horafin= window.localStorage.getItem("fechahora");//recuperamos la nueva fecha y hora actual
var fecharec=window.localStorage.getItem("fecha");//recuperamos la fecha actual
var longitud=consecutivo.length;
var inicial=consecutivo.substr(0,3);
var numrec= consecutivo.substr(3,(longitud-3));
var incrementarec=Number(numrec)+1;
var recibo=inicial+pad(incrementarec,6);

   function pad(n, length){
	   //alert('entra a funcion'+n); 
  	 n = n.toString();
   	 while(n.length < length) n = "0" + n;
  	 return n;
   }
	function listo(tx,results){ 	      
	      if (results.rows.length>0){
			  renglones=results.rows.length;
		  	 $.each(results.rows,function(index){           			 
			 var row = results.rows.item(index);  
			 var monto=row['abonado'];//importe abonado a la factura
			 var factura=row['factura'];//factura afectada 
			 var saldo=row['saldo'];//saldo de la factura sin aplicar el abono
			 var saldo_doc=Number(saldo)-Number(monto);//saldo nuevo de la factura
			 
			 totalrecibo+=monto;//suma de los abonos a facturas			
			 //alert('antes de llamar a funcion guardadetcob');
			 guardadetcob(cliente,tipo,tipoaso,ruta,recibo,factura,estado,monto.toFixed(2),saldo_doc.toFixed(2));			 
			 //alert('despues de llamar a funcion guardadev');
			
		 	});
			//alert('antes de llamar a funcion guardaenccob');			
			//alert(cliente+','+tipo+','+ruta+','+recibo+','+horaini+','+horafin+','+estado+','+monche.toFixed(2)+','+monefe.toFixed(2)+','+totalrecibo.toFixed(2));
			 guardaenccob(cliente,tipo,ruta,recibo,horaini,horafin,estado,monche.toFixed(2),monefe.toFixed(2),totalrecibo.toFixed(2));
			//alert('despues de llamar a funcion guardaenccob');
		  }//if (results.rows.length>0){		  
 	}//function listo(tx,results){ 
	function consultatemp(tx){  
	             //alert('ENTRA A CONSultatepm'); 
				  var sql='SELECT a.factura,a.abonado,b.saldo,b.vencida ';
	  			  sql+='FROM TEMCOBROS a left outer join PENCOBRO b on b.documento=a.factura ';					  
				  sql+=' where a.abonado > 0 ';		    				 
				//alert(sql);				
							/*	 tx.executeSql('CREATE TABLE IF NOT EXISTS ENCDEP (id INTEGER PRIMARY KEY AUTOINCREMENT, codigo,cuenta,deposito,doc_pro,fec_dep,mon_dep,obs)'); 
		  tx.executeSql('CREATE TABLE IF NOT EXISTS DETDEP (id INTEGER PRIMARY KEY AUTOINCREMENT, monche,monefe,deposito,recibo,obs)'); 
		  */
			tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error al preparar guardar cobro : "+linea+err.code+err.message);
         		});    									
	}
	consultadb().transaction(consultatemp, function(err){
    	 			 alert("Error select tabla temporal temcobros: "+err.code+err.message);
         		});		
				
}//function guardacob