// consultas

function mostrarclientes(clavecli){
	$('#pclientes').live('pageshow',function(event, ui){
		//alert('This page was just hidden: '+ ui.prevPage);
		var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
		db.transaction(consulta, errorconsulta, listo);	
	
	function consulta(tx) {
      tx.executeSql('DROP TABLE IF EXISTS DEMO');
      tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL, clave TEXT NOT NULL)');        
	  tx.executeSql('INSERT INTO DEMO(nombre,clave) VALUES ("Cesar Menso", "1020")');        
	  tx.executeSql('INSERT INTO DEMO(nombre,clave) VALUES ("Diego Morales", "1010")');
	}
	function errorconsulta(err) {
    	alert("Error processing SQL: "+err);
	}

	function listo() {    
		db.transaction(poblarcli,errorconsulta);
	}
	function poblarcli(tx){        
		tx.executeSql('SELECT * FROM DEMO ',[],querySuccess,errorconsulta);    	
	}
function querySuccess(tx,results){  
 $('#listaclientes').empty();        
$.each(results.rows,function(index){           
 var row = results.rows.item(index);            
 $('#listaclientes').append('<li id="'+row['clave']+'"><a href="#datoscli"><h3>'+row['nombre']+'</h3><p>Clave '+row['clave']+'</p></a></li>');        
 });         
 $('#listaclientes').listview('refresh'); 
 }

});	
	
}
function mostrarcliente(clavecli){
$('#datoscli').live('pageshow',function(event, ui){
		//alert('This page was just hidden: '+ ui.prevPage);
		var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
		db.transaction(consulta, errorconsulta);
	
	function consulta(tx) {
		tx.executeSql('SELECT * FROM DEMO WHERE clave="'+clavecli+'"',[],exito,errorconsulta);    	}
	
	function exito(tx,results){         
	   var row = results.rows.item(0);            
	   $('#nomcli').text(row['nombre']);
  	   $('#clacli').text(row['clave']);
 		}

	
	 });	

}