// depositos
function listarecibos(){
	var cliente=window.localStorage.getItem("clave");
		consultadb().transaction(poblarfac, function(err){
    	 		 alert("Error poblar recibos para deposito: "+err.code+err.message);
         		});		
	function poblarfac(tx){  				
			var sql='SELECT a.recibo,a.mondoc,b.nombre,a.monefe FROM ENCOBROS a ';		
				sql+=' left outer join CLIENTES b on b.clave=a.cliente WHERE a.depositado is null and a.monefe>0 ORDER BY a.recibo';
			var sql2='SELECT a.recibo,a.monto,a.numcheque,b.nombre,c.descripcion FROM CHEQUES a ';		
				sql2+=' left outer join CLIENTES b on b.clave=a.cliente left OUTER JOIN CUENTASB c on c.codigo=a.codbanco ';	
				sql2+=' left outer join ENCOBROS d on d.recibo=a.recibo WHERE d.depositado is null ORDER BY a.recibo';	
				
				//alert(sql);
				tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error select recibos: "+err.code+err.message);
         		});    	
				tx.executeSql(sql,[],cheques,function(err){
    	 		 alert("Error select cheques para deposito: "+err.code+err.message);
         		});    	
	}
	function listo(tx,results){ 			  
		      $("#gridrecibosefe").empty();				  
			  var html = "";			 
			  var montot=0;			  		      
			  //agrega encabezado de grid
			  html+=' <div class="ui-block-a" style="width:60px;height:20px;margin-left:-10px" > ';            
              html+=' <div class="ui-bar ui-bar-a">Selec</div></div> ';           
              html+=' <div class="ui-block-b" style="width:110px;margin-left:-10px"><div class="ui-bar ui-bar-a">Recibo</div></div>';
             // html+=' <div class="ui-block-c" style="width:200px"><div class="ui-bar ui-bar-a">Cliente</div></div>';
              html+=' <div class="ui-block-c" style="width:80px"><div class="ui-bar ui-bar-a">Monto</div></div>';

			  $.each(results.rows,function(index){				  
				  var row = results.rows.item(index); 				     			     
				     //descuento=(row['precio']/100)*row['descuento'];
					 montot+=Number(row['mondoc']);
					 
					html+='<div class="ui-block-a" style="width:60px;height:20px;margin-left:-10px" >';              
           			html+='<div class="ui-bar ui-bar-e"  >';      		 		
                   	html+='<div style="padding:0px; margin-top:-8px; margin-left:-10px">'; 
			        html+='     <label for="D'+row['recibo']+'" >&nbsp</label>';  
            		html+='     <input type="checkbox" id="D'+row['recibo']+'" name="'+row['recibo']+'" value="'+row['monefe']+'" class="clasedep"  />';
                   	html+='		</div>';	
		            html+='   </div>';
            		html+='</div>';            
                    html+='<div class="ui-block-b" style="width:110px"><div class="ui-bar ui-bar-b">'+row['recibo']+'</div></div>';
                    //html+='<div class="ui-block-c" style="width:200px"><div class="ui-bar ui-bar-b">'+row['nombre']+'</div></div>';
                    html+='<div class="ui-block-c" style="width:80px"><div class="ui-bar ui-bar-b">'+row['monefe']+'</div></div>';


                  	 
			  });//.each
					$("#gridrecibosefe").append(html); 
					//$("#tpedido").attr("value",total); 			
					//$("#montodep").val(montot.toFixed(2)); 			
					
					//alert('total'+total);					 
			
	   }//function exito
	   function cheques(tx,results){ 			  
		      $("#gridrecibosche").empty();				  
			  var html = "";			 
			  var montot=0;			  		      
			  //agrega encabezado de grid
			  html+=' <div class="ui-block-a" style="width:60px;height:20px;margin-left:-10px" > ';            
              html+=' <div class="ui-bar ui-bar-a">Selec</div></div> ';           
              html+=' <div class="ui-block-b" style="width:110px;margin-left:-10px"><div class="ui-bar ui-bar-a">Recibo</div></div>';
              html+=' <div class="ui-block-c" style="width:200px"><div class="ui-bar ui-bar-a">Banco</div></div>';
			  html+=' <div class="ui-block-d" style="width:50px"><div class="ui-bar ui-bar-a">CH</div></div>';
              html+=' <div class="ui-block-e" style="width:80px"><div class="ui-bar ui-bar-a">Monto</div></div>';

			  $.each(results.rows,function(index){				  
				  var row = results.rows.item(index); 				     			     
				     //descuento=(row['precio']/100)*row['descuento'];
					 montot+=Number(row['monto']);
					 
					html+='<div class="ui-block-a" style="width:60px;height:20px;margin-left:-10px" >';              
           			html+='<div class="ui-bar ui-bar-e"  >';      		 		
                   	html+='<div style="padding:0px; margin-top:-8px; margin-left:-10px">'; 
			        html+='     <label for="D'+row['recibo']+'" >&nbsp</label>';  
            		html+='     <input type="checkbox" id="D'+row['recibo']+'" name="'+row['recibo']+'" value="'+row['monefe']+'" class="clasedep"  />';
                   	html+='		</div>';	
		            html+='   </div>';
            		html+='</div>';            
                    html+='<div class="ui-block-b" style="width:110px"><div class="ui-bar ui-bar-b">'+row['recibo']+'</div></div>';
                    html+='<div class="ui-block-c" style="width:200px"><div class="ui-bar ui-bar-b">'+row['descripcion']+'</div></div>';
					html+='<div class="ui-block-d" style="width:50px"><div class="ui-bar ui-bar-b">'+row['numche']+'</div></div>';
                    html+='<div class="ui-block-e" style="width:80px"><div class="ui-bar ui-bar-b">'+row['monto']+'</div></div>';


                  	 
			  });//.each
					$("#gridrecibosche").append(html); 
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
			var sql='SELECT a.codigo,a.cuenta,b.descripcion FROM CUENTASDEP a inner join CUENTASB b on b.codigo=a.codigo ';		
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
				    var codigocuenta=row['codigo']+'@'+row['cuenta'];	     			     
				    html+='    <option value="'+codigocuenta+'">';
		            html+='        '+row['descripcion'];
        		    html+='    </option>';
			  });//.each
				$("#menucuentad").append(html); 
				$("select#menucuentad").val("Banco").selectmenu("refresh");
 	}

 // });	//$('#pclientes').live('pageshow',function(event, ui){
	
}// poblarcuentadep
function guardadep(recibo,deposito){
	function listo(tx,results){ 	      
	      if (results.rows.length>0){
			  renglones=results.rows.length;
		  	 $.each(results.rows,function(index){           			 
			 var row = results.rows.item(index);  
			 var monche=row['monche'];//importe abonado a la factura
			 var monefe=row['monefe'];//factura afectada 
				
			 //alert('antes de llamar a funcion guardadetcob');
			 guardadetdep(monche,monefe,deposito,recibo);			 
			 //alert('despues de llamar a funcion guardadev');
			
		 	});
			//alert('antes de llamar a funcion guardaenccob');			
			//alert(cliente+','+tipo+','+ruta+','+recibo+','+horaini+','+horafin+','+estado+','+monche.toFixed(2)+','+monefe.toFixed(2)+','+totalrecibo.toFixed(2));
			 
			//alert('despues de llamar a funcion guardaenccob');
		  }//if (results.rows.length>0){		  
 	}//function listo(tx,results){ 
	function consultatemp(tx){  
	             //alert('ENTRA A CONSultatepm'); 
				  var sql='SELECT a.monche,a.monefe ';
	  			  sql+='FROM ENCOBROS a ';					  
				  sql+=' where a.recibo ="'+recibo+'"';		    				 
				//alert(sql);				
				
			tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error al preparar guardar linea deposito : "+linea+err.code+err.message);
         		});    									
	}
	consultadb().transaction(consultatemp, function(err){
    	 			 alert("Error select tabla ENCOBROS: "+err.code+err.message);
         		});		
				
}//function guardadep(recibo,deposito)