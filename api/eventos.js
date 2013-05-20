// EVENTOS
$(document).ready(function() {
	//document.addEventListener("deviceready",function(){
		var db = window.openDatabase("Sardel", "1.0", "SardelDB", 1000000);
    $('#clientes').click(function() {
		db.transaction(consulta,errorconsulta,listo);
		
	
	});


		
  
});

