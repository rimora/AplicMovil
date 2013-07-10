//devoluciones
function listafacturas(){
 // $('#pclientes').live('pageshow',function(event, ui){
		//alert('This page was just hidden: '+ ui.prevPage);		
		//var db = window.openDatabase("Database", "1.0", "SARDEL", 1000000);
		consultadb().transaction(poblarfac, function(err){
    	 		 alert("Error poblar facturas para devoluciones : "+err.code+err.message);
         		});		
	function poblarfac(tx){  
		    alert('entra a poblarfac');
			var sql='SELECT * FROM ENCHISFAC WHERE CLIENTE="'+window.localStorage.getItem("clave")+'" ORDER BY FACTURA';		
			
		    alert(sql);
		tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error select historico facturas: "+err.code+err.message);
         		});    	
	}
	function listo(tx,results){  
	      alert('entra a listo');
		 $('#listahistfac').empty(); 		     
		 $.each(results.rows,function(index){           
			 var row = results.rows.item(index); 
			 var html="";               			 
			 html+='<li id="'+row['factura']+'">';
	         html+='<a href="#pdethistfac"><h5> Factura: '+row['factura']+'</h5>';
			 html+='Total:  '+row['monto']+'    Pedido:   '+row['pedido']+'    Fecha:   '+row['fecha']+'</a></li>';
			 alert('antes del append de listfac '+html);
			 $('#listahistfac').append(html);  			
			 alert('despues del append de listfac '+html); 
		 });    
		 alert('antes de refresh de lista');  		 
		 //$('#listahistfac').listview('refresh'); 
		 alert('despues de refresh de lista');
 	}

 // });	//$('#pclientes').live('pageshow',function(event, ui){
	
}// listafacturas()
function mostrarhistfac(factura){
		//var db = window.openDatabase("Database", "1.0", "SARDEL", 200000);
		consultadb().transaction(consulta, errorconsulta);	
	function consulta(tx) {	
        var sql='SELECT a.factura,a.articulo,a.cantidad,a.devuelto,a.precio,a.totlinea,a.linea, ';
	    sql+='(a.precio-((a.precio/100)*b.descuento)) as preciocdesc,b.descripcion,c.cantidad as temdev FROM DETHISFAC a ';	
		sql+='left outer join articulo b on b.articulo=a.articulo left outer join TEMDEV c on c.linea=a.linea where a.factura="'+factura+'"';	
		
		tx.executeSql(sql ,[],exito,errorconsulta);
		}		
		function exito(tx,results){ 
			
		      $("#griddethistfac").empty();				  
			  var html = "";
		      var precio=0;
			  //agrega encabezado de grid
			  html+=' <div class="ui-block-a" style="width:110px" ><div class="ui-bar ui-bar-a">Articulo</div></div> ';           
              html+=' <div class="ui-block-b" style="width:300px"><div class="ui-bar ui-bar-a">Descrip.</div></div>';
              html+=' <div class="ui-block-c" style="width:90px"><div class="ui-bar ui-bar-a">Disp.</div></div>';
              html+=' <div class="ui-block-d" style="width:90px"><div class="ui-bar ui-bar-a">Devuelto</div></div>';
              html+=' <div class="ui-block-e" style="width:90px"><div class="ui-bar ui-bar-a">Precio</div></div>';
			  $.each(results.rows,function(index){				  
				  var row = results.rows.item(index); 				     			     
				     //descuento=(row['precio']/100)*row['descuento'];
				     //precio=row['precio']*(1+(row['impuesto']/100));	
					 alert (row['temdev']);
					 if (row['temdev']==null){
						var devuelto= Number(row['devuelto']);												 
					 }
					 else {
					 	var devuelto= Number(row['devuelto'])+Number(row['temdev']);												 
					 }
					 alert (devuelto);
					 alert( row['cantidad']);
					 precio=row['preciocdesc'];	
					 var disponible=Number(row['cantidad'])-Number(devuelto);			 
					 //importe=precio*row['cantidad'];
					 //total+=Number(importe);					 
					html+='<div class="ui-block-a" style="width:110px"><div class="ui-bar ui-bar-e">'+row['articulo']+'</div></div>';   		 		                    html+='<div class="ui-block-b" style="width:300px"><div class="ui-bar ui-bar-b">'+row['descripcion']+'</div></div>';
                    html+='<div class="ui-block-c" style="width:90px"><div class="ui-bar ui-bar-b">'+disponible+'</div></div>';
                    html+='<div class="ui-block-d" style="width:90px"><div class="ui-bar ui-bar-b"><a href="#pcantidaddev" class="clasedev" name="'+row['linea']+'"><font color="FFFFFF">'+devuelto+'</font></a></div></div>';
	                html+='<div class="ui-block-e" style="width:90px"><div class="ui-bar ui-bar-b">'+precio.toFixed(2)+'</div></div> ';
                  	 
			  });//.each
					$("#griddethistfac").append(html); 
					//$("#tpedido").attr("value",total); 			
					//$("#tpedido").val(total.toFixed(2)); 			
					
					//alert('total'+total);					 
			
	   }//function exito
 		
	function errorconsulta(err) {
    	alert("Error al llenar detalles historico factura "+err.code+err.message);
	}
//  });	

  }//mostrarhistfac
function guardadev(linea,cantidad){	
var cabinsertada=false;
var sumtotlinea=0;
var summontodesc=0;
var sumivalinea=0;
var consecutivo=window.localStorage.getItem("consedev");
var ruta=window.localStorage.getItem("ruta");
var fecha = new Date();
var fechaact=fecha.getFullYear()+"/"+(fecha.getMonth()+1)+"/"+fecha.getDate();
var hora=fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
var fechayhora=fechaact+" "+hora;
//+"\nMilisegundo: "+fecha.getMilliseconds());
var longitud=consecutivo.length;
var inicial=consecutivo.substr(0,3);
var numpedido= consecutivo.substr(3,(longitud-3));
 alert(numpedido); 
var incremetarp=Number(numpedido)+1;
 alert(incremetarp); 
var pedido=inicial+pad(incremetarp,6);
 alert(pedido); 
   function pad(n, length){
	   alert('entra a funcion'+n); 
  	 n = n.toString();
   	 while(n.length < length) n = "0" + n;
  	 return n;
   }
	function listo(tx,results){ 	      
	      if (results.rows.length>0){		
		  	 $.each(results.rows,function(index){           			 
			 var row = results.rows.item(index);  
			 var cantidadven=row['cantidad'];//cantidad vendida
			 var cantidaddev=row['cantidad'];//cantidad devuelta
			 var precio=row['precio'];//precio sin descuento y sin iva			 
			 var pordesc=row['descuento'];//porcentaje de descuento que se aplica 
			 var totlinea=Number(row['cantidad'])*Number(row['precio']);//total de linea sin descuento y sin iva
			 var montodesc=(Number(totlinea)/100)*Number(row['descuento']); 
			 var lineacdes=totlinea-montodesc;//importe de linea con descuento
			 var ivalinea=lineacdes*(row['impuesto']/100);			 
			 var preciocdesc=row['preciocdesc'];	//precio con descuento sin iva		 
			 var preciociva=preciocdesc*(1+(row['impuesto']/100));			 			 
			 var articulo=row['articulo'];
			 var dif=cantidadven-cantidaddev;
 			 if (cantidad>dif){//se intenta devolver mas de la cantidad disponible para devolución
				navigator.notification.alert('Se intenta devolver una cantidad mayor que el disponible',null,'Error Indicando Cantidad','Aceptar');						 				return false;				 
			 }
			
			 
			 sumtotlinea+=sumtotlinea+totlinea;//suma del total de linea sin descuento y sin iva
			 summontodesc+=summontodesc+montodesc;//suma del total de linea sin descuento y sin iva
			 sumivalinea+=sumivalinea+ivalinea;//suma del total de linea sin descuento y sin iva
			 alert('antes de llamar a funcion guardated');
			 guardadetpedido(pedido,articulo,precio,pordesc,totlinea,montodesc,precio,cantidad);
			alert('despues de llamar a funcion guardated');
			 
			 
			/* 
			 tx.executeSql('CREATE TABLE IF NOT EXISTS ENCPEDIDO (id INTEGER PRIMARY KEY AUTOINCREMENT, NUM_PED,COD_ZON,DOC_PRO,COD_CLT,TIP_DOC,HOR_FIN,FEC_PED,FEC_DES,MON_IMP_VT,MON_CIV,MON_SIV,MON_DSC,OBS_PED,ESTADO,COD_CND,COD_BOD)'); 
         tx.executeSql('CREATE TABLE IF NOT EXISTS DETPEDIDO (id INTEGER PRIMARY KEY AUTOINCREMENT, NUM_PED,COD_ART,MON_PRC_MN,POR_DSC_AP,MON_TOT,MON_DSC,MON_PRC_MX,CNT_MAX)'); 

			 */			 			 
		 	});
			alert('antes de llamar a funcion guardaenc');
		  	 guardaencpedido(pedido,ruta,window.localStorage.getItem("clave"),fechayhora,fechaact,sumivalinea,(sumtotlinea+sumivalinea),sumtotlinea,summontodesc,obs,30,"K01");
				alert('despues de llamar a funcion guardated');
		  }//if (results.rows.length>0){		  
 	}//function listo(tx,results){ 
	function consultatemp(tx){  
	             alert('ENTRA A CONSultatepm'); 
				  var sql='SELECT a.factura,a.articulo,a.cantidad,a.devuelto,a.precio,a.totlinea,a.linea, ';
	  			  sql+='(a.precio-((a.precio/100)*b.descuento)) as preciocdesc,b.descripcion,c.cantidad as temdev FROM DETHISFAC a ';					  
			      sql+='left outer join articulo b on b.articulo=a.articulo left outer join TEMDEV c on c.linea=a.linea ';
				  sql+=' where a.factura="'+window.localStorage.getItem("factura")+'"';	
				  sql+=' and a.linea="'+linea+'"';
			    alert(sql);
								
			tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error al insertar devolución : "+linea+err.code+err.message);
         		});    									
	}
	consultadb().transaction(consultatemp, function(err){
    	 			 alert("Error select tabla temporal dethisfac para devolver: "+err.code+err.message);
         		});		
				
}//function guardadev
function insertalindev(linea,cantidad){	
	function listo(tx,results){ 	      
	      if (results.rows.length>0){			
			 	var row = results.rows.item(0); 
			    var articulo=row['articulo'];
			 //if (row['cantidad']>0){
			 	//preparadetalletemp(row['articulo'],row['cantidad']);												
				var dif=Number(row['cantidad'])-Number(row['devuelto']);
 			 	if (cantidad>dif){//se intenta devolver mas de la cantidad disponible para devolución
					navigator.notification.alert('Se intenta devolver una cantidad mayor que el disponible',null,'Error Indicando Cantidad','Aceptar');						 					return false;				 
				 }
				 alert('pasa depues del if');
				 actualizatempdev(linea,cantidad)
		  }//if (results.rows.length>0){		  
 	}//function listo(tx,results){ 
	function consultatemp(tx){   	       
				//alert('articulo de MODIFICAR temPEDIDO '+articulo);
				 var sql='SELECT a.articulo,a.cantidad,a.devuelto,a.linea, ';
	   			 sql+='b.cantidad as temdev FROM DETHISFAC a ';	
				 sql+='left outer join TEMDEV b on b.linea=a.linea where a.factura="'+window.localStorage.getItem("factura")+'" and a.linea='+linea;	
		
								
			tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error consultar temporal TEMDEV : "+articulo+err.code+err.message);
         		});    									
	}
	consultadb().transaction(consultatemp, function(err){
    	 			 alert("Error select tabla temporal TEMDEV: "+err.code+err.message);
         		});		
				
}//function insertalindev
function copiadethistempd(){	
	function listo(tx,results){
		   $.each(results.rows,function(index){           
			 var row = results.rows.item(index); 
			 insertatempdev(row['articulo'],row['linea']);
		 });    		 	      
 	}//function listo(tx,results){ 
	function consultatemp(tx){   	       
				//alert('articulo de MODIFICAR temPEDIDO '+articulo);
				 var sql='SELECT a.articulo,a.linea ';
	   			 sql+='FROM DETHISFAC a ';	
				 sql+='where a.factura="'+window.localStorage.getItem("factura")+'"';	
		
								
			tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error copiar temporal TEMDEV : "+articulo+err.code+err.message);
         		});    									
	}
	consultadb().transaction(consultatemp, function(err){
    	 			 alert("Error select copiar tabla temporal TEMDEV: "+err.code+err.message);
         		});		
				
}//function copiadethistempd

