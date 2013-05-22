// consultas

function mostrarclientes(clavecli){

$('#pclientes').live('pageshow',function(event, ui){
//alert('This page was just hidden: '+ ui.prevPage);
var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
db.transaction(consulta, errorconsulta, listo);
if (clavecli=="1020") {
	var valor="Cesar"	
	}
else {
		var valor="Diego"	
	
	
}
function consulta(tx) {
     tx.executeSql('DROP TABLE IF EXISTS DEMO');
      tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT NOT NULL, Club TEXT NOT NULL)');        
	  tx.executeSql('INSERT INTO DEMO(Name,Club) VALUES ("Cesar", "Menso")');        
	  tx.executeSql('INSERT INTO DEMO(Name,Club) VALUES ("Diego", "Morales")');
}
function errorconsulta(err) {
    alert("Error processing SQL: "+err);
}

function listo() {    
	db.transaction(poblarcli,errorconsulta);
}
function poblarcli(tx){        
	tx.executeSql('SELECT * FROM DEMO WHERE Name="'+valor+'"',[],querySuccess,errorconsulta);    
	alert(valor);
	}
function querySuccess(tx,results){  
 $('#listaclientes').empty();        
$.each(results.rows,function(index){           
 var row = results.rows.item(index);            
 $('#listaclientes').append('<li><a href="#"><h3>'+row['Name']+'</h3><p>Club '+row['Club']+'</p></a></li>');        
 });         
 $('#listaclientes').listview('refresh'); 
 }

	
});	
	
	
	
	
	
}
