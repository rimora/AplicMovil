//devoluciones
function listafacturas(){
 // $('#pclientes').live('pageshow',function(event, ui){
		//alert('This page was just hidden: '+ ui.prevPage);		
		//var db = window.openDatabase("Database", "1.0", "SARDEL", 1000000);
		consultadb().transaction(poblarfac, function(err){
    	 		 alert("Error poblar facturas para devoluciones : "+err.code+err.message);
         		});		
	function poblarfac(tx){  
		    
			var sql='SELECT * FROM ENCHISFAC WHERE CLIENTE="'+window.localStorage.getItem("clave")+'" ORDER BY FACTURA';		
		
		tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error select historico facturas: "+err.code+err.message);
         		});    	
	}
	function listo(tx,results){  
		 $('#listahistfac').empty(); 		     
		 $.each(results.rows,function(index){           
			 var row = results.rows.item(index); 
			 var html="";               			 
			 html+='<li id="'+row['factura']+'">';
	         html+='<a href=""><h5> '+row['factura']+'</h3>';
			 html+='Total:'+row['monto']+' Pedido:'+row['pedido']+' Fecha:'+row['fecha']+'</a></li>';
			 $('#listahistfac').append(html);  			 
		 });    
		 //alert('antes de refresh de lista');  		 
		 $('#listahistfac').listview('refresh'); 
		 //alert('despues de refresh de lista');
 	}

 // });	//$('#pclientes').live('pageshow',function(event, ui){
	
}// listafacturas()