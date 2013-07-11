// almacenamiento de datos locales
function saveidcliente(clave){
	window.localStorage.setItem("clave",clave);
	//alert (window.localStorage.getItem("clave"));
	
	
}
function guardaarticulo(articulo){
	window.localStorage.setItem("articulo",articulo);
	//alert (window.localStorage.getItem("clave"));
}
function guardafactura(factura){
	window.localStorage.setItem("factura",factura);
	//alert (window.localStorage.getItem("clave"));
}
function actsaldo(importe){
	//alert(importe);
	var saldoact=Number(window.localStorage.getItem("saldo"))+Number(importe);
	//alert(saldoact);
	window.localStorage.setItem("saldo",saldoact);
	actsaldocliente(saldoact)
	//alert (window.localStorage.getItem("clave"));
}
function guardafechaactual(){
var fecha = new Date();
var fechaact=fecha.getFullYear()+"/"+(fecha.getMonth()+1)+"/"+fecha.getDate();
var hora=fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
var fechaactual=fechaact+" "+hora;	
//+"\nMilisegundo: "+fecha.getMilliseconds());
window.localStorage.setItem("fechahora",fechaactual);
window.localStorage.setItem("fecha",fechaact);
}
function tempdetalle(cantidad){	
	//alert(cantidad);	
	alert (window.localStorage.getItem("articulo"));	
}