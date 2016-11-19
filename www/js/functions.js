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

function genLogIn() {
	
	var logInPageDiv;
	
	logInPageDiv=login_page.create();
	$("body").append(logInPageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	
	window.location.href = "#page-logIn";
	
}

function logInFunction() {
	
	alert("You've been logged in");
	
	page_creation();
	
}

function page_creation() {
	
	var homepageDiv;
	homepageDiv=home_page.create();
	$("body").append(homepageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	
	var juego1pageDiv;
	juego1pageDiv=juego1_page.create();
	$("body").append(juego1pageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	
	var juego2pageDiv;
	juego2pageDiv=juego2_page.create();
	$("body").append(juego2pageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	
	var juego3pageDiv;
	juego3pageDiv=juego3_page.create();
	$("body").append(juego3pageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	
	var juego4pageDiv;
	juego4pageDiv=juego4_page.create();
	$("body").append(juego4pageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	
	window.location.href = "#page-home";
	
}

function queryJuegos() {
	
	var contentDiv='<div data-role="content" id="scrollable">';
	contentDiv+='<option value="juego-1">Juego 1</option>';
	contentDiv+='<option value="juego-2">Juego 2</option>';
	contentDiv+='<option value="juego-3">Juego 3</option>';
	contentDiv+='<option value="juego-4">Juego 4</option>';
	contentDiv+='</select>';
	contentDiv+='</div>';
	
	return contentDiv;
	
}

function selectJuego(datos) {
	
	alert("Juego seleccionado");
	
	var juego_selector = document.getElementById(datos).value;

	juego_selector = "#"+juego_selector;
	
	window.location.href = juego_selector;
	
}

function queryJuego1() {
	
	var contentDiv='<h2>Juego 1</h2>';
	
	return contentDiv;
	
}

function queryJuego2() {
	
	var contentDiv='<h2>Juego 2</h2>';
	
	return contentDiv;
	
}

function queryJuego3() {
	
	var contentDiv='<h2>Juego 3</h2>';
	
	return contentDiv;
	
}

function queryJuego4() {
	
	var contentDiv='<h2>Juego 4</h2>';
	
	return contentDiv;
	
}

