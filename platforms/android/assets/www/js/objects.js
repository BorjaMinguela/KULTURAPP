/*
 * 
 * Copyright (C) 2016 Josu Barrientos Bahamonde, Borja Minguela Foces, Mikel De Prado, Cristian Llaguno
 * 
 * 
 * KULTURAPP is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * KULTURAPP is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details
 * <http://www.gnu.org/licenses/>.
 */


var appConstants = {
	serverURL: "http://u017633.ehu.eus:28080/KulturaApp_Serv/",
	//serverURL: "http://192.168.0.13:8080/KulturaApp_Serv/",
	loginURL: function() {
		return this.serverURL+"rest/KulturaApp/login";
	},
	addUserURL: function() {
		return this.serverURL+"rest/KulturaApp/addUser";
	},
	updateUserURL: function() {
		return this.serverURL+"rest/KulturaApp/updateUser";
	}
};
var usuario={
		login: "",
		progreso: 0
		
};
var puntuacionJuego1={
		correctas: 0,
		juego: "Juego1",
		respondidas: 0
		
};
var puntuacionJuego2={
		correctas: 0,
		juego: "Juego2",
		respondidas: 0
		
};
var puntuacionJuego3={
		correctas: 0,
		juego: "Juego3",
		respondidas: 0
		
};
var puntuacionJuego4={
		correctas: 0,
		juego: "Juego4",
		respondidas: 0
		
};
var puntuacionGlobal={
		correctas: 0,
		juego: "Global",
		respondidas: 0
		
};

var initial_pages = {
	login: null,
	total: 4
};

var opcionesIniciales = {
		seleccion: ["Jolasketa 1","Jolasketa 2","Jolasketa 3","Jolasketa 4"]
	};

var juego1={//Que imagen no es de esa nación
		total: 6,
		preguntas: [
		           {//Euskadi 1
		        	   Bandera: "https://dl.dropboxusercontent.com/s/jrjzqvb88itqvyd/video%2010.gif?dl=0",
		        	   Img1:"https://dl.dropboxusercontent.com/s/r0zz8j28jq493in/aizkolari.png?dl=0", //valor=0 estos valores habra q definirlos en la imagen o boton
		        	   Img2:"https://dl.dropboxusercontent.com/s/0dszp1q33m8z1js/desierto%20irlanda.png?dl=0",//valor 1
		        	   Img3:"https://dl.dropboxusercontent.com/s/0kynz66bshd10ez/euskal%20dantzak.jpg?dl=0",//valor 2
		        	   Img4:"https://dl.dropboxusercontent.com/s/71kploo8bm28fcd/kalimotxo.jpg?dl=0",//valor3
		        	   sol:"1",
		           },
		           {//Euskadi 2
		        	   Bandera: "https://dl.dropboxusercontent.com/s/jrjzqvb88itqvyd/video%2010.gif?dl=0",
		        	   Img1:"https://dl.dropboxusercontent.com/s/dg6vzxpbu0t3qy1/la_estatua_de_la_libertad.jpg?dl=0",//valor 4
		        	   Img2:"https://dl.dropboxusercontent.com/s/4fl5vlq7zkva8n5/mapa%20euskadi.png?dl=0", //valor 5
		        	   Img3:"https://dl.dropboxusercontent.com/s/dn5kqmy4epseslm/MuseoGuggenheim1.jpg?dl=0",//valor 6
		        	   Img4:"https://dl.dropboxusercontent.com/s/e4710oi9usbwtjl/talo%20.jpg?dl=0",//valor 7
		        	   sol:"0",
		           },
		           {//catalunya 1
		        	   Bandera: "https://dl.dropboxusercontent.com/s/gm0cbbtm049ufd1/ezgif.com-video-to-gif.gif?dl=0",
		        	   Img1:"https://dl.dropboxusercontent.com/s/hdmzpsqinhzub7f/butifarra.jpg?dl=0",//valor 0
		        	   Img2:"https://dl.dropboxusercontent.com/s/ip0mu6q74q3xawc/calcots.jpg?dl=0",//valor 1
		        	   Img3:"https://dl.dropboxusercontent.com/s/e6k8xpbouooe99i/castellers-de-barcelona.jpg?dl=0",//valor 2
		        	   Img4:"https://dl.dropboxusercontent.com/s/x9mjz6z55fum2i3/pastas%20te.jpg?dl=0",//valor 3
		        	   sol:"3",
		           },
		           {//catalunya 2
		        	   Bandera: "https://dl.dropboxusercontent.com/s/gm0cbbtm049ufd1/ezgif.com-video-to-gif.gif?dl=0",
		        	   Img1:"https://dl.dropboxusercontent.com/s/gbogooy140sqcte/pan-tumaca.jpg?dl=0",//valor 0
		        	   Img2:"https://dl.dropboxusercontent.com/s/okh2oe82ccze6il/mapa%20catalunya.jpg?dl=0",//valor 1
		        	   Img3:"https://dl.dropboxusercontent.com/s/c25b0wc99j629zv/sagrada%20familia.jpg?dl=0",//valor 2
		        	   Img4:"https://dl.dropboxusercontent.com/s/ht7j0kvcojvkgem/Sevillana.jpg?dl=0",//valor 3
		        	   sol:"3",
		           },
		           {//Irlanda
		        	   Bandera: "https://dl.dropboxusercontent.com/s/cyxj84v2btfu92v/video%2011.gif?dl=0",
		        	   Img1:"https://dl.dropboxusercontent.com/s/7033j3czrzxzicl/desierto%20irlandaaa.jpg?dl=0",//valor=0
		        	   Img2:"https://dl.dropboxusercontent.com/s/92ardgjc78apeho/desierto%20irlanda.jpg?dl=0",//valor=1
		        	   Img3:"https://dl.dropboxusercontent.com/s/r7ntoc8njaar0js/desierto%20irlandaa.jpg?dl=0",//valor=2
		        	   Img4:"https://dl.dropboxusercontent.com/s/9a8iq71lcbmwrlz/toro_osborne.jpg?dl=0",
		        	   sol:"3",
		           },
		           {//Irlanda
		        	   Bandera: "https://dl.dropboxusercontent.com/s/cyxj84v2btfu92v/video%2011.gif?dl=0",
		        	   Img1:"https://dl.dropboxusercontent.com/s/0he9frrj214osar/desierto%20irlandaaaa.jpg?dl=0",
		        	   Img2:"https://dl.dropboxusercontent.com/s/ha030yz5ja6fshz/leprechaund.jpg?dl=0",
		        	   Img3:"https://dl.dropboxusercontent.com/s/4vo3arf4766tq0e/taj-mahal.jpg?dl=0",
		        	   Img4:"https://dl.dropboxusercontent.com/s/gju0j4b4ktfhw8a/castillo%20irlanda.jpg?dl=0",
		        	   sol:"2",
		           },
		           ]
};

var juego2={//Que imagen no es de esa nación
		total: 6,
		preguntas: [
		           {
		        	  img: "https://dl.dropboxusercontent.com/s/vq1syrobyqy3r6x/video%201.gif?dl=0",
		        	  opcionA:"a. Euskadi",//valor=0
		        	   opcionB:"b. Catalunya",//valor=1
		        	   opcionC:"c. Irlanda",//valor=2
		        	   sol:"1",
		           },
		           {
			        	  img: "https://dl.dropboxusercontent.com/s/nl0tjrjzb46iyo3/video%202.gif?dl=0",
			        	  opcionA:"a. Euskadi",
			        	   opcionB:"b. Catalunya",
			        	   opcionC:"c. Irlanda",
			        	   sol:"0",
		           },
		           {
			        	  img: "https://dl.dropboxusercontent.com/s/f83jy88qj1eb5xp/video%203.gif?dl=0",
			        	  opcionA:"a. Euskadi",
			        	   opcionB:"b. Catalunya",
			        	   opcionC:"c. Irlanda",
			        	   sol:"0",
		           },
		           {
			        	  img: "https://dl.dropboxusercontent.com/s/ksaq7as3yj9riqs/video%204.gif?dl=0",
			        	  opcionA:"a. Euskadi",
			        	   opcionB:"b. Catalunya",
			        	   opcionC:"c. Irlanda",
			        	   sol:"2", 
		           },
		           {
			        	  img: "https://dl.dropboxusercontent.com/s/91rmkexqr5yg7kx/video%205.gif?dl=0",
			        	  opcionA:"a. Euskadi",
			        	   opcionB:"b. Catalunya",
			        	   opcionC:"c. Irlanda",
			        	   sol:"2",
		           },
		           {
			        	  img: "https://dl.dropboxusercontent.com/s/za48l19bb7zmkwo/video%206.gif?dl=0",
			        	  opcionA:"a. Euskadi",
			        	   opcionB:"b. Catalunya",
			        	   opcionC:"c. Irlanda",
			        	   sol:"1",
		           },
			           
		           
		           ]
};

var juego3={//Que tienen en común las imagenes
		total: 4,
		preguntas: [
		           {
		        	  enunciado: "https://dl.dropboxusercontent.com/s/4avra6tquib18f1/video%2010.gif?dl=0",
		        	  img1: "https://dl.dropboxusercontent.com/s/tvlkua3ngvmxkjy/alubias.jpg?dl=0",
		        	  img2: "https://dl.dropboxusercontent.com/s/z7fp6oxv6idz6pc/alubiass.jpg?dl=0",
		        	  img3: "https://dl.dropboxusercontent.com/s/dsal0buumfbfapc/alubiasss.jpg?dl=0",
		        	   sol:"indabak",
		        	   letras:"_ _ _ _ _ _ _",
		        	   pista:"i_d_ _ak",
		           },
		           {
		        	  enunciado: "https://dl.dropboxusercontent.com/s/4avra6tquib18f1/video%2010.gif?dl=0",
		        	  img1: "https://dl.dropboxusercontent.com/s/7gx3c8h04s582k7/falda.jpg?dl=0",
		        	  img2: "https://dl.dropboxusercontent.com/s/l04pn78nyx14qoq/faldaa.jpg?dl=0",
		        	  img3: "https://dl.dropboxusercontent.com/s/6j59xdwut5wblul/faldaaa.jpg?dl=0",
		        	   sol:"gona",
		        	   letras:"_ _ _ _",
		        	   pista:"_on_",
		           },
		           {
		        	  enunciado: "https://dl.dropboxusercontent.com/s/4avra6tquib18f1/video%2010.gif?dl=0",
		        	  img1: "https://dl.dropboxusercontent.com/s/aefv227moje5u73/pelota.jpg?dl=0",
		        	  img2: "https://dl.dropboxusercontent.com/s/cjg5ig376hvou7y/pelotaa.jpg?dl=0",
		        	  img3: "https://dl.dropboxusercontent.com/s/eev5hlnry1hmlrk/pelotaaa.jpg?dl=0",
		        	   sol:"pilota",
		        	   letras:"_ _ _ _ _ _",
		        	   pista:"_il_ _a",
		           },
		           {
		        	   enunciado: "https://dl.dropboxusercontent.com/s/4avra6tquib18f1/video%2010.gif?dl=0",
		        	   img1: "https://dl.dropboxusercontent.com/s/8kmipjyibf14h4r/verde.jpg",
		        	   img2: "https://dl.dropboxusercontent.com/s/ewrugz1zudxk3iw/verdee.gif",
		        	   img3: "https://dl.dropboxusercontent.com/s/c5wvvaphyaf330i/verdeee.jpg",
		        	   sol: "berdea",
		        	   letras:"_ _ _ _ _ _",
		        	   pista:"be_d_ _",
		           }
			           
		           
		           ]
};
		 
var juego4={
		total: 10,
		preguntas: [
		           {
		        	   enunciado: "<p><b>1. Oinarekin eta eskuekin jolasten den kirola nongoa da?</b></p>",
		        	   opcionA:"a. Euskadi",
		        	   opcionB:"b. Catalunya	",
		        	   opcionC:"c. Irlanda",
		        	   sol:"2",
		           },
		           {
		        	   enunciado: "<p><b>2. Nolakoa da irlandako bandera?</b></p>",
		        	   opcionA:"a. Urdina eta zuria",
		        	   opcionB:"b. Berdea, zuria eta gorria",
		        	   opcionC:"c. Berdea, zuria eta laranja",
		        	   sol:"2",
		           },
		           {
		        	   enunciado: "<p><b>3. Zein ingrediente dago hiru lekutako plater tipikoetan?</b></p>",
		        	   opcionA:"a. Patata",
		        	   opcionB:"b. Indabak",
		        	   opcionC:"c. Arrautzak",
		        	   sol:"1",
		           },
		           {
		        	   enunciado: "<p><b>4.  Non dago desertua?</b></p>",
		        	   opcionA:"a. Catalunyan",
		        	   opcionB:"b. Irlandan",
		        	   opcionC:"c. Baten ere ez",
		        	   sol:"2",///
		           },
		           {
		        	   enunciado: "<p><b>5. Zein edari da ospetsua irlandan?</b></p>",
		        	   opcionA:"a. coca cola",
		        	   opcionB:"b. cola cao",
		        	   opcionC:"c. garagardoa",
		        	   sol:"2",
		           },
		           {
		        	   enunciado: "<p><b>6. Zein janari ez da tipikoa Euskadin?</b></p>",
		        	   opcionA:"a. Taloa",
		        	   opcionB:"b. Kalimotxoa",
		        	   opcionC:"c. Butifarra",
		        	   sol:"2",
		           },
		           {
		        	   enunciado: "<p><b>7. Ze eraikin da ospetsua Catalunyan?</b></p>",
		        	   opcionA:"a. Gaztelu bat",
		        	   opcionB:"b. Familia Sakratua",
		        	   opcionC:"c. Guggeheim",
		        	   sol:"1",
		           },
		           {
		        	   enunciado: "<p><b>8. Zein koloretakoak dira igelak?</b></p>",
		        	   opcionA:"a. Urdinak	",
		        	   opcionB:"b. Froggie",
		        	   opcionC:"c. Berdeak",
		        	   sol:"2",
		           },
		           {
		        	   enunciado: "<p><b>9. Zein kirol ez dagokio Euskadiri?</b></p>",
		        	   opcionA:"a. Boloak	",
		        	   opcionB:"b. Aizkolaritza",
		        	   opcionC:"c. Eskupilota",
		        	   sol:"0",
		           },
		           {
		        	   enunciado: "<p><b>10. Nolakoa da irlandako maskota?</b></p>",
		        	   opcionA:"a. Behi beltz bat",
		        	   opcionB:"b. Ipotx neska urdina",
		        	   opcionC:"c. Ipotx mutil berdea",
		        	   sol:"2",
		           },
		          ]
};

var resultsJuego = {
		corrects: 0,
		answered: 0
	};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////Objetos generadores de Pages
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////
//Login-Page
///////////
var login_page = {
		create: function() {
			var pageDiv=$('<div data-role="page" id="page-logIn" data-theme="a">');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1 style="text-align:center">KULTURAPP</h1>'+
				'</div>';
			
			var contentDiv=
				//'<div data-role="content" style="position:absolute;width:100%">'+
				'<div data-role="content">'+
					'<img class="fitpadding fit center" src="img/ongietorria.gif"/>'+
					'User Name: <input type="text" id="username" name="userName" value=""><p>'+
					'<a href="" id="button-login" class="ui-btn ui-icon-refresh ui-btn-icon-left ui-corner-all" onclick=logInFunction()>LOGIN</a>'+
				'</div>';
			
			//BM: Quito el footer porque apenas se veia la imagen
//			var footerDiv='<div data-role="footer" data-position="fixed">'+
//				'User Name: <input type="text" id="username" name="userName" value=""><p>'+
//					'<a href="" id="button-login" class="ui-btn ui-icon-refresh ui-btn-icon-left ui-corner-all" onclick=logInFunction()>LOGIN</a>'+
//				'</div>';
			
			//pageDiv.append(headerDiv,contentDiv,footerDiv);
			pageDiv.append(headerDiv,contentDiv);

			return pageDiv;
		},

	};

///////////
//Welcome-page
///////////
var welcome_page = {
		create: function() {
			var pageDiv=$('<div data-role="page" id="page-welcome" data-theme="a">');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1 style="text-align:center">KULTURAPP</h1>'+
				'</div>';
			
			var contentDiv=
				'<img class="fitpadding fit center"src="img/explicacion.gif"/>';
			
			pageDiv.append(headerDiv,contentDiv);

			return pageDiv;
		},

	};

///////////
//HOME
///////////
var home_page = {
		create: function() {
			var pageDiv=$('<div data-role="page" id="page-home" data-theme="a">');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1 style="text-align:center">KULTURAPP</h1>'+
				'</div>';
			
			var contentDiv=
				'<div id="ancla-home" class="ui-field-contain">'+
				'<label for="select-1">Aukeratu jolasketa:</label>'+
				'<select name="select-1" id="select-1-1" data-theme="a">';
				contentDiv += queryJuegos();
				
			var footerDiv=
				'<div data-role="footer" data-position="fixed" style="text-align:center">'+
				'<a href="" id="button-home-juegos" onclick=selectJuego("select-1-1") class="ui-btn ui-icon-forward ui-btn-icon-left ui-corner-all">AUKERATU</a>'+
				'</div>';
			
			pageDiv.append(headerDiv,contentDiv,footerDiv);

			return pageDiv;
		},

	};

////////////
/////Juego 1
////////////
var juego1_page = {
	create: function(i) {
		var pageDiv=$('<div data-role="page" id="juego-1-'+i+'"></div>');
		var headerDiv=
			'<div data-role="header" style="padding-bottom:1%" data-position="fixed" data-fullscreen="false">';
		if(i==0){
			headerDiv+='<a href="" onclick="returnHome()" id="prev-sel" class="ui-btn ui-mini ui-corner-all ui-icon-arrow-l ui-btn-icon-left" data-transition="turn">Aurreko</a>';
		}
		headerDiv+='<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">KULTURAPP</h1>'+
			'</div>';
		
		var contentDiv='<div data-role="content" id="page-juego-1-'+i+'" style="text-align:center;">';
		contentDiv += queryJuego1();	
		contentDiv +='<div id="statementDiv-Juego1-'+i+'" style="text-align:left;">'+
		'<img style="width:300px;height:200px;" src="'+juego1.preguntas[i].Bandera+'"><br><br>'+
		'<h1>Ekitaldi '+(i+1)+'</h1>'
		'</div>';
		contentDiv += '</div>'+
		'<div class="ui-block-a" style="text-align:center;vertical-align:middle;">'+
			
			'<form id="form-Juego2-'+i+'">'+
				'<input type="radio" name="radio-choice-Juego-1-'+i+'" value="0"><img style="width:300px;height:200px;" src="'+juego1.preguntas[i].Img1+'"><br>'+
				'<input type="radio" name="radio-choice-Juego-1-'+i+'" value="1"><img style="width:300px;height:200px;" src="'+juego1.preguntas[i].Img2+'"><br>'+
				'<input type="radio" name="radio-choice-Juego-1-'+i+'" value="2"><img style="width:300px;height:200px;" src="'+juego1.preguntas[i].Img3+'"><br>'+
				'<input type="radio" name="radio-choice-Juego-1-'+i+'" value="3"><img style="width:300px;height:200px;" src="'+juego1.preguntas[i].Img4+'"><br>'+
				'<a href="" id="button-Juego1-'+i+'-1" class="ui-btn ui-btn-inline ui-corner-all" onclick="checkJuego1('+i+')">ZUZENDU</a>'+
			'</form>'+
		'</div>';
		var footerDiv=
			'<div data-role="footer" data-position="fixed" style="padding-top:1%;">'+
				'<div class="ui-grid-b">';
			if(i!=0){
				footerDiv+='<div class="ui-block-a" style="text-align:left;width:20%;"><a href="#juego-1-'+(i-1)+'" id="prev-juego-1-'+i+'" class="ui-btn ui-icon-arrow-l ui-btn-icon-left ui-mini ui-btn-inline ui-corner-all" data-transition="turn">Aurreko</a></div>';}
			footerDiv+=	'<div class="ui-block-c" style="text-align:right;width:20%;"><a href="#juego-1-'+(i+1)+'" id="next-juego-1-'+i+'" class="ui-btn ui-icon-arrow-r ui-btn-icon-left ui-mini ui-btn-inline ui-corner-all" data-transition="turn">Hurrengo</a></div>'+
				'</div>'+
				'<div class="ui-grid-b" style="width:80%; text-align:center; font-weight:normal;">'+
					'<div class="ui-block-a">EMAILTZA: </div>'+
					'<div class="ui-block-b res-1" id="juego1-res-'+i+'-1"></div>'+
					'<div class="ui-block-c res-2" id="juego1-res-'+i+'-2"></div>'+
				'</div>'+	
			'</div>';
		pageDiv.append(headerDiv,contentDiv,footerDiv);
	
		return pageDiv;
	},

};

////////////
/////Juego 2
////////////

var juego2_page = {
		create: function(i) {
//			alert("create1");
			var pageDiv=$('<div data-role="page" id="juego-2-'+i+'"></div>');
			var headerDiv=
				'<div data-role="header" style="padding-bottom:1%" data-position="fixed" data-fullscreen="false">';
			if(i==0){
				//headerDiv+='<a href="#kultur_map" onclick="" id="prev-sel" class="ui-btn ui-mini ui-corner-all ui-icon-arrow-l ui-btn-icon-left" data-transition="turn">Aurreko</a>';}
				headerDiv+='<a href="" onclick="returnHome()" id="prev-sel" class="ui-btn ui-mini ui-corner-all ui-icon-arrow-l ui-btn-icon-left" data-transition="turn">Aurreko</a>';}
			headerDiv+='<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">KULTURAPP</h1>'+
					'</div>';
			
			var contentDiv=
				'<div data-role="content" id="page-juego-2-'+i+'" style="text-align:center;">';
			contentDiv += queryJuego2();	
			contentDiv +='<div id="statementDiv-Juego2-'+i+'" style="text-align:left;">'+
					'<p>Ekitaldi '+(i+1)+'</p>'
					'</div>'+
					'<div id="solutionDiv-Juego2-'+i+'" class="ui-grid-solo">';
					contentDiv+=
						'<div class="ui-block-a" style="text-align:center;vertical-align:middle;">'+
							'<img style="width:250px;height:250px;" id="img-'+i+'-1" src="'+juego2.preguntas[i].img+'" >'+
							'</img>'+
						'</div>'+
						'<div class="ui-block-a" style="text-align:center;vertical-align:middle;">'+
							'<form id="form-Juego2-'+i+'">'+
								'<fieldset data-role="controlgroup" data-iconpos="right">'+
								'<legend id="exercise-Juego2-'+i+'"></legend>'+
								'<input name="radio-choice-Juego-2-'+i+'" id="radio-choice-Juego-2-'+i+'a" data-mini="true" value="0" type="radio"/>'+
								'<label for="radio-choice-Juego-2-'+i+'a" id="label-radio-choice-Juego-2-'+i+'-0">'+juego2.preguntas[i].opcionA+'</label>'+
								'<input name="radio-choice-Juego-2-'+i+'" id="radio-choice-Juego-2-'+i+'b" data-mini="true" value="1" type="radio"/>'+
								'<label for="radio-choice-Juego-2-'+i+'b" id="label-radio-choice-Juego-2-'+i+'-1">'+juego2.preguntas[i].opcionB+'</label>'+
								'<input name="radio-choice-Juego-2-'+i+'" id="radio-choice-Juego-2-'+i+'c" data-mini="true" value="2" type="radio"/>'+
								'<label for="radio-choice-Juego-2-'+i+'c" id="label-radio-choice-Juego-2-'+i+'-2">'+juego2.preguntas[i].opcionC+'</label>'+
								'</fieldset>'+
								'<div style="text-align:center;">'+
									'<a href="" id="button-Juego2-'+i+'-1" class="ui-btn ui-btn-inline ui-corner-all" onclick="checkJuego2('+i+')">ZUZENDU</a>'+
								'</div>'+
							'</form>'+
						'</div>';									
			
			var footerDiv=
			'<div data-role="footer" data-position="fixed" style="padding-top:1%;">'+
				'<div class="ui-grid-b">';
			if(i!=0){
				footerDiv+='<div class="ui-block-a" style="text-align:left;width:20%;"><a href="#juego-2-'+(i-1)+'" id="prev-juego-2-'+i+'" class="ui-btn ui-icon-arrow-l ui-btn-icon-left ui-mini ui-btn-inline ui-corner-all" data-transition="turn">Aurreko</a></div>';}
			footerDiv+=	'<div class="ui-block-c" style="text-align:right;width:20%;"><a href="#juego-2-'+(i+1)+'" id="next-juego-2-'+i+'" class="ui-btn ui-icon-arrow-r ui-btn-icon-left ui-mini ui-btn-inline ui-corner-all" data-transition="turn">Hurrengo</a></div>'+
				'</div>'+
				'<div class="ui-grid-b" style="width:80%; text-align:center; font-weight:normal;">'+
					'<div class="ui-block-a">EMAILTZA: </div>'+
					'<div class="ui-block-b res-1" id="res-'+i+'-1"></div>'+
					'<div class="ui-block-c res-2" id="res-'+i+'-2"></div>'+
				'</div>'+	
			'</div>';
			//alert(headerDiv);
			//alert(contentDiv);
			//alert(footerDiv);
			pageDiv.append(headerDiv,contentDiv,footerDiv);
			
//			alert("create2");
			return pageDiv;
		}
	};

////////////
/////Juego 3
////////////
var juego3_page = {
create: function(i) {
	var pageDiv=$('<div data-role="page" id="juego-3-'+i+'"></div>');
	var headerDiv=
		'<div data-role="header" data-position="fixed" >';
		if(i==0){
			//headerDiv+='<a href="#kultur_map" onclick="" id="prev-sel" class="ui-btn ui-mini ui-corner-all ui-icon-arrow-l ui-btn-icon-left" data-transition="turn">Aurreko</a>';}
			headerDiv+='<a href="" onclick="returnHome()" id="prev-sel" class="ui-btn ui-mini ui-corner-all ui-icon-arrow-l ui-btn-icon-left" data-transition="turn">Aurreko</a>';}
		headerDiv+='<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">KULTURAPP</h1>'+
		'</div>';
	
	var contentDiv='<div data-role="content" id="juego-3-'+i+'" style="text-align:center;">';
	contentDiv += queryJuego3();	
	contentDiv +='<div id="statementDiv-Juego3-'+i+'" style="text-align:left;">'+
	'<img style="width:300px;height:200px;" src="'+juego3.preguntas[i].enunciado+'"><br><br>'+
	'<p>Antzekotasunak '+(i+1)+'</p>'
	'</div>';
	contentDiv += '</div>'+
	'<div class="ui-block-a" style="text-align:center;vertical-align:middle;">'+
			'<img style="width:300px;height:200px;" src="'+juego3.preguntas[i].img1+'"><br>'+
			'<img style="width:300px;height:200px;" src="'+juego3.preguntas[i].img2+'"><br>'+
			'<img style="width:300px;height:200px;" src="'+juego3.preguntas[i].img3+'"><br>'+
			'<br><br>'+
			'<h2 id=letras'+i+'>'+juego3.preguntas[i].letras+'</h2>'+
			'<a onclick="showInfo('+i+')" id="info'+i+'" class="ui-btn ui-icon-info ui-btn-icon-notext ui-corner-all"></a>'+
			'<label for="text-juego-3-'+i+'">Erantzuna:</label>'+
			'<input name="erantzuna" id="eran-juego-3-'+i+'" data-clear-btn="true" value="" type="text" placeholder="Erantzuna" />'+
			'<div style="text-align:center;">'+
			'<a href="" id="button-Juego3-'+i+'-1" class="ui-btn ui-btn-inline ui-corner-all" onclick="checkJuego3('+i+')">ZUZENDU</a>'+
		'</div>'+
	'</div>';
	var footerDiv=
		'<div data-role="footer" data-position="fixed" style="padding-top:1%;">'+
			'<div class="ui-grid-b">';
		if(i!=0){
			footerDiv+='<div class="ui-block-a" style="text-align:left;width:20%;"><a href="#juego-3-'+(i-1)+'" id="prev-juego-3-'+i+'" class="ui-btn ui-icon-arrow-l ui-btn-icon-left ui-mini ui-btn-inline ui-corner-all" data-transition="turn">Aurreko</a></div>';}
		footerDiv+=	'<div class="ui-block-c" style="text-align:right;width:20%;"><a href="#juego-3-'+(i+1)+'" id="next-juego-3-'+i+'" class="ui-btn ui-icon-arrow-r ui-btn-icon-left ui-mini ui-btn-inline ui-corner-all" data-transition="turn">Hurrengo</a></div>'+
			'</div>'+
			'<div class="ui-grid-b" style="width:80%; text-align:center; font-weight:normal;">'+
				'<div class="ui-block-a">EMAILTZA: </div>'+
				'<div class="ui-block-b res-1" id="juego3-res-'+i+'-1"></div>'+
				'<div class="ui-block-c res-2" id="juego3-res-'+i+'-2"></div>'+
			'</div>'+	
		'</div>';
	
	pageDiv.append(headerDiv,contentDiv,footerDiv);

	return pageDiv;
},

};

////////////
/////Juego 4
////////////

var juego4_page = {
		create: function(i) {
//			alert("create1");
			var pageDiv=$('<div data-role="page" id="juego-4-'+i+'"></div>');
			var headerDiv=
				'<div data-role="header" style="padding-bottom:1%" data-position="fixed" data-fullscreen="false">';
			if(i==0){
				//headerDiv+='<a href="#kultur_map" id="prev-sel" class="ui-btn ui-mini ui-corner-all ui-icon-arrow-l ui-btn-icon-left" data-transition="turn">Aurreko</a>';}
				headerDiv+='<a href="" onclick="returnHome()" id="prev-sel" class="ui-btn ui-mini ui-corner-all ui-icon-arrow-l ui-btn-icon-left" data-transition="turn">Aurreko</a>';}
			headerDiv+='<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">KULTURAPP</h1>'+
					'</div>';
			
			var contentDiv=
				'<div data-role="content" id="page-juego-4-'+i+'" style="text-align:center;">';
				contentDiv += queryJuego4();	
			contentDiv +='<div id="statementDiv-Juego4-'+i+'" style="text-align:left;">'+
					'<p>Galdera '+(i+1)+'</p>'+juego4.preguntas[i].enunciado+// Sacamos el enunciado de la pregunta
					'</div>'+
					'<div id="solutionDiv-Juego4-'+i+'" class="ui-grid-solo">';
					contentDiv+=
						'<div class="ui-block-a" style="text-align:center;vertical-align:middle;">'+
							'<form id="form-Juego4-'+i+'">'+
								'<fieldset data-role="controlgroup" data-iconpos="right">'+
								'<legend id="test-Juego4-'+i+'"></legend>'+
								'<input name="radio-choice-Juego-4-'+i+'" id="radio-choice-Juego-4-'+i+'a" data-mini="true" value="0" type="radio"/>'+
								'<label for="radio-choice-Juego-4-'+i+'a" id="label-radio-choice-Juego-4-'+i+'-0">'+juego4.preguntas[i].opcionA+'</label>'+
								'<input name="radio-choice-Juego-4-'+i+'" id="radio-choice-Juego-4-'+i+'b" data-mini="true" value="1" type="radio"/>'+
								'<label for="radio-choice-Juego-4-'+i+'b" id="label-radio-choice-Juego-4-'+i+'-1">'+juego4.preguntas[i].opcionB+'</label>'+
								'<input name="radio-choice-Juego-4-'+i+'" id="radio-choice-Juego-4-'+i+'c" data-mini="true" value="2" type="radio"/>'+
								'<label for="radio-choice-Juego-4-'+i+'c" id="label-radio-choice-Juego-4-'+i+'-2">'+juego4.preguntas[i].opcionC+'</label>'+
								'</fieldset>'+
								'<div style="text-align:center;">'+
									'<a href="" id="button-Juego4-'+i+'-1" class="ui-btn ui-btn-inline ui-corner-all" onclick="checkJuego4('+i+')">ZUZENDU</a>'+
								'</div>'+
							'</form>'+
						'</div>';									
			
			var footerDiv=
			'<div data-role="footer" data-position="fixed" style="padding-top:1%;">'+
				'<div class="ui-grid-b">';
			if(i!=0){
				footerDiv+='<div class="ui-block-a" style="text-align:left;width:20%;"><a href="#juego-4-'+(i-1)+'" id="prev-juego-4-'+i+'" class="ui-btn ui-icon-arrow-l ui-btn-icon-left ui-mini ui-btn-inline ui-corner-all" data-transition="turn">Aurreko</a></div>';}
			footerDiv+=	'<div class="ui-block-c" style="text-align:right;width:20%;"><a href="#juego-4-'+(i+1)+'" id="next-juego-4-'+i+'" class="ui-btn ui-icon-arrow-r ui-btn-icon-left ui-mini ui-btn-inline ui-corner-all" data-transition="turn">Hurrengo</a></div>'+
				'</div>'+
				'<div class="ui-grid-b" style="width:80%; text-align:center; font-weight:normal;">'+
					'<div class="ui-block-a">EMAILTZA: </div>'+
					'<div class="ui-block-b res-1" id="res-'+i+'-1"></div>'+
					'<div class="ui-block-c res-2" id="res-'+i+'-2"></div>'+
				'</div>'+	
			'</div>';
			//alert(headerDiv);
			//alert(contentDiv);
			//alert(footerDiv);
			pageDiv.append(headerDiv,contentDiv,footerDiv);
			
//			alert("create2");
			return pageDiv;
		}
	};