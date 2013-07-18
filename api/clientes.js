// CLIENTES
function mostrarclientes(dia){
 // $('#pclientes').live('pageshow',function(event, ui){
		//alert('This page was just hidden: '+ ui.prevPage);		
		//var db = window.openDatabase("Database", "1.0", "SARDEL", 1000000);
		consultadb().transaction(poblarcli, function(err){
    	 		 alert("Error select clientes : "+err.code+err.message);
         		});		
	function poblarcli(tx){  
	    
	    if (dia!="Todos"){
			var sql='SELECT * FROM CLIENTES WHERE DIA="'+dia+'" ORDER BY nombre  '			
		}
		else {
			var sql='SELECT * FROM CLIENTES ORDER BY nombre'			
		}
		tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error select clientes por dia: "+err.code+err.message);
         		});    	
	}
	function listo(tx,results){  
		 $('#listaclientes').empty();        
		 $.each(results.rows,function(index){           
			 var row = results.rows.item(index);            
			 $('#listaclientes').append('<li id="'+row['clave']+'"><a href="#datoscli"><h3>'+row['clave']+'  '+row['nombre']+'</h3></a></li>');        
		 });    
		 //alert('antes de refresh de lista');  		 
		 $('#listaclientes').listview('refresh'); 
		 //alert('despues de refresh de lista');
 	}

 // });	//$('#pclientes').live('pageshow',function(event, ui){
	
}// mostrarclientes
function mostrarcliente(clavecli){
//  $('#datoscli').live('pageshow',function(event, ui){
   	   
	   //guarda el cliente con el que se harán operaciones
	   saveidcliente(clavecli);
       var limite=0;
	   var saldo=0;
		$('#notascxc').text("Notas para el cliente " + clavecli);
		//var db = window.openDatabase("Database", "1.0", "SARDEL", 200000);
		consultadb().transaction(consulta, errorconsulta);	
	function consulta(tx) {
		tx.executeSql('SELECT * FROM CLIENTES  WHERE clave="'+clavecli+'"',[],exito,errorconsulta);
		tx.executeSql('SELECT * FROM PENCOBRO WHERE cliente="'+clavecli+'"',[],poblarfac,errorconsulta);    	
		//alert('entro a la consulta de datos de un cliente');
		}
	
		function exito(tx,results){         
	   		var row = results.rows.item(0);            
	   		/*
			$('#nomcli').text("Clave: "+row['clave']+" Nombre: "+row['nombre']);
	   	    $('#clacli').text();
		    $('#direccion').text("Dirección: "+row['direccion']);
  	   		$('#telefono').text("Telefono: "+row['telefono']);
	   		$('#tipo').text("Estado: Credito "+row['tipo']);
  	   		$('#diascredito').text("Dias de Crédito: "+row['diasc']);
	   		$('#limitecredito').text("Límite de Crédito: "+row['lcredito']);
	   		$('#saldo').text("Saldo: "+row['saldo']);
			limite=Number(row['lcredito']);*/
			$('#nomcli').text("Clave: "+row['clave']+" Nombre: "+row['nombre']);  	   		    
			$('#direccion').text("Dirección: "+row['direccion']+" Telefono: "+row['telefono']);  	   		
	   		$('#tipo').text("Estado: Credito "+row['tipo']+" Dias de Crédito: "+row['diasc']);
	   		$('#limitecredito').text("Límite de Crédito: "+row['lcredito']+" Saldo: "+row['saldo']);
			limite=Number(row['lcredito']);			
			saldo=Number(row['saldo']);
			window.localStorage.setItem("limite",Number(row['lcredito']));
			window.localStorage.setItem("saldo",Number(row['saldo']));
		}
		function poblarfac(tx,results){ 
		      $("#gridfaccli").empty();			  
			  var html = "";			  
			  var saldot=0;
			  var montot=0;
			  var vencida="";
			  
			  html += '<div class="ui-block-a"><div class="ui-bar ui-bar-a"><strong>Tipo</strong> Tipo</div></div>';
			  html += '<div class="ui-block-b"><div class="ui-bar ui-bar-a"><strong>Documento</strong></div></div>';
			  html += '<div class="ui-block-c"><div class="ui-bar ui-bar-a"><strong>Vencimiento</strong></div> </div>';
			  html += '<div class="ui-block-d"><div class="ui-bar ui-bar-a"><strong>Saldo</strong></div></div>';
			  html += '<div class="ui-block-e"><div class="ui-bar ui-bar-a"><strong>Monto</strong></div></div>';
			  $.each(results.rows,function(index){
				  var row = results.rows.item(index); 				     
				     if (row['tipo']=="1"){
						 tipo="FAC"
					 }
					 else  {
						 tipo="OTRO" 
					 }
					 if (row['vencida']=="S"){
						 vencida="S"
						 
					 }
					 saldot+=Number(row['saldo']);
					 montot+=Number(row['monto']);
					 html += "<div class=ui-block-a><strong>" +row['tipo']+"</strong> </div>";
					 html += "<div class=ui-block-b><strong>"+row['documento']+"</strong> </div>";
                     html += "<div class=ui-block-c><strong>"+row['fechaven']+"</strong> </div>";
					 html += "<div class=ui-block-d><strong>"+row['saldo']+"</strong> </div>";
                     html += "<div class=ui-block-e><strong>"+row['monto']+"</strong> </div>";
                  	 
			  });
					$("#gridfaccli").append(html); 
					$("#saldocli").val(saldot.toFixed(2)); 
					$("#montocli").val(montot.toFixed(2)); 					
					if (vencida=="S") {
						navigator.notification.alert('El cliente tiene facturas vencidas, no podrá realizar ventas',null,'Saldo Vencido','Aceptar');					
						$("#bventa").addClass('ui-disabled');

						
					}
					else if (saldo>limite){						
						navigator.notification.alert('Cliente con limite de credito excedido, no podrá realizar ventas',null,'Limite de Crédito Excedido','Aceptar');					
						$("#bventa").addClass('ui-disabled');
					}					
					else {			
						$("#bventa").removeClass('ui-disabled'); 
					}

	   }
 		
	function errorconsulta(err) {
    	alert("Error SQL al poblar cliente: "+err.code+err.message);
	}
//  });	

  }//mostrarcliente