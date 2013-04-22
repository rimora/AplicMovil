//insertar reporte
$(document).ready(function() {
	//document.addEventListener("deviceready",function(){
		
    $('#regEnviar').click(function(){
		//window.location.href='#login';
		
		
		var nombre = $("#regNom").val();
		var fecha =	 $("#regFecha").val();
		var tipo =	 $("#regTipo").val();
		var descripcion =	 $("#regDescri").val();
		var resumen =	 $("#regResu").val();
		var antecedente =	 $("#regAnte").val();
		var secuencia =	 $("#regSecu").val();
		var analisis =	 $("#regAn").val();
		var medida =	 $("#regMedi").val();
		var conclusion =	 $("#regCon").val();
//	var datosPassword = $("#regEmail").val()
	
  	//archivoValidacion = "http://revolucion.mobi/ejemplos/phonegap/envioFormulario/validacion_de_datos.php?jsoncallback=?"
	archivoValidacion ="http://aplicacion.netai.net/nuevo.php?jsoncallback=?"

	$.getJSON(archivoValidacion, {nombre:nombre,fecha:fecha,tipo:tipo,descripcion:descripcion,resumen:resumen,antecedente:antecedente,secuencia:secuencia,analisis:analisis,medida:conclusion})
	.done(function(respuestaServer) {
		
		//alert(respuestaServer.mensaje + "\nGenerado en: " + respuestaServer.hora + "\n" +respuestaServer.generador)		
		//alert(respuestaServer.Numreporte)
		alert(respuestaServer.resultado)
		//if(respuestaServer.validacion == "ok"){
			if(respuestaServer.resultado ="ok"){
		  
		 	/// si la validacion es correcta, muestra la pantalla "home"
			alert("El reporte ha sido generado")
			$.mobile.changePage("#page")
		  //document.getElementById('resuNombre').text(respuestaServer.Asegurador);
            
     		}else{
		  
		  alert("El reporte no se generó")
		 // navigator.notification.alert("El reporte "+numreporte+" no existe, inténtelo de nuevo",null,"Error de Registro","Aceptar");

		  /// ejecutar una conducta cuando la validacion falla
		}
		
	});
		/*
		
		
		
		var nom=$('#regNom').val();
		var email=$('#regEmail').val();
		var tel=$('#regTel').val();
		if (nom!='' && email !='' && tel!='') {
			alert('CORRECTO');	*/
		 /* navigator.notification.confirm("Nombre: "+nom+"\nMail: "+email+"\nTelefono"+tel,function(botones){
			switch(botones){
			 case 1:
			  navigator.notification.beep(5);
			  break;
		 	 case 2:
	   		  navigator.notification.vibrate(500);
			  break;		
			}
          },"Titulo","Beep,Vibrar,Salir");*/
		/*} 
		else{
				//navigator.notification.alert('Todos los campos son requeridos',null,'Error de Registro','Aceptar');
		alert('Todos los campos son requeridos');	
			
		}
	*/		
	});
	//},false);
	
});

