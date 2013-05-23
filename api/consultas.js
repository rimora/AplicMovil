// consultas

function iniciar()
{
		var db = window.openDatabase("Database", "1.0", "SARDEL", 200000);
		db.transaction(consulta, errorconsulta,alert('bd generada'));	
	    
		function consulta(tx) {
         //tx.executeSql('DROP TABLE IF EXISTS DEMO');
         tx.executeSql('CREATE TABLE IF NOT EXISTS CLIENTES (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL, clave TEXT NOT NULL)');        		 
     	}		
	   
}
function errorconsulta(err) {
    	  alert("Error processing SQL al crear BD: "+err);
	   }
function insertar(){
		var db = window.openDatabase("Database", "1.0", "SARDEL", 200000);
		db.transaction(insertacli, errorconsulta,listacliente);
		aler('funcion insertar');	
    	function insertarcli(tx) {
		tx.executeSql('INSERT INTO CLIENTES(nombre,clave) VALUES ("Cesar Menso", "1020")');        
    	tx.executeSql('INSERT INTO CLIENTES(nombre,clave) VALUES ("Diego Morales", "1010")');		 		
		}
        function listacliente(tx){
		alert('clientes insertados');
		tx.executeSql('SELECT * FROM CLIENTES ',[],listo,errorconsulta);  
		}
		function listo(tx,results){  			
		 	 $.each(results.rows,function(index){           
			 var row = results.rows.item(index);            
 			 alert(row['clave'])
			 alert(row['nombre'])		
			});         
    	}
}

function mostrarclientes(){
	$('#pclientes').live('pageshow',function(event, ui){
		//alert('This page was just hidden: '+ ui.prevPage);
		var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
		db.transaction(poblarcli, errorconsulta);		
	function errorconsulta(err) {
    	alert("Error processing SQL al mostrar clientes: "+err);
	}

	function poblarcli(tx){        
		tx.executeSql('SELECT * FROM DEMO ',[],listo,errorconsulta);    	
	}
function listo(tx,results){  
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
		alert('entra mostrar cliente');
		var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
		db.transaction(consulta, errorconsulta);
	
	function consulta(tx) {
		tx.executeSql('SELECT * FROM DEMO WHERE clave="'+clavecli+'"',[],exito,errorconsulta);    	}
	
	function exito(tx,results){         
	   var row = results.rows.item(0);            
	   $('#nomcli').text(row['nombre']);
  	   $('#clacli').text(row['clave']);
 		}
	function errorconsulta(err) {
    	alert("Error processing SQL: "+err);
	}
  });	

}