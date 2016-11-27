/*
 * 
 * Copyright (C) 2016 Josu Barrientos Bahamonde
 * 
 * 
 * BILBAPP is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * BILBAPP is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details
 * <http://www.gnu.org/licenses/>.
 */

var appConstants = {
	serverURL: "http://u017633.ehu.eus:28080/KULTURAPP_SERVER/",
	requestSitiosURL: function() {
		return this.serverURL+"rest/Kulturapp/requestSitios";
	},
	requestCriticasURL: function() {
		return this.serverURL+"rest/Kulturapp/requestCriticas";
	},
	addCriticaURL: function() {
		return this.serverURL+"rest/Kulturapp/addCriticas";
	},
	addPuntuacionURL: function() {
		return this.serverURL+"rest/Kulturapp/addPuntuacion";
	}
};

var initial_pages = {
	login: null,
	total: 4
};

var opcionesIniciales = {
		seleccion: ["Juego 1","Juego 2","Juego 3","Juego 4"]
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
				'<div data-role="content" style="position:absolute;width:100%">'+
					'<img class="fitpadding fit center" src="img/ongietorria.gif"/>'+
				'</div>';
			
			var footerDiv='<div data-role="footer" data-position="fixed">'+
				'User Name: <input type="text" id="username" name="userName" value=""><p>'+
					'<a href="" id="button-login" class="ui-btn ui-icon-refresh ui-btn-icon-left ui-corner-all" onclick=logInFunction()>LOGIN</a>'+
				'</div>';
			
			pageDiv.append(headerDiv,contentDiv,footerDiv);

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
				'<label for="select-1">Select:</label>'+
				'<select name="select-1" id="select-1-1" data-theme="a">';
				contentDiv += queryJuegos();
				
			var footerDiv=
				'<div data-role="footer" data-position="fixed" style="text-align:center">'+
				'<a href="" id="button-home-juegos" onclick=selectJuego("select-1-1") class="ui-btn ui-icon-forward ui-btn-icon-left ui-corner-all">SELECT</a>'+
				'</div>';
			
			pageDiv.append(headerDiv,contentDiv,footerDiv);

			return pageDiv;
		},

	};

////////////
/////Juego 1
////////////
var juego1_page = {
	create: function() {
		var pageDiv=$('<div data-role="page" id="juego-1"></div>');
		var headerDiv=
			'<div data-role="header" data-position="fixed" >'+
				'<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">KULTURAPP</h1>'+
			'</div>';
		
		var contentDiv='<div data-role="content">';
		contentDiv += queryJuego1();	
		contentDiv += '</div>';
		
		pageDiv.append(headerDiv,contentDiv);
	
		return pageDiv;
	},

};

////////////
/////Juego 2
////////////
var juego2_page = {
create: function() {
	var pageDiv=$('<div data-role="page" id="juego-2"></div>');
	var headerDiv=
		'<div data-role="header" data-position="fixed" >'+
			'<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">KULTURAPP</h1>'+
		'</div>';
	
	var contentDiv='<div data-role="content">';
	contentDiv += queryJuego2();	
	contentDiv += '</div>';
	
	pageDiv.append(headerDiv,contentDiv);

	return pageDiv;
},

};

////////////
/////Juego 3
////////////
var juego3_page = {
create: function() {
	var pageDiv=$('<div data-role="page" id="juego-3"></div>');
	var headerDiv=
		'<div data-role="header" data-position="fixed" >'+
			'<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">KULTURAPP</h1>'+
		'</div>';
	
	var contentDiv='<div data-role="content">';
	contentDiv += queryJuego3();	
	contentDiv += '</div>';
	
	pageDiv.append(headerDiv,contentDiv);

	return pageDiv;
},

};

////////////
/////Juego 4
////////////
var juego4_page = {
create: function() {
	var pageDiv=$('<div data-role="page" id="juego-4"></div>');
	var headerDiv=
		'<div data-role="header" data-position="fixed" >'+
			'<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">KULTURAPP</h1>'+
		'</div>';
	
	var contentDiv='<div data-role="content">';
	contentDiv += queryJuego4();	
	contentDiv += '</div>';
	
	pageDiv.append(headerDiv,contentDiv);

	return pageDiv;
},

};