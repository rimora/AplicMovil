// EVENTOS
$(document).ready(function() {
	//document.addEventListener("deviceready",function(){
	/*	var db = window.openDatabase("Sardel", "1.0", "SardelDB", 1000000);
    $('#clientes').click(function() {
		db.transaction(consulta,errorconsulta,listo);
		
	
	});*/
	
	$("#carga").click(function() {
                 //var clavecli = $(this).attr("id");
				  //alert (oID);
				  iniciar();
				  //$.mobile.changePage($("#datoscli"));	  			  				  
               });
     $("#envia").click(function() {
                 //var clavecli = $(this).attr("id");
				  //alert (oID);
				  insertar();
				  //$.mobile.changePage($("#datoscli"));	  			  				  
               });			   
			  
	$("#clientes").click(function() {
                 //var clavecli = $(this).attr("id");
				  //alert (oID);
				  mostrarclientes();
				  //$.mobile.changePage($("#datoscli"));	  			  				  
               });
			   
    $("li").click(function() {
                 var clavecli = $(this).attr("id");
				  //alert (oID);
				  mostrarcliente(clavecli);
				  //$.mobile.changePage($("#datoscli"));	  			  				  
               });
});
			   
			   


