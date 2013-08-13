// funciones para ventas
var base = window.openDatabase("Database", "1.0", "SARDEL", 10000000);	
function validasug(cliente){
var existe=false;	
	function listo(tx,results){ 	
	         //alert('entra a funcion listo de existeenpedido');         	          
	     	 if (results.rows.length>0){
				//alert('existe en pedido');  
				existe=true;  				
				//alert('prueba de existe '+existe);  				
			  }
			 
 	}
	function existep(tx){  	
	        //alert('entra a funcion existep');         	    
			
			var sql='SELECT articulo FROM TEMPEDIDO WHERE cliente="'+cliente+'"  ';			
			tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error consultar existeTEMPEDIDO : "+err.code+err.message);
         		});    
				/*	
			sql='SELECT articulo FROM TEMFACTURA WHERE cliente="'+window.localStorage.getItem("clave")+'" ';			
			tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error consultar existeTEMFACTURA : "+err.code+err.message);
         		});    	*/
								
	}
	base.transaction(existep, function(err){
    	 		 alert("Error validando si tiene pedido sugerido: "+err.code+err.message);
         		},function(){
					//alert(existe);
					if (existe==false){   					
						sugerido(cliente);//inserta sugerido del cliente
					}
					else{
						mostrarpedido(cliente);
					}
					
					
					
					
					
				});		

    
	
	
}//VALIDA SUGERIDO
function sugerido(cliente){

	var artsug=[];
	var cantsug=[];
	var exissug=[];
	var preciosug=[];	
	//alert(window.localStorage.getItem("limite"));
	//alert(window.localStorage.getItem("saldo"));
	
	var i=0;
	function listo(tx,results){ 	      
	      if (results.rows.length>0){

			$.each(results.rows,function(index){           			
			 var row = results.rows.item(index);            			
				artsug[i]=row['articulo'];
				cantsug[i]=row['cantidad'];				
				i++;
				
			 //}//if (row['cantidad']>0)			 
		  	}); //$.each       				  
		  }//if			  
		  /*else
		  {
			alert('no hubo resultados de sugerido');  
			
		  }*/
 	}//function listo(tx,results){ 
	function consultasug(tx){   	    	        			
			var sql='SELECT a.articulo,a.cantidad ';
			sql+='FROM SUGERIDO a ';
			sql+='WHERE a.cliente="'+cliente+'"  ';

			tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error consultar sugerido del cliente : "+sql+err.code+err.message);
         		});    									
	}
	base.transaction(consultasug, function(err){
    	 			 alert("Error select tabla sugerido: "+err.code+err.message);
         		},function(){
				 //alert(artsug.length);
				 
				 for (var i = 0, long = artsug.length; i < long; i++) {   									   
								insertatemppedido(artsug[i],cantsug[i],cliente);
						   
					   
				 }// for (var i = 0, long = artsug.length; i < long; i++) {   					 				 
				 mostrarpedido(cliente);
                 //mostrarfactura(); 
				});		
				
}//function sugerido
function preparadetalletemp(articulo,cantidad,existencia){
	   //var existencia=consultaexis(articulo);
	   var diferencia=existencia-cantidad;
	  // alert('existencia '+existencia);
	  // alert('cantidad '+cantidad);
	   
	   if (diferencia>=0){		  
	       insertatempfactura(articulo,cantidad);
	   }
	   else {
		   if (existencia>0){
			   insertatempfactura(articulo,existencia);
               insertatemppedido(articulo,(cantidad-existencia));
			   
		   }
		   else{
			   insertatemppedido(articulo,cantidad);
		   }
	   }
}//function insertatemppedido
function insertatemppedido(articulo,cantidad,cliente){
	   
	base.transaction(insertadet,function(err){
    	  alert("Error al insertar renglon: "+err.code+err.message);
          });
				
    	function insertadet(tx) {		
		//alert('entra a insert de detallepedido');
		tx.executeSql('INSERT INTO TEMPEDIDO (articulo,cantidad,cliente) VALUES ("'+articulo+'",'+cantidad+',"'+cliente+'")');        
		}
	
}//function insertatemppedido
function modificatemppedido(articulo,cantidad,cliente){
	   
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al modificar renglon: "+err.code+err.message);
          },alert("Artículo modificado"));
				
    	function insertadet(tx) {		
		//alert('entra a modificar detallepedido');
		
		tx.executeSql('UPDATE TEMPEDIDO SET CANTIDAD='+cantidad+' WHERE ARTICULO="'+articulo+'" and cliente="'+cliente+'"');        
		}
	
}//function modificatemppedido
function eliminatemppedido(articulo,cliente){
	   
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al eliminar renglon: "+err.code+err.message);
          });				
    	function insertadet(tx) {		
		//alert('entra a delete de detallepedido');
		tx.executeSql('DELETE FROM TEMPEDIDO WHERE ARTICULO="'+articulo+'" and cliente="'+cliente+'"');        
		}
	
}//function eliminatemppedido

function mostrarpedido(cliente){
 var limite=Number(window.localStorage.getItem("limite"));
 var saldo=Number(window.localStorage.getItem("saldo"));
 var disp=limite-saldo;
		var bodega='K01';
		base.transaction(consulta, errorconsulta);	
	function consulta(tx) {		
		tx.executeSql('SELECT a.articulo,b.descripcion,b.precio,b.descuento,a.cantidad,b.impuesto,c.existencia FROM TEMPEDIDO a left outer join articulo b on b.articulo=a.articulo left outer join ARTICULO_EXISTENCIA c on c.articulo=a.articulo and c.bodega="'+bodega+'" where a.cliente="'+cliente+'"',[],exito,errorconsulta);
		}
	
		
		function exito(tx,results){ 
			
		      $("#gridpedido").empty();				  
			  $("#divtotales").empty();				  
			  var html = "";
			  var tipo="";
			  var saldot=0; var montot=0; var precio=0; var total=0; var iva=0; var descuento=0; var parcial=0; var preciop=0; var preciocdesc=0;
			  var existencia=0; var abordo=0; var preventa=0; var dif=0; var cantidad=0; var arttotal=0; var pietotal=0; var artpre=0; var piepre=0;
			  var artabordo=0; var pieabordo=0; var totalpre=0; var totalabordo=0;
			  //agrega encabezado de grid			  			  
          	  html+='<div class="ui-block-a" style="width:60px; margin-left:-10px" ><div class="ui-bar ui-bar-a">Elim.</div></div>';
              html+='<div class="ui-block-b" style="width:300px; margin-left:-10px"><div class="ui-bar ui-bar-a">Articulo</div></div>';
		      html+='<div class="ui-block-c" style="width:80px"><div class="ui-bar ui-bar-a">PP</div></div>';
              html+='<div class="ui-block-d" style="width:50px"><div class="ui-bar ui-bar-a" style="text-align:right">DV</div></div>';
              html+='<div class="ui-block-e" style="width:360px">';
              html+='<div class="ui-grid-d">';
						html+='<div class="ui-block-a" style="width:80px"><div class="ui-bar ui-bar-a" style="text-align:right">PV</div></div>';
                        html+='<div class="ui-block-b" style="width:50px"><div class="ui-bar ui-bar-a" style="text-align:right">Cant</div></div>';
                        html+='<div class="ui-block-c" style="width:80px"><div class="ui-bar ui-bar-a" style="text-align:right">Importe</div></div>';
                        html+='<div class="ui-block-d" style="width:50px"><div class="ui-bar ui-bar-a" style="text-align:right">Exi</div></div>';
                        html+='<div class="ui-block-e" style="width:100px">';
							html+='<div class="ui-grid-a" style="margin-top:0px">';
								html+='<div class="ui-block-a" style="width:50px"><div class="ui-bar ui-bar-a" style="text-align:right">AB</div></div>';
	                           html+='<div class="ui-block-b" style="width:50px"><div class="ui-bar ui-bar-a" style="text-align:right">Pre</div></div>';
							html+='</div></div>';   
                 	html+='</div>';
                  html+='</div>';
          		
			  $.each(results.rows,function(index){				  
				  var row = results.rows.item(index); 
				  	 					 
				     existencia=Number(row['existencia']);					 
					 cantidad=Number(row['cantidad']);		
					 pietotal+=cantidad;			 
					 arttotal+=1;			 					 
				     preciocdesc=Number(row['precio'])-((Number(row['precio'])/100)*Number(row['descuento']));				     			     
				     descuento=Number(row['descuento']);
					 iva=Number(row['impuesto']);					 
					 preciop=Number(row['precio']);
				     precio=Number(preciocdesc)*(1+(Number(row['impuesto'])/100));				 
					 parcial=precio*cantidad;
					 total+=Number(parcial);
					 dif=existencia-cantidad;					 
					 if (existencia==0){
						 preventa=cantidad;	
						 artpre+=1;	
						 totalpre+=	Number(parcial);						 
						 abordo=0;
					 }
					 else{
						 if (dif>=0){
						 preventa=0;						 
						 abordo=cantidad;						 						 
						 artabordo+=1;
						 totalabordo+=	Number(parcial);						 					 						 
						 }
						 else{
							 preventa=cantidad-existencia;					 
							 totalpre+=	precio*preventa;						 
							 artpre+=1;					 
							 abordo=existencia;						 						 
							 totalabordo+=precio*abordo
							 artabordo+=1;					 
						 }
							 
						 
					 }					 
					 pieabordo+=abordo;						 
					 piepre+=preventa;		
					 
          	  html+='<div class="ui-block-a" style="width:60px;height:15px; margin-left:-10px">';              
           			html+='<div class="ui-bar ui-bar-e"  >';      		 		                   				        
            		html+='<input type="checkbox" name="'+row['articulo']+'" class="checkv" style="position:relative;height:15px">';                   	
					html+='</div>';
            		html+='</div>';   
              html+='<div class="ui-block-b" style="width:300px; margin-left:-10px"><div class="ui-bar ui-bar-b" style="padding-left: 0px"><a href="#" class="descv" name="'+row['articulo']+'" data-ajax="false" ><font color="FFFFFF"></font>'+row['descripcion']+'</a></div></div>';
		      html+='<div class="ui-block-c" style="width:80px"><div class="ui-bar ui-bar-b">'+preciop.toFixed(2)+'</div></div>';
              html+='<div class="ui-block-d" style="width:50px"><div class="ui-bar ui-bar-b" style="text-align:right">'+descuento+'</div></div>';
              html+='<div class="ui-block-e" style="width:360px">';
              html+='<div class="ui-grid-d">';
						html+='<div class="ui-block-a" style="width:80px"><div class="ui-bar ui-bar-b" style="text-align:right">'+precio.toFixed(2)+'</div></div>';
                        html+='<div class="ui-block-b" style="width:50px"><div class="ui-bar ui-bar-b" style="text-align:right"><a href="#" class="clasep" name="'+row['articulo']+'" id="'+row['articulo']+' '+row['descripcion']+'" data-ajax="false" ><font color="FFFFFF"></font>'+cantidad+'</a></div></div>';
                        html+='<div class="ui-block-c" style="width:80px"><div class="ui-bar ui-bar-b" style="text-align:right">'+parcial.toFixed(2)+'</div></div>';
                        html+='<div class="ui-block-d" style="width:50px"><div class="ui-bar ui-bar-b" style="text-align:right">'+existencia+'</div></div>';
                        html+='<div class="ui-block-e" style="width:100px">';
							html+='<div class="ui-grid-a" style="margin-top:0px">';
								html+='<div class="ui-block-a" style="width:50px"><div class="ui-bar ui-bar-b" style="text-align:right">'+abordo+'</div></div>';
	                           html+='<div class="ui-block-b" style="width:50px"><div class="ui-bar ui-bar-b" style="text-align:right">'+preventa+'</div></div>';
							html+='</div></div>';   
                 	html+='</div>';
                  html+='</div>';
          		 html+='</div>';
			  
			  
			  
			  });//.each
					$("#gridpedido").append(html);	
					disp=disp-total;				
					html="";
					html+='<center><label style="font-weight:bold; font-size:24px">Disponible:</label></center>';
       			    html+='<center><label style="font-weight:bold; font-size: 36px; color:#00F">'+disp.toFixed(2)+'</label></center>';
			        html+='<center><label style="font-weight:bold; font-size:24px">Preventa:</label></center>';				
					html+='<div class="ui-grid-a" id="gridtotalesp" style="text-align:left">';
	                html+='<div class="ui-block-a" style="width:90px" ><div class="ui-bar ui-bar-a">Piezas</div></div>';
	                html+='<div class="ui-block-b" style="width:90px"><div class="ui-bar ui-bar-b" style="text-align:right">'+piepre.toFixed(0)+'</div></div>';
				    html+='<div class="ui-block-a" style="width:90px"><div class="ui-bar ui-bar-a">Articulos</div></div>';
		            html+='<div class="ui-block-b" style="width:90px"><div class="ui-bar ui-bar-b" style="text-align:right">'+artpre.toFixed(0)+'</div></div>';
	                html+='<div class="ui-block-a" style="width:90px"><div class="ui-bar ui-bar-a">Total</div></div>';
	                html+='<div class="ui-block-b" style="width:90px"><div class="ui-bar ui-bar-b" style="text-align:right">'+totalpre.toFixed(2)+'</div></div>';
					html+='</div>';
					html+='<center><label style="font-weight:bold; font-size:24px">A Bordo:</label></center>';
			        html+='<div class="ui-grid-a" id="gridtotalesf" style="text-align:left">';
		            html+='<div class="ui-block-a" style="width:90px" ><div class="ui-bar ui-bar-a">Piezas</div></div>';
                    html+='<div class="ui-block-b" style="width:90px"><div class="ui-bar ui-bar-b" style="text-align:right">'+pieabordo.toFixed(0)+'</div></div>';
		            html+='<div class="ui-block-a" style="width:90px"><div class="ui-bar ui-bar-a">Articulos</div></div>';
                    html+='<div class="ui-block-b" style="width:90px"><div class="ui-bar ui-bar-b" style="text-align:right">'+artabordo.toFixed(0)+'</div></div>';
                    html+='<div class="ui-block-a" style="width:90px"><div class="ui-bar ui-bar-a">Total</div></div>';
	                html+='<div class="ui-block-b" style="width:90px"><div class="ui-bar ui-bar-b" style="text-align:right">'+totalabordo.toFixed(2)+'</div></div>';
		            html+='</div>';
					html+='<center><label style="font-weight:bold; font-size:24px">Total General:</label></center>';
		            html+='<div class="ui-grid-a"  style="text-align:left">';
                    html+='<div class="ui-block-a" style="width:90px" ><div class="ui-bar ui-bar-a">Piezas</div></div>';
                    html+='<div class="ui-block-b" style="width:90px"><div class="ui-bar ui-bar-b" style="text-align:right">'+pietotal.toFixed(0)+'</div></div>';
		            html+='<div class="ui-block-a" style="width:90px"><div class="ui-bar ui-bar-a">Articulos</div></div>';
	                html+='<div class="ui-block-b" style="width:90px"><div class="ui-bar ui-bar-b" style="text-align:right">'+arttotal.toFixed(0)+'</div></div>';
                    html+='<div class="ui-block-a" style="width:90px"><div class="ui-bar ui-bar-a">Total</div></div>';
                    html+='<div class="ui-block-b" style="width:90px"><div class="ui-bar ui-bar-b" style="text-align:right">'+total.toFixed(2)+'</div></div>';
			        html+='</div>';
					$("#divtotales").append(html);	

					
			
	   }//function exito
 		
	function errorconsulta(err) {
    	alert("Error SQL al llenar detalles pedido: "+err.code+err.message);
	}
//  });	

  }//mostrarpedido
 function armacatalogo(){
 // $('#pclientes').live('pageshow',function(event, ui){
		//alert('This page was just hidden: '+ ui.prevPage);		
		//var db = window.openDatabase("Database", "1.0", "SARDEL", 1000000);		
		base.transaction(poblarcat, function(err){
    	 		 alert("Error select catálogo : "+err.code+err.message);
         		});		
	function poblarcat(tx){  	        
			var sql='SELECT a.articulo,a.descripcion,a.descuento,b.existencia as ebodega,c.existencia as ealg,';			
			sql+='a.precio ';
			sql+='FROM articulo a left outer join articulo_existencia b on b.articulo=a.articulo and b.bodega="K01" ';
			sql+=' left outer join articulo_existencia c on c.articulo=a.articulo and c.bodega="ALG" order by a.descripcion';
			/*
			var sql='SELECT a.articulo,a.descripcion,a.clas,a.accion,a.impuesto,a.descuento,b.existencia as ebodega,c.existencia as ealg,';			
			sql+='a.precio,a.laboratorio,a.sal ';
			sql+='FROM articulo a left outer join articulo_existencia b on b.articulo=a.articulo and b.bodega="K01" ';
			sql+=' left outer join articulo_existencia c on c.articulo=a.articulo and c.bodega="ALG" order by a.descripcion';*/
			//alert('despues del sql armacatalogo');        			
			
		    tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error select catalogo: "+sql+err.code+err.message);
         	});    	
	}
	function listo(tx,results){  
		 $('#lcatalogo').empty();        
		 //alert('entra a listo de armacatalogo');
		 $.each(results.rows,function(index){   
		   //  alert('entra al each armacatalogo');        
			 var row = results.rows.item(index);         
			 //alert('despues del var row armacatalogo');           
			 var html="";	
			 //var precio=row['precio']*(1+(row['impuesto']/100));
			 var precio=row['precio'];
			 var descuento=row['descuento'];

			 if   (row['ebodega']==null)       
			 {
				var existencia=0; 				
				//alert('existencia es null'+existencia); 
			 }
			 else 
			 {
				 var existencia=row['ebodega']; 
				 
			 }
			  if   (row['ealg']==null)       
			 {
				var existenciaalg=0; 				
				//alert('existencia es null'+existencia); 
			 }
			 else 
			 {
				 var existenciaalg=row['ealg']; 
			 }	
			 //alert(row['descripcion']);		 
			 html+='<li>';
	        // html+='<a href=""><img src="imagenes/sardel.jpg" width="100" height="100"/><h3> '+row['descripcion']+'</h3>';
			 html+='<a href="" class="listart" id="'+row['articulo']+'"><h5>'+row['descripcion']+'    PP:$'+precio.toFixed(2)+'    DV:'+descuento+'%    A bordo:'+existencia+'    ALG:'+existenciaalg+'</h5>';
			 html+='</a><a id="F'+row['articulo']+'" href="" data-role="button" data-icon="search" class="fichaart"></a></li>';
			 			 
			 $('#lcatalogo').append(html);        	
			 //alert('despues de lcatalogo.append armacatalogo');        
		 });         
		 			 
		 $('#lcatalogo').listview('refresh'); 
		 //alert('despues de lcatalogo listview armacatalogo');        
 	}

 // });	//$('#pclientes').live('pageshow',function(event, ui){
	
}//armacatalogo
function gridvalorescat(cliente){//muestra en un grid los totales de preventa y venta a bordo, asi como el limite de credito y el disponible
 var limite=Number(window.localStorage.getItem("limite"));
 var saldo=Number(window.localStorage.getItem("saldo"));
 var disp=limite-saldo;
		var bodega='K01';
		base.transaction(consulta, errorconsulta);	
	function consulta(tx) {		
		tx.executeSql('SELECT a.articulo,b.descripcion,b.precio,b.descuento,a.cantidad,b.impuesto,c.existencia FROM TEMPEDIDO a left outer join articulo b on b.articulo=a.articulo left outer join ARTICULO_EXISTENCIA c on c.articulo=a.articulo and c.bodega="'+bodega+'" where a.cliente="'+cliente+'"',[],exito,errorconsulta);
		}
	
		
		function exito(tx,results){ 
			
		      $("#gridtotales").empty();				  			  
			  var html = "";
			  var tipo="";
			  var saldot=0; var montot=0; var precio=0; var total=0; var iva=0; var descuento=0; var parcial=0; var preciop=0; var preciocdesc=0;
			  var existencia=0; var abordo=0; var preventa=0; var dif=0; var cantidad=0; var arttotal=0; var pietotal=0; var artpre=0; var piepre=0;
			  var artabordo=0; var pieabordo=0; var totalpre=0; var totalabordo=0;
			  //agrega encabezado de grid			  			  
          	  html+='<div class="ui-block-a" style="width:90px" ><div class="ui-bar ui-bar-a">Total</div></div>';
              html+='<div class="ui-block-b" style="width:100px"><div class="ui-bar ui-bar-a">Disponible</div></div>';
			  $.each(results.rows,function(index){				  
				  var row = results.rows.item(index); 
					 cantidad=Number(row['cantidad']);							 			 
				     preciocdesc=Number(row['precio'])-((Number(row['precio'])/100)*Number(row['descuento']));				     			     
				     descuento=Number(row['descuento']);
					 iva=Number(row['impuesto']);					 
					 preciop=Number(row['precio']);
				     precio=Number(preciocdesc)*(1+(Number(row['impuesto'])/100));				 
					 parcial=precio*cantidad;
					 total+=Number(parcial);			  
			  });//.each					
					disp=disp-total;									
	                html+='<div class="ui-block-a" style="width:90px"><div class="ui-bar ui-bar-b">'+total.toFixed(2)+'</div></div>';
		            html+='<div class="ui-block-b" style="width:100px"><div class="ui-bar ui-bar-b">'+disp.toFixed(2)+'</div></div>';
					$("#gridtotales").append(html);	

					
			
	   }//function exito
 		
	function errorconsulta(err) {
    	alert("Error SQL al llenar grid de catalogo: "+err.code+err.message);
	}
//  });	

  }//
function existeenpedido(articulo,cliente){
	var existe=false;
	var descripcion='';
	function listo(tx,results){ 	
	         //alert('entra a funcion listo de existeenpedido');         	          			 
	     	 if (results.rows.length>0){				 			
				existe=true;  							
			  }
 	}
	function listo2(tx,results){ 	
	         //alert('entra a funcion listo de existeenpedido');         	          			 
	     	 if (results.rows.length>0){
				  var row = results.rows.item(0); 				 
				//alert('existe en pedido');  				
				descripcion=row['descripcion'];  				
				//alert('prueba de existe '+existe);  				
			  }
 	}
	function existep(tx){  	
	        //alert('entra a funcion existep');         	    
			var sql='SELECT articulo FROM TEMPEDIDO WHERE articulo="'+articulo+'" and cliente="'+cliente+'"  ';			
			tx.executeSql(sql,[],listo,function(err){
    	 		 alert("Error consultar existeTEMPEDIDO : "+err.code+err.message);
         		});    									
			var sql='SELECT articulo,descripcion FROM ARTICULO WHERE articulo="'+articulo+'" ';			
			tx.executeSql(sql,[],listo2,function(err){
    	 		 alert("Error consultar articulo: "+err.code+err.message);
         		});    										
				
				
	}
	base.transaction(existep, function(err){
    	 		 alert("Error select tabla TEMPPEDIDO: "+err.code+err.message);
         		},function(){
					//alert(existe);
					if (existe){
   					alert('Artículo ya fue ingresado, modifiquelo desde el pedido');
					}
					else
					{
						guardaarticulo(articulo);//almacena localmente la clave de articulo 					 
						$('#etiart').empty();
						$('#etiart').append('Articulo: '+articulo+' '+descripcion)
						//window.location.href='#pcantidad';
						$('#cantcat').val('1');						
						$('#divnumcat').show();
						
					}
				});		

    
	
	
}//function existeenpedido
function fichaarticulo(articulo){//
		var bodega='K01';
		base.transaction(consulta, errorconsulta);	
	function consulta(tx) {
		var sql='SELECT a.articulo,a.descripcion,a.clas,a.accion,a.impuesto,a.descuento,b.existencia as ebodega,c.existencia as ealg,';			
			sql+='a.precio,a.laboratorio,a.sal ';
			sql+='FROM articulo a left outer join articulo_existencia b on b.articulo=a.articulo and b.bodega="K01" ';
			sql+=' left outer join articulo_existencia c on c.articulo=a.articulo and c.bodega="ALG"  WHERE a.articulo="'+articulo+'" order by a.descripcion';
					
		tx.executeSql(sql,[],exito,errorconsulta);
		}
		
		function exito(tx,results){ 
			
		      $("#divficha").empty();				  			  
			  var html = "";
			  var tipo="";
			  var saldot=0; var montot=0; var precio=0; var total=0; var iva=0; var descuento=0; var parcial=0; var preciop=0; var preciocdesc=0;
			  var existencia=0; var abordo=0; var preventa=0; var dif=0; var cantidad=0; var arttotal=0; var pietotal=0; var artpre=0; var piepre=0;
			  var artabordo=0; var pieabordo=0; var totalpre=0; var totalabordo=0;
			  //agrega encabezado de grid			  			            	  
			  $.each(results.rows,function(index){				  
				  var row = results.rows.item(index); 
					/* cantidad=Number(row['cantidad']);							 			 
				     preciocdesc=Number(row['precio'])-((Number(row['precio'])/100)*Number(row['descuento']));				     			     
				     descuento=Number(row['descuento']);
					 iva=Number(row['impuesto']);					 
					 preciop=Number(row['precio']);
				     precio=Number(preciocdesc)*(1+(Number(row['impuesto'])/100));				 
					 parcial=precio*cantidad;
					 total+=Number(parcial);			  */
					 html+='<a href="" style="float:left"> <img src="../AplicMovil/jquery-mobile/images/medicamento.png"> </a>';
				     html+='<div class="ui-grid-a" id="gridficha" style="text-align:left">';
			  	     html+='<div class="ui-block-a" style="width:120px" ><div class="ui-bar ui-bar-a">Articulo</div></div>';
		             html+='<div class="ui-block-b" style="width:300px"><div class="ui-bar ui-bar-b">'+row['descripcion']+'</div></div>';
				     html+='<div class="ui-block-a" style="width:120px"><div class="ui-bar ui-bar-a">Laboratorio</div></div>';
	                 html+='<div class="ui-block-b" style="width:300px"><div class="ui-bar ui-bar-b" >'+row['laboratorio']+'</div></div>';
       	             html+='<div class="ui-block-a" style="width:120px"><div class="ui-bar ui-bar-a">SAL</div></div>';
                     html+='<div class="ui-block-b" style="width:300px"><div class="ui-bar ui-bar-b" >'+row['sal']+'</div></div>';
                     html+='<div class="ui-block-a" style="width:120px"><div class="ui-bar ui-bar-a">Accion T</div></div>';
                     html+='<div class="ui-block-b" style="width:300px"><div class="ui-bar ui-bar-b" >'+row['accion']+'</div></div>';             		               
                     html+='<div class="ui-block-a" style="width:120px"><div class="ui-bar ui-bar-a">Clasificacion</div></div>';
                     html+='<div class="ui-block-b" style="width:300px"><div class="ui-bar ui-bar-b" >'+row['clas']+'</div></div>';         		               
					 html+='</div>';
			  });//.each					
					$("#divficha").append(html);				
			
	   }//function exito
 		
	function errorconsulta(err) {
    	alert("Error SQL al llenar ficha de articulo: "+err.code+err.message);
	}
//  });	

  }//