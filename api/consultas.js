// consultas
function consultadb()
{
	var db = window.openDatabase("Database", "1.0", "SARDEL", 1000000);			
	return db;	
}

function iniciar()
{		
	
	var db = window.openDatabase("Database", "1.0", "Cordova Demo", 1000000);
db.transaction(creartb, errorCB, successCB);

	
		function creartb(tx) {
			alert('funcion creartb');	
    tx.executeSql('DROP TABLE IF EXISTS CLIENTES');
         tx.executeSql('CREATE TABLE IF NOT EXISTS CLIENTES (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL, clave TEXT NOT NULL,dia TEXT NOT NULL,direccion TEXT NOT NULL,telefono TEXT NOT NULL,tipo TEXT NOT NULL,diasc TEXT NOT NULL,lcredito TEXT NOT NULL,saldo TEXT NOT NULL)');  
		 }
function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

function successCB() {
    alert("success!");
}


		/*
		
		consultadb().transaction(populateDB,function(err)
		{
		alert("Error al insertar clientes: "+err.code+err.message);			
		},alert('bd generada'));
		function creartb(tx) {
		  alert('funcion creartb');	
		tx.executeSql('DROP TABLE IF EXISTS CLIENTES');
         tx.executeSql('CREATE TABLE IF NOT EXISTS CLIENTES (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL, clave TEXT NOT NULL,dia TEXT NOT NULL)');   	
		}
		
	 */  
}
function insertar(){
		
		consultadb().transaction(insertarcli,function(err){
    	  alert("Error al insertar clientes: "+err.code+err.message);
          },alert("clientes insertados"));
				
    	function insertarcli(tx) {		
		tx.executeSql('INSERT INTO CLIENTES (nombre,clave,dia,direccion,telefono,tipo,diasc,lcredito) VALUES ("Farmacia UNO", "1020","Lunes","Dirección del cliente","2281545130","C","30","10000.00")');        
        tx.executeSql('INSERT INTO CLIENTES (nombre,clave,dia,direccion,telefono,tipo,diasc,lcredito) VALUES ("Farmacia DOS", "1020","Lunes","Dirección del cliente DOS","2281545130","C","30","10000.00","5000.00")');        
		}
}

function mostrarclientes(dia){
 // $('#pclientes').live('pageshow',function(event, ui){
		//alert('This page was just hidden: '+ ui.prevPage);
		
		var db = window.openDatabase("Database", "1.0", "SARDEL", 1000000);
		db.transaction(poblarcli, function(err){
    	 		 alert("Error select clientes : "+err.code);
         		});		
	
	function poblarcli(tx){  
	
	    if (dia!="Todos"){
			var sql='SELECT * FROM CLIENTES WHERE DIA="'+dia+'"'			
		}
		else {
			var sql='SELECT * FROM CLIENTES '			
		}
		tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error select clientes por dia: "+err);
         		});    	
	}
	function listo(tx,results){  
		 $('#listaclientes').empty();        
		 $.each(results.rows,function(index){           
			 var row = results.rows.item(index);            
			 $('#listaclientes').append('<li id="'+row['clave']+'"><a href="#datoscli"><h3>'+row['clave']+'  '+row['nombre']+'</h3></a></li>');        
		 });         
		 $('#listaclientes').listview('refresh'); 
 	}

//  });	//$('#pclientes').live('pageshow',function(event, ui){
	
}
function mostrarcliente(clavecli){
//  $('#datoscli').live('pageshow',function(event, ui){
		alert('entra mostrar cliente');
		var db = window.openDatabase("Database", "1.0", "SARDEL", 200000);
		db.transaction(consulta, errorconsulta);
	
	function consulta(tx) {
		tx.executeSql('SELECT * FROM CLIENTES WHERE clave="'+clavecli+'"',[],exito,errorconsulta);    	
		//alert('entro a la consulta de datos de un cliente');
		}
	
	function exito(tx,results){         
	   var row = results.rows.item(0);            
	   $('#nomcli').text("Nombre: "+row['nombre']);
  	   $('#clacli').text("Clave: "+row['clave']);
	   $('#direccion').text("Dirección: "+row['direccion']);
  	   $('#telefono').text("Telefono: "+row['telefono']);
	   $('#tipo').text("Tipo: "+row['tipo']);
  	   $('#diascredito').text("Dias de Crédito: "+row['diasc']);
	   $('#limitecredito').text("Límite de Crédito: "+row['lcredito']);
	   $('#saldo').text("Saldo: "+row['saldo']);
  	   
 		}
	function errorconsulta(err) {
    	alert("Error SQL al poblar cliente: "+err);
	}
//  });	

}
function guardacliente(nombre,empresa,rfc,direccion,colonia,estado,municipio,telefono){
	consultadb().transaction(nuevocli,function(err){
    	  alert("Error al insertar cliente: "+err.code+err.message);
          },alert("clientes insertados"));
				
    	function nuevocli(tx) {		
		tx.executeSql('INSERT INTO CLIENTES (nombre,clave,dia,direccion,telefono,tipo,diasc,lcredito) VALUES ("Farmacia UNO", "1020","Lunes","Dirección del cliente","2281545130","C","30","10000.00")');        
        tx.executeSql('INSERT INTO CLIENTES (nombre,clave,dia,direccion,telefono,tipo,diasc,lcredito) VALUES ("Farmacia DOS", "1020","Lunes","Dirección del cliente DOS","2281545130","C","30","10000.00")');        
		}
	
}
function llamadascxc(){	
  alert ('depositos');
    $.get("demo_test.asp",function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  

}