// crear e insertar en tablas
function consultadb()
{
	var db = window.openDatabase("Database", "1.0", "SARDEL", 10000000);			
	return db;	
}

function iniciar()
{		
	
	//var db = window.openDatabase("Database", "1.0", "Cordova Demo", 1000000);
consultadb().transaction(creartb, errorCB, successCB);

	//alert('entra a funcion iniciar');
		function creartb(tx) {
			//alert('funcion creartb');	
    	 tx.executeSql('DROP TABLE IF EXISTS CLIENTES');
		 tx.executeSql('DROP TABLE IF EXISTS CUENTASB');
		 tx.executeSql('DROP TABLE IF EXISTS CUENTASDEP');
		 tx.executeSql('DROP TABLE IF EXISTS CHEQUES');		 
		 tx.executeSql('DROP TABLE IF EXISTS PENCOBRO');
		 tx.executeSql('DROP TABLE IF EXISTS TEMPEDIDO');
		 tx.executeSql('DROP TABLE IF EXISTS TEMFACTURA');
		 tx.executeSql('DROP TABLE IF EXISTS TEMCOBROS');		 
		 tx.executeSql('DROP TABLE IF EXISTS TEMDEV');//
		 tx.executeSql('DROP TABLE IF EXISTS ARTICULO');//se llena de tablas articulo, articulo_precio,descuento_nivel
		 tx.executeSql('DROP TABLE IF EXISTS ARTICULO_EXISTENCIA');//se llena de tablas articulo, articulo_precio,descuento_nivel
		 tx.executeSql('DROP TABLE IF EXISTS SUGERIDO');//
		 tx.executeSql('DROP TABLE IF EXISTS ENCPEDIDO');//
		 tx.executeSql('DROP TABLE IF EXISTS DETPEDIDO');//
		 tx.executeSql('DROP TABLE IF EXISTS PARAMETROS');//		 
		 tx.executeSql('DROP TABLE IF EXISTS RAZONVISITA');//		 
		 tx.executeSql('DROP TABLE IF EXISTS VISITA');//		 
		 tx.executeSql('DROP TABLE IF EXISTS ENCHISFAC');//
		 tx.executeSql('DROP TABLE IF EXISTS DETHISFAC');//
		 tx.executeSql('DROP TABLE IF EXISTS ENCDEV');//
		 tx.executeSql('DROP TABLE IF EXISTS DETDEV');//
		 tx.executeSql('DROP TABLE IF EXISTS ENCOBROS');		 
		 tx.executeSql('DROP TABLE IF EXISTS DETCOBROS');	
		 tx.executeSql('DROP TABLE IF EXISTS ENCDEP');		 
		 tx.executeSql('DROP TABLE IF EXISTS DETDEP');		 
		 tx.executeSql('DROP TABLE IF EXISTS NOTASCOB');		 
	 

		 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS ENCHISFAC (id INTEGER PRIMARY KEY AUTOINCREMENT, factura,monto,cliente,pedido,fecha)');  
		 tx.executeSql('CREATE TABLE IF NOT EXISTS DETHISFAC (id INTEGER PRIMARY KEY AUTOINCREMENT, factura,articulo,linea,cantidad,devuelto,precio,totlinea)');  
		 tx.executeSql('CREATE TABLE IF NOT EXISTS PARAMETROS (id INTEGER PRIMARY KEY AUTOINCREMENT, cod_zon,num_ped,num_rec,num_dev,num_fac)'); 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS RAZONVISITA (id INTEGER PRIMARY KEY AUTOINCREMENT, cod_rzn,des_rzn)'); 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS VISITA (id INTEGER PRIMARY KEY AUTOINCREMENT,cliente,doc_pro,fecha_plan,fin,inicio,notas,razon,ruta,tipo)'); 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS CUENTASB (id INTEGER PRIMARY KEY AUTOINCREMENT, codigo TEXT NOT NULL,descripcion)'); 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS CUENTASDEP (id INTEGER PRIMARY KEY AUTOINCREMENT, codigo TEXT NOT NULL,cuenta,descripcion)'); 
         tx.executeSql('CREATE TABLE IF NOT EXISTS CLIENTES (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL, clave TEXT NOT NULL,dia TEXT NOT NULL,direccion TEXT NOT NULL,telefono TEXT NOT NULL,tipo TEXT NOT NULL,diasc TEXT NOT NULL,lcredito,saldo )'); 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS PENCOBRO (id INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT NOT NULL,documento TEXT NOT NULL,cliente TEXT NOT NULL,saldo,monto,fecha,fechaven,vencida,diasv)'); 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS TEMPEDIDO (id INTEGER PRIMARY KEY AUTOINCREMENT, articulo TEXT NOT NULL,cantidad,cliente)'); 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS TEMFACTURA (id INTEGER PRIMARY KEY AUTOINCREMENT, articulo TEXT NOT NULL,cantidad,cliente)'); 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS TEMDEV (id INTEGER PRIMARY KEY AUTOINCREMENT, articulo TEXT NOT NULL,linea,cantidad,obs)'); 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS TEMCOBROS (id INTEGER PRIMARY KEY AUTOINCREMENT, factura TEXT NOT NULL,abonado,saldo)'); 		 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS CHEQUES (id INTEGER PRIMARY KEY AUTOINCREMENT, codbanco,cliente,ruta,fecha,monto,numcheque,cuenta,recibo,tipo)'); 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS ARTICULO (id INTEGER PRIMARY KEY AUTOINCREMENT, articulo TEXT NOT NULL,descripcion TEXT NOT NULL,clas TEXT NOT NULL,accion TEXT NOT NULL,impuesto,precio,descuento,laboratorio,sal,ubi)'); 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS ARTICULO_EXISTENCIA (id INTEGER PRIMARY KEY AUTOINCREMENT, articulo TEXT NOT NULL,bodega TEXT NOT NULL,existencia)'); 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS SUGERIDO (id INTEGER PRIMARY KEY AUTOINCREMENT, cliente TEXT NOT NULL,articulo TEXT NOT NULL,cantidad)'); 
         tx.executeSql('CREATE TABLE IF NOT EXISTS ENCPEDIDO (id INTEGER PRIMARY KEY AUTOINCREMENT, num_ped,cod_zon,doc_pro,cod_clt,tip_doc,hor_fin,fec_ped,fec_des,mon_imp_vt,mon_civ,mon_siv,mon_dsc,obs_ped,estado,cod_cnd,cod_bod)'); 
         tx.executeSql('CREATE TABLE IF NOT EXISTS DETPEDIDO (id INTEGER PRIMARY KEY AUTOINCREMENT, num_ped,cod_art,mon_prc_mn,por_dsc_ap,mon_tot,mon_dsc,mon_prc_mx,cnt_max)'); 
		  tx.executeSql('CREATE TABLE IF NOT EXISTS ENCDEV (id INTEGER PRIMARY KEY AUTOINCREMENT, num_dev,cod_zon,cod_clt,hor_ini,hor_fin,fec_dev,obs_dev,num_itm,est_dev,doc_pro,mon_siv,mon_dsc,por_dsc_ap,mon_imp_vt,mon_imp_cs,cod_bod,impreso,num_ref)'); 
         tx.executeSql('CREATE TABLE IF NOT EXISTS DETDEV  (id INTEGER PRIMARY KEY AUTOINCREMENT, num_dev,cod_zon,cod_art,ind_dev,mon_tot,mon_prc_mx,mon_prc_mn,cnt_max,obs_dev,mon_dsc,por_dsc_ap)'); 
		 tx.executeSql('CREATE TABLE IF NOT EXISTS ENCOBROS (id INTEGER PRIMARY KEY AUTOINCREMENT, cliente,tipo,ruta,recibo,doc_pro,fec_pro,hor_ini,hor_fin,impreso,estado,monche,monefe,mondoc,depositado)'); 
		  tx.executeSql('CREATE TABLE IF NOT EXISTS DETCOBROS (id INTEGER PRIMARY KEY AUTOINCREMENT, cliente,tipo,tipoaso,ruta,recibo,docafectado,doc_pro,fec_pro,estado,monto,saldo_doc)'); 
		  tx.executeSql('CREATE TABLE IF NOT EXISTS ENCDEP (id INTEGER PRIMARY KEY AUTOINCREMENT, codigo,cuenta,deposito,doc_pro,fec_dep,mon_dep,obs)'); 
		  tx.executeSql('CREATE TABLE IF NOT EXISTS DETDEP (id INTEGER PRIMARY KEY AUTOINCREMENT, monche,monefe,deposito,recibo,obs)'); 
		  tx.executeSql('CREATE TABLE IF NOT EXISTS NOTASCOB (id INTEGER PRIMARY KEY AUTOINCREMENT, factura,nota)'); 
		 }		 
		 
		 
	function errorCB(err) {
  	  alert("Error processing SQL: "+err.code);
	}

	function successCB() {
     navigator.notification.alert('Tablas Generadas',null,'Generar Tablas','Aceptar');					;
	}	
}//function iniciar()
function insertar(){
		
		consultadb().transaction(insertarcli,function(err){
    	  alert("Error al insertar clientes: "+err.code+err.message);
          }, navigator.notification.alert('Datos insertados',null,'Insertar Datos','Aceptar'));
				
    	function insertarcli(tx) {	
		tx.executeSql('INSERT INTO PARAMETROS (cod_zon,num_ped,num_rec,num_dev,num_fac) VALUES ("S04","S04000216","R04000656","D04000001","F04000646")'); 	
		tx.executeSql('INSERT INTO RAZONVISITA (cod_rzn,des_rzn) VALUES ("R1","Ventas")'); 
		tx.executeSql('INSERT INTO RAZONVISITA (cod_rzn,des_rzn) VALUES ("R2","Cobros")'); 
		tx.executeSql('INSERT INTO RAZONVISITA (cod_rzn,des_rzn) VALUES ("R3","Local Cerrado")'); 
		tx.executeSql('INSERT INTO RAZONVISITA (cod_rzn,des_rzn) VALUES ("R4","No esta comprado")'); 
        tx.executeSql('INSERT INTO CUENTASB (codigo,descripcion) VALUES("ND","NO DEFINIDA")'); 
		tx.executeSql('INSERT INTO CUENTASB (codigo,descripcion) VALUES("BANCOMER","BBVA BANCOMER")'); 
		tx.executeSql('INSERT INTO CUENTASB (codigo,descripcion) VALUES("BANAMEX","Banamex")'); 
		tx.executeSql('INSERT INTO CUENTASB (codigo,descripcion) VALUES("HSBC","HSBC")'); 
		tx.executeSql('INSERT INTO CUENTASB (codigo,descripcion) VALUES("BSANTAND","Banco Nacional Santander Mexicano")'); 
		tx.executeSql('INSERT INTO CUENTASB (codigo,descripcion) VALUES("BITAL","Grupo Financiero Bital")'); 		
		tx.executeSql('INSERT INTO CUENTASDEP (codigo,cuenta,descripcion) VALUES("BSANTAND","92001407761","Santander")'); 
		tx.executeSql('INSERT INTO CUENTASDEP (codigo,cuenta,descripcion) VALUES("ND","110120113112","ERNESTO ARANA")'); 
		tx.executeSql('INSERT INTO CUENTASDEP (codigo,cuenta,descripcion) VALUES("BITAL","04045430485","HSBC")'); 		
		tx.executeSql('INSERT INTO ENCHISFAC (factura,monto,cliente,pedido,fecha) VALUES ("00046441",483,"1020","F06000779","03/07/2013")');  		
		tx.executeSql('INSERT INTO DETHISFAC (factura,articulo,linea,cantidad,devuelto,precio,totlinea) VALUES ("00046441","ADE-04",0,2,0,100,140)')		
		tx.executeSql('INSERT INTO DETHISFAC (factura,articulo,linea,cantidad,devuelto,precio,totlinea) VALUES ("00046441","AGU-10",1,5,0,50,175)')		
		tx.executeSql('INSERT INTO DETHISFAC (factura,articulo,linea,cantidad,devuelto,precio,totlinea) VALUES ("00046441","AMO-19",2,6,0,38,168)')		
		tx.executeSql('INSERT INTO CLIENTES (nombre,clave,dia,direccion,telefono,tipo,diasc,lcredito,saldo) VALUES ("Farmacia UNO", "1020","Lunes","Dirección del cliente","2281545130","C","30",10000.00,9000.00)');      
        tx.executeSql('INSERT INTO CLIENTES (nombre,clave,dia,direccion,telefono,tipo,diasc,lcredito,saldo) VALUES ("Farmacia DOS", "1030","Martes","Dirección del cliente  DOS","2281545130","C","30",10000.00,5000.00)'); 
		tx.executeSql('INSERT INTO CLIENTES (nombre,clave,dia,direccion,telefono,tipo,diasc,lcredito,saldo) VALUES ("Farmacia TRES", "1040","Miercoles","Dirección del cliente","2281545130","C","30",3000.00,10000.00)');        
        tx.executeSql('INSERT INTO CLIENTES (nombre,clave,dia,direccion,telefono,tipo,diasc,lcredito,saldo) VALUES ("Farmacia CUATRO", "1050","Jueves","Dirección del cliente  CUATRO","2281545130","C","30",5000.00,8000.00)'); 		
		tx.executeSql('INSERT INTO PENCOBRO (tipo,documento,cliente,saldo,monto,fecha,fechaven,vencida,diasv) VALUES ("1","00041534","1020",437.55,437.55,"08/05/2013","08/06/2013","S",54)');  		       
		tx.executeSql('INSERT INTO PENCOBRO (tipo,documento,cliente,saldo,monto,fecha,fechaven,vencida,diasv) VALUES ( "1","00041535","1020",888.55,1000.55,"15/05/2013","15/06/2013","S",31)');  
		tx.executeSql('INSERT INTO PENCOBRO (tipo,documento,cliente,saldo,monto,fecha,fechaven,vencida,diasv) VALUES ( "1","00041537","1020",998.55,1000.55,"15/05/2013","15/06/2013","S",31)');        
		tx.executeSql('INSERT INTO PENCOBRO (tipo,documento,cliente,saldo,monto,fecha,fechaven,vencida,diasv) VALUES ( "1","00041536","1030",5000.00,5000.00,"08/06/2013","08/07/2013","N",24)');        
		tx.executeSql('INSERT INTO PENCOBRO (tipo,documento,cliente,saldo,monto,fecha,fechaven,vencida,diasv) VALUES ( "1","00041540","1030",5000.00,5000.00,"08/06/2013","08/07/2013","N",24)');        
		tx.executeSql('INSERT INTO PENCOBRO (tipo,documento,cliente,saldo,monto,fecha,fechaven,vencida,diasv) VALUES ( "1","00041538","1030",5000.00,5000.00,"08/06/2013","08/07/2013","N",24)');        
		tx.executeSql('INSERT INTO PENCOBRO (tipo,documento,cliente,saldo,monto,fecha,fechaven,vencida,diasv) VALUES ( "1","00041539","1030",5000.00,5000.00,"08/06/2013","08/07/2013","N",24)');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041534","notas de cobranza1")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041534","notas de cobranza2")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041534","notas de cobranza3")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041534","notas de cobranza4")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041534","notas de cobranza5")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041534","notas de cobranza6")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041534","notas de cobranza7")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041534","notas de cobranza8")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041534","notas de cobranza9")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041534","notas de cobranza10")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041535","notas de cobranza1")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041535","notas de cobranza2")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041535","notas de cobranza3")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041535","notas de cobranza4")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041535","notas de cobranza5")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041535","notas de cobranza6")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041535","notas de cobranza7")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041535","notas de cobranza8")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041535","notas de cobranza9")');        
		tx.executeSql('INSERT INTO NOTASCOB (factura,nota) VALUES ( "00041535","notas de cobranza10")'); 
		/*
 		 tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento) VALUES ("ADE-04","ADEROGYL 15 SOL. C/5 AMP","OFERTA","ANTIDEA",16,100,30)'); 		  //cod_cl=clasificacion_2 de articulo (CLIE,CATA,OFER), cod_fam=clasificacion_1 de articulo (RESU)
		 tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento) VALUES ("AGU-10","AGUA OXIGENADA CON 100 ML.","CATA","ANTIGRIPAL",0,50,30)'); 
		 tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento) VALUES ("AMO-19","AMOXIL SUSP. 500 MG. C/75 ML.","OFERTA","ANTIDEA",16,40,30)'); 
		 tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento) VALUES ("AZA-02","ARTI DE PRUEBA","OFERTA","PRUEBA",16,100,40)'); 
		 */
		 tx.executeSql('INSERT INTO ARTICULO_EXISTENCIA ( articulo,bodega,existencia) VALUES ("ADE-04","K01",20)'); 
		 tx.executeSql('INSERT INTO ARTICULO_EXISTENCIA ( articulo,bodega,existencia) VALUES ("AGU-10","K01",30)'); 
		 tx.executeSql('INSERT INTO ARTICULO_EXISTENCIA ( articulo,bodega,existencia) VALUES ("AMO-19","K01",40)'); 
		 tx.executeSql('INSERT INTO ARTICULO_EXISTENCIA ( articulo,bodega,existencia) VALUES ("ADE-04","ALG",50)'); 
		 tx.executeSql('INSERT INTO ARTICULO_EXISTENCIA ( articulo,bodega,existencia) VALUES ("AGU-10","ALG",60)'); 
		 tx.executeSql('INSERT INTO ARTICULO_EXISTENCIA ( articulo,bodega,existencia) VALUES ("AMO-19","ALG",70)'); 
		 tx.executeSql('INSERT INTO SUGERIDO (cliente,articulo,cantidad) VALUES ("1020","ADE-04",5)'); 
		 tx.executeSql('INSERT INTO SUGERIDO (cliente,articulo,cantidad) VALUES ("1020","AGU-10",5)'); 
		 tx.executeSql('INSERT INTO SUGERIDO (cliente,articulo,cantidad) VALUES ("1020","AMO-19",5)'); 
		 tx.executeSql('INSERT INTO SUGERIDO (cliente,articulo,cantidad) VALUES ("1020","AZA-02",5)'); 
		 tx.executeSql('INSERT INTO SUGERIDO (cliente,articulo,cantidad) VALUES ("1030","AZA-02",5)'); 
		 tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ACA-01","ACANOL TABS 2MG C/12","CATALOGO","ANTIDIARREICO",0,85.77,55,"SANOFI AVENTIS","LOPERAMIDA","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ACE-01","ACTE HIGADO BACALAO PERL C/30","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS",0,59.8,75,"SARDEL","ACEITE DE BACALAO","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ACE-02","ACTE HIGADO TIBURON PERL C/30","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS",0,59.8,75,"SARDEL","ACEITE DE TIBURON","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ACF-01","AC FAST TABS 500MG C/10","CATALOGO","ANALGESICO - ANTIPIRETICO",0,34,62,"HORMONA","PARACETAMOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ACL-01","ACLORAL TABS 150MG C/20","PRODUCTO DE BAJA","ANTIULCEROSO",0,99,54,"LIOMONT","RANITIDINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ACL-02","ACLORAL INYT 50MG/2ML C/5","PRODUCTO DE BAJA","ANTIULCEROSO",0,75,54,"LIOMONT","RANITIDINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ADA-04","ADALAT RETARD TABS 20 MG C/ 28    ","PRODUCTO DE BAJA","NULL",0,209,54,"BAYER","NIFEDEPINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ADK-01","A-D-KAN SOL. ING. C/3 AMP.","PRODUCTO DE BAJA","NULL",0,51,62,"SONS","VITAMINA A Y D","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ADR-01","ADRIBEL SOLU 150MG C/120ML","CATALOGO","MUCOLITICO - BRONCODILATADOR",0,53.9,66,"BRULUART","AMBROXOL-SALBUTAMOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AER-01","AEROFLUX SOLU  150MG C/120ML","PRODUCTO DE BAJA","MUCOLITICO - BRONCODILATADOR",0,245,50,"SANFER S.A. DE C.V.","AMBROXOL-SALBUTAMOL","210")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AFL-01","AFLUSIL SUSP 2G C/120ML","PRUEBA","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,66,68,"LOEFFLER","IBUPROFENO","307")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ALB-01","ALBENDAZOL SUSP 20MG C/20ML (APOT)","CLIENTE ESPECIFICO","ANTIHELMINTICO",0,36,70,"APOTEX","ALBENDAZOL","107")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ALC-01","ALCACHOFA CAPS C/60","CATALOGO","SUPLEMENTO ALIMENTICIO",0,185,75,"SARDEL","ALCACHOFA","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ALI-01","ALIVIN PLUS ADTO INYT 300,000U/3ML C/1","CATALOGO","ANTIBACTERIANO - ANALGESICO -ANTIPIRETICO - EXPECTORANTE",0,54.03,54,"VALEANT","BENCILPENICILINA-VIT C-PIRAZOLONA-GUAYAC","201")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ALI-02","ALIVIN PLUS INF INYT 200,000U/2ML C/1","CATALOGO","ANTIBACTERIANO - ANALGESICO -ANTIPIRETICO - EXPECTORANTE",0,46.95,54,"VALEANT","BENCILPENICILINA-VIT C-PIRAZOLONA-GUAYAC","202")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ALO-01","ALOPURINOL TABS 300MG C/20 (APOT)","CLIENTE ESPECIFICO","ANTIGOTOSO",0,177,85,"APOTEX","ALOPURINOL","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMB-01","AMBROXOL G.I. GTS. C/30 ML. (APOT)","CLIENTE ESPECIFICO","MUCOLITICO",0,98,75,"APOTEX","AMBROXOL","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMB-02","AMBROXOL SOLU 15MG C/120ML (APOT)","CATALOGO","MUCOLITICO",0,90,75,"APOTEX","AMBROXOL","107")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMB-04","AMBROXOL SOLU 300MG C/120ML (FARM)","CATALOGO","MUCOLITICO",0,39,78,"FARMACOS CONTINENTALES","AMBROXOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMC-02","AMCEF INYT 1GR IM 3.5 ML","OPORTUNIDAD","ANTIBACTERIANO",0,350,94,"AMSA","CEFTRIAXONA","401")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AME-01","AMEBYL SUSP 125MG C/120ML","CATALOGO","AMEBICIDA - GIARDICIDA - TRICOMONICIDA - ANTIBACTERIANO",0,114,66,"OFFENBACH","METRONIDAZOL-DIYODOHIDROXIQUINOLEINA","107")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AME-02","AMEBYL TABS 400MG C/20","CATALOGO","AMEBICIDA - GIARDICIDA - TRICOMONICIDA - ANTIBACTERIANO",0,216,66,"OFFENBACH","METRONIDAZOL-DIYODOHIDROXIQUINOLEINA","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMI-01","AMIKACINA INYT 500MG/2ML C/1 (AMSA)","CATALOGO","ANTIBACTERIANO",0,90,88,"AMSA","AMIKACINA","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMI-03","AMIKACINA INYT 100MG/2ML C/1 (AMSA)","CATALOGO","ANTIBACTERIANO",0,45,85,"AMSA","AMIKACINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMK-01","AMK INYT 100MG/2ML C/1","CATALOGO","ANTIBACTERIANO",0,49.84,82,"PISA","AMIKACINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMK-02","AMK INYT 500MG/2ML C/1","CATALOGO","ANTIBACTERIANO",0,151.54,88,"PISA","AMIKACINA","201")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AML-01","AMLODIPINO TABS 5MG C/10 (APOT)","CLIENTE ESPECIFICO","ANTIHIPERTENSIVO",0,160,78,"APOTEX","AMLODIPINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMO-06","AMOXIBRON CAPS 500MG C/12","PRODUCTO DE BAJA","ANTIBACTERIANO - MUCOLITICO -EXPECTORANTE",0,169,50,"SANFER S.A. DE C.V.","AMOXICILINA-BROMHEXINA","201")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMO-07","AMOXIBRON SUSP 250MG C/75ML","PRODUCTO DE BAJA","ANTIBACTERIANO - MUCOLITICO -EXPECTORANTE",0,159,50,"SANFER S.A. DE C.V.","AMOXICILINA-BROMHEXINA","210")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMO-08","AMOXICILINA CAPS 500MG C/12 (APOT)","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,99.82,68,"APOTEX","AMOXICILINA","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMO-09","AMOXIVET SUSP 250MG C/75ML","CATALOGO","ANTIBACTERIANO",0,121.78,54,"VALEANT","AMOXICILINA","210")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMO-10","AMOXICILINA/ACIDO CLAV TABS 500MG C/10 (SERR)","CATALOGO","ANTIBACTERIANO",0,215,66,"SERRAL","AMOXICILINA- ACIDO CLAVULANICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMO-12","AMOXICILINA/ACIDO CLAV TABS 500MG C/12 (APOT)","PRODUCTO DE BAJA","ANTIBACTERIANO",0,230,68,"APOTEX","AMOXICILINA- ACIDO CLAVULANICO","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMO-17","AMOXIL CAP. 500 MG. C/12","CATALOGO","ANTIBACTERIANO",0,135.42,40,"GLAXO SMITH KLINE","AMOXICILINA","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMO-18","AMOXIL SUSP. 250 MG. C/75 ML.","CATALOGO","ANTIBACTERIANO",0,125.57,40,"GLAXO SMITH KLINE","AMOXICILINA","210")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMO-19","AMOXIL SUSP. 500 MG. C/75 ML.","CATALOGO","ANTIBACTERIANO",0,141.59,40,"GLAXO SMITH KLINE","AMOXICILINA","211")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMO-20","AMOXIVET CAPS 500MG C/12","CATALOGO","ANTIBACTERIANO",0,134.82,54,"VALEANT","AMOXICILINA","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMO-21","AMOXICILINA SUSP 500MG C/75ML (AMSA)","PRODUCTO DE BAJA","ANTIBACTERIANO",0,100,78,"AMSA","AMOXICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMO-22","AMOXICILINA CAPS 500MG C/12 (KEND)","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,48,54,"KENDRICK","AMOXICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMO-24","AMOXICILINA/ACIDO CLAV JR SUSP 250MG C/75ML (SERR)","CATALOGO","ANTIBACTERIANO",0,174.9,66,"SERRAL","AMOXICILINA- ACIDO CLAVULANICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMP-01","AMPICILINA TABS 500MG C/20 (AMSA)","CATALOGO","ANTIBACTERIANO",0,120,82,"AMSA","AMPICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMP-02","AMPIGRIN ADTO INYT C/JER 500MG/3ML C/3","CATALOGO","ANTIBACTERIANO - ANTIHISTAMINICO - ANALGESICO - ANTIPIRETICO -MUCOLITICO - ANESTESICO",0,226,66,"COLLINS","AMPICILINA-CLORFENIRAMINA-DIPIRONA-GUAYA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMP-03","AMPIGRIN INF INYT C/JER 250MG/3ML C/3","PRODUCTO DE BAJA","ANTIBACTERIANO - ANTIHISTAMINICO - ANALGESICO - ANTIPIRETICO -MUCOLITICO - ANESTESICO",0,204,66,"COLLINS","AMPICILINA-CLORFENIRAMINA-DIPIRONA-GUAYA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AMS-02","AMSAFAST CAPS 120 MG C/21    ","PRUEBA","AUXILIAR EN EL TRATAMIENTO PARA BAJAR DE PESO",0,348,68,"AMSA","ORLISTAT","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ANA-01","ANAPENIL INYT 1,000,000U/3ML C/1","CATALOGO","ANTIBACTERIANO",0,93.58,54,"VALEANT","BENCILPENICILINA","201")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ANA-02","ANAPENIL INYT 400,000U/2ML C/1","CATALOGO","ANTIBACTERIANO",0,48.66,54,"VALEANT","BENCILPENICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AND-01","ANDOX COMPR. 500 MG. C/10","CATALOGO","ANALGESICO - ANTIPIRETICO",0,39.79,60,"ATLANTIS","PARACETAMOL","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AND-02","ANDOX PLUS COMP 500MG C/20","CATALOGO","ANALGESICO - ANTIPIRETICO",0,52.86,60,"ATLANTIS","PARACETAMOL-CAFEINA","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ANI-01","ANITRIM F TABS 160/800  C/14    ","PRUEBA","ANTIBACTERIANO",0,149,28,"ITALMEX S.A.","TRIMETOPRIM-SULFAMETOXAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ANI-02","ANITRIM SUSP PED 40/200 MG C/120 ML  ","PRUEBA","ANTIBACTERIANO",0,133,28,"ITALMEX S.A.","TRIMETOPRIM-SULFAMETOXAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ANI-03","ANILLO VIBRADOR PRUDENCE C/1   ","PRUEBA","NULL",16,95,32,"DKTT INTERNACIONAL","MATERIALES VARIOS","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ANP-01","ANPRE TABS 15MG C/15","PRODUCTO DE BAJA","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,95,84,"WERMAR","MELOXICAM","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("APO-01","APOCOL TAB. 200 MG. C/40","CLIENTE ESPECIFICO","REGULADOR DE LA MOTILIDAD INTESTINAL",0,312,68,"APOTEX","TRIMEBUTINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("APO-02","APODEFIL TABS 50MG C/1","CATALOGO","TRATAMIENTO PARA LA DISFUNCION ERECTIL",0,182,78,"APOTEX","SILDENAFIL","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("APO-04","APOMETGLU TABS 500MG C/30","CLIENTE ESPECIFICO","ANTIDIABETICO",0,196,75,"APOTEX","MERTFORMINA-GLIBENCLAMIDA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("APO-05","APONISTAN "V" TAB. VAG. 100,000 C/12","CLIENTE ESPECIFICO","ANTIMICOTICO",0,75,68,"APOTEX","NISTATINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("APO-06","APO OXPAR TABS 20MG C/10","PRODUCTO DE BAJA","NULL",0,416,73,"APOTEX","PARACETAMOL/PSEUDOEFEDRINA/DEXTROMETORFA","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("APO-09","APOFLOX TABS 500 MG FCO C/6","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,187,82,"APOTEX","CIPROFLOXACINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("APO-14","APODEFIL MASTICABLE TABS 50MG C/1","CATALOGO","TRATAMIENTO PARA LA DISFUNCION ERECTIL",0,218.4,78,"APOTEX","SILDENAFIL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ARC-04","ARCOXIA COMP 90 MG C/7","CLIENTE ESPECIFICO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,516.94,40,"MERCK","ETORICOXIB","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ARG-01","ARGEMOL CMA C/28 G","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,69,66,"LOEFFLER","SULFADIAZINA DE PLATA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ARR-01","ARRETIN CREM 0.05% C/30G","PRODUCTO DE BAJA","ANTIACNE",0,187.92,59,"VALEANT","ACIDO RETINOICO","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ARS-02","ARSENAL COMPUESTO TABS 275MG C/10","PRUEBA","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,60,75,"IQFA","NAPROXENO-PARACETAOL","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ART-01","ARTRIDEN TABS  500 MG C/10    ","PRUEBA","ANTIINFLAMATORIO - ANALGESICO",0,71.38,77,"DEGORTS","ACIDO MEFENAMICO","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ART-05","ARTRIMAN COMP  1G C/30","PRODUCTO DE BAJA","CONDROPROTECTOR",0,123,71,"SALUD NATURAL","GLUCOSAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ART-10","ARTRISAR TABS 200MG C/60","CATALOGO","CONDROPROTECTOR",0,190,75,"SARDEL","GLUCOSAMINA-CONDROITINA-CART. TIBURON","201")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ASE-02","ASEPCYL POMA 0.2G C/48G","CATALOGO","ANTISEPTICO - ANTIBACTERIANO",0,49.6,75,"SARDEL","NITROFURAZONA","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ATA-01","ATALAK  INY 75 MG C/2    ","PRUEBA","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,55,66,"SONS","DICLOFENACO","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ATA-02","ATALAK  RET GRAG 100 MG C/20    ","PRUEBA","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,91,66,"SONS","DICLOFENACO","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ATO-04","ATORLIP TABS 20 MG C/10","PRUEBA","HIPOLIPEMIANTE",0,129,68,"MAVI","ATORVASTATINA","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AVA-03","AVAPENA INYT 20MG/2ML C/5","CATALOGO","ANTIHISTAMINICO",0,189.11,45,"SANDOZ","CLOROPIRAMINA","201")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AVA-04","AVAPENA TABS 25MG C/20","CATALOGO","ANTIHISTAMINICO",0,169.83,54,"SANDOZ","CLOROPIRAMINA","201")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AVI-02","AVIANT TABS 5 MG C/10","PRUEBA","ANTIHISTAMINICO",0,298.28,40,"SCHERING PLOUGH","DESLORATADINA","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AZA-01","AZANTAC TABS 150MG C/20","CATALOGO","ANTIULCEROSO",0,190.5,50,"SANFER S.A. DE C.V.","RANITIDINA","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("AZA-02","AZANTAC JRBE 150MG C/200ML","CATALOGO","ANTIULCEROSO",0,212.4,50,"SANFER S.A. DE C.V.","RANITIDINA","107")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BAC-06","BACTROPIN SUSP 40MG C/120ML","CATALOGO","ANTIBACTERIANO",0,58.5,66,"SONS","TRIMETOPRIM-SULFAMETOXAZOL","107")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BAC-07","BACTROPIN TABS 160MG C/14","CATALOGO","ANTIBACTERIANO",0,56,66,"SONS","TRIMETOPRIM-SULFAMETOXAZOL","202")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BAR-01","BARMICIL COMPUESTO CREM 1G C/30G","CATALOGO","ANTIINFLAMATORIO -CORTICOSTEROIDE - ANTIALERGICO -ANTIMICOTICO - ANTIBACTERIANO",0,57,68,"SONS","BETAMETAZONA-CLOTRIMAZOL-GENTAMICINA","201")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BAY-03","BAYRO SOL INY IM 1G C/1","CLIENTE ESPECIFICO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,83,50,"BAYER","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BEC-01","BECLOMETASONA AERO 50MCG C/200 DOSIS","CATALOGO","ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO",0,270,66,"VICTORY ENTERPRISES","BECLOMETASOA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BED-01","BEDOYECTA CAPS 36MG C/30","CATALOGO","HEMATOPOYETICO - ANTINEURITICO",0,225.07,60,"VALEANT","COMPLEJO B","201")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BED-02","BEDOYECTA PED TABS 1.5MG C/30","CATALOGO","HEMATOPOYETICO - ANTINEURITICO",0,200.99,60,"VALEANT","COMPLEJO B","202")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BED-03","BEDOYECTA INYT C/JER 10000MCG/2ML C/5","CATALOGO","HEMATOPOYETICO - ANTINEURITICO",0,331.97,62,"VALEANT","COMPLEJO B","203")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BEN-03","BENCELIN COMBINADO INYT 1,200,000U/3ML C/1","CATALOGO","ANTIBACTERIANO",0,46,78,"AMSA","BENCILPENICILINA","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BEN-05","BENCILPENICILINA INYT 400,000UI/2ML C/1 (APOT)","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,34,72,"APOTEX","BENCILPENICILINA","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BEN-06","BENCILPENICILINA INYT 800,000UI/2ML C/1 (APOT)","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,41,66,"APOTEX","BENCILPENICILINA","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BEN-08","BENZETACIL INYT 1,200,000U/3ML C/1","OPORTUNIDAD","ANTIBACTERIANO",0,106.37,60,"SANDOZ","BENCILPENICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BEN-09","BENZONATATO CAPS 100MG C/20 (APOT)","CATALOGO","ANTITUSIVO",0,80,72,"APOTEX","BENZONATO","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BEP-01","BEPLENOVAX INYT 5MG/500ML C/1","CATALOGO","VITAMINAS DE USO HOSPITALARIO",0,57.76,20,"PISA","DEXTROSA-TIAMINA-RIBOFLAVINA-NICOTINAMID","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BID-01","BIDA LAR CAPS C/30","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,114,75,"SARDEL","VITAMINAS-MINERALES","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BIE-01","BIENESTAR CHOCOLATE PLVO C/450G","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,235,75,"SARDEL","VITAMINAS-MINERALES-7 FIBRAS-PICOLINATO","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BIE-02","BIENESTAR FRESA PLVO C/450G","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,235,75,"SARDEL","VITAMINAS-MINERALES-7 FIBRAS-PICOLINATO","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BIO-01","BIOKONIC CAP. C/30","CLIENTE ESPECIFICO","VITAMINAS Y MINERALES",0,104,35,"APOTEX","MULTIVITAMINICO-MINERALES","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BIO-04","BIOTREFON L PLVO 1000MCG C/12","PRUEBA","ANABOLICO NO ESTEROIDEO",0,169,28,"ITALMEX S.A.","COBAMAMIDA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BIO-13","BIOSTAFEX TABS 120 MG C/10","PRODUCTO DE BAJA","ANTIHISTAMINICO",0,154,72,"BIOMEP","FEXOFENADINA","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BIO-14","BIOSTAFEX TABS 180 MG C/10    ","PRODUCTO DE BAJA","ANTIHISTAMINICO",0,230,72,"BIOMEP","FEXOFENADINA","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BIO-15","BIOMETRIX CAPS  C/30    ","PRUEBA","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,211.62,50,"SCHERING PLOUGH","VITAMINAS-MINERALES-HIERRO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BLE-01","BLENDOX JRBE 50MG C/60ML","PRODUCTO DE BAJA","NULL",0,48.5,72,"DEGORTS","CLORFENAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRE-01","BREACOL ADTO JRBE 2G C/120ML","CATALOGO","ANTITUSIVO - EXPECTORANTE",0,116.75,57,"VALEANT","DEXTROMETORFANO-GUAIFENESINA","210")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRE-02","BREACOL INF JRBE 1G C/120ML","CATALOGO","ANTITUSIVO - EXPECTORANTE",0,112.81,57,"VALEANT","DEXTROMETORFANO-GUAIFENESINA","211")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRE-03","BREGAMIN FC TABS 500MG C/10","CATALOGO","ANALGESICO - ANTIPIRETICO -DESCONGESTIVO - ANTIHISTAMINICO",0,25,72,"FARMACOS CONTINENTALES","PARACETAMOL-CLORFENIRAMINA-FENILEPRINA","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRE-04","BREALITAM AV SOL.500/.020/.055/3.00 C/60 ML","PRODUCTO DE BAJA","NULL",0,66,70,"FARMACOS CONTINENTALES","AMANTADINA-CLORFENIRAMINA-PARACETAMOL","308")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-04","BROGAL T ADTO JRBE 225MG C/120ML","CATALOGO","MUCOLITICO - ANTITUSIVO",0,92.7,68,"RAYERE","AMBROXOL-DEXTROMETORFANO","107")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-05","BROGAL T INF JRBE 150MG C/120ML","CATALOGO","MUCOLITICO - ANTITUSIVO",0,88.8,68,"RAYERE","AMBROXOL-DEXTROMETORFANO","107")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-07","BROMAXIN ADTO INYT 500MG/3ML C/1","CATALOGO","ANTIBACTERIANO - ANTIHISTAMINICO - ANALGESICO - ANTIPIRETICO -MUCOLITICO - ANESTESICO",0,69,64,"GIRALCAMPS","AMPICILINA-METAMIZOL-LIDOCAINA-BROMHEXIN","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-09","BROMIXEN CAPS 500MG C/12","PRODUCTO DE BAJA","ANTIBACTERIANO - MUCOLITICO -EXPECTORANTE",0,72,69,"MAVER","AMOXICILINA-BROMHEXINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-10","BRONCOMED SOLU 300MG C/120ML","CATALOGO","ANTITUSIVO - EXPECTORANTE",0,92.5,54,"LIOMONT","DEXTROMETORFANO-GUAIFENESINA","210")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-16","BRONCOLIN CARAMELO MIEL EUCALIPTO CAJA 40 G","PRUEBA","NULL",0,22,20,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-17","BRONCOLIN CARAMELO MIEL  CEREZA CAJA 40 G","OFERTA","ANTITUSIVO",0,22,20,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-18","BRONCOLIN CARAMELO  MIEL LIMON CAJA 40 G","PRUEBA","ANTITUSIVO",0,22,20,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-19","BRONCOLIN CARAMELO  MIEL  NARANJA CAJA 40 G","PRUEBA","ANTITUSIVO",0,22,20,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-20","BRONCOLIN CARAMELO VITROLERO 480 G","PRUEBA","NULL",0,107,20,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-21","BRONCOLIN JARABE ETIQUETA AZUL 250 ML","PRUEBA","NULL",0,86,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-22","BRONCOLIN JARABE ETIQUETA AZUL 140 ML","OFERTA","ANTITUSIVO",0,53,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-23","BRONCOLIN JARABE ETIQUETA VERDE/PROPOLEO 250 ML","PRUEBA","ANTITUSIVO",0,102,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-24","BRONCOLIN JARABE ETIQUETA VERDE/PROPOLEO 125 ML","PRUEBA","ANTITUSIVO",0,61,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-25","BRONCOLIN JARABE PLUS FRASCO 240 ML","PRUEBA","ANTITUSIVO",0,112,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-26","BRONCOLIPTOS JARABE 250 ML","PRUEBA","ANTITUSIVO",0,62,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-27","BRONCOLIN CARAMELO SUGAR FREE LIMON 35 G","PRUEBA","ANTITUSIVO",0,40,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-28","BRONCOLIN CARAMELO SUGAR FREE NARANJA 35 G","OFERTA","ANTITUSIVO",0,40,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-29","BRONCOLIN CARAMELO SUGAR FREE FRESA 35 G","PRUEBA","NULL",0,40,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-30","BRONCOLIN CARAMELO SUGAR FREE EUCALIPTO 35 G","PRUEBA","NULL",0,40,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-31","BRONCOLIN JARABE SUGAR FREE","PRUEBA","ANTITUSIVO",0,100,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-32","BRONCOLIN PALETA SABORES MIXTOS VITROLERO 500 G(50PZS)","PRUEBA","ANTITUSIVO",0,107,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-33","BRONCO RUB UNGÜENTO 40 G","PRUEBA","ANTITUSIVO",0,24,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-34","BRONCO RUB UNGÜENTO 90 G","OFERTA","NULL",0,42,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRO-35","BRONCO RUB UNGÜENTO 40 LATAS DE 12 G","PRUEBA","NULL",0,400,20,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRU-01","BRUBIOL TABS 500MG C/10","PRODUCTO DE BAJA","ANTIBACTERIANO",0,98,70,"BRULUART","CIPROFLOXACINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRU-02","BRUFIZA TABS 200MG C/30","CATALOGO","HIPOLIPEMIANTE",0,84,66,"BRULUART","BEZAFIBRATO","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRU-06","BRUCAP TABS 25MG C/30","CATALOGO","ANTIHIPERTENSIVO",0,55,66,"BRULUART","CAPTOPRIL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BRU-11","BRULIN INYT 8MG/2ML C/1","OPORTUNIDAD","ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO",0,28.5,68,"BRULUART","DEXAMETASONA","401")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BTR-01","B TRACET EX TABS 40MG C/20","CATALOGO","ANALGESICO - ANTIPIRETICO - ANTINEURITICO",0,114,64,"GIRALCAMPS","TRAMADOL-PARACETAMOL-VIT B1-VIT B12","202")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BTR-02","B TRACET PL INYT 50MG/2ML C/3","CATALOGO","ANALGESICO - ANTINEURITICO",0,81,64,"GIRALCAMPS","TRAMADOL","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BUS-01","BUSCONET INYT 20MG/5ML C/1","CATALOGO","ESPASMOLITICO - ANALGESICO - ANTIPIRETICO",0,47.5,66,"SONS","BUTILHIOSCINA-METAMIZOL","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BUS-02","BUSCONET TABS 250MG C/10","CATALOGO","ESPASMOLITICO - ANALGESICO - ANTIPIRETICO",0,52,66,"SONS","BUTILHIOSCINA-METAMIZOL","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BUS-03","BUSCAPINA COMPOSTIUM TABS 10MG C/20","OPORTUNIDAD","ESPASMOLITICO",0,206.33,20,"BOEHRINGER INGELHEIM","BUTILHIOSINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BUT-03","BUTIMAXIL CAPS 500MG C/20","PRODUCTO DE BAJA","NULL",0,123,72,"BRULUART","DICLOXACILINA","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("BUT-05","BUTAZOLIDINA TABS 200 MG C/20","PRUEBA","NULL",0,166.22,60,"SANDOZ","BUTAZOLIDINA","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CAL-01","CALCIUM S COMPUESTO COMP EFER 1000MG C/10","OPORTUNIDAD","SUPLEMENTO DE CALCIO",0,153.6,54,"SANDOZ","CALCIO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CAL-02","CALANDA CAPS 5,000UI C/30","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,99.3,60,"ATLANTIS","VITAMINAS-MINERALES","202")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CAL-04","CALCID V COMP C/60","PRODUCTO DE BAJA","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,78,66,"NATUREX DE MEXICO","CALCIO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CAN-01","CANDIPHEN CMA. 1% C/30 G.","PRODUCTO DE BAJA","ANTIMICOTICO",0,56,62,"SONS","CLOTRIMAZOL","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CAP-02","CAPSICOF PERL 100MG C/20","CATALOGO","ANTITUSIVO",0,96,72,"PHARMACAPS","BENZONATO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CAP-04","CAPTOPRIL TABS 25MG C/30 (APOT)","CLIENTE ESPECIFICO","ANTIHIPERTENSIVO",0,179,68,"APOTEX","CAPTOPRIL","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CAP-07","CAPTOPRIL TABS 25MG C/30 (ARLE)","CATALOGO","ANTIHIPERTENSIVO",0,50,80,"ARLEX","CAPTOPRIL","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CAR-01","CARDISPAN INYT 1G/5ML C/5","PRODUCTO DE BAJA","SUPLEMENTO NUTRICIONAL",0,297,57,"VALEANT","CARNITINA-TIAMINA- METIONINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CAR-02","CARBAGER PLUS TABS 300MG C/10","CATALOGO","RELAJANTE MUSCULAR - ANALGESICO ANTIINFLAMATORIO -  ANTIPIRETICO",0,78,70,"STREGER","METOCARBAMOL-IBUPROFENO","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CAR-08","CARPIN TABS 200MG C/20","OPORTUNIDAD","ANTIEPILEPTICO",0,55,75,"NOVAG INFANCIA","CARBAMAZEPINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CAR-09","CARDIPRIL TABS 50MG C/15","PRODUCTO DE BAJA","ANTIHIPERTENSIVO",0,163,54,"LIOMONT","CAPTOPRIL","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CAR-29","CARDISPAN TABS MAST. 1 G C/20","PRUEBA","SUPLEMENTO NUTRICIONAL",0,550.62,60,"VALEANT","LEVOCARNITINA","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CAR-30","CARBAFEN TAB 400/350 MG C/30","CLIENTE ESPECIFICO","RELAJANTE MUSCULAR - ANALGESICO ANTIINFLAMATORIO -  ANTIPIRETICO",0,103.5,62,"LIFERPAL","METOCARBAMOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCACI-02/1","ACIDO ASCORBICO INY. C/6 AMP. (AMSA) (JUL13)","CORTA CADUCIDAD","NULL",0,220,64,"AMSA","ACIDO ASCORBICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCACL-02/1","ACLORAL INY 50 MG C/5 (NOV 13)","CORTA CADUCIDAD","NULL",0,75,57,"LIOMONT","RANITIDINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCAMO-12/1","AMOXICILINA/ACIDO CLAV TABS 500MG C/12 (APOT) (JUN 13)","CORTA CADUCIDAD","NULL",0,230,80,"APOTEX","AMOXICILINA- ACIDO CLAVULANICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCAMO-12/2","AMOXICILINA/ACIDO CLAV TABS 500MG C/12 (APOT) (SEP 13)","CORTA CADUCIDAD","NULL",0,230,79,"APOTEX","AMOXICILINA- ACIDO CLAVULANICO","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCANP-01/1","ANPRE TAB. 15 MG. C/15 (JUL13)","CORTA CADUCIDAD","NULL",0,95,88,"WERMAR","MELOXICAM","206")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCAPO-04/2","APOMETGLU TABS 500MG C/30  (DIC 13)","CORTA CADUCIDAD","NULL",0,196,75,"APOTEX","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCAPO-06/1","APO OXPAR TABS 20MG C/10   (AGO-13)","CORTA CADUCIDAD","NULL",0,416,80,"APOTEX","PARACETAMOL/PSEUDOEFEDRINA/DEXTROMETORFA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCAPO-06/2","APO OXPAR TABS 20MG C/10    (DIC 13)","CORTA CADUCIDAD","NULL",0,NULL,NULL,"APOTEX","PARACETAMOL/PSEUDOEFEDRINA/DEXTROMETORFA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCASA-01/1","ASA 500 CAPS 500 MG C/20 (JUN13)","CORTA CADUCIDAD","NULL",0,31,62,"LIOMONT","ACIDO ACETILSALICILICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCAZA-02/1","AZANTAC JBE. 150 MG. C/200 ML.(JUL13)","CORTA CADUCIDAD","NULL",0,212.4,60,"SANFER S.A. DE C.V.","RANITIDINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCBED-02/1","BEDOYECTA TAB. PEDIATRICO C/30 (MAY13)","CORTA CADUCIDAD","NULL",0,192,64,"VALEANT","COMPLEJO B","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCBEN-08/1","BENZETACIL INYT 1,200,000U/3ML C/1   (AGO 13)","CORTA CADUCIDAD","NULL",0,NULL,NULL,"SANDOZ","BENCILPENICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCBIO-05/1","BIODACLIN GEL 1% 30 G CJA C/TUBO   (ENE/14)","CORTA CADUCIDAD","NULL",0,NULL,NULL,"RAYERE","CLINDAMICINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCBIO-10/1","BIONOKALTRAN EFERVESCENTE TUBO 500MG C/12    (DIC 13)","CORTA CADUCIDAD","NULL",0,120,72,"OTRO","CALCIO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCBLE-01/1","BLENDOX JRBE 50MG C/60ML     (SEP 13)","CORTA CADUCIDAD","NULL",0,48.5,82,"DEGORTS","CLORFENAMINA","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCAP-04/1","CAPTOPRIL TABS 25MG C/30 (APOT)   (NOV 13)","CORTA CADUCIDAD","NULL",0,179,74,"APOTEX","CAPTOPRIL","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCAP-07/1","CAPTOPRIL TABS 25MG C/30 (ARLE)    (DIC 13)","CORTA CADUCIDAD","NULL",0,50,82,"ARLEX","CAPTOPRIL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCAR-01/1","CARDISPAN INYT 1G/5ML C/5     (SEP 13)","CORTA CADUCIDAD","NULL",0,297,59,"VALEANT","CARNITINA-TIAMINA- METIONINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCEF-03/1","CEFALOTINA INYT 1G/5ML C/1 (AMSA)      (ENE-14)","CORTA CADUCIDAD","NULL",0,NULL,NULL,"AMSA","CEFALOTINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCEF-09/1","CEFOTAXIMA IV INYT 1G/4ML C/1 (AMSA)     (OCT 13)","CORTA CADUCIDAD","NULL",0,300,90,"AMSA","CEFOTAXIMA","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCEF-21/1","CEFOTAXIMA SOL. INY. 1 G.I.V. C/1AMP. (JUL13)","CORTA CADUCIDAD","NULL",0,86.2,67,"KENDRICK","CEFOTAXIMA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCEF-21/2","CEFOTAXIMA IV INYT 1G/4ML (KEND)      (OCT 13))","CORTA CADUCIDAD","NULL",0,86.17,NULL,"KENDRICK","CEFOTAXIMA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCEF-22/1","CEFTAZIDIMA INYT 1G/3ML (KEND)     (OCT 13)","CORTA CADUCIDAD","NULL",0,136.62,64,"KENDRICK","CEFTAZIDIMA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCIC-02/1","CICLOFERON SUSP 4G C/60ML     (MAY 13)","CORTA CADUCIDAD","NULL",0,215,50,"LIOMONT","ACICLOVIR","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCLA-11/1","CLAVULIN TABS 500MG C/10     (SEP 13)","CORTA CADUCIDAD","NULL",0,271,50,"SANFER S.A. DE C.V.","AMOXICILINA- ACIDO CLAVULANICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCLA-11/2","CLAVULIN TABS 500MG C/10    (DIC 13)","CORTA CADUCIDAD","NULL",0,271,47,"SANFER S.A. DE C.V.","ALBENDAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCLI-01/1","CLINDAMICINA CAPS 300MG C/16 (APOT)   (AGO 13)","CORTA CADUCIDAD","NULL",0,290,76,"APOTEX","CLINDAMICINA","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCLI-03/1","CLINDAMICINA INYT 600MG/4ML C/1 (AMSA) (NOV 13)","CORTA CADUCIDAD","NULL",0,100,86,"AMSA","CLINDAMICINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCLI-03/2","CLINDAMICINA INYT 600MG/4ML C/1 (AMSA)    (DIC 13)","CORTA CADUCIDAD","NULL",0,100,84,"AMSA","CLINDAMICINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCOL-06/1","COLLICORT CMA. 1% C/60 G. (JUL13)","CORTA CADUCIDAD","NULL",0,123,82,"COLLINS","HIDROCORTISONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCCON-07/1","CONAZOL TABS 200MG C/10  (OCT 13)","CORTA CADUCIDAD","NULL",0,160,57,"LIOMONT","ACIDO ACETILSALICILICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCDEB-02/1","DEBEQUIN JBE 300 MG C/120 ML (MAY13)","CORTA CADUCIDAD","NULL",0,55,77,"DEGORTS","DEXTROMETORFANO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCDIC-01/1","DICLOFENACO 100 MG G CJ/2CEL/10 GRAG LP (ABR13)","CORTA CADUCIDAD","NULL",0,276,83,"APOTEX","DICLOFENACO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCDOL-02/1","DOLO BEDOYECTA INYT C/JER 100MG/2ML C/1     (SEP 13)","CORTA CADUCIDAD","NULL",0,245.35,60,"VALEANT","KETOPROFENO-COMPLEJO B","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCDOL-03/1","DOLO TIAMINAL CAP. C/24   ( ENE-14)","CORTA CADUCIDAD","NULL",0,315,64,"SILANES","COMPLEJO B  METAMIZOL","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCDOL-05/1","DOLO TIAMINAL INY. 3 X 2 S/JER (JUL13)","CORTA CADUCIDAD","NULL",0,347,64,"SILANES","COMPLEJO B  METAMIZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCDOL-05/2","DOLO TIAMINAL INYT 200MG/1ML C/3     (AGO 13)","CORTA CADUCIDAD","NULL",0,347,66,"SILANES","COMPLEJO B  METAMIZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCDOL-05/3","DOLO TIAMINAL INYT 200MG/1ML C/3     (OCT 13)","CORTA CADUCIDAD","NULL",0,347,62,"SILANES","COMPLEJO B  METAMIZOL","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCDOL-15/1","DOLO BEDOYECTA TAB. C/30 (JUL13)","CORTA CADUCIDAD","NULL",0,360,66,"VALEANT","DICLOFENACO-COMPLEJO B","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCDOP-01/1","DOPAMINA INYT 200MG/5ML C/5 (KEND)    (DIC 13)","CORTA CADUCIDAD","NULL",0,122.13,57,"KENDRICK","DOPAMINA","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCESP-03/1","ESPASMO CIBALGINA GRAG C/48 (JUN13)","CORTA CADUCIDAD","NULL",0,237.96,71,"SANDOZ","PROPIFENAZONA - DIPROFENINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCESP-15/1","ESPACIL COMPUESTO INYT 100MG/4ML C/6 (AGO)","CORTA CADUCIDAD","NULL",0,227.77,60,"VALEANT","CLONIXINATO DE LISINA-BUTILHIOSCINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCESP-15/2","ESPACIL COMPUESTO INYT 100MG/4ML C/6      (ENE-14)","CORTA CADUCIDAD","NULL",0,NULL,NULL,"VALEANT","CLONIXINATO DE LISINA-BUTILHIOSCINA","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCFEM-01/1","FEMISAN TABS VAGI 400MG C/6    (DIC 13)","CORTA CADUCIDAD","NULL",0,329.75,47,"VALEANT","KETOCONAZOL-CLINDAMICINA","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCFEN-04/1","FENITOINA INYT 250MG/5ML C/5 (KEND) (SEP 13)","CORTA CADUCIDAD","NULL",0,144.74,55,"KENDRICK","FENITOINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCFEN-08/1","FENIFFLER SUS. 750 MG. C/120 ML (JUL13)","CORTA CADUCIDAD","NULL",0,83,79,"LOEFFLER","FENITOINA","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCFLO-01/1","FLOREXAL CAPS 20MG C/14    (DIC 13)","CORTA CADUCIDAD","NULL",0,384,52,"SILANES","FLUOEXETINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCFLO-01/2","FLOREXAL CAPS 20MG C/14    (NOV 13)","CORTA CADUCIDAD","NULL",0,NULL,NULL,"SILANES","FLUOEXETINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCGEN-04/1","GENTAMICINA INYT 160MG/2ML C/5 (AMSA)   (JUL 13)","CORTA CADUCIDAD","NULL",0,250,87,"AMSA","GENTAMICINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCGEN-04/2","GENTAMICINA INYT 160MG/2ML C/5 (AMSA)   (OCT 13","CORTA CADUCIDAD","NULL",0,NULL,NULL,"AMSA","GENTAMICINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCGES-01/1","GESTAFERRON TABS 200MG C/50   (NOV 13)","CORTA CADUCIDAD","NULL",0,42,68,"ARLEX","FUMARATO FERROSO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCGLI-01/1","GLIBENCLAMIDA G.I. TAB. 5 MG. C/50 (APOT) (JUL13)","CORTA CADUCIDAD","NULL",0,94,76,"APOTEX","GLIBENCLAMIDA","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCHEM-03/1","HEMESTAL TABS 500MG C/20  (AGO 13)","CORTA CADUCIDAD","NULL",0,405,64,"SILANES","HEMEZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCIKA-02/1","IKATIN INY. 80 MG. C/1 AMP. (JUN13)","CORTA CADUCIDAD","NULL",0,49.28,88,"PISA","GENTAMICINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCIMI-01/1","IMIPENEN/CILASTINA INYT 500MG/3.5ML C/1 (KEND)   (NOV 13)","CORTA CADUCIDAD","NULL",0,505.51,68,"KENDRICK","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCIND-07/1","INDOMETACINA G.I. SUPOSITORIOS 100MG C/6   (ENE/14)","CORTA CADUCIDAD","NULL",0,NULL,NULL,"ARLEX","INDOMETACINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCISO-02/1","ISORBID TAB. SUBLING. 5 MG. C/40  ( JUL 13)","CORTA CADUCIDAD","NULL",0,117.04,57,"ARMSTRONG","ISOSORBIDA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCKAS-01/1","K ASMAL SOLU 20MG C/120ML   (NOV 13)","CORTA CADUCIDAD","NULL",0,426,57,"SILANES","KETOTIFENO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCKEN-04/1","KENTADIN GRAG 400MG C/30 (SEP 13)","CORTA CADUCIDAD","NULL",0,205.76,82,"KENDRICK","PENTOXIFILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCKET-06/1","KETOROLACO INYT 30MG/1ML C/3 (PISA)    (OCT-13)","CORTA CADUCIDAD","NULL",0,NULL,NULL,"PISA","KETOROLACO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCKET-07/2","KETOROLACO TABS 10MG C/10 (KEND)    (ENE-14)","CORTA CADUCIDAD","NULL",0,NULL,NULL,"KENDRICK","KETOROLACO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCKY6-01/1","KY6  TAB. C/10 (JUN13)","CORTA CADUCIDAD","NULL",0,19.5,75,"BRULUART","PARACETAMOL-CLORFENIRAMINA-FENILEPRINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCLOS-01/1","LOSARTAN TAB. 50 MG. C/30 (KEN) (JUL13)","CORTA CADUCIDAD","NULL",0,306,60,"KENDRICK","LOSARTAN","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCMAG-08/1","MAGNOPYROL TAB. 500 MG C/10 (MAY13)","CORTA CADUCIDAD","NULL",0,43,63,"SIEGFRIED RHEIN","METAMIZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCMET-16/1","METAMIZOL SODICO INY 1G C/3 AMP (SEP 13)","CORTA CADUCIDAD","NULL",0,10.2,17,"PISA","METAMIZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCMIC-02/1","MICRORGAN TABS 250MG C/8     (SEP 13)","CORTA CADUCIDAD","NULL",0,155,64,"LIOMONT","CIPROFLOXACINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCMVI-02/1","M.V.I. 12 INY. PEDIATRICO C/1 (JUN13)","CORTA CADUCIDAD","NULL",0,131.7,66,"VALEANT","VITAMINAS","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCNOR-02/1","NORMOFLEX SOL. INF. C/100ML (JUL13)","CORTA CADUCIDAD","NULL",0,61,72,"DEGORTS","BROMEHEXINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCNOR-05/1","NORBORAL TAB. 5 MG. C/50 (MAY13)","CORTA CADUCIDAD","NULL",0,123,63,"SILANES","GLIBENCLAMIDA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCOME-05/1","OMEPRAZOL G.I. INY. 40 MG. C/1 AMP. (SOL) (JUN13)","CORTA CADUCIDAD","NULL",0,270,78,"SOLARA","OMEPRAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCOPO-01/1","OPORTUNA GRAG  0.75 MG C/2 (AGO 13)    ","CORTA CADUCIDAD","NULL",0,116,84,"BAYER","LEVONORGESTREL","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCORA-01/1","ORADEKAN SOL. ING. C/1 AMP.  (AGO 13)","CORTA CADUCIDAD","NULL",0,20,81,"STREGER","ACIDO FOLICO","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCOXI-03/1","OXITOPISA INYT 20UI/1ML C/50   (NOV-13)","CORTA CADUCIDAD","NULL",0,427.24,57,"PISA","OXITOCINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCPEN-10/1","PENTOXIFILINA G.I. TAB. 400 MG. C/30 (APOT) (MAY13)","CORTA CADUCIDAD","NULL",0,214,82,"APOTEX","PENTOXIFILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCPEN-15/1","PENBRITIN SUSP 500MG C/100ML    (DIC 13)","CORTA CADUCIDAD","NULL",0,155,59,"HORMONA","AMPICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCPRA-03/1","PRAVASTATINA TAB. 10 MG. C/30 (ARLEX) (JUL13)","CORTA CADUCIDAD","NULL",0,162.5,91,"ARLEX","PRAVASTATINA","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCPRA-04/1","PRAVASTATINA TAB. 10 MG. C/30 (KEND) (ABR13)","CORTA CADUCIDAD","NULL",0,295,87,"KENDRICK","PRAVASTATINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCPRA-04/2","PRAVASTATINA TAB. 10 MG. C/30 (KEND)(JUL13)","CORTA CADUCIDAD","NULL",0,295,88,"KENDRICK","PRAVASTATINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCPUL-01/1","PULSAR AT TAB. RECUB 40 MG C/30 (JUL13)","CORTA CADUCIDAD","NULL",0,560,66,"LIOMONT","SIMVASTATINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCRAN-01/1","RANTUDIL  CAPS 60 MG C/ 14  (AGO 13)","CORTA CADUCIDAD","NULL",0,219.5,76,"BAYER","ACEMETACINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCRAN-01/2","RANTUDIL  CAPS 60 MG C/ 14     (ENE-14)","CORTA CADUCIDAD","NULL",0,NULL,NULL,"BAYER","ACEMETACINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCRAN-12/1","RANITIDINA INYT 50MG/2ML C/5 (KEND)     (OCT 13)","CORTA CADUCIDAD","NULL",0,45,NULL,"KENDRICK","RANITIDINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCROM-04/1","ROMBOX SUSP 250MG C/75ML    (DIC 13)","CORTA CADUCIDAD","NULL",0,379.08,55,"GLAXO SMITH KLINE","CLORFENIRAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCSOL-09/1","SOLHIDROL INYT 500MG/5ML C/1 (JUN13)","CORTA CADUCIDAD","NULL",0,179,70,"SOLARA","HIDROCORTISONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCSOL-44/1","SOL. DX-CS 250 ML. (DELMED)    (ENE/14)","CORTA CADUCIDAD","NULL",0,NULL,NULL,"JAYOR","GLUCOSA-CLORURO DE SODIO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCSOL-49/1","SOLCER SOL. INY 40 MG. C/1 (JUN13)","CORTA CADUCIDAD","NULL",0,242,75,"SOLARA","OMEPRAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCTIA-01/1","TIAMIDEXAL INY. C/3 FCO. Y 3 AMP. (JUN13)","CORTA CADUCIDAD","NULL",0,370,66,"SILANES","COMPLEJO B","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCTIA-01/2","TIAMIDEXAL INY. C/3 FCO. Y 3 AMP. (SEP13)","CORTA CADUCIDAD","NULL",0,370,66,"SILANES","COMPLEJO B","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCTIA-01/3","TIAMINAL B12 TRIV AP INY. C/3 JER. (NOV 13)","CORTA CADUCIDAD","NULL",0,NULL,NULL,"SILANES","COMPLEJO B","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCTIA-02/1","TIAMINAL B12 50,000 INY. C/5 AMP. (ABR13)","CORTA CADUCIDAD","NULL",0,289,62,"SILANES","COMPLEJO B","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCTIA-04/1","TIAMINAL B12 TRIV AP INY. C/3 JER. (NOV 13)","CORTA CADUCIDAD","NULL",0,231,63,"SILANES","COMPLEJO B","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCTIA-04/2","TIAMINAL B12 TRIV AP INY. C/3 JER. (AGO-13)","CORTA CADUCIDAD","NULL",0,231,66,"SILANES","COMPLEJO B","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCTIA-04/3","TIAMINAL B12 TRIVALENTE INYT C/JER 5000MCG/2ML C/3 (SEP 13)","CORTA CADUCIDAD","NULL",0,231,64,"SILANES","COMPLEJO B","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCTIA-05/1","TIANAK TAB. 150 MG. C/20 (ABR13)","CORTA CADUCIDAD","NULL",0,36,82,"WERMAR","RANITIDINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCTRE-02/1","TREXOL INYT 100MG/2ML C/5     (NOV 13)","CORTA CADUCIDAD","NULL",0,NULL,NULL,"ATLANTIS","TRAMADOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCTRI-15/1","TRIXONA INY. I.V. 1 G. C/1 AMP. (JUN13)","CORTA CADUCIDAD","NULL",0,150,78,"BRULUART","CEFTRIAXONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCTRI-18/1","TRIMETOGER TAB. 80/400 MG. C/20 (MAR-13)","CORTA CADUCIDAD","NULL",0,54,95,"STREGER","TRIMETOPRIM-SULFAMETOXAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCVAN-05/1","VANTAL V SOLU 5% C/50ML     (OCT 13)","CORTA CADUCIDAD","NULL",0,108.2,48,"LIOMONT","BENCIDAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCYEC-02/1","YECTAMICINA INYT 80MG/1ML C/1   (ENE/14)","CORTA CADUCIDAD","NULL",0,NULL,NULL,"VALEANT","GENTAMICINA","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCYEC-03/1","YECTAMES SOL. INY. 75/5 MG. C/1 (MAR13)","CORTA CADUCIDAD","NULL",0,140.54,62,"VALEANT","ALGESTONA - ESTRADIOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CCZEN-02/1","ZENTEL TABS 200MG C/10    (DIC 13)","CORTA CADUCIDAD","NULL",0,152,52,"SANFER S.A. DE C.V.","ALBENDAZOL","209")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-02","CEFALEXINA TABS 500MG C/20 (APOT)","CATALOGO","ANTIBACTERIANO",0,290,66,"APOTEX","CEFALEXINA","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-03","CEFALOTINA INYT 1G/5ML C/1 (AMSA)","PRODUCTO DE BAJA","ANTIBACTERIANO",0,95,78,"AMSA","CEFALOTINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-04","CEFALVER CAPS 500MG C/12","CATALOGO","ANTIBACTERIANO",0,99,72,"MAVER","CEFALEXINA","101")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-07","CEFALVER SUSP 250MG C/90ML","CATALOGO","ANTIBACTERIANO",0,93,66,"MAVER","CEFALEXINA","211")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-08","CEFOTAXIMA IM INYT 1G/4ML C/1 (AMSA)","PRODUCTO DE BAJA","ANTIBACTERIANO - ANESTESICO",0,300,90,"AMSA","CEFOTAXIMA-LIDOCAINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-09","CEFOTAXIMA IV INYT 1G/4ML C/1 (AMSA)","CATALOGO","ANTIBACTERIANO",0,300,88,"AMSA","CEFOTAXIMA","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-12","CEFTRIAXONA IM INYT 1G/3.5ML C/1 (AMSA)","CATALOGO","ANTIBACTERIANO - ANESTESICO",0,350,94,"AMSA","CEFTRIAXONA-LIDOCAINA","202")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-13","CEFTRIAXONA IV INYT 1G/10ML C/1 (AMSA)","CATALOGO","ANTIBACTERIANO",0,350,94,"AMSA","CEFTRIAXONA","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-15","CEFUROXIMA INYT 750MG/5ML C/1 (AMSA)","PRODUCTO DE BAJA","ANTIBACTERIANO",0,250,88,"AMSA","CEFUROXIMA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-17","CEFUROXIMA TABS 500MG C/10 (MERCK)","CATALOGO","ANTIBACTERIANO",0,417.04,68,"MERCK","CEFUROXIMA","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-18","CEFALOTINA INYT 1G/5ML (KEND)","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,54.86,50,"KENDRICK","CEFALOTINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-19","CEFTRIAXONA IM INYT 1G/3.5ML C/1 (KEND)","CATALOGO","ANTIBACTERIANO",0,157.25,66,"KENDRICK","CEFTRIAXONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-20","CEFTRIAXONA IV INYT 1G/10ML C/1 (KEND)","CATALOGO","ANTIBACTERIANO",0,157.25,68,"KENDRICK","CEFTRIAXONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-21","CEFOTAXIMA IV INYT 1G/4ML (KEND)","PRODUCTO DE BAJA","ANTIBACTERIANO",0,86.17,60,"KENDRICK","CEFOTAXIMA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-23","CEFUROXIMA INYT 750MG/10ML (KEND)","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,92.26,45,"KENDRICK","CEFUROXIMA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-24","CEFEPIMA INYT 1G/10ML (KEND)","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,202.86,62,"KENDRICK","CLORMADINOMA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEF-27","CEFOTAXIMA IV 1G 4ML (PISA)","LICITACIONES","ANTIBACTERIANO",0,18,5,"PISA","CEFOTAXIMA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEP-01","CEPACOL CEREZA PAST 1.45MG C/20","CATALOGO","ANTISEPTICO",0,41.7,60,"SANOFI AVENTIS","CETILPIRIDINO","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEP-02","CEPACOL MENTA PAST 1.45MG C/20","CATALOGO","ANTISEPTICO",0,41.7,60,"SANOFI AVENTIS","CETILPIRIDINO","202")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEP-03","CEPACOL MIEL PAST 1.45MG C/20","CATALOGO","ANTISEPTICO",0,41.7,60,"SANOFI AVENTIS","CETILPIRIDINO","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEP-04","CEPOREX SUSP 125MG C/100ML","CATALOGO","ANTIBACTERIANO",0,244.18,50,"GLAXO SMITH KLINE","CEFALEXINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CEP-05","CEPOREX SUSP 250MG C/100ML","CATALOGO","ANTIBACTERIANO",0,352.87,45,"GLAXO SMITH KLINE","CEFALEXINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CHA-01","CHARYN TABS 500MG C/3","CATALOGO","ANTIBACTERIANO",0,135,72,"WERMAR","AZITROMICINA","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CHO-01","CHOFABOL GRAN 25G C/100G","CATALOGO","COLAGOGO-COLERETICO",0,120,70,"ALLEN","MAGNESIO-BOLDO-BELLADON-PEPTONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CHO-02","CHOLAL MODIFICADO SOL. ING. C/10 AMP.","PRUEBA","VITAMINAS Y MINERALES",0,291,28,"ITALMEX S.A.","SODIO-MAGNESIO-POTASIO-ANTITOXIDO DE HIG","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CIC-01","CICLOFERON SUSP 4G C/125ML","PRODUCTO DE BAJA","ANTIVIRAL",0,370,45,"LIOMONT","ACICLOVIR","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CIC-02","CICLOFERON SUSP 4G C/60ML","CATALOGO","ANTIVIRAL",0,215,45,"LIOMONT","ACICLOVIR","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CIM-01","CIMETASE TABS 300MG C/30","PRODUCTO DE BAJA","ANTIULCEROSO",0,102,58,"LIOMONT","CIMETIDINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CIN-05","CINARIZINA TABS 75MG C/60 (KEND)","PRODUCTO DE BAJA","VASODILATADOR PERIFERICO -  ANTIVERTIGINOSO",0,122.13,68,"KENDRICK","CINARIZINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CIP-01","CIPROFLOXACINO TABS 250MG C/8 (APOT)","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,130,82,"APOTEX","CIPROFLOXACINO","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CIP-02","CIPROFLOXACINO TABS 500MG C/6 (APOT)","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,196,88,"APOTEX","CIPROFLOXACINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CIP-07","CIPROFLOXACINO TABS 250MG C/8 (KEND)","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,53.82,45,"KENDRICK","CIPROFLOXACINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CIP-10","CIPROFLOXACINO TABS 500MG C/12 (KEND)","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,149.83,33,"KENDRICK","CIPROFLOXACINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CIP-11","CIPROFLOXACINO TABS 500MG C/8 (ARLE)","CATALOGO","ANTIBACTERIANO",0,112.5,82,"ARLEX","CIPROFLOXACINO","202")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CIR-01","CIRULAN GOTA 400MG C/20ML","CATALOGO","REGULADOR DE LA MOTILIDAD INTESTINAL - ANTIEMETICO",0,24,72,"NOVAG INFANCIA","METOCLOPRAMINA","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CIT-01","CITALGAN TABS 400MG C/10","OPORTUNIDAD","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,43,54,"MERCK","IBUPROFENO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CIT-02","CITALGAN TABS 400MG C/20","OPORTUNIDAD","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,81,54,"MERCK","IBUPROFENO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CIT-05","CITRA 50 TABS 50 MG C/10","CLIENTE ESPECIFICO","ANALGESICO",0,123.6,66,"VICTORY ENTERPRISES","TRAMADOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLA-01","CLAMOXIN 12H JR SUSP 400MG C/50ML","CATALOGO","ANTIBACTERIANO",0,126,66,"MAVER","AMOXICILINA- ACIDO CLAVULANICO","107")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLA-02","CLAMOXIN 12H PED SUSP 200MG C/40ML","CATALOGO","ANTIBACTERIANO",0,78,66,"MAVER","AMOXICILINA- ACIDO CLAVULANICO","108")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLA-03","CLAMOXIN 12H TABS 875MG C/10","CATALOGO","ANTIBACTERIANO",0,189,66,"MAVER","AMOXICILINA- ACIDO CLAVULANICO","203")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLA-04","CLAMOXIN SUSP 125MG C/60ML","CATALOGO","ANTIBACTERIANO",0,84,66,"MAVER","AMOXICILINA- ACIDO CLAVULANICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLA-05","CLAMOXIN SUSP 250MG C/60ML","CATALOGO","ANTIBACTERIANO",0,126,66,"MAVER","AMOXICILINA- ACIDO CLAVULANICO","108")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLA-06","CLAMOXIN TABS 500MG C/10","CATALOGO","ANTIBACTERIANO",0,147,66,"MAVER","AMOXICILINA- ACIDO CLAVULANICO","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLA-07","CLAVANT BID SUSP 200MG C/70ML","CATALOGO","ANTIBACTERIANO",0,162.96,55,"COLUMBIA","AMOXICILINA- ACIDO CLAVULANICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLA-08","CLAVANT BID SUSP 400MG C/70ML","CATALOGO","ANTIBACTERIANO",0,234.25,55,"COLUMBIA","AMOXICILINA- ACIDO CLAVULANICO","211")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLA-09","CLAVANT BID TABS 875MG C/14","CATALOGO","ANTIBACTERIANO",0,375.76,55,"COLUMBIA","AMOXICILINA- ACIDO CLAVULANICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLA-11","CLAVULIN TABS 500MG C/10","CATALOGO","ANTIBACTERIANO",0,271,45,"SANFER S.A. DE C.V.","AMOXICILINA- ACIDO CLAVULANICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLA-16","CLAVUSER ADTO TABS 500MG C/10","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,215,68,"SERRAL","AMOXICILINA- ACIDO CLAVULANICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLA-18","CLAVIPEN SUSP. 125/31.25MG/5ML ENV P/60ML","PRUEBA","ANTIBACTERIANO",0,82,66,"BRULUART","AMOXICILINA- ACIDO CLAVULANICO","108")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLA-19","CLARIFLU TABS 2.5/200/100 MG C/12","PRUEBA","ANTIHISTAMINICO",0,189.66,54,"SCHERING PLOUGH","LORATADINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLA-20","CLARIFRIOL TAB 2.5/2100/100 MG C/12    ","PRUEBA","NULL",0,189.66,54,"SCHERING PLOUGH","LORATADINA","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLI-03","CLINDAMICINA INYT 600MG/4ML C/1 (AMSA)","CATALOGO","ANTIBACTERIANO",0,100,82,"AMSA","CLINDAMICINA","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLI-06","CLINDAMICINA CAPS 300MG C/16 (KEND)","CATALOGO","ANTIBACTERIANO",0,157.32,68,"KENDRICK","CLINDAMICINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLO-06","CLONIXINATO DE LISINA INYT 100MG/2ML C/5 (AMSA)","PRODUCTO DE BAJA","ANTIINFLAMATORIO - ANALGESICO     - ESPASMOLITICO",0,70,68,"AMSA","CLONIXINATO DE LISINA","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLO-07","CLOTRIMAZOL DUAL 200MG C/3OVUL C/1CREM (SONS)","CATALOGO","ANTIMICOTICO",0,87,66,"SONS","CLOTRIMAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CLO-20","CLORANFENICOL GTS OFT  5 MG C/ 15  ML   (AMSA)   ","PRUEBA","ANTIBACTERIANO",0,94.5,85,"AMSA","CLORANFENICOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("COB-01","COBADEX ADTO SOLU 225MG C/120ML","CATALOGO","MUCOLITICO - ANTITUSIVO",0,66,70,"MAVER","AMBROXOL-DEXTROMETORFANO","108")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("COB-02","COBADEX INF SOLU 113MG C/120ML","PRODUCTO DE BAJA","MUCOLITICO - ANTITUSIVO",0,63,68,"MAVER","AMBROXOL-DEXTROMETORFANO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("COL-02","COLESKEN TABS 10MG C/14","PRODUCTO DE BAJA","HIPOLIPEMIANTE",0,162.29,72,"KENDRICK","SIMVASTATINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("COM-01","COMPLEJO B INYT 25MG/10ML C/1 (STRE)","CATALOGO","HEMATOPOYETICO - ANTINEURITICO",0,90,75,"STREGER","COMPLEJO B","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("COM-02","COMPLEJO B GRAG 10MG C/20 (STRE)","CATALOGO","HEMATOPOYETICO - ANTINEURITICO",0,81,70,"STREGER","COMPLEJO B","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CON-01","CONAZOL CREM 2G C/40G","CATALOGO","ANTIMICOTICO",0,74,50,"LIOMONT","KETOCONAZOL","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CON-03","CONMEL PED JRBE 3G C/120ML","CATALOGO","ANALGESICO - ANTIPIRETICO",0,70.13,60,"SANOFI AVENTIS","METAMIZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CON-05","CONMEL PLUS TABS 500MG C/20","CATALOGO","ANALGESICO - ANTIPIRETICO",0,71.18,60,"SANOFI AVENTIS","METAMIZOL","203")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("CON-07","CONAZOL TABS 200MG C/10","CATALOGO","ANTIMICOTICO",0,168,50,"LIOMONT","KETOCONAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DAF-01","DAFLOXEN CAPS 275MG C/20","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,125,50,"LIOMONT","NAPROXENO","203")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DAF-02","DAFLOXEN SUSP 2500MG C/100ML","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,95,50,"LIOMONT","NAPROXENO","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DAL-04","DALIDEK SUSP 1/10/1 G C/120 ML    ","PRUEBA","ANTIDIARREICO",0,56.1,64,"GIRALCAMPS","FURAZOLIDONA-CAOLIN-PECTINA","307")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DEB-03","DEBRIDAT JR SUSP 2G C/100ML","CATALOGO","REGULADOR DE LA MOTILIDAD INTESTINAL",0,212.75,54,"GLAXO SMITH KLINE","TRIMEBUTINA","108")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DEB-04","DEBRIDAT PED SUSP 800MG C/40ML","CATALOGO","REGULADOR DE LA MOTILIDAD INTESTINAL",0,132.18,54,"GLAXO SMITH KLINE","TRIMEBUTINA","211")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DEB-05","DEBRIDAT TABS 200MG C/40","CATALOGO","REGULADOR DE LA MOTILIDAD INTESTINAL",0,414.52,54,"GLAXO SMITH KLINE","TRIMEBUTINA","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DEX-01","DEXABION  SOL INY C/2 AMP","PRUEBA","VITAMINAS - MINERALES - DEXTROSA",0,290.17,55,"MERCK","VITAMINAS B1-B6-B12-DEXAMETAZONA","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DEX-05","DEX CLOR TABS 1.5MG C/12","CATALOGO","ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO",0,60,64,"GIRALCAMPS","DEXAMETASONA-CLORFERINAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DEX-06","DEXNE OFTALMICO GOTA 100MG C/4ML","CATALOGO","ANTIINFLAMATORIO -CORTICOSTEROIDE - ANTIALERGICO - ANTIBACTERIANO",0,57,66,"OFFENBACH","DEXAMETASONA-NEOMICINA","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DEX-07","DEXNE OTICO GOTA 15MG C/10ML","OPORTUNIDAD","ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO -ANTIBACTERIANO - ANESTESICO",0,60,62,"OFFENBACH","DEXAMETASONA-NEOMICINA-LIDOCAINA","402")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DEX-09","DEXTREVIT INYT 5G/10ML C/2","CATALOGO","VITAMINAS - MINERALES - DEXTROSA",0,175.2,55,"VALEANT","DEXTROSA-COMPLEJO B-VIT. C-VIT. D-PANTEN","203")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DEX-11","DEXTROMETORFANO JRBE 15MG C/60ML (APOT)","CLIENTE ESPECIFICO","ANTITUSIVO",0,33,66,"APOTEX","DEXTROMETORFANO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DEX-12","DEXLIN TABS 100MG C/10","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,65,82,"ARLEX","NIMESULIDA","203")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("37226","DICLOFENACO GRAG 100MG C/20 (APOT)","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,276,82,"APOTEX","DICLOFENACO","102")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("37956","DICLOFENACO FORTE B TABS C30 (SERRAL)","CATALOGO","ANALGESICO - ANTINEURITICO",0,120,68,"SERRAL","DICLOFENACO-COMPLEJO B","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("41244","DICLOFENACO INYT 75MG/3ML C/2 (AMSA)","PRODUCTO DE BAJA","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,200,88,"AMSA","DICLOFENACO","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("41609","DICLOXACILINA CAPS 500MG C/20 (AMSA)","CATALOGO","ANTIBACTERIANO",0,250,85,"AMSA","DICLOXACILINA","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("42339","DICLOFENACO GEL 60 G CAJA C/TUBO","PRODUCTO DE BAJA","NULL",0,85,72,"RANBAXY","DICLOFENACO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("42705","DICLOFENACO VIT FORTE INYT C/JER 75MG/1ML C/3 (SERR)","PRODUCTO DE BAJA","ANTIINFLAMATORIO - ANALGESICO -ANTIPIRETICO - ANTINEURITICO",0,140,71,"SERRAL","DICLOFENACO/B1/B6/B12","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DIM-01","DIMOPEN CAPS 500MG C/12","CATALOGO","ANTIBACTERIANO",0,69,66,"BRULUART","AMOXICILINA","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DIM-02","DIMOPEN SUSP 250MG C/75ML","CATALOGO","ANTIBACTERIANO",0,75,75,"BRULUART","AMOXICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DIM-03","DIMOPEN SUSP 500MG C/75ML","PRODUCTO DE BAJA","ANTIBACTERIANO",0,78,66,"BRULUART","AMOXICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DIO-01","DIONIXOL TABS 50 MG C/4    ","PRUEBA","TRATAMIENTO PARA LA DISFUNCION ERECTIL",0,245,88,"BIOMEP","SILDENAFIL","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DIO-02","DIONIXOL TAB 50 MG C/1    ","PRUEBA","TRATAMIENTO PARA LA DISFUNCION ERECTIL",0,130,88,"BIOMEP","SILDENAFIL","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DIP-01","DIPHAFEN INYT 40MG/2ML C/2","CLIENTE ESPECIFICO","ANTIEMETICO - ANTIVERTIGINOSO",0,44,66,"SONS","DIFENIDOL","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DIP-03","DIPROSPAN INY. C/1 FCO. AMP. 2 ML.","PRUEBA","NULL",0,330.25,40,"SCHERING PLOUGH","BETAMETASONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DIP-04","DIPROSPAN HYPAK INY. C/1 JERINGA C/1 ML.","PRUEBA","NULL",0,323.85,40,"SCHERING PLOUGH","BETAMETASONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DIP-05","DIPOFEN TAB. 400 MG. C/10","CLIENTE ESPECIFICO","NULL",0,40,78,"ARLEX","IBUPROFENO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DIS-01","DISTENTAL TABS 100MG C/14","CATALOGO","ANTIESPASMODICO",0,111,66,"EUROMEX","PINAVERIO","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DIS-05","DISPOSITIVO INTRAUTERINO STANDAR T CU 380A","PRUEBA","NULL",16,50,32,"DKTT INTERNACIONAL","MATERIALES VARIOS","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DIS-06","DISPOSITIVO INTRAUTERINO T-CARE T CU 380A","PRUEBA","NULL",16,80,32,"DKTT INTERNACIONAL","MATERIALES VARIOS","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DIS-07","DISPOSITIVO INTRAUTERINO SAFE LOAD T CU 380A","PRUEBA","NULL",16,100,24,"DKTT INTERNACIONAL","MATERIALES VARIOS","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DIT-01","DITREI CAPS 50MG C/48","PRUEBA","ANTIANOXICO - ANTITOXICO",0,295,28,"ITALMEX S.A.","DISOPROPILAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DOC-01","DOCSI TABS 4 MG C/20","PRODUCTO DE BAJA","ANTIHISTAMINICO",0,27.5,72,"BIOMEP","CLORFENAMINA","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DOL-02","DOLO BEDOYECTA INYT C/JER 100MG/2ML C/1","CATALOGO","ANTIINFLAMATORIO - ANALGESICO -ANTIPIRETICO - ANTINEURITICO",0,245.35,60,"VALEANT","KETOPROFENO-COMPLEJO B","203")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DOL-03","DOLO TIAMINAL CAPS 500MCG C/24","CATALOGO","ANALGESICO -ANTIPIRETICO - ANTINEURITICO",0,315,54,"SILANES","COMPLEJO B  METAMIZOL","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DOL-05","DOLO TIAMINAL INYT 200MG/1ML C/3","CATALOGO","ANALGESICO -ANTIPIRETICO - ANTINEURITICO",0,347,54,"SILANES","COMPLEJO B  METAMIZOL","203")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DOL-06","DOLO TANDAX GRAG 275MG C/24","OPORTUNIDAD","NULL",0,169.24,54,"SANDOZ","NAPROXENO-PARACETAOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DOL-07","DOLPRIN SUSP 2G C/120ML","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,72,68,"COLLINS","IBUPROFENO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DOL-09","DOLTRIX TABS 250MG C/10","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ESPASMOLITICO",0,114,68,"MAVER","CLONIXINATO DE LISINA-BUTILHIOSCINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DOL-12","DOLO TANDAX TABS 275MG C/12","OPORTUNIDAD","NULL",0,110.57,54,"SANDOZ","NAPROXENO-PARACETAOL","401")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DOL-15","DOLO BEDOYECTA TABS 100MG C/30","CATALOGO","ANTIINFLAMATORIO - ANALGESICO -ANTIPIRETICO - ANTINEURITICO",0,384.03,57,"VALEANT","DICLOFENACO-COMPLEJO B","204")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DOP-01","DOPAMINA INYT 200MG/5ML C/5 (KEND)","CLIENTE ESPECIFICO","ESTIMULANTE CARDIACO",0,122.13,55,"KENDRICK","DOPAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("DUR-01","DURADOCE INY. 1,000 U. C/2 AMP.","CATALOGO","VITAMINAS",0,47.94,60,"ATLANTIS","VITAMINA B12","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ECT-01","ECTAPRIM TABS 80MG C/20","CATALOGO","ANTIBACTERIANO",0,55,50,"LIOMONT","TRIMETOPRIM-SULFAMETOXAZOL","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ECT-02","ECTAPRIM F TABS 160MG C/14","CATALOGO","ANTIBACTERIANO",0,125,50,"LIOMONT","TRIMETOPRIM-SULFAMETOXAZOL","203")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ECT-03","ECTAPRIM SUSP PED. 800MG C/120ML","CATALOGO","ANTIBACTERIANO",0,95,50,"LIOMONT","TRIMETOPRIM-SULFAMETOXAZOL","211")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("EK3-01","EK 3 TABS 10MG C/30","PRODUCTO DE BAJA","ANTIHIPERTENSIVO",0,60,68,"WERMAR","ENALAPRIL","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ELE-01","ELECTROLITOS APO PLVO 20G C/25","CATALOGO","HIDRATANTE",0,270,64,"APOTEX","ELECTROLITOS ORALES","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ELE-02","ELEC. LIMON C/4 SOBRES","CLIENTE ESPECIFICO","HIDRATANTE",0,81,66,"APOTEX","ELECTROLITOS ORALES","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ELE-03","ELECTROLITOS APO MANZANA PLVO 20G C/4","OFERTA","HIDRATANTE",0,81,68,"APOTEX","ELECTROLITOS ORALES","305")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ELE-04","ELECTROLITOS APO NARANJA PLVO 20G C/4","OFERTA","HIDRATANTE",0,81,68,"APOTEX","ELECTROLITOS ORALES","306")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ELE-05","ELEC. PIÑA C/4 SOBRES","OFERTA","HIDRATANTE",0,81,68,"APOTEX","ELECTROLITOS ORALES","309")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ENA-01","ENALAPRIL TABS 10MG C/30 (APOT)","PRODUCTO DE BAJA","ANTIHIPERTENSIVO",0,234,68,"APOTEX","ENALAPRIL","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ENA-02","ENALAPRIL TABS 10MG C/30 (SERR)","CLIENTE ESPECIFICO","ANTIHIPERTENSIVO",0,66,66,"SERRAL","ENALAPRIL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ENT-02","ENTERODAR COMPUESTO TABS 200MG C/10","CATALOGO","ANTIBACTERIANO - ANTIDIARREICO",0,81,78,"STREGER","NIFUROXAZINA","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ERI-03","ERISPAN INYT C/JER 8MG/2ML C/1","CATALOGO","ANTINFLAMATORIO",0,69,66,"MAVER","BETAMETASONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ESK-01","ESKAFLAM TABS 100MG C/10","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,237.94,54,"GLAXO SMITH KLINE","NIMESULIDA","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ESP-04","ESPAVEN TABS 50MG C/24","CATALOGO","ANTIFLATULENTO",0,105.82,54,"VALEANT","DIMETICONA","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ESP-05","ESPASMOTEX TABS 250MG C/25","CATALOGO","ESPASMOLITICO - ANALGESICO - ANTIPIRETICO",0,95,54,"LIOMONT","BUTILHIOSCINA-METAMIZOL","204")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ESP-06","ESPAVEN PED GOTA 10G C/30ML","CATALOGO","ANTIFLATULENTO",0,173.25,62,"VALEANT","DIMETICONA","204")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ESP-11","ESPAVEN ENZIMATICO GRAG 40MG C/50","CATALOGO","ENZIMATICO - DIGESTIVO",0,180.6,60,"VALEANT","PANCRETINA-BILIS DE BUEY-DIMETICONA","205")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ESP-12","ESPAFARM GOTA 6.67ML C/15ML","PRODUCTO DE BAJA","ESPASMOLITICO",0,84,70,"FARMACOS CONTINENTALES","BUTILHIOSINA","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ESP-13","ESPACIL COMPUESTO CAPS 125MG C/20","CATALOGO","ANALGESICO - ESPASMOLITICO",0,238.05,54,"VALEANT","CLONIXINATO DE LISINA-BUTILHIOSCINA","204")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ESP-14","ESPACIL TABS 10MG C/20","CATALOGO","ESPASMOLITICO",0,147,60,"VALEANT","BUTILHIOSINA","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ESP-15","ESPACIL COMPUESTO INYT 100MG/4ML C/6","CATALOGO","ANALGESICO - ESPASMOLITICO",0,227.77,60,"VALEANT","CLONIXINATO DE LISINA-BUTILHIOSCINA","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ESP-16","ESPAVEN ALCALINO MENTA TABS 300MG C/50","CATALOGO","ANTIACIDO - ANTIFLATULENTO",0,111.3,60,"VALEANT","DIMETICONA","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ESP-17","ESPAVEN SUSP 4G C/360ML","CATALOGO","ANTIACIDO - ANTIFLATULENTO",0,138.6,60,"VALEANT","DIMETICONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ESP-18","ESPACIL GOTA 6.67MG C/15ML","CATALOGO","ESPASMOLITICO",0,166.95,60,"VALEANT","BUTILHIOSINA","205")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ESP-25","ESPRADEN TABS 200/200 MG C/30","PRUEBA","ANTIACIDO - ANTIFLATULENTO",0,75.37,70,"DEGORTS","ALUMINIO-MAGNESIO-DIMETICONA","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ESP-27","ESPAVEN MD CAPS 40/10 MG C/20    ","PRUEBA","NULL",0,147,55,"VALEANT","DIMETICONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ETA-01","ETACON TABS 200MG C/10","PRODUCTO DE BAJA","ANTIMICOTICO",0,85.05,66,"HORMONA","KETOCONAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("EUF-01","EUFENIL FORTE CAPS 400MG C/10","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,58,62,"PHARMACAPS","IBUPROFENO","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("EXC-01","EXCELSIOR POMA 40G C/8G","CATALOGO","QUERATOLITICO",0,46,55,"GRISI","ACIDO SALICILICO","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("EXO-01","EXOFUR SUSP 350 MG /20/1 G C/ 100 ML    ","CATALOGO","ANTIDIARREICO",0,60.5,66,"SONS","FURAZOLIDONA-CAOLIN-PECTINA","108")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("EXP-01","EXPICIN TAB 500 MG C/20","PRUEBA","ANTIBACTERIANO",0,92.5,66,"SONS","AMPICILINA","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FAC-01","FACIDMOL SUSP 1.75G C/120ML","PRODUCTO DE BAJA","ANTIACIDO - ANTIDIARREICO",0,29,54,"LIOMONT","SUBSALICILATO DE BISMUTO","308")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FAR-01","FARMIVER SUSP 10MG C/10ML","CATALOGO","AMEBICIDA - ANTIHELMINTICO",0,81,70,"FARMACOS CONTINENTALES","QUINFAMIDA-ALBENDAZOL","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FAR-02","FARMIVER TABS 150/200 MG C/2","CATALOGO","AMEBICIDA - ANTIHELMINTICO",0,99,68,"FARMACOS CONTINENTALES","QUINFAMIDA-ALBENDAZOL","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FAR-03","FARMIVER SUSP JR 200/400 MG  C/20 ML","PRUEBA","AMEBICIDA - ANTIHELMINTICO",0,90,68,"FARMACOS CONTINENTALES","QUINFAMIDA-ALBENDAZOL","307")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FAR-04","FARMIVER SUSP INF 100/400 MG C/10 ML","PRUEBA","AMEBICIDA - ANTIHELMINTICO",0,84,68,"FARMACOS CONTINENTALES","QUINFAMIDA-ALBENDAZOL","307")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FEM-01","FEMISAN TABS VAGI 400MG C/6","CATALOGO","ANTIBACTERIANO - ANTIMICOTICO",0,329.75,45,"VALEANT","KETOCONAZOL-CLINDAMICINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FEN-02","FENICOL OFTALMICO GOTA 5G C/10ML","PRODUCTO DE BAJA","ANTIBACTERIANO",0,51,66,"OFFENBACH","CLORANFENICOL","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FEN-03","FENIMETH V OVUL 500MG C/12","PRODUCTO DE BAJA","ANTIBACTERIANO",0,73,70,"SONS","METRONIDAZOL-NISTATINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FEN-04","FENITOINA INYT 250MG/5ML C/5 (KEND)","CATALOGO","ANTIEPILEPTICO",0,144.74,35,"KENDRICK","FENITOINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FEN-05","FENIDANTOIN S TABS 100MG C/50","PRUEBA","ANTIEPILEPTICO",0,200,28,"ITALMEX S.A.","FENITOINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FER-01","FERLOR AF TABS 15MG C/30","CATALOGO","HEMATOPOYETICO - ANTIANEMICO",0,67.41,66,"LOREN","FUMARATO FERROSO-ACIDO FOLICO","103")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FER-02","FERRICOL PED SUSP 600 MG C/45ML","OPORTUNIDAD","SUPLEMENTO ALIMENTICIO CON MINERALES",0,89.85,54,"COLUMBIA","HIERRO AMINOQUELADO-ACIDO FOLICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FER-03","FERRICOL TABS 30MG C/30","OPORTUNIDAD","VITAMINAS Y MINERALES",0,248,54,"COLUMBIA","HIERRO AMINOQUELADO-ACIDO FOLICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FER-04","FERRO  4 GRAG 300MG C/30","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,102,80,"STREGER","VITAMINAS-MINERALES","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FER-05","FERROSTON SOLU C/360ML","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,87.4,75,"SARDEL","VITAMINAS-HIERRO","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FER-07","FERRANINA IM INYT 317.46MG/2ML C/3","CATALOGO","ANTIANEMICO",0,256,40,"NYCOMED","HIERRO","204")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FIB-01","FIBRASAR MANDARINA PLVO C/170G","OFERTA","LAXANTE - ESTIMULANTE DEL SISTEMA DIGESTIVO",0,145,78,"SARDEL","PAROXETINA","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FIR-01","FIRAC PLUS INYT 100MG/2ML C/6","CATALOGO","ANALGESICO - ESPASMOLITICO",0,228.1,60,"VALEANT","CLONIXINATO DE LISINA","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FIR-02","FIRAC PLUS TABS 125MG C/20","CATALOGO","ANALGESICO - ESPASMOLITICO",0,238.47,60,"VALEANT","CLONIXINATO DE LISINA","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FIT-03","FITOESTIMULINA CMA GASAS 15G C/3    ","CATALOGO","ANTIMICROBIANA",0,165.89,57,"VALEANT","FITOESTIMULINA","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FIT-04","FITOMENADIONA INYT 10MG/1ML C/3 (KEND)","CATALOGO","ANTIHEMORRAGICO",0,136.62,62,"KENDRICK","FITOMENADIONA / VIT K1","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FIT-05","FITOESTIMULINA CMA 30 GR","PRUEBA","ANTIMICROBIANA",0,309.36,57,"VALEANT","FITOESTIMULINA","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FLA-01","FLAGENASE SUSP 125MG C/120ML","CATALOGO","AMEBICIDA - GIARDICIDA - TRICOMONICIDA",0,62,54,"LIOMONT","METRONIDAZOL","108")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FLA-02","FLAGENASE SUSP 250MG C/120ML","CATALOGO","AMEBICIDA - GIARDICIDA - TRICOMONICIDA",0,100,50,"LIOMONT","METRONIDAZOL","212")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FLA-03","FLAGENASE TABS 250MG C/20","CATALOGO","AMEBICIDA - GIARDICIDA - TRICOMONICIDA",0,54,54,"LIOMONT","METRONIDAZOL","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FLA-04","FLAGENASE TABS 500MG C/30","CATALOGO","AMEBICIDA - GIARDICIDA - TRICOMONICIDA",0,95,54,"LIOMONT","METRONIDAZOL","204")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FLA-05","FLAGOSIL 400 CAPS 200MG C/30","CATALOGO","AMEBICIDA - GIARDICIDA - TRICOMONICIDA - ANTIBACTERIANO",0,132,66,"COLLINS","METRONIDAZOL-DIYODOHIDROXIQUINOLEINA","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FLE-07","FLEBOCAPS CAPS 200 MG C/30","CATALOGO","AUXILIAR EN EL TRATAMIENTO DE VARICES",0,160,68,"GELCAPS","CASTAÑA DE INDIAS","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FLO-01","FLOREXAL CAPS 20MG C/14","PRODUCTO DE BAJA","ANTIDEPRESIVO",0,384,52,"SILANES","FLUOEXETINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FLU-02","FLUOXETINA CAPS 20MG C/14 (APOT)","CLIENTE ESPECIFICO","ANTIDEPRESIVO",0,325,82,"APOTEX","FLUOEXETINA","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FLU-03","FLUXOL SOLU 0.04G C/120ML","CATALOGO","MUCOLITICO - BRONCODILATADOR",0,69,75,"MAVER","AMBROXOL-SALBUTAMOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FOL-02","FOLIVITAL TABS 4MG C/90","PRODUCTO DE BAJA","PREVENTIVO DE MALFORMACION  DEL TUBO NEURAL",0,215.5,54,"SILANES","ACIDO FOLICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FOL-03","FOLIVITAL TABS 400MG C/30","PRODUCTO DE BAJA","PREVENTIVO DE MALFORMACION  DEL TUBO NEURAL",0,37.9,54,"SILANES","ACIDO FOLICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FOR-03","FORTI K +D SUSP 3G C/360ML","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,93,75,"SARDEL","CALCIO-VITAMINA D","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FOR-04","FORTI K +D TABS 750MG C/60","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,90,75,"SARDEL","CALCIO-VITAMINA D","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FUC-02","FUCANDYL CAPS 100MG C/10","PRODUCTO DE BAJA","ANTIMICOTICO",0,210,72,"WERMAR","FLUCONAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("FUR-01","FUROSEMIDA G.I. TAB. 40 MG. C/20 (APOT)","CLIENTE ESPECIFICO","NULL",0,60,82,"APOTEX","FUROSEMIDA","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GAD-01","GADITAL CAPS 150MG C/16","PRUEBA","EXPECTORANTE - BRONCODILATADOR   - ANTIHISTAMINICO",0,134,28,"ITALMEX S.A.","GUAIFENESINA-PROXIFILINA-CLORFENIRAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GAD-02","GADITAL ADTO INYT 200MG/2ML C/3","PRUEBA","EXPECTORANTE - BRONCODILATADOR   - ANTIHISTAMINICO - ANESTESICO",0,218,28,"ITALMEX S.A.","GUAIFENESINA-PROXIFILINA-CLORFENIRAMINA-","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GAD-03","GADITAL PED INYT 100MG/1ML C/3","PRUEBA","EXPECTORANTE - BRONCODILATADOR   - ANTIHISTAMINICO - ANESTESICO",0,196,28,"ITALMEX S.A.","GUAIFENESINA-PROXIFILINA-CLORFENIRAMINA-","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GAL-06","GALZO TABS 15 MG C/14  (RANB)","PRODUCTO DE BAJA","NULL",0,61.8,62,"RANBAXY","LANSOPRASOL","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GEL-03","GELCAVIT 9 MESES CAPS 1.59G C/30","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,163,66,"PHARMACAPS","VITAMINAS-MINERALES-GERMEN DE TRIGO","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GEN-01","GENKOVA INYT 160MG/2ML C/5","PRODUCTO DE BAJA","ANTIBACTERIANO",0,121,66,"SONS","GENTAMICINA","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GEN-03","GENKOVA INYT 80MG/2ML C/5","PRODUCTO DE BAJA","ANTIBACTERIANO",0,101,66,"SONS","GENTAMICINA","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GEN-04","GENTAMICINA INYT 160MG/2ML C/5 (AMSA)","CATALOGO","ANTIBACTERIANO",0,250,82,"AMSA","GENTAMICINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GER-01","GERIAL B12 ELIXIR SOLU 2G C/340ML","CATALOGO","OREXIGENO - HEMATOPOYETICO",0,109,66,"ALLEN","L-LISIN-INOSITOL-COLINA-B12-HIERRO-GLICI","109")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GES-01","GESTAFERRON TABS 200MG C/50","PRODUCTO DE BAJA","HEMATOPOYETICO - ANTIANEMICO",0,42,66,"ARLEX","FUMARATO FERROSO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GLI-01","GLIBENCLAMIDA TABS 5MG C/50 (APOT)","CLIENTE ESPECIFICO","HIPOGLUCEMIENATE (ANTIDIABETICO)",0,94,75,"APOTEX","GLIBENCLAMIDA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GLI-03","GLICIMA INYT 30MG/1ML C/3","PRUEBA","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,167.86,60,"ATLANTIS","KETOROLACO","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GLI-04","GLICIMA TABS 10MG C/10","PRUEBA","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,119.76,60,"ATLANTIS","KETOROLACO","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GRI-01","GRIPSON GOTA 60MG C/15ML","PRODUCTO DE BAJA","ANALGESICO-ANTIPIRETICO-DESCONGESTIVO-ANTIHISTAMINICO",0,44,66,"SONS","PARACETAMOL-CLORFENIRAMINA-FENILEPRINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GRI-02","GRIMERAL TABS 10 MG C/10","PRODUCTO DE BAJA","ANTIHISTAMINICO",0,60,80,"BIOMEP","LORATADINA","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("GRI-03","GRISTALIT SOL 100/600 MG C/100 ML    ","OFERTA","ANTIHISTAMINICO",0,49,82,"BIOMEP","LORATADINA-AMBROXOL","308")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("HEM-01","HEMAMINA SOL. ORAL C/10","PRUEBA","HEMATOPOYETICO - ANTINEURITICO",0,199,28,"ITALMEX S.A.","COMPLEJO B-ACEITE DE HIGADO DE PESCADO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("HEM-03","HEMESTAL TABS 500MG C/20","PRODUCTO DE BAJA","AMEBICIDA - TRICOMONICIDA",0,405,52,"SILANES","HEMEZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("HEM-04","HEMAMINA JET SOL ORAL C/10 AMPS","PRUEBA","HEMATOPOYETICO - ANTINEURITICO",0,199,28,"ITALMEX S.A.","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("HEP-02","HEPARINA INYT 25,000UI/5ML C/50 (TECN)","CLIENTE ESPECIFICO","ANTICOAGULANTE",0,3150,20,"TECNOFARMA","HEPARINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("HER-04","HERBACIL JARABE FRASCO 240 ML","PRUEBA","SUPLEMENTO PARA CUIDADO PERSONAL",0,46,18,"BRONCOLIN","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("HER-05","HERBACIL TE KITA KILOS CAJA 25 SOBRES","PRUEBA","SUPLEMENTO PARA CUIDADO PERSONAL",0,17,17,"BRONCOLIN","SUPLEMENTO ALIMENTICIO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("HER-06","HERBACIL TE 3 CAJA 25 SOBRES","PRUEBA","NULL",0,20,17,"BRONCOLIN","SUPLEMENTO ALIMENTICIO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("HER-07","HERBACIL TE DE CUACOL G CAJA C/25 SOBRES","PRUEBA","NULL",0,20,17,"BRONCOLIN","SUPLEMENTO ALIMENTICIO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("HER-08","HERBACIL TE DE ALCACHOFA CAJA 25 SOBRES","PRUEBA","SUPLEMENTO PARA CUIDADO PERSONAL",0,20,17,"BRONCOLIN","SUPLEMENTO ALIMENTICIO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("HIC-02","HICALZIN TABS 750MG C/60","OFERTA","SUPLEMENTO ALIMENTICIO CON MINERALES",0,75,78,"SARDEL","HIERRO-CALCIO-ZINC","305")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("HID-01","HIDROCILINA INYT 400,000U/2ML C/1","CATALOGO","ANTIBACTERIANO",0,50.86,57,"VALEANT","BENCILPENICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("HID-02","HIDROCILINA INYT 800,000U/2ML C/1","CATALOGO","ANTIBACTERIANO",0,61.6,57,"VALEANT","BENCILPENICILINA","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("HIG-01","HIGAVIN SOLU 2G C/360ML","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,89,75,"SARDEL","MULTIVITAMINICO-EXT. HIGADO-ACIDO GLUTMI","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ICA-01","ICADEN OV. 600 MG C/1","OFERTA","ANTIMICOTICO",0,277,68,"BAYER","ISOCONAZOL","305")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("IDR-01","IDRIDEX JRBE 10MG C/60ML","CATALOGO","ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO",0,54.6,64,"GIRALCAMPS","DEXAMETASONA-CLORFERINAMINA","109")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("IKA-01","IKATIN INYT 20MG/2ML C/1","PRODUCTO DE BAJA","NULL",0,35.84,90,"PISA","GENTAMICINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("IKA-02","IKATIN INYT 80MG/2ML C/1","CATALOGO","ANTIBACTERIANO",0,49.28,80,"PISA","GENTAMICINA","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("IMI-01","IMIPENEN/CILASTINA INYT 500MG/3.5ML C/1 (KEND)","CATALOGO","ANTIBACTERIANO",0,505.51,66,"KENDRICK","ITROCONAZOL-SECNIDAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("IND-01","INDACIL CAPS 300MG C/16","CATALOGO","ANTIBACTERIANO",0,144,66,"MAVER","CLINDAMICINA","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("IND-03","INDARZONA CAPS 25MG C/30","CATALOGO","ANTIINFLAMATORIO - ANALGESICO - CORTICOSTEROIDE - ANTIALERGICO",0,99,70,"STREGER","INDOMETACINA-DEXOMETASNA","204")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("IND-05","INDOMETACINA G.I. CAP. 25 MG.C157 C/30 (APOT)","CLIENTE ESPECIFICO","ANTIINFLAMATORIO - ANALGESICO",0,93.83,54,"APOTEX","INDOMETACINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("INS-01","INSOGEN PLUS TABS 513MG C/40","PRUEBA","ANTIDIABETICO",0,206,28,"ITALMEX S.A.","MERTFORMINA-CLORPROPAMIDA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("INS-02","INSOGEN PLUS TABS 513MG C/80","PRUEBA","ANTIDIABETICO",0,370,28,"ITALMEX S.A.","MERTFORMINA-CLORPROPAMIDA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("INT-02","INTROCAN G 20 CATETER PERIFERICO","PRODUCTO DE BAJA","MATERIAL DE CURACION",16,12.8,24,"PISA","MATERIALES VARIOS","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("IRO-01","IRONDEX INYT 100MG/2ML C/4","CATALOGO","HEMATOPOYETICO - ANTIANEMICO",0,150,68,"TOCOGINO","HIERRO DEXTRAN","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ITA-01","ITALDERMOL CREM 150MG C/10G","PRUEBA","CICATRIZANTE - ANTIBACTERIANO",0,162,28,"ITALMEX S.A.","TRIMETOPRIMA-SULFAMETAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ITA-02","ITALDERMOL CREM 15G C/30G","PRUEBA","CICATRIZANTE - ANTIBACTERIANO",0,319,28,"ITALMEX S.A.","TRIMETOPRIMA-SULFAMETAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ITA-03","ITALDERMOL OVUL 600MG C/6","PRUEBA","CICATRIZANTE - ANTIBACTERIANO",0,291,28,"ITALMEX S.A.","TRIMETOPRIMA-SULFAMETAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ITA-04","ITALDERMOL G  CMA C/30 G    ","PRUEBA","ANTIBACTERIANO",0,350,28,"ITALMEX S.A.","GENTAMICINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("IVE-01","IVEXTERM TABS 6MG C/2","PRUEBA","ECTOPARASITICIDA",0,130.2,60,"VALEANT","IVERMECTINA","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("JAB-01","JABON AZUFRE C/100G (GRIS)","CATALOGO","AUXILIAR EN EL TRATAMIENTO DEL  ACNE",0,48.09,54,"GRISI","AZUFRE","204")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("JAB-03","JABON NEUTRO C/100G (GRIS)","CATALOGO","PRODUCTOS DE BELLEZA",16,33.86,54,"GRISI","NEUTRO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("JER-01","JERINGA DE 3 ML. C/AGUJA 22 X 32 C/100","LICITACIONES","MATERIAL DE CURACION",16,157.84,0,"PROTEC","MATERIALES VARIOS","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("JER-03","JERINGA DE 10 ML. C/AGUJA 21 X 32 C/100 PZAS","PRODUCTO DE BAJA","MATERIAL DE CURACION",16,224,35,"PROTEC","MATERIALES VARIOS","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("K50-01","K50 INYT 50MG/5ML C/1","CATALOGO","VITAMINAS",0,116.55,40,"VALEANT","VITAMINA K","205")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KAR-02","KARMIKIN INYT 500MG/2ML C/5","CATALOGO","ANTIBACTERIANO",0,192,66,"BRULUART","AMIKACINA","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KAS-01","K ASMAL SOLU 20MG C/120ML","PRODUCTO DE BAJA","ANTIASMATICO",0,426,54,"SILANES","KETOTIFENO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KEN-04","KENTADIN GRAG 400MG C/30","PRODUCTO DE BAJA","HEMORREOLOGICO",0,205.76,78,"KENDRICK","PENTOXIFILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KEN-05","KENZOFLEX TABS 500MG C/12","CATALOGO","ANTIBACTERIANO",0,138,75,"COLLINS","CIPROFLOXACINO","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KET-01","KETOCONAZOL CREM 2% C/30G (APOT)","CLIENTE ESPECIFICO","ANTIMICOTICO",0,94,78,"APOTEX","KETOCONAZOL","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KET-02","KETOCONAZOL CMA.2G C/30 G. (ARLEX)","PRUEBA","ANTIMICOTICO",0,66,75,"ARLEX","KETOCONAZOL","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KET-05","KETOROLACO TABS 10MG C/10 (APOT)","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,130,70,"APOTEX","KETOROLACO","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KET-06","KETOROLACO INYT 30MG/1ML C/3 (PISA)","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,56,78,"PISA","KETOROLACO","205")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KET-07","KETOROLACO TABS 10MG C/10 (KEND)","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,37.31,43,"KENDRICK","KETOROLACO","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KET-08","KETOROLACO INYT 30MG/1ML C/3 (KEND)","OPORTUNIDAD","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,80.73,64,"KENDRICK","KETOROLACO","402")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KIT-02","KITACYD SUSP 0.05G C/360ML","CATALOGO","ANTIACIDO - ANTIFLATULENTO",0,98,78,"SARDEL","ALUMINIO-MAGNESIO-DIMETICONA-DICICLOMINA","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KOD-01","KODAKON GOTA 3.5MG C/5ML","CATALOGO","ANTIINFLAMATORIO -CORTICOSTEROIDE - ANTIALERGICO - ANTIBACTERIANO",0,44,66,"LOREN","DEXAMETASONA-NEOMICINA","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KON-01","KONTROGER TABS 2.5MG C/30","PRODUCTO DE BAJA","NULL",0,72,80,"STREGER","MERTFORMINA-GLIBENCLAMIDA","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KPR-02","KPROVIT PLUS CHOCOLATE PLVO C/450G","CATALOGO","SUPLEMENTO ALIMENTICIO CON SOYA  - VITAMINAS - MINERALES",0,154,75,"SARDEL","MULTIVITAMINICO-SOYA-CALCIO-AMARANTO","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KPR-03","KPROVIT PLUS FRESA PLVO C/450G","CATALOGO","SUPLEMENTO ALIMENTICIO CON SOYA  - VITAMINAS - MINERALES",0,154,75,"SARDEL","MULTIVITAMINICO-SOYA-CALCIO-AMARANTO","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KRE-01","KRESALON SOLU C/360ML","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,87.4,75,"SARDEL","VITAMINAS-MINERALES-HIERRO","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KRO-01","KROL CAPS C/100","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS",0,120,75,"SARDEL","ACIDO GLUTAMICO -LECITINA SOYA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KRO-02","KROL SOLU C/360ML","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS",0,119,75,"SARDEL","ACIDO GLUTAMICO -LECITINA SOYA","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("KY6-01","KY6 TABS 500MG C/10","CATALOGO","ANALGESICO - ANTIPIRETICO -DESCONGESTIVO - ANTIHISTAMINICO",0,22.5,68,"BRULUART","PARACETAMOL-CLORFENIRAMINA-FENILEPRINA","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LAC-03","LACTIPAN CAPS C/12","PRUEBA","RESTAURADOR DE LA FLORA INTESTINAL",0,255,28,"ITALMEX S.A.","LACTOBACILOS-ACIDOFILOS-ACEITE DE SOYA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LAC-04","LACTIPAN PED PLVO C/6","PRUEBA","RESTAURADOR DE LA FLORA INTESTINAL",0,196,28,"ITALMEX S.A.","LACTOBACILOS-ACIDOFILOS-ACEITE DE SOYA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LAR-03","LARITOL EX TABS 5MG C/10","CATALOGO","ANTIHISTAMINICO - MUCOLITICO",0,69,66,"MAVER","LORATADINA-AMBROXOL","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LAR-06","LARITOL EX SOLU 100MG C/120ML","CATALOGO","ANTIHISTAMINICO - MUCOLITICO",0,69,72,"MAVER","LORATADINA-AMBROXOL","109")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LAR-07","LARITOL TABS 10MG C/10","CATALOGO","ANTIHISTAMINICO",0,63,75,"MAVER","LORATADINA","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LAT-01","LATOTRYD SUSP 250MG C/100ML","CATALOGO","ANTIBACTERIANO",0,117.29,60,"ATLANTIS","ERITROMICINA","109")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LAT-02","LATOTRYD TABS 500MG C/20","CATALOGO","ANTIBACTERIANO",0,172.84,60,"ATLANTIS","ERITROMICINA","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LAX-01","LAXACAPS PERL 12MG C/30","CATALOGO","LAXANTE",0,116,62,"PHARMACAPS","SENOSIDOS AY B -CONCENTRADO DE CIRUELA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LEV-03","LEVOTIROXINA TABS 100MG C/100 (MERC)","PRODUCTO DE BAJA","HORMONA TIROIDEA",0,159.76,54,"MERCK","LEVOTIROXINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LEV-04","LEVOCOF SOLU 60MG C/120ML","CATALOGO","ANTITUSIVO",0,148.05,54,"VALEANT","LEVODROPROPIZINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LEV-08","LEVONOGESTREL TABS 1.5 MG C/1    ","PRUEBA","ANTICONCEPTIVO",0,55,28,"DKTT INTERNACIONAL","LEVONORGESTREL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LID-07","LIDOCAINA INYT 20MG/50ML C/5 (UNIP)","CLIENTE ESPECIFICO","ANESTESICO",0,437,75,"UNIPHARM","LIDOCAINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LIO-01","LIOLACTIL PVO 1.5 G C/6 SBS    ","PRUEBA","RESTAURADOR DE LA FLORA INTESTINAL",0,199.5,55,"LEMERY","LACTOBACILOS","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LIR-02","LIROKEN TABS 100MG C/20","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,131,78,"KENDRICK","DICLOFENACO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LIV-01","LIVIAL TABS 2.5 MG C/30","PRUEBA","TERAPIA DE REEMPLAZO HORMONAL",0,652.36,40,"SCHERING PLOUGH","TIBOLONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LOF-01","LOFFYMIX OVUL 400MG C/7","CATALOGO","ANTIMICOTICO - ANTIBACTERIANO",0,139,66,"LOEFFLER","KETOCONAZOL-CLINDAMICINA","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LOM-01","LOMBRIX TABS 100MG C/6","CATALOGO","ANTIHELMINTICO",0,52.5,54,"LIOMONT","MEBENDAZOL","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LOM-03","LOMBRIX INF SUSP 2G C/30ML","CATALOGO","ANTIHELMINTICO",0,57,54,"LIOMONT","MEBENDAZOL","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LOP-01","LOP TABS 2MG C/12","CATALOGO","ANTIDIARREICO",0,30.5,66,"SONS","LOPERAMIDA","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LOP-02","LOPERAMIDA TABS 2 MG C/12    ","CLIENTE ESPECIFICO","ANTIDIARREICO",0,45,70,"APOTEX","PSYLLIUM PLANTAGO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LOR-03","LORATADINA TABS 10MG C/10 (KEND)","CLIENTE ESPECIFICO","ANTIHISTAMINICO",0,41.4,38,"KENDRICK","LORATADINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LOS-01","LOSARTAN COMP 50MG C/30 (KEND)","CLIENTE ESPECIFICO","ANTIHIPERTENSIVO",0,306,60,"KENDRICK","LOSARTAN","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LUB-01","LUBRICANTE PRUDENCE  GROSELLA    ","PRUEBA","NULL",16,55,30,"DKTT INTERNACIONAL","MATERIALES VARIOS","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LUB-02","LUBRICANTE PRUDENCE UVA    ","PRUEBA","NULL",16,55,28,"DKTT INTERNACIONAL","MATERIALES VARIOS","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LUB-03","LUBRICANTE PRUDENCE NARANJA    ","OFERTA","NULL",16,55,30,"DKTT INTERNACIONAL","MATERIALES VARIOS","305")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("LUB-04","LUBRICANTE PRUDENCE MENTA    ","PRUEBA","NULL",16,55,28,"DKTT INTERNACIONAL","MATERIALES VARIOS","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MAC-01","MACLOV TABS 200MG C/25","CATALOGO","ANTIVIRAL",0,123,66,"MAVI","ACICLOVIR","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MAC-03","MACMIROR OVUL 500MG C/6","PRUEBA","ANTIBACTERIANO - ANTIMICOTICO",0,324,28,"ITALMEX S.A.","NIFURATEL-NISTATINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MAF-01","MAFENA RETARD TABS 100MG C/20","OPORTUNIDAD","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,69,80,"MAVER","DICLOFENACO","401")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MAG-02","MAGNOL ATLANTIS TABS 500MG C/20","CATALOGO","ANALGESICO - ANTIPIRETICO",0,90.78,60,"ATLANTIS","METAMIZOL","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MAG-03","MAGNOL ATLANTIS TABS 500MG C/10","CATALOGO","ANALGESICO - ANTIPIRETICO",0,49.98,62,"ATLANTIS","METAMIZOL","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MAG-05","MAGNOL SOL. INY. C/5 AMP.","CATALOGO","ANALGESICO - ANTIPIRETICO",0,119.34,60,"ATLANTIS","METAMIZOL","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MAG-06","MAGNASPOR SUSP 250MG C/50ML","PRODUCTO DE BAJA","ANTIBACTERIANO",0,319,68,"RANBAXY","CEFUROXIMA","308")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("37316","MAROVILINA CAPS 500MG C/20","CATALOGO","ANTIBACTERIANO",0,84.46,60,"ATLANTIS","AMPICILINA","205")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("38047","MAROVILINA SUSP 250MG C/60ML","CATALOGO","ANTIBACTERIANO",0,66.8,60,"ATLANTIS","AMPICILINA","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MAV-01","MAVIDOL INYT 30MG/1ML C/3","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,84,82,"MAVI","KETOROLACO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MAV-02","MAVIDOL TABS 10MG C/10","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,72,80,"MAVI","KETOROLACO","205")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MAV-04","MAVIGLIN GRAG 500MG C/60","CATALOGO","ANTIDIABETICO",0,141,68,"MAVI","MERTFORMINA-GLIBENCLAMIDA","205")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MAV-05","MAVIDOL TR CAPS 10 /25 MG C/10","PRUEBA","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,126,70,"MAVI","KETOROLACO-TRAMADOL","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MAV-06","MAVIDOL SL TABS 30 MG C/4    ","PRUEBA","NULL",0,81,78,"MAVI","KETOROLACO","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MAX-03","MAXIFORT ZIMAX TABS 50MG C/4","PRODUCTO DE BAJA","TRATAMIENTO PARA LA DISFUNCION ERECTIL",0,515,82,"DEGORTS","SILDENAFIL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MAX-04","MAXIFORT ZIMAX TABS 50MG C/1","OPORTUNIDAD","NULL",0,168.95,82,"DEGORTS","SILDENAFIL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MEB-01","MEBECICLOL TABS 300MG C/18","CATALOGO","ANTIHELMINTICO",0,187.1,60,"SANOFI AVENTIS","MEBENDAZOL-TINIDAZOL","205")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MEP-01","MEPRIZINA INYT 1G/2ML C/1","CATALOGO","ANTIBACTERIANO",0,33.66,72,"PISA","AMPICILINA","104")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MEP-02","MEPRIZINA INYT 500MG/2ML C/1","CATALOGO","ANTIBACTERIANO",0,26.43,60,"PISA","AMPICILINA","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MET-01","METAMIZOL SODICO INYT 1G/2ML C/3 (AMSA)","CATALOGO","ANALGESICO - ANTIPIRETICO",0,40,72,"AMSA","METAMIZOL","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MET-02","METAX INYT 8MG/2ML C/3","CATALOGO","ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO",0,95,66,"SONS","DEXAMETASONA","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MET-03","METFORMINA TABS 850MG C/30 (APOT)","CLIENTE ESPECIFICO","ANTIDIABETICO",0,148,70,"APOTEX","MERTFORMINA","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MET-04","METFORMINA TABS 850MG C/30 (MERC)","OPORTUNIDAD","ANTIDIABETICO",0,102.96,82,"MERCK","MERTFORMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MET-05","METICORTELONE SOL 3 MG./ML. C/120 ML.","PRUEBA","NULL",0,764.7,40,"SCHERING PLOUGH","PREDNISOLONA","307")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MET-06","METICORTEN TAB. 5 MG. C/30","PRUEBA","NULL",0,301.76,40,"SCHERING PLOUGH","PREDNISONA","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MET-10","METOPROLOL G.I. TAB. 100 MG. C/20 (APOT)","CLIENTE ESPECIFICO","ANTIHIPERTENSIVO",0,120,68,"APOTEX","METOPROLOL","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MET-11","METRONIDAZOL SUSP 250MG C/120ML (APOT)","CLIENTE ESPECIFICO","AMEBICIDA - GIARDICIDA - TRICOMONICIDA",0,58,70,"APOTEX","METRONIDAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MET-23","METOPROLOL TABS 100MG C/20 (SERR)","PRODUCTO DE BAJA","ANTIHEMORRAGICO",0,60,66,"SERRAL","METOPROLOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MIC-01","MICONAZOL CREM 2% C/20GR (APOT)","CATALOGO","ANTIMICOTICO",0,33,72,"APOTEX","MICONAZOL","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MIC-02","MICRORGAN TABS 250MG C/8","PRODUCTO DE BAJA","ANTIBACTERIANO",0,155,54,"LIOMONT","CIPROFLOXACINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MIC-07","MICRORGAN TABS 500MG C/8","CATALOGO","ANTIBACTERIANO",0,299,54,"LIOMONT","CIPROFLOXACINO","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MIN-01","MINOVAG COMPR 500MG C/8","PRODUCTO DE BAJA","AMEBICIDA - GIARDICIDA - TRICOMONICIDA",0,101.75,66,"NOVAG INFANCIA","SECNIDAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MIN-02","MINOFEN PED GOTA 100MG C/15ML","CATALOGO","ANALGESICO - ANTIPIRETICO",0,44,54,"LIOMONT","PARACETAMOL","205")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MIS-01","MISOPROSTOL TABS 200MCG C/28","CATALOGO","ANTIULCEROSO",0,990,66,"SERRAL","MISOPROSTOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MIS-02","MISEDA SOL GTS PED 10 MG C/10 ML    ","PRODUCTO DE BAJA","ANTIHISTAMINICO",0,138.69,30,"ATLANTIS","CETIRIZINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MOD-01","MODIPAS CAPS 80MG C/30","OPORTUNIDAD","ANALGESICO - ANTIESPASMODICO",0,130,72,"NAFAR LABORATORIO","FLOROGLUCINOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MON-09","MONTELUKAST TABS 10 MG C/20","OFERTA","ANTIASMATICO",0,400,80,"SERRAL","MONTELUKAST","305")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MUC-03","MUCOVIBROL SOLU 300MG C/120ML","CATALOGO","MUCOLITICO",0,152,50,"LIOMONT","AMBROXOL","212")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MUC-04","MUCOVIBROL GOTA 0.75G C/30ML","CATALOGO","MUCOLITICO",0,135,50,"LIOMONT","AMBROXOL","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MUG-01","MUGASIN LIMA LIMON PLVO C/230G","CLIENTE ESPECIFICO","LAXANTE",0,120,68,"APOTEX","PSYLLIUM PLANTAGO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MUG-02","MUGASIN NARANJA PLVO C/230G","CLIENTE ESPECIFICO","LAXANTE",0,120,68,"APOTEX","PSYLLIUM PLANTAGO","109")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MUG-03","MUGASIN LIMA LIMON PLVO C/500 G    ","CLIENTE ESPECIFICO","NULL",0,265,68,"APOTEX","PSYLLIUM PLANTAGO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MVI-01","MVI ADTO INYT 1.941MG/5ML C/1","CATALOGO","VITAMINAS",0,140.92,60,"VALEANT","VITAMINAS","206")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("MVI-02","MVI PED INYT 1.176MG/5ML C/1","CATALOGO","VITAMINAS",0,135.83,55,"VALEANT","VITAMINAS","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NAF-02","NAFAZOLINA SOL. OFTALMICA 1MG C/15ML","PRODUCTO DE BAJA","NULL",0,70,80,"AMSA","NAFAZOLINA","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NAL-01","NALIXONE  TABS  500/50 MG C/ 20    ","PRUEBA","ANTIBACTERIANO - ANALGESICO",0,134.5,66,"SONS","ACIDO NALIDIXICO-FENAZOPIRIDINA","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NAP-01","NAPROXENO TABS 250MG C/30 (APOT)","CLIENTE ESPECIFICO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,114,75,"APOTEX","NAPROXENO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NAX-01","NAXILAN PLUS TABS 500MG C/20","OPORTUNIDAD","ANTIBACTERIANO - ANALGESICO",0,139.8,68,"RAYERE","ACIDO NALIDIXICO-FENAZOPIRIDINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NAX-02","NAXO INYT 1G/5ML C/1","CATALOGO","ANTIBACTERIANO",0,85,66,"SONS","CLORANFENICOL","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NEO-02","NEOPANLACTICOS PLUS PLVO 1G C/12","PRUEBA","RESTAURADOR DE LA FLORA INTESTINAL",0,157,28,"ITALMEX S.A.","BACILOS LACTICOS-COMPLEJO B","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NEO-03","NEOPANLACTICOS SUSP 1G C/6","PRUEBA","RESTAURADOR DE LA FLORA INTESTINAL",0,199,28,"ITALMEX S.A.","BACILOS LACTICOS-COMPLEJO B","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NEU-02","NEUROCER GRAG 400MG C/30","PRODUCTO DE BAJA","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,115.2,64,"GIRALCAMPS","ACIDO GLUT. COMPLEJO B- VIT C y E","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NEU-03","NEURODEX INYT 100MG/2ML C/2","CATALOGO","ANTINEURITICO - HEMATOPOYETICO -ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO - ANESTESICO",0,67.5,64,"GIRALCAMPS","DEXAMETASONA - COMPLEJO B","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NEU-04","NEURODEX TABS 0.75MG C/12","CATALOGO","ANTINEURITICO - HEMATOPOYETICO - ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO",0,77.4,64,"GIRALCAMPS","DEXAMETASONA - COMPLEJO B","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NIF-06","NIFEDIPINO CAPS 10 MG C/20     ","CLIENTE ESPECIFICO","ANTIHIPERTENSIVO",0,102.78,68,"APOTEX","NIFEDEPINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NIM-01","NIMESULIDA TABS 100MG C/10 (APOT)","CLIENTE ESPECIFICO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,105,85,"APOTEX","NIMESULIDA","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NIM-04","NIMELGER TABS 100MG C/10","PRODUCTO DE BAJA","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,63,79,"STREGER","NIMESULIDA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NIS-01","NISTAQUIM GOTA 2,400,000UI C/24ML","CATALOGO","ANTIMICOTICO",0,99.54,66,"QUIMICA Y FARMACIA","NISTATINA","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NIT-01","NITAZOXANIDA TABS 500MG C/6 (UNIP)","CATALOGO","ANTIHELMINTICO - AMEBICIDA",0,185.22,80,"UNIPHARM","NITAZOXADINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NIT-02","NITAZOXANIDA SUSP 1.2G C/60ML (UNIP)","PRODUCTO DE BAJA","ANTIHELMINTICO - AMEBICIDA",0,108.49,77,"UNIPHARM","NITAZOXADINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NOR-04","NORAPRED TABS 50MG C/20","CATALOGO","ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO",0,132,68,"BRULUART","PREDNISONA","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("NOR-05","NORBORAL TABS 5MG C/50","PRODUCTO DE BAJA","HIPOGLUCEMIENATE (ANTIDIABETICO)",0,123,58,"SILANES","GLIBENCLAMIDA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OME-01","OMEPRAZOL CAPS 20MG C/14 (APOT)","CATALOGO","ANTIULCEROSO",0,102,80,"APOTEX","OMEPRAZOL","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OME-02","OMEPRAZOL CAPS 20MG C/14 (WERM)","CATALOGO","ANTIULCEROSO",0,114,88,"WERMAR","OMEPRAZOL","206")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OME-03","OMEPRAZOL CAPS 20MG C/7 (APOT)","CLIENTE ESPECIFICO","ANTIULCEROSO",0,64,80,"APOTEX","OMEPRAZOL","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OME-04","OMEPRAZOL CAPS 20MG C/7 (WERM)","CATALOGO","ANTIULCEROSO",0,58,80,"WERMAR","OMEPRAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OME-08","OMEPRAZOL INYT 40MG/10ML C/1 (VITA)","CATALOGO","ANTIULCEROSO",0,270,75,"ALVARTIS PHARMA","OMEPRAZOL","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ONL-01","ONLYFEM TABS 400MCG C/120","CATALOGO","SUPLEMENTO ALIMENTICIO - PREVENTIVO DE MALFORMACION DEL TUBO NEURAL",0,54,78,"SARDEL","ACIDO FOLICO","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ORM-01","ORMOCYN T5 CAPS 500MG C/20","CATALOGO","ANTIBACTERIANO",0,139.65,62,"HORMONA","AMOXICILINA","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ORM-02","ORMOCYN T5 SUSP 250MG C/75ML","CATALOGO","ANTIBACTERIANO",0,77.7,62,"HORMONA","AMOXICILINA","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ORM-03","ORMOPEN CAPS 500MG C/20","CATALOGO","ANTIBACTERIANO",0,139.65,62,"HORMONA","DICLOXACILINA","206")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OTO-01","OTOLONE GOTA 1G C/5ML","CATALOGO","ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO -ANTIBACTERIANO - ANESTESICO",0,49,66,"LOREN","HIDROCORTISONA-CLORAFENICOL-BENZOCAINA","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OTR-01","OTROZOL INYT 500MG/100ML C/1","PRODUCTO DE BAJA","AMEBICIDA - GIARDICIDA - TRICOMONICIDA",0,85.12,70,"PISA","METRONIDAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OXI-01","OXIKROL CAPS C/30","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,110,75,"SARDEL","ACIDO GLUTA-LECITIN-GINKOBILOBA-VITAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OXI-02","OXITAL C NARANJA COMP 1G C/10","PRODUCTO DE BAJA","VITAMINAS",0,130,66,"SERRAL","VITAMINA C","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OXI-03","OXITOPISA INYT 20UI/1ML C/50","CATALOGO","INDUCTOR O ESTIMULANTE DE LAS CONTRACCIONES UTERINAS",0,427.24,55,"PISA","OXITOCINA","109")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OXI-04","OXIGRICOL ADTO INYT 100MG/3ML C/1","OPORTUNIDAD","ANTIBACTERIANO-ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,102,55,"RIMSA","OXITETRACICLINA - METAMIZOL GUAYFENESINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OXI-05","OXIGRICOL INF INYT 50MG/1ML C/1","PRODUCTO DE BAJA","ANTIBACTERIANO-ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,69,55,"RIMSA","OXITETRACICLINA - METAMIZOL GUAYFENESINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OXI-10","OXITRAKLIN CAPS 500 MG C/16","PRUEBA","ANTIBACTERIANO",0,80.41,60,"ATLANTIS","OXITETRACICLINA","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OXK-01","OXKEN T TABS 400MG C/6","CATALOGO","ANTIBACTERIANO",0,278.21,80,"KENDRICK","OFLOXACINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("OXO-02","OXOLVAN SOLU 300MG C/120ML","CATALOGO","MUCOLITICO",0,45.8,68,"BRULUART","AMBROXOL","109")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PAK-01","PAKAB TABS 100MG C/30","CATALOGO","ANTICOLINERGICO",0,170,72,"WERMAR","PINAVERIO","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PAN-02","PANCLASA INY. C/5 AMP.","PRUEBA","ANALGESICO - ANTIESPASMODICO",0,109.2,30,"ATLANTIS","FLOROGLUCINOL","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PAN-08","PANTOZOL GRAG 40MG C/7","CATALOGO","ANTIULCEROSO",0,371,40,"NYCOMED","PANTOPRAZOL","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PAN-10","PANCLASA SOL GTS 2 G C/ 30 ML","PRODUCTO DE BAJA","ANALGESICO - ANTIESPASMODICO",0,156.98,30,"ATLANTIS","FLOROGLUCINOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PAN-14","PANCLASA CAPS 80/80 MG C/20","CATALOGO","ANALGESICO - ANTIESPASMODICO",0,147.73,33,"ATLANTIS","FLOROGLUCINOL","206")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PAS-04","PASSIFLORINE TABS 25MG C/30","CATALOGO","SUPLEMENTO ALIMENTICIO - AUXILIAR EN EL TRATAMIENTO DE ESTRES",0,204.96,54,"COLUMBIA","PASSIFLORA-SAUCO BLANCO-CRATAEGUS OXYCAN","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PAT-02","PATOX TABS 500MG C/10","PRODUCTO DE BAJA","ANTIBACTERIANO",0,90,70,"WERMAR","CIPROFLOXACINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PEN-04","PENISODINA INYT 800,000U/2ML C/1","CATALOGO","ANTIBACTERIANO",0,29.79,62,"PISA","BENCILPENICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PEN-07","PENTIVER SUSP 500MG C/60ML","PRODUCTO DE BAJA","ANTIBACTERIANO",0,63,66,"MAVER","AMPICILINA","308")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PEN-08","PENTIVER TABS 1G C/8","CATALOGO","ANTIBACTERIANO",0,66,66,"MAVER","AMPICILINA","105")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PEN-09","PENTIVER TABS 500MG C/20","CATALOGO","ANTIBACTERIANO",0,72,66,"MAVER","AMPICILINA","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PEN-13","PENTOXIFILINA TABS 400MG C/30 (KEND)","CATALOGO","HEMORREOLOGICO",0,109.18,60,"KENDRICK","PENTOXIFILINA","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PEN-14","PENBRITIN CAPS 500MG C/20","CATALOGO","ANTIBACTERIANO",0,160,57,"HORMONA","AMPICILINA","206")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PEN-15","PENBRITIN SUSP 500MG C/100ML","CATALOGO","ANTIBACTERIANO",0,155,57,"HORMONA","AMPICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PEN-16","PENBRITIN SUSP 250MG C/100ML","CATALOGO","ANTIBACTERIANO",0,118,57,"HORMONA","AMPICILINA","109")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PEN-18","PENPROCILINA INYT 400,000U/2ML C/1","CATALOGO","ANTIBACTERIANO",0,61.85,54,"LAKESIDE DE MEXICO","BENCILPENICILINA","106")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PEN-19","PENPROCILINA INYT 800,000U/2ML C/1","CATALOGO","ANTIBACTERIANO",0,74.5,54,"LAKESIDE DE MEXICO","BENCILPENICILINA","206")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PEQ-01","PEQUEVIT SOLU C/360ML","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,87.4,75,"SARDEL","MULTIVITAMINICO-EXT DE HIGADO","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PER-01","PERLUDIL INYT 150MG/1ML C/1","OFERTA","ANTICONCEPTIVO",0,90,72,"COLLINS","ALGESTONA - ESTRADIOL","306")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PHA-02","PHARMACAINE SOLU 10% C/115ML","CLIENTE ESPECIFICO","ANESTESICO",0,300,70,"QUIMPHARMA","LIDOCAINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PHA-04","PHARMATON  DUO CAPS  C/30    ","PRUEBA","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,199.55,22,"BOEHRINGER INGELHEIM","VITAMINAS-MINERALES-HIERRO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PIM-01","PIMIKEN TABS 200MG C/40","PRODUCTO DE BAJA","NULL",0,115,65,"KENDRICK","VALPROATO DE MAGNESIO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PIR-03","PIROXICAM G.I. CAP. 20 MG. C/20 (APOT)","CLIENTE ESPECIFICO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,138,75,"APOTEX","PIROXICAM","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PLE-01","PLEXORGAN CAPS C/30","CATALOGO","VITAMINAS Y MINERALES",0,114,75,"SARDEL","MULTIVITAMINICO-MINERALES","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("POS-02","POSTDAY COMP 0.75MG C/2","PRUEBA","ANTICONCEPTIVO",0,104.5,50,"INVESTIGACION FARMACEUTICA SA DE CV","LEVONORGESTREL-ETINILESTRADIOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRA-01","PRAMOTIL INYT 10MG/2ML C/6","CATALOGO","REGULADOR DE LA MOTILIDAD INTESTINAL - ANTIEMETICO",0,54.05,62,"PISA","METOCLOPRAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRA-03","PRAVASTATINA TABS 10MG C/30 (ARLE)","CATALOGO","HIPOLIPEMIANTE",0,162.5,82,"ARLEX","PRAVASTATINA","206")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRA-04","PRAVASTATINA TABS 10MG C/30 (KEND)","PRODUCTO DE BAJA","HIPOLIPEMIANTE",0,295,85,"KENDRICK","PRAVASTATINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRA-05","PRAVASTATINA TABS 10MG C/30 (APOT)","CLIENTE ESPECIFICO","HIPOLIPEMIANTE",0,650,88,"APOTEX","PRAVASTATINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-04","PRESCOL COMP 200MG C/30","PRUEBA","REGULADOR DE LA MOTILIDAD INTESTINAL",0,190.13,30,"ATLANTIS","TRIMEBUTINA","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-09","PRESERVATIVO PRUDENCE CLASICO C/3    ","PRUEBA","PREVENCION DE EMBARAZO Y ENFERMEDADES DE TRANSMISION SEXUAL",16,26,50,"DKTT INTERNACIONAL","MATERIALES VARIOS","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-10","PRESERVATIVO PRUDENCE  FRESA C/3  ","PRUEBA","PREVENCION DE EMBARAZO Y ENFERMEDADES DE TRANSMISION SEXUAL",16,28,46,"DKTT INTERNACIONAL","MATERIALES VARIOS","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-11","PRESERVATIVO PRUDENCE  CHOCOLATE C/3    ","PRUEBA","PREVENCION DE EMBARAZO Y ENFERMEDADES DE TRANSMISION SEXUAL",16,28,46,"DKTT INTERNACIONAL","MATERIALES VARIOS","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-12","PRESERVATIVO PRUDENCE  NARANJA C/3    ","OFERTA","PREVENCION DE EMBARAZO Y ENFERMEDADES DE TRANSMISION SEXUAL",16,28,46,"DKTT INTERNACIONAL","MATERIALES VARIOS","305")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-13","PRESERVATIVO PRUDENCE  UVA C/3       ","OFERTA","PREVENCION DE EMBARAZO Y ENFERMEDADES DE TRANSMISION SEXUAL",16,28,46,"DKTT INTERNACIONAL","MATERIALES VARIOS","306")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-14","PRESERVATIVO PRUDENCE  MENTA C/3    ","PRUEBA","PREVENCION DE EMBARAZO Y ENFERMEDADES DE TRANSMISION SEXUAL",16,28,44,"DKTT INTERNACIONAL","MATERIALES VARIOS","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-15","PRESERVATIVO PRUDENCE  MIX C/5","PRUEBA","PREVENCION DE EMBARAZO Y ENFERMEDADES DE TRANSMISION SEXUAL",16,34.5,36,"DKTT INTERNACIONAL","MATERIALES VARIOS","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-16","PRESERVATIVO PRUDENCE  MIX C/10    ","PRUEBA","PREVENCION DE EMBARAZO Y ENFERMEDADES DE TRANSMISION SEXUAL",16,56,30,"DKTT INTERNACIONAL","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-17","PRESERVATIVO PRUDENCE  MIX C/20    ","OFERTA","PREVENCION DE EMBARAZO Y ENFERMEDADES DE TRANSMISION SEXUAL",16,200,62,"DKTT INTERNACIONAL","MATERIALES VARIOS","309")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-18","PRESERVATIVO PRUDENCE RETARDANTE C/3    ","PRUEBA","PREVENCION DE EMBARAZO Y ENFERMEDADES DE TRANSMISION SEXUAL",16,34,36,"DKTT INTERNACIONAL","MATERIALES VARIOS","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-19","PRESERVATIVO PRUDENCE ANILLOS Y PUNTOS C/3    ","PRUEBA","PREVENCION DE EMBARAZO Y ENFERMEDADES DE TRANSMISION SEXUAL",16,32,44,"DKTT INTERNACIONAL","MATERIALES VARIOS","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-20","PRESERVATIVO PRUDENCE ULTRA DELGADO C/3    ","PRUEBA","PREVENCION DE EMBARAZO Y ENFERMEDADES DE TRANSMISION SEXUAL",16,32,44,"DKTT INTERNACIONAL","MATERIALES VARIOS","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-21","PRESERVATIVO PRUDENCE EXTRA FUERTE C/3    ","PRUEBA","PREVENCION DE EMBARAZO Y ENFERMEDADES DE TRANSMISION SEXUAL",16,32,44,"DKTT INTERNACIONAL","MATERIALES VARIOS","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRE-22","PRESERVATIVO PRUDENCE EXTRA GRANDE C/3    ","PRUEBA","PREVENCION DE EMBARAZO Y ENFERMEDADES DE TRANSMISION SEXUAL",16,32,42,"DKTT INTERNACIONAL","","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRI-02","PRIMPERAN TABS 10MG C/20","CATALOGO","REGULADOR DE LA MOTILIDAD INTESTINAL - ANTIEMETICO",0,92.61,60,"SANOFI AVENTIS","METOCLOPRAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRO-01","PROMIBASOL PLUS OVUL 500MG C/10","PRODUCTO DE BAJA","ANTIMICOTICO - AMEBICIDA - GIARDICIDA - TRICOMONICIDA -ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO",0,111,66,"RAYERE","NISTATINA-METRONIDAZOL-FLUOCINOLONA","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRO-03","PRONAXIL TABS 500MG C/8","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,90,80,"STREGER","NAPROXENO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRO-10","PROXALIN PLUS SUSP 125MG C/100ML","OPORTUNIDAD","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,85.75,64,"DEGORTS","NAPROXENO-PARACETAOL","402")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRO-11","PROXALIN PLUS TABS 300MG C/16","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,101.46,66,"DEGORTS","NAPROXENO-PARACETAOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRO-14","PROXITEC I INYT 200MG/100ML C/1","OPORTUNIDAD","ANTIBACTERIANO",0,141.09,72,"TECNOFARMA","CIPROFLOXACINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRO-18","PROKEN M TABS 100MG C/20","CLIENTE ESPECIFICO","ANTIHEMORRAGICO",0,77.18,68,"KENDRICK","METOPROLOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRU-02","PRUEBA DE EMBARAZO EN PLUMA C/1","CATALOGO","DETECCION DE EMBARAZO",16,150,85,"PROVEDIFA","MATERIALES VARIOS","206")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRU-03","PRUEBA DE EMBARAZO EN TIRA C/1","CATALOGO","DETECCION DE EMBARAZO",16,90,85,"PROVEDIFA","MATERIALES VARIOS","207")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRU-04","PRUEBA DE EMBARAZO EN CASSETTE C/1    ","PRUEBA","DETECCION DE EMBARAZO",16,100,85,"PROVEDIFA","MATERIALES VARIOS","301")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PRU-05","PRUEBA DE EMBARAZO EN PLUMA C/2    ","PRUEBA","DETECCION DE EMBARAZO",16,150,78,"PROVEDIFA","MATERIALES VARIOS","307")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PSY-01","PSYLLIUM PLANTAGO G.I. POLVO C/400 G. (APOT)","CLIENTE ESPECIFICO","LAXANTE",0,128.9,55,"APOTEX","PSYLLIUM PLANTAGO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("PUL-01","PULSAR TABS 40MG C/30","CATALOGO","HIPOLIPEMIANTE",0,590,54,"LIOMONT","SIMVASTATINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("QUA-01","QUADRIDERM NF CMA. C/25 G.","PRUEBA","NULL",0,201.95,40,"SCHERING PLOUGH","BETAMETAZONA-CLOTRIMAZOL-GENTAMICINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("QUI-03","QUITADOL TABS 500MG C/10","OPORTUNIDAD","ANALGESICO - ANTIPIRETICO",0,14.5,72,"BIOMEP","PARACETAMOL","402")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RAN-01","RANTUDIL  CAPS 60 MG C/ 14","PRODUCTO DE BAJA","NULL",0,219.5,64,"BAYER","ACEMETACINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RAN-02","RANITIDINA INYT 50MG/2ML C/5 (AMSA)","CATALOGO","ANTIULCEROSO",0,80,80,"AMSA","RANITIDINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RAN-03","RANITIDINA G.I. TAB. 150 MG. C/20 (APOT)","CLIENTE ESPECIFICO","ANTIULCEROSO",0,104,80,"APOTEX","RANITIDINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RAN-06","RANULIN INYT 50MG/2ML C/5","CATALOGO","ANTIULCEROSO",0,69.45,68,"PISA","RANITIDINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RAN-08","RAN - LEVO TAB. 500 MG. C/7","PRODUCTO DE BAJA","NULL",0,279,72,"RANBAXY","LEVOFLOXACINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RAN-12","RANITIDINA INYT 50MG/2ML C/5 (KEND)","PRODUCTO DE BAJA","ANTIULCEROSO",0,45,76,"KENDRICK","RANITIDINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RED-03","REDAFLAM TABS 100MG C/10","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,63,81,"MAVER","NIMESULIDA","206")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RED-04","REDUGEL C/240G","CATALOGO","AUXILIAR EN EL TRATAMIENTO PARA BAJAR DE PESO",16,165,75,"SARDEL","CENTELLA-ALOEVERA-CARNITINA-ROMERO-VIT-E","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("REG-05","REGULACT JBE 10 G C/120 ML","PRUEBA","LAXANTE",0,164.94,57,"VALEANT","LACTULOSA","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("REL-01","RELAXAR CAPS C/60","CATALOGO","RELAJANTE MUSCULAR",0,199,75,"SARDEL","VALERIANA-MELISSA-PASSIFLORA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RET-02","RETOFLAM TAB 7.5 MG C/14","CLIENTE ESPECIFICO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,75,72,"ULtra laboratorios","MELOXICAM","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RID-01","RIDIN JBE. ADTO. C/120 ML.","PRODUCTO DE BAJA","NULL",0,66,62,"SONS","DEXTROMETORFANO-GUAIFENESINA-CLORFENAMIN","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RID-02","RIDIN JBE. INF. C/120 ML.","PRODUCTO DE BAJA","NULL",0,57,62,"SONS","DEXTROMETORFANO-GUAIFENESINA-CLORFENAMIN","308")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RIO-01","RIOPAN GEL 80MG/10ML C/20","CATALOGO","ANTIACIDO - ANTIFLATULENTO",0,169,40,"NYCOMED","DIMETICONA","212")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RIX-01","RIXOBA  CMA 10 MG C/15 G    ","PRUEBA","ANTIMICOTICO",0,50,66,"SONS","TERBINAFINA","307")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ROM-02","ROMETRAN K TABS 10MG C/10","CATALOGO","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,66.3,80,"ARLEX","KETOROLACO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ROM-03","ROMBOX TABS 500MG C/15","CATALOGO","ANTIBACTERIANO - MUCOLITICO",0,354.43,54,"GLAXO SMITH KLINE","CLORFENIRAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ROM-04","ROMBOX SUSP 250MG C/75ML","CATALOGO","ANTIBACTERIANO - MUCOLITICO",0,379.08,54,"GLAXO SMITH KLINE","CLORFENIRAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ROS-01","ROSEL T TABS 50MG C/15","CATALOGO","ANTIVIRAL - ANTIHISTAMINICO - ANALGESICO - ANTIPIRETICO",0,69.5,75,"WERMAR","AMANTADINA-CLORFENIRAMINA-PARACETAMOL","207")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ROS-02","ROSEL INF SOLU 3G C/60ML","CATALOGO","ANTIVIRAL - ANTIHISTAMINICO - ANALGESICO - ANTIPIRETICO",0,93,72,"WERMAR","AMANTADINA-CLORFENIRAMINA-FENILEFRINA-PA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ROY-01","ROYKEN INYT 10MG/1ML C/5","CATALOGO","NULL",0,192.03,68,"KENDRICK","FITOMENADIONA / VIT K1","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RUM-01","RUMOQUIN NF GEL 1G C/60G","CATALOGO","ANTIINFLAMATORIO - ANALGESICO - CORTICOSTEROIDE - ANTIALERGICO",0,120,64,"MARCEL","FENILBUTAZONA-METOCARBAMOL-DEXAMETASONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("RUM-02","RUMOQUIN NF TABS 75MG C/20","OPORTUNIDAD","ANTIINFLAMATORIO - ANALGESICO - CORTICOSTEROIDE - ANTIALERGICO",0,138,72,"MARCEL","FENILBUTAZONA-METOCARBAMOL-DEXAMETASONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SAB-01","SABIMA COMP. 500 MG. C/4","PRODUCTO DE BAJA","NULL",0,125.89,30,"ATLANTIS","SECNIDAZOL","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SAB-02","SABIMA COMP. 500 MG. C/8","PRODUCTO DE BAJA","NULL",0,238.29,30,"ATLANTIS","SECNIDAZOL","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SAL-03","SACRUSYT AERO 20MG C/200DOSIS","CATALOGO","BRONCODILATADOR",0,131,72,"BIOSYNTEC","SALBUTAMOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SAL-04","SALBUTAMOL JRBE 2MG C/60ML","CLIENTE ESPECIFICO","BRONCODILATADOR",0,44,64,"APOTEX","SALBUTAMOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SAN-02","SANA ZANA GEL C/60G","CATALOGO","ANALGESICO - DESINFLAMNTE MUSCULAR",0,71,75,"SARDEL","PETROLATO-SALICILATO DE METILO-ARNICA-SA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SAN-03","SANA ZANA UGTO C/60G","OFERTA","ANALGESICO - DESINFLAMNTE MUSCULAR",0,69,78,"SARDEL","PETROLATO-SALICILATO DE METILO-ARNICA-SA","306")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SAR-01","SARDYLAN CAPS 15MG C/30","CATALOGO","ANTIINFLAMATORIO - ANALGESICO - CORTICOSTEROIDE - ANTIALERGICO",0,69,75,"SARDEL","INDOMETACINA-DEXOMETASNA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SAR-02","SARDYLAN F CAPS 25MG C/30","CATALOGO","ANTIINFLAMATORIO - ANALGESICO - CORTICOSTEROIDE - ANTIALERGICO",0,99,75,"SARDEL","INDOMETACINA-DEXOMETASNA","207")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SAR-03","SARAVANTA TABS 50MG C/30","CATALOGO","ANTIHIPERTENSIVO",0,350,82,"RANBAXY","LOSARTAN","207")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SAR-04","SARAVANTA D TABS 50MG C/30","PRODUCTO DE BAJA","ANTIHIPERTENSIVO - DIURETICO",0,499,70,"RANBAXY","LOSARTAN-HIDROCLOROTIAZIDA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SCA-01","SCARPETT INYT 0.5MG/1ML C/2","CATALOGO","ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO",0,78,64,"GIRALCAMPS","BETAMETAZONA-LIDOCAIN","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SCA-02","SCARPETT K TABS 0.5MG C/20","CATALOGO","ANTIINFLAMATORIO - ANALGESICO - CORTICOSTEROIDE - ANTIALERGICO",0,90,64,"GIRALCAMPS","BETAMETAZONA-KETOROLACO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SED-01","SEDALMERCK TABS 500/50/5 MG C/20","PRUEBA","NULL",0,60.13,40,"MERCK","PARACETAMOL-CAFEINA-FENILEFRINA","303")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SEM-01","SEMPLEX BNP INYT 5MG/1ML C/1","CATALOGO","HEMATOPOYETICO - ANTINEURITICO",0,76.5,64,"GIRALCAMPS","COMPLEJO B","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("37135","SEPIA CAPS 33.3MG C/16","CATALOGO","ANTIMICOTICO-TRICOMONICIDA",0,420,72,"WERMAR","ITROCONAZOL-SECNIDAZOL","207")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("37500","SEPTRIN F TABS 800MG C/14","CATALOGO","ANTIBACTERIANO",0,174,54,"GLAXO SMITH KLINE","TRIMETOPRIM-SULFAMETOXAZOL","207")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("38231","SEPTRIN SUSP 200MG C/120ML","CATALOGO","ANTIBACTERIANO",0,133,54,"GLAXO SMITH KLINE","TRIMETOPRIM-SULFAMETOXAZOL","212")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("38596","SEPTRIN TABS 400MG C/30","CATALOGO","ANTIBACTERIANO",0,158,54,"GLAXO SMITH KLINE","TRIMETOPRIM-SULFAMETOXAZOL","208")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SER-01","SERITRAL CAPS 100MG C/15","CATALOGO","ANTIMICOTICO",0,305,66,"SERRAL","ITRACONAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SER-02","SERRACAL COMP 500MG C/12","PRODUCTO DE BAJA","SUPLEMENTO ALIMENTICIO CON MINERALES",0,148.58,66,"SERRAL","CALCIO","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SER-03","SERRALPINA COMPUESTA GRAG 10MG C/10","CLIENTE ESPECIFICO","ESPASMOLITICO - ANALGESICO - ANTIPIRETICO",0,74.69,66,"SERRAL","BUTILHIOSCINA-METAMIZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SER-07","SERVITAL CAPS C/30","CATALOGO","VITAMINAS Y MINERALES",0,114,75,"SARDEL","MULTIVITAMINICO-MINERALES","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SER-10","SERVAMOX SUSP 250MG C/75ML","OPORTUNIDAD","ANTIBACTERIANO",0,124.32,78,"SANDOZ","AMOXICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SER-13","SERVAMOX CLV 12H SUSP 400MG C/70ML","OPORTUNIDAD","ANTIBACTERIANO",0,270.82,72,"SANDOZ","AMOXICILINA- ACIDO CLAVULANICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SER-14","SERVAMOX CLV SUSP 250MG C/75ML","OPORTUNIDAD","ANTIBACTERIANO",0,242.97,80,"SANDOZ","AMOXICILINA- ACIDO CLAVULANICO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SER-16","SERLIFT TAB 50 MG C/14","CLIENTE ESPECIFICO","ANTIDEPRESIVO",0,270,75,"RANBAXY","SERTRALINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SER-17","SERTRALINA TABS 50 MG C/14    ","CLIENTE ESPECIFICO","ANTIDEPRESIVO",0,270,75,"RANBAXY","SERTRALINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SIB-01","SIBOFIX TABS 500MG C/7","CATALOGO","ANTIBACTERIANO",0,180,66,"MAVI","LEVOFLOXACINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SIM-01","SINPEBAC UGTO 2% C/15G","CATALOGO","ANTIBACTERIANO",0,211.35,54,"VALEANT","MUPIROCINA","207")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SIM-02","SIMVASTATINA TABS 10MG C/14 (KEND)","PRODUCTO DE BAJA","HIPOLIPEMIANTE",0,95.05,62,"KENDRICK","SIMVASTATINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SOL-02","SOLUCION CS INYT 0.9%/500ML C/1 (PISA)","CATALOGO","SOLUCION DE USO HOSPITALARIO",0,53.48,68,"PISA","CLORURO DE SODIO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SOL-03","SOLUCION CS INYT 0.9%/1000ML C/1 (PISA)","CATALOGO","SOLUCION DE USO HOSPITALARIO",0,80.19,72,"PISA","CLORURO DE SODIO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SOL-04","SOLUCION DX CS INYT 0.9%/1000ML C/1 (PISA)","CATALOGO","SOLUCION DE USO HOSPITALARIO",0,80.19,70,"PISA","GLUCOSA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SOL-09","SOLHIDROL INYT 500MG/5ML C/1","CATALOGO","ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO",0,179,66,"SOLARA","HIDROCORTISONA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SOL-22","SOLUCION HT INYT 500ML C/1 (PISA)","CATALOGO","SOLUCION DE USO HOSPITALARIO",0,53.48,66,"PISA","HARTMANN","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SOL-23","SOLUCION HT INYT 1000ML C/1 (PISA)","CATALOGO","SOLUCION DE USO HOSPITALARIO",0,80.19,72,"PISA","HARTMANN","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SOL-24","SOLURAL COCO 12MG/500ML C/12","CATALOGO","HIDRATANTE",0,333.6,55,"AMSA","ELECTROLITOS ORALES","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SOL-25","SOLURAL DURAZNO 12MG/500ML C/12","CATALOGO","HIDRATANTE",0,333.6,55,"AMSA","ELECTROLITOS ORALES","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SOL-26","SOLURAL FRESA 12MG/500ML C/12","CATALOGO","HIDRATANTE",0,333.6,55,"AMSA","ELECTROLITOS ORALES","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SOL-27","SOLURAL MANZANA 12MG/500ML C/12","CATALOGO","HIDRATANTE",0,333.6,55,"AMSA","ELECTROLITOS ORALES","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SOL-48","SOLURAL NARANJA C/12","PRUEBA","HIDRATANTE",0,333.6,54,"AMSA","ELECTROLITOS ORALES","302")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SOL-49","SOLCER INYT 40MG/10ML C/1","OPORTUNIDAD","ANTIULCEROSO",0,242,75,"SOLARA","OMEPRAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SON-52","SONS PIRAL TABS 500 MG C/10    ","PRODUCTO DE BAJA","NULL",0,34,66,"SONS","PARACETAMOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SOV-01","SOVICLOR CREM 0.05G C/5G","PRODUCTO DE BAJA","ANTIVIRAL",0,54,72,"COLLINS","ACICLOVIR","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SUL-02","SULIDEK TABS 100MG C/20","PRODUCTO DE BAJA","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,74,84,"WERMAR","NIMESULIDA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SUL-10","SULFATO FERROSO GI SOL 125MG/ML ENV 15ML C/GOTERO","PRODUCTO DE BAJA","NULL",0,18,30,"FARMACOS CONTINENTALES","SULFATO FERROSO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SUN-01","SUNICAINE SOLU 10% C/115ML","CLIENTE ESPECIFICO","ANESTESICO",0,288.86,70,"UNIPHARM","LIDOCAINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SUP-01","SUPRA TABS 4MG C/30","CATALOGO","GASTROCINETICO - ANTIEMETICO",0,351.9,54,"VALEANT","LIDAMIDINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SUR-02","SURDRIL ADTO JRBE 300MG C/120ML","CATALOGO","ANTITUSIVO - MUCOLITICO - ANTIHISTAMINICO - EXPECTORANTE",0,100.1,72,"INOFARM","DEXTROMETORFANO -AMBROXOL-LORATADINA-GUA","211")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SUR-03","SURDRIL INF JRBE 150MG C/120ML","CATALOGO","ANTITUSIVO - MUCOLITICO - ANTIHISTAMINICO - EXPECTORANTE",0,86.9,72,"INOFARM","DEXTROMETORFANO -AMBROXOL-LORATADINA-GUA","212")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("SYN-01","SYNTOCINON INYT 5UI/1ML C/5","OPORTUNIDAD","INDUCTOR O ESTIMULANTE DE LAS CONTRACCIONES UTERINAS",0,169.61,54,"SANDOZ","OXITOCINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TET-01","TETRA ATLANTIS CAPS 250MG C/16","CATALOGO","ANTIBACTERIANO",0,43.91,60,"ATLANTIS","TETRACICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TET-02","TETRA ATLANTIS CAPS 500MG C/20","CATALOGO","ANTIBACTERIANO",0,86.34,62,"ATLANTIS","TETRACICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TET-03","TETRA ATLANTIS CAPS 250MG C/12","PRODUCTO DE BAJA","NULL",0,35.13,60,"ATLANTIS","TETRACICILINA","308")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("THR-01","THRECHOP SUSP 0.40MG C/120ML","CATALOGO","ANTIDIARREICO",0,75,66,"COLLINS","FURAZOLIDONA-DIYODO-CAOLIN-PECTINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("THR-02","THRECHOP TABS 200MG C/20","CATALOGO","ANTIDIARREICO",0,153,66,"COLLINS","DOXICILINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TIA-01","TIAMIDEXAL INYT 200MG/1ML C/3","CATALOGO","ANTINEURITICO  - ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO",0,370,54,"SILANES","COMPLEJO B","208")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TIA-02","TIAMINAL B12 INYT C/JER 50000/10ML C/5","CATALOGO","VITAMINAS",0,289,54,"SILANES","COMPLEJO B","207")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TIA-03","TIAMINAL B12 TRIVALENTE CAPS 250MCG C/30","CATALOGO","VITAMINAS",0,227,54,"SILANES","COMPLEJO B","208")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TIA-04","TIAMINAL B12 TRIVALENTE INYT C/JER 5000MCG/2ML C/3","CATALOGO","VITAMINAS",0,231,55,"SILANES","COMPLEJO B","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TOF-01","TOFEL TABS 50MG C/10","PRODUCTO DE BAJA","ANTINFLAMATORIO - ANTIPIRETICO - ANALGESICO",0,123.6,70,"VICTORY ENTERPRISES","DICLOFENACO-PARACETAMOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TOM-01","TOMPLEX SOLU C/360ML","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,87.4,75,"SARDEL","MULTIVITAMINICO-GLICINA-COLINA-INOSITOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TRE-01","TREXOL CAPS 50MG C/10","PRODUCTO DE BAJA","ANALGESICO",0,131.39,30,"ATLANTIS","TRAMADOL","308")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TRE-02","TREXOL INYT 100MG/2ML C/5","PRODUCTO DE BAJA","ANALGESICO",0,160.65,30,"ATLANTIS","TRAMADOL","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TRI-04","TRIBEDOCE COMPUESTO INYT 100MG/3ML C/3","CATALOGO","ANTIINFLAMATORIO - ANALGESICO -ANTIPIRETICO - ANTINEURITICO",0,125,66,"BRULUART","DICLOFENACO-COMPLEJO B","208")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TRI-05","TRIBEDOCE DX INYT 100MG/1ML Y 4MG/2ML C/3","PRODUCTO DE BAJA","ANTINEURITICO - HEMATOPOYETICO -ANTIINFLAMATORIO - CORTICOSTEROIDE - ANTIALERGICO - ANESTESICO",0,145,66,"BRULUART","DEXAMETASONA-COMPLEJO B-LIDOCAINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TRI-06","TRIBEDOCE INYT C/JER 50,000U/2ML C/5","CATALOGO","VITAMINAS",0,135,66,"BRULUART","VITAMINAS B1-B6-B12-HIDROXOCOBALAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TRI-09","TRIMETOPRIMA SULFAMETAZOL SUSP 40MG C/120ML (APOT)","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,68,70,"APOTEX","TRIMETOPRIM-SULFAMETOXAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TRI-10","TRIMETOPRIM SULFAMETAZOL TABS 160MG C/14 (APOT)","CLIENTE ESPECIFICO","ANTIBACTERIANO",0,94,72,"APOTEX","TRIMETOPRIM-SULFAMETOXAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TRI-14","TRIXONA IM INYT 1G/3.5ML C/1","CATALOGO","ANTIBACTERIANO - ANESTESICO",0,150,82,"BRULUART","CEFTRIAXONA-LIDOCAINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TRI-16","TRIXONA IM INYT 500MG/2ML C/1","CATALOGO","ANTIBACTERIANO - ANESTESICO",0,105,80,"BRULUART","CEFTRIAXONA-LIDOCAINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("TRO-02","TROCILETAS B LIMON TABS 2.5MG C/10","PRODUCTO DE BAJA","ANTISEPTICO-ANESTESICO",0,36,70,"STREGER","CETILPIRIDINO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ULC-01","ULCEVIT GRAG 150MG C/20","CATALOGO","ANTIULCEROSO",0,39.8,80,"BRULUART","RANITIDINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("UNI-06","UNIFER CAPS 18MG C/30","CATALOGO","HEMATOPOYETICO - ANTIANEMICO",0,197.85,55,"VALEANT","HIERRO DEXTRAN","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("UNO-01","UNOKAVI 2MG ENV C/5 AMP","PRODUCTO DE BAJA","ANTIHEMORRAGICO",0,200,45,"PISA","FITOMENADIONA / VIT K1","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("UNO-02","UNOKAVI 10MG ENV C/5AMP.","PRODUCTO DE BAJA","ANTIHEMORRAGICO",0,131.25,15,"PISA","FITOMENADIONA / VIT K1","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VAN-04","VANTAL BUCO 15G C/360ML","CATALOGO","ANTINFLAMATORIO - ANTICEPTICO - ANALGESICO BUCOFARINGEO",0,186.63,54,"VALEANT","BENCIDAMINA","212")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VAN-05","VANTAL V SOLU 5% C/50ML","PRODUCTO DE BAJA","ANTINFLAMATORIO - ANTICEPTICO - ANALGESICO BUCOFARINGEO",0,108.2,30,"VALEANT","BENCIDAMINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VAN-07","VANMOXOL SUSP 250/15 MG C/90 ML","PRUEBA","ANTIBACTERIANO - MUCOLITICO -EXPECTORANTE",0,65,77,"WANDEL","AMOXICILINA-AMBROXOL","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VAN-08","VANMOXOL CAPS 500/30 MG C/12","PRUEBA","ANTIBACTERIANO - MUCOLITICO",0,70,70,"WANDEL","AMOXICILINA-AMBROXOL","307")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VEN-06","VENDA ELASTICA 30 CM X 5 MTS.","PRODUCTO DE BAJA","MATERIAL DE CURACION",16,18.9,33,"VENDALASTIC","MATERIALES VARIOS","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VEN-07","VENGESIG GRAG 100MG C/20","CATALOGO","ANTIINFLAMATORIO - ANALGESICO - CORTICOSTEROIDE - ANTIALERGICO",0,150,66,"COLLINS","FENILBUTAZONA-DEXAMETASONA-METOCARBAMOL-","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VEN-08","VENALOT DEPOT TABS 180MG C/30","CATALOGO","AUXILIAR EN EL TRATAMIENTO DE VARICES",0,380,40,"NYCOMED","TROXERUTINA - CUMARINA","208")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VER-01","VERAPAMILO G.I. GRAG. 80 MG. C/20 (APOT)","CLIENTE ESPECIFICO","ANTIHIPERTENSIVO",0,112.2,68,"APOTEX","VERAPAMILO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VER-03","VERTISAL CAPS 400MG C/40","PRODUCTO DE BAJA","AMEBICIDA - GIARDICIDA - TRICOMONICIDA",0,212,54,"SILANES","METRONIDAZOL","308")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VER-04","VERTISAL PED SUSP 125MG C/180ML","PRODUCTO DE BAJA","AMEBICIDA - GIARDICIDA - TRICOMONICIDA",0,166,54,"SILANES","METRONIDAZOL","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VER-05","VERTISAL PED SUSP 250MG C/180ML","PRODUCTO DE BAJA","AMEBICIDA - GIARDICIDA - TRICOMONICIDA",0,235,54,"SILANES","METRONIDAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VER-06","VERMIN DAZOL SUSP 2G C/30ML","PRODUCTO DE BAJA","NULL",0,36,70,"STREGER","MEBENDAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VER-07","VERMIN DAZOL COMP 100MG C/6","PRODUCTO DE BAJA","ANTIHELMINTICO",0,30,75,"STREGER","MEBENDAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VER-10","VERMISEN TAB. 200 MG C/2","OFERTA","ANTIHELMINTICO",0,5.65,58,"NOVAG INFANCIA","ALBENDAZOL","306")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VIM-01","VIMITAL CAPS C/50","CATALOGO","VITAMINAS Y MINERALES",0,185,75,"SARDEL","MULTIVITAMINICO-MINERALES","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VIS-01","VI SYNERAL CAPS 5000U C/60","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",16,199.24,60,"VALEANT","VITAMINAS-MINERALES","208")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VIS-02","VISERTRAL TABS 10MG C/10","CLIENTE ESPECIFICO","ANTIHISTAMINICO",0,132,66,"SERRAL","CETIRIZINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VIT-01","VITACAP CAPS CAJA C/30","CATALOGO","VITAMINAS Y MINERALES",0,95,75,"SARDEL","MULTIVITAMINICO-MINERALES","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VIT-02","VITACAP CAPS FCO C/30","CATALOGO","VITAMINAS Y MINERALES",0,92,75,"SARDEL","MULTIVITAMINICO-MINERALES","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VIT-04","VITAMINA E 500 CAPS C/30 (PHAR)","CLIENTE ESPECIFICO","VITAMINAS",0,140,62,"PHARMACAPS","VITAMINA E-GERMEN DE TRIGO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VIT-06","VITAMINA E PERL C/30 (SARD)","CATALOGO","VITAMINAS",0,115,75,"SARDEL","VITAMINA E","208")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VIT-07","VITAMYNOL SOLU C/360ML","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,87.4,78,"SARDEL","MULTIVITAMINICO-MINERALES","BATEA")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VIT-11","VITAREAL SOLU AC FOLICO 10ML C/10","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,148,75,"SARDEL","MULTIVITAMINICO-JALEA REAL-ACIDO FOLICO","208")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VIT-12","VITAREAL SOLU AC GLUTAMINICO 10ML C/10","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,148,75,"SARDEL","MULTIVITAMINICO-JLEA REAL-ACIDO GLUTAMIC","206")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VIT-13","VITAREAL SOLU HIERRO 10ML C/10","CATALOGO","SUPLEMENTO ALIMENTICIO CON VITAMINAS - MINERALES",0,148,75,"SARDEL","MULTIVITAMINICO-JALEA REAL-HIERRO","207")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VIT-14","VITA C TABS C/60","CATALOGO","VITAMINAS",0,170,75,"SARDEL","VITAMINA C","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VOL-01","VOLFENAC GEL 1.16G C/60G","PRODUCTO DE BAJA","ANTIINFLAMATORIO - ANALGESICO     - ANTIPIRETICO",0,84,70,"COLLINS","DICLOFENACO","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("VTB-01","VT BIEN TABS C/60","CATALOGO","SUPLEMENTO ALIMENTICIO",0,185,75,"SARDEL","ALCACHOFA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("WER-01","WERMY CAPS 300 MG C/16","CLIENTE ESPECIFICO","TRATAMIENTO PARA NEUROPATIA DIABETICA",0,204,70,"WERMAR","GABAPENTINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("YEC-01","YECTAMICINA INYT 160MG/2ML C/1","CATALOGO","ANTIBACTERIANO",0,181.85,57,"VALEANT","GENTAMICINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("YEC-02","YECTAMICINA INYT 80MG/1ML C/1","CATALOGO","ANTIBACTERIANO",0,137.36,57,"VALEANT","GENTAMICINA","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ZEN-01","ZENTEL SUSP 400MG C/10ML","CATALOGO","ANTIHELMINTICO",0,86.5,50,"SANFER S.A. DE C.V.","ALBENDAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ZEN-02","ZENTEL TABS 200MG C/10","CATALOGO","ANTIHELMINTICO",0,152,50,"SANFER S.A. DE C.V.","ALBENDAZOL","208")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ZOL-02","ZOLPRA TABS 40MG C/14","CATALOGO","ANTIULCEROSO",0,349,78,"RANBAXY","PANTOPRAZOL","NULL")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ZXI-02","Z-XIN TABS 500 MG C/8","PRODUCTO DE BAJA","ANTIBACTERIANO",0,93.5,75,"BIOMEP","CIPROFLOXACINO","304")'); 
tx.executeSql('INSERT INTO ARTICULO (articulo,descripcion,clas,accion,impuesto,precio,descuento,laboratorio,sal,ubi) VALUES ("ZXI-03","Z-XIN TABS  500 MG C/12    ","PRODUCTO DE BAJA","ANTIBACTERIANO",0,104.5,75,"BIOMEP","CIPROFLOXACINO","NULL")'); 



		}
}//function insertar(){

function guardacliente(nombre,empresa,rfc,direccion,colonia,estado,municipio,telefono){
	consultadb().transaction(nuevocli,function(err){
    	  alert("Error al insertar cliente: "+err.code+err.message);
          },alert("clientes insertados"));
				
    	function nuevocli(tx) {		
		tx.executeSql('INSERT INTO CLIENTES (nombre,clave,dia,direccion,telefono,tipo,diasc,lcredito) VALUES ("Farmacia UNO", "1020","Lunes","Dirección del cliente","2281545130","C","30","10000.00")');        
        tx.executeSql('INSERT INTO CLIENTES (nombre,clave,dia,direccion,telefono,tipo,diasc,lcredito) VALUES ("Farmacia DOS", "1020","Lunes","Dirección del cliente DOS","2281545130","C","30","10000.00")');        
		}
	
}//function guardacliente(
function insertatemppedido(articulo,cantidad){
	   
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar renglon: "+err.code+err.message);
          },alert("Artículo insertado en pedido"));
				
    	function insertadet(tx) {		
		//alert('entra a insert de detallepedido');
		tx.executeSql('INSERT INTO TEMPEDIDO (articulo,cantidad,cliente) VALUES ("'+articulo+'",'+cantidad+',"'+window.localStorage.getItem("clave")+'")');        
		}
	
}//function insertatemppedido
function insertatempfactura(articulo,cantidad){
	   //alert('inserttafactura'+cantidad);
	    consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar renglon factura: "+err.code+err.message);
          });
				
    	function insertadet(tx) {		
		
		tx.executeSql('INSERT INTO TEMFACTURA (articulo,cantidad,cliente) VALUES ("'+articulo+'",'+Number(cantidad)+',"'+window.localStorage.getItem("clave")+'")');
		tx.executeSql('UPDATE ARTICULO_EXISTENCIA SET existencia=existencia-'+Number(cantidad)+' WHERE articulo="'+articulo+'" and bodega="K01"');        
		}
	
}//function insertatempfactura
function eliminatemppedido(articulo){
	   
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al eliminar renglon: "+err.code+err.message);
          },alert("Artículo eliminado en pedido"));
				
    	function insertadet(tx) {		
		//alert('entra a delete de detallepedido');
		tx.executeSql('DELETE FROM TEMPEDIDO WHERE ARTICULO="'+articulo+'" and cliente="'+window.localStorage.getItem("clave")+'"');        
		}
	
}//function eliminatemppedido
function eliminatempfactura(articulo,cantidad){
	   
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al eliminar renglon de tempfactura: "+err.code+err.message);
          },alert("Artículo eliminado en tempfac"));
				
    	function insertadet(tx) {		
		//alert('entra a delete de detallefactura');
		tx.executeSql('DELETE FROM TEMFACTURA WHERE ARTICULO="'+articulo+'" and cliente="'+window.localStorage.getItem("clave")+'"');        
		tx.executeSql('UPDATE ARTICULO_EXISTENCIA SET existencia=existencia+'+cantidad+' WHERE articulo="'+articulo+'" and bodega="K01"');
		}
	
}//function eliminatempfactura
function modificatemppedido(articulo,cantidad){
	   
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al modifica renglon: "+err.code+err.message);
          },alert("Artículo modificado en pedido"));
				
    	function insertadet(tx) {		
		//alert('entra a modificar detallepedido');
		
		tx.executeSql('UPDATE TEMPEDIDO SET CANTIDAD='+cantidad+' WHERE ARTICULO="'+articulo+'" and cliente="'+window.localStorage.getItem("clave")+'"');        
		}
	
}//function modificatemppedido
function modificatempfactura(articulo,cantidad){
	   
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al modifica renglonen factura: "+err.code+err.message);
          },alert("Artículo modificado en factura"));
				
    	function insertadet(tx) {		
		//alert('entra a modificar detallefactura cantidad: '+cantidad);		
		if (Number(cantidad)>0){
			tx.executeSql('UPDATE TEMFACTURA SET CANTIDAD=cantidad+'+cantidad+' WHERE ARTICULO="'+articulo+'" and cliente="'+window.localStorage.getItem("clave")+'"');        
			tx.executeSql('UPDATE ARTICULO_EXISTENCIA SET existencia=existencia-'+cantidad+' WHERE articulo="'+articulo+'" and bodega="K01"');
		}
		else{
			cantidad=Number(cantidad)*-1
			//alert('cantidad menor a cero');
			tx.executeSql('UPDATE TEMFACTURA SET CANTIDAD=cantidad-'+cantidad+' WHERE ARTICULO="'+articulo+'" and cliente="'+window.localStorage.getItem("clave")+'"');        
			tx.executeSql('UPDATE ARTICULO_EXISTENCIA SET existencia=existencia+'+cantidad+' WHERE articulo="'+articulo+'" and bodega="K01"');	
		}
		}
	
}//function modificatempfactura
function limpiartemp(){
	   //limpia tablas temporales que tienen articulos en pedido y/o factura
	consultadb().transaction(limpiatabla,function(err){
    	  alert("Error al limpiar tablas: "+err.code+err.message);
          },alert("TABLAS VACIAS"));
				
    	function limpiatabla(tx) {				
		tx.executeSql('DELETE FROM TEMFACTURA ');        
		tx.executeSql('DELETE FROM TEMPEDIDO ');        
		
		}
	
}//function limpiartemp
function guardaencpedido(pedido,ruta,cliente,hora,fecha,impuesto,total,subtotal,descuento,obs,cond,bodega){
	   //alert (pedido+ruta+cliente+hora+fecha+impuesto+total+subtotal+descuento+obs+cond+bodega);
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar en pedido: "+err.code+err.message);
          },function(){
			mostrarpedido();  
			obtenerconse();	
			window.localStorage.setItem("sioperacion","S");		  
			navigator.notification.alert('Pedido Guardado',null,'Preventa','Aceptar');					  
			  
		  });
				
    	function insertadet(tx) {		
		//alert('entra a modificar detallefactura cantidad: '+cantidad);		
		
			tx.executeSql('INSERT INTO ENCPEDIDO (num_ped,cod_zon,cod_clt,tip_doc,hor_fin,fec_ped,fec_des,mon_imp_vt,mon_civ,mon_siv,mon_dsc,obs_ped,estado,cod_cnd,cod_bod) VALUES("'+pedido+'","'+ruta+'","'+cliente+'","S","'+hora+'","'+fecha+'","'+fecha+'",'+impuesto+','+total+','+subtotal+','+descuento+',"'+obs+'","1",'+cond+',"'+bodega+'")'); 
			tx.executeSql('UPDATE PARAMETROS SET num_ped="'+pedido+'"');		
			limpiartemppedido()
			
		}
	
}//function guardaencpedido
function guardadetpedido(pedido,articulo,precio,pordescuento,totalinea,descuento,precio,cantidad){
	   //alert (pedido+articulo+precio+pordescuento+totalinea+descuento+precio+cantidad);
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar en detallepedido: "+err.code+err.message);
          },alert("Detalle Pedido Guardado"));
				
    	function insertadet(tx) {		
		//alert('entra a modificar detallefactura cantidad: '+cantidad);		
		
			tx.executeSql('INSERT INTO DETPEDIDO (num_ped,cod_art,mon_prc_mn,por_dsc_ap,mon_tot,mon_dsc,mon_prc_mx,cnt_max) VALUES("'+pedido+'","'+articulo+'",'+precio+','+pordescuento+','+totalinea+','+descuento+','+precio+','+cantidad+')'); 
		}
	
}//function guardadetpedido
function guardaencfactura(pedido,ruta,cliente,hora,fecha,impuesto,total,subtotal,descuento,obs,cond,bodega){
	   //alert (pedido+ruta+cliente+hora+fecha+impuesto+total+subtotal+descuento+obs+cond+bodega);
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar en factura: "+err.code+err.message);
          },function(){
			  
			mostrarfactura();  			 
            obtenerconse();	
			window.localStorage.setItem("sioperacion","S");		  
			navigator.notification.alert('Documento Guardado',null,'Venta a Bordo','Aceptar');					
			
			  
		  });
				
    	function insertadet(tx) {		
		//alert('entra a modificar detallefactura cantidad: '+cantidad);		
		
			tx.executeSql('INSERT INTO ENCPEDIDO (num_ped,cod_zon,cod_clt,tip_doc,hor_fin,fec_ped,fec_des,mon_imp_vt,mon_civ,mon_siv,mon_dsc,obs_ped,estado,cod_cnd,cod_bod) VALUES("'+pedido+'","'+ruta+'","'+cliente+'","S","'+hora+'","'+fecha+'","'+fecha+'",'+impuesto+','+total+','+subtotal+','+descuento+',"'+obs+'","F",'+cond+',"'+bodega+'")'); 
			tx.executeSql('UPDATE PARAMETROS SET num_fac="'+pedido+'"');		
			limpiartemppedido();
			
		}
	
}//function guardaencfactura
function guardadetfactura(pedido,articulo,precio,pordescuento,totalinea,descuento,precio,cantidad){
	   //alert (pedido+articulo+precio+pordescuento+totalinea+descuento+precio+cantidad);
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar en detallefactura: "+err.code+err.message);
          },alert("Detalle Factura Guardado"));
				
    	function insertadet(tx) {		
		//alert('entra a modificar detallefactura cantidad: '+cantidad);		
		
			tx.executeSql('INSERT INTO DETPEDIDO (num_ped,cod_art,mon_prc_mn,por_dsc_ap,mon_tot,mon_dsc,mon_prc_mx,cnt_max) VALUES("'+pedido+'","'+articulo+'",'+precio+','+pordescuento+','+totalinea+','+descuento+','+precio+','+cantidad+')'); 
		}
	
}//function guardadetfactura

function limpiartemppedido(){
	   //limpia tablas temporales que tienen articulos en pedido y/o factura
	consultadb().transaction(limpiatabla,function(err){
    	  alert("Error al limpiar tabla de tempedido: "+err.code+err.message);
          });
				
    	function limpiatabla(tx) {						
		tx.executeSql('DELETE FROM TEMPEDIDO where cliente="'+window.localStorage.getItem("clave")+'"');        
		
		}
	
}//function limpiartemppedido
function limpiartempfactura(){
	   //limpia tablas temporales que tienen articulos en pedido y/o factura
	consultadb().transaction(limpiatabla,function(err){
    	  alert("Error al limpiar tabla de tempfactura: "+err.code+err.message);
          });
				
    	function limpiatabla(tx) {						
		tx.executeSql('DELETE FROM TEMFACTURA where cliente="'+window.localStorage.getItem("clave")+'"');        
		
		}
	
}//function limpiartempfactura
function actsaldocliente(importe){
	  
	consultadb().transaction(limpiatabla,function(err){
    	  alert("Error al actualizar saldo en cliente: "+err.code+err.message);
          });
				
    	function limpiatabla(tx) {						
		tx.executeSql('UPDATE CLIENTES SET SALDO='+importe+' where clave="'+window.localStorage.getItem("clave")+'"');        
		
		}
	
}//function limpiartemppedido
function actualizatempdev(linea,cantidad,observa){
	   //alert('actualiza tempdev'+cantidad+' '+linea);
	    consultadb().transaction(insertadet,function(err){
    	  alert("Error al modificar renglon temdevolucion: "+err.code+err.message);
          });
				
    	function insertadet(tx) {		
		tx.executeSql('UPDATE TEMDEV SET cantidad='+cantidad+',obs="'+observa+'" where linea='+linea);		
		}
	
}//function actualizatempdev
function insertatempdev(articulo,linea){
	   //alert('inserttafactura'+cantidad);
	    consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar renglon temdevolucion: "+err.code+err.message);
          });
				
    	function insertadet(tx) {		
		   tx.executeSql('INSERT INTO TEMDEV (articulo,linea,cantidad,obs) VALUES ("'+articulo+'",'+linea+','+0+',"")');		
		}
	
}//function actualizatempdev
function eliminatempdev(){
	   //alert('inserttafactura'+cantidad);
	    consultadb().transaction(insertadet,function(err){
    	  alert("Error al eliminar temdevolucion: "+err.code+err.message);
          });
				
    	function insertadet(tx) {		
		//alert('entra a eliminar tempdev');
		   tx.executeSql('DELETE FROM TEMDEV ');		
		}
	
}//function eliminatempdev
function guardaencdev(devolucion,ruta,cliente,horaini,horafin,fecha,obs,renglones,subtotal,impuesto,bodega,factura){
	  //alert(devolucion+' '+ruta+' '+cliente+' '+horaini+' '+horafin+' '+fecha+' '+obs+' '+renglones+' '+subtotal+' '+impuesto+' '+bodega+' '+factura);
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar encabezado devolucion: "+err.code+err.message);
          },function(){
			   obtenerconse();			  
			   window.localStorage.setItem("sioperacion","S");
			   navigator.notification.alert('Devolución Guardada',null,'Devolución','Aceptar');					
			});
				
    	function insertadet(tx) {		
		//alert('entra a modificar detallefactura cantidad: '+cantidad);		
		
			tx.executeSql('INSERT INTO ENCDEV (num_dev,cod_zon,cod_clt,hor_ini,hor_fin,fec_dev,obs_dev,num_itm,est_dev,mon_siv,mon_dsc,por_dsc_ap,mon_imp_vt,mon_imp_cs,cod_bod,impreso,num_ref) VALUES("'+devolucion+'","'+ruta+'","'+cliente+'","'+horaini+'","'+horafin+'","'+fecha+'","'+obs+'",'+renglones+',"A",'+subtotal+',0,0,'+impuesto+',0,"'+bodega+'","N","'+factura+'")'); 
   			tx.executeSql('UPDATE PARAMETROS SET num_dev="'+devolucion+'"');		
//hor_ini:fecha y hora en que inicia la devolución
//hor_fin:fecha y hora en que guarda la devolución
//fec_dev: solo fecha de devolución
//mon_siv: suma de importe total de los renglones sin aplicar iva,descuento
//mon_dsc: no aplica, lleva cero
//por_dsc_ap: no aplica, lleva cero
//mon_imp_vt:suma de iva de los renglones
//mon_imp_cs: no aplica, lleva cero
		}
	
}//function guardaencdev
function guardadetdev(devolucion,ruta,articulo,totalinea,precio,cantidad,obs,descuento,pordescuento,factura,linea){
	  //alert(devolucion+ruta+articulo+' '+totalinea+' '+precio+' '+cantidad+' '+obs+' '+descuento+' '+pordescuento);
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar en DETDEV: "+err.code+err.message);
          },alert("Detalle Devolucion Guardado"));
				
    	function insertadet(tx) {		
		//alert('entra a insertadet');				
			tx.executeSql('INSERT INTO DETDEV (num_dev,cod_zon,cod_art,ind_dev,mon_tot,mon_prc_mx,mon_prc_mn,cnt_max,obs_dev,mon_dsc,por_dsc_ap) VALUES("'+devolucion+'","'+ruta+'","'+articulo+'","B",'+totalinea+','+precio+','+precio+','+cantidad+',"'+obs+'",'+descuento+','+pordescuento+')'); 
			//alert('despues de insertadet');				
			tx.executeSql('UPDATE DETHISFAC SET devuelto=devuelto+'+cantidad+' where linea='+linea+' and factura="'+factura+'"');		
			//alert('despues de actualizar dethisfac');				
			
		}
//mon_tot:total de la linea sin iva,ni descuento (precio*cantidad)
//mon_prc_mx:precio
//mon_prc_mn:precio
//cnt_max: cantidad
//mon_dsc: importe de descuento aplicado a toda la linea
//por_dsc_ap: porcentaje de descuento aplicado a la linea

}//function guardadetdev
function actexis(articulo,cantidad){
	   
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al actualizar existencia: "+err.code+err.message);
          });
				
    	function insertadet(tx) {				
			if (Number(cantidad)>0){
			tx.executeSql('UPDATE ARTICULO_EXISTENCIA SET existencia=existencia+'+cantidad+' WHERE articulo="'+articulo+'" and bodega="'+window.localStorage.getItem("bodega")+'"');
			}
			else{
			cantidad=Number(cantidad)*-1
			//alert('cantidad menor a cero');			      
			tx.executeSql('UPDATE ARTICULO_EXISTENCIA SET existencia=existencia-'+cantidad+' WHERE articulo="'+articulo+'" and bodega="'+window.localStorage.getItem("bodega")+'"');	
			}
		}	
}//function  actexis
function insertatempcob(factura,abono,saldo){
	 // navigator.notification.alert('entra insertatempcob '+factura+' '+abono+' '+saldo,null,'','Aceptar');	
	    consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar renglon temcobros: "+err.code+err.message);
          });
				
    	function insertadet(tx) {		
		   tx.executeSql('INSERT INTO TEMCOBROS (factura,abonado,saldo) VALUES ("'+factura+'",'+abono+','+saldo+')');		
		}
	
}//function insertatempcob(factura)
function actualizatempcob(factura,cantidad){
	   //alert('actualiza tempcob'+factura+' '+cantidad);
	    consultadb().transaction(insertadet,function(err){
    	  alert("Error al modificar renglon TEMCOBROS: "+err.code+err.message);
          });
				
    	function insertadet(tx) {		
		tx.executeSql('UPDATE TEMCOBROS SET abonado='+cantidad+' where factura="'+factura+'"');		
		}
	
}//function actualizatempcob(factura,cantidad)

function eliminatempcob(){
	   //alert('inserttafactura'+cantidad);
	    consultadb().transaction(insertadet,function(err){
    	  alert("Error al eliminar temcobros: "+err.code+err.message);
          });
				
    	function insertadet(tx) {		
		//alert('entra a eliminar temcobros');
		   tx.executeSql('DELETE FROM TEMCOBROS ');		
		}
	
}//function eliminatempcob()
function insertarcheque(nche,ncta,banco,monto){
	   //alert('inserta cheque');
	   var cliente=window.localStorage.getItem("clave");
	   var ruta=window.localStorage.getItem("ruta");
	   var fecha=window.localStorage.getItem("fecha");
	    consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar cheque: "+err.code+err.message);
          });
				
    	function insertadet(tx) {
			var sql='INSERT INTO CHEQUES (codbanco,cliente,ruta,fecha,monto,numcheque,cuenta,recibo,tipo) VALUES("'+banco+'","'+cliente+'","'+ruta+'", ';		
				sql+='"'+fecha+'",'+monto+',"'+nche+'","'+ncta+'","99999",5)';		
				//alert(sql);
		   tx.executeSql(sql);		
		}
	
}//function insertarcheque(nche,ncta,banco,monto)
function eliminacheque(id){
	   //alert('inserttafactura'+cantidad);
	    consultadb().transaction(insertadet,function(err){
    	  alert("Error al eliminar cheque: "+err.code+err.message);
          });
				
    	function insertadet(tx) {		
		//alert('entra a eliminar cheque');
		   tx.executeSql('DELETE FROM CHEQUES where id='+id);		
		}
	
}//function eliminacheque
function eliminachequexrecibo(){
	   //alert('inserttafactura'+cantidad);
	    consultadb().transaction(insertadet,function(err){
    	  alert("Error al eliminar cheque: "+err.code+err.message);
          });
				
    	function insertadet(tx) {		
		//alert('entra a eliminar cheque');
		   tx.executeSql('DELETE FROM CHEQUES where recibo="99999"');		
		}
	
}//function eliminacheque

function guardaenccob(cliente,tipo,ruta,recibo,horaini,horafin,estado,monche,monefe,totalrecibo){
	  //alert(cliente+','+tipo+','+ruta+','+recibo+','+horaini+','+horafin+','+estado+','+monche+','+monefe+','+totalrecibo);
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar encabezado de cobro: "+err.code+err.message);
          },function(){
			actsaldo(totalrecibo*-1);  
			 
			 	consultadb().transaction(actcheque,function(err){
		    	  alert("Error al actualizar recibo en cheques: "+err.code+err.message); });				
    			function actcheque(tx) {		
					//alert('entra a modificar recibo de cheque: '+recibo);				
					tx.executeSql('UPDATE CHEQUES SET recibo="'+recibo+'" where recibo="99999" and cliente="'+cliente+'"');							
					tx.executeSql('UPDATE PARAMETROS SET num_rec="'+recibo+'"');		
				}  
				obtenerconse();
				window.localStorage.setItem("sioperacion","S");
		  });
				
    	function insertadet(tx) {		
		//alert('entra a modificar detallefactura cantidad: '+cantidad);				
			tx.executeSql('INSERT INTO ENCOBROS (cliente,tipo,ruta,recibo,hor_ini,hor_fin,impreso,estado,monche,monefe,mondoc) VALUES("'+cliente+'","'+tipo+'","'+ruta+'","'+recibo+'","'+horaini+'","'+horafin+'","N","'+estado+'",'+monche+','+monefe+','+totalrecibo+')'); 
		}
	
}//function guardaenccob
function guardadetcob(cliente,tipo,tipoaso,ruta,recibo,factura,estado,monto,saldo_doc){
	  //alert(cliente+' '+tipo+' '+tipoaso+' '+ruta+' '+recibo+' '+factura+' '+estado+' '+monto+' '+saldo_doc);
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar en DETCOBROS: "+err.code+err.message);
          },function(){ //actualiza el saldo en las facturas pendientes de cobro de la tabla PENCOBRO
			   //alert('entra aqui');
			   
			 consultadb().transaction(actsaldofac,function(err){
		    	  alert("Error al actualizar saldo de factura: "+err.code+err.message); });
				
    			function actsaldofac(tx) {		
					//alert('entra a modificar saldo de factura: '+saldo_doc);				
					tx.executeSql('UPDATE PENCOBRO SET saldo='+saldo_doc+' where documento="'+factura+'"');		
				}  			  
		  });
				
    	function insertadet(tx) {		
		//alert('entra a insertadet');				
			tx.executeSql('INSERT INTO DETCOBROS (cliente,tipo,tipoaso,ruta,recibo,docafectado,estado,monto,saldo_doc) VALUES("'+cliente+'","'+tipo+'","'+tipoaso+'","'+ruta+'","'+recibo+'","'+factura+'","'+estado+'",'+monto+','+saldo_doc+')'); 
			//alert('despues de insertadet');				
			
		}

}//function guardadetcob
function guardadetdep(monche,monefe,deposito,recibo){
	  //alert(monche+' '+monefe+' '+deposito+' '+recibo);
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar en DETDEP: "+err.code+err.message);
          },function(){ //actualiza el saldo en las facturas pendientes de cobro de la tabla PENCOBRO
			   //alert('entra aqui');
			   
			 consultadb().transaction(actsaldofac,function(err){
		    	  alert("Error al actualizar recibo: "+err.code+err.message); });
				
    			function actsaldofac(tx) {		
					//alert('entra a modificar saldo de factura: '+saldo_doc);				
					tx.executeSql('UPDATE ENCOBROS SET depositado="S" where recibo="'+recibo+'"');		
				}  			  
		  });
				
    	function insertadet(tx) {		
		//alert('entra a insertadet');				
			tx.executeSql('INSERT INTO DETDEP (monche,monefe,deposito,recibo) VALUES('+monche+','+monefe+',"'+deposito+'","'+recibo+'")'); 
						
			//alert('despues de insertadet');							
		}

}//function guardadetdep
function guardaencdep(codigo,cuenta,deposito,fecha,monto,obs){
	  //alert(cliente+' '+tipo+' '+tipoaso+' '+ruta+' '+recibo+' '+factura+' '+estado+' '+monto+' '+saldo_doc);
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar en ENCDEP: "+err.code+err.message);
          });
				
    	function insertadet(tx) {		
		//alert('entra a insertadet');				
			tx.executeSql('INSERT INTO ENCDEP (codigo,cuenta,deposito,fec_dep,mon_dep,obs) VALUES("'+codigo+'","'+cuenta+'","'+deposito+'","'+fecha+'",'+monto+',"'+obs+'")'); 
			
			//alert('despues de insertadet');				

							/*	 tx.executeSql('CREATE TABLE IF NOT EXISTS ENCDEP (id INTEGER PRIMARY KEY AUTOINCREMENT, codigo,cuenta,deposito,doc_pro,fec_dep,mon_dep,obs)'); 
		  tx.executeSql('CREATE TABLE IF NOT EXISTS DETDEP (id INTEGER PRIMARY KEY AUTOINCREMENT, monche,monefe,deposito,recibo,obs)'); 
		  */
		}

}//function guardaencdep
function guardavisita(cliente,visitaini,visitafin,visitaini,notas,razon,ruta){
	  //alert(cliente+' '+tipo+' '+tipoaso+' '+ruta+' '+recibo+' '+factura+' '+estado+' '+monto+' '+saldo_doc);
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar en VISITA: "+err.code+err.message);
          });
				
    	function insertadet(tx) {		
		//alert('entra a insertadet');				
			tx.executeSql('INSERT INTO VISITA (cliente,fecha_plan,fin,inicio,notas,razon,ruta) VALUES("'+cliente+'","'+visitaini+'","'+visitafin+'","'+visitaini+'","'+notas+'","'+razon+'","'+ruta+'")'); 
		}
 
}//function guardavisita

function f1_1(){
	  alert('entra a funcion f1_1');
	consultadb().transaction(insertadet,function(err){
    	  alert("Error al insertar en DETDEV: "+err.code+err.message);
          },alert("ok de consultadb().transaction f1_1"));
				
    	function insertadet(tx) {		
		alert('entra a insertadet de f1_1');				
		}

}//function f1_1
