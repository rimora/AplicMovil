// consultas de articulos
function consultaexis(articulo){
	alert('articulo de funcion existencia '+articulo);	
	function listo(tx,results){ 	 
	      alert('entra a listo de consulexis');         
	      if (results.rows.length>0){			  
			var row = results.rows.item(index);    
			existenciab=row['existencia'];			
			alert('existencia de consulta '+existenciab);
		  }		
		  else{
			  existenciab=0;
			  alert('no hay existencias funcion existencia'); 
		  }
 	}
	function consulexis(tx){   	
	        alert('entra a consulexis');    
			var sql='SELECT existencia FROM ARTICULO_EXISTENCIA WHERE articulo="'+articulo+'" AND bodega="K01"';			
			tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error consultar existencia : "+err.code+err.message);
         		});    									
	}
	consultadb().transaction(consulexis, function(err){
    	 		 alert("Error select tabla ARTICULO_EXISTENCIA: "+err.code+err.message);
         		},alert('existencia en funcion existencia de transaction '+existenciab));		
    
}//function existencia