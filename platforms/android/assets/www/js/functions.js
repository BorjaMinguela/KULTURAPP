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

function welcome() {
	
	window.location.href = "#page-welcome";
	
	var delay=3000;
		
    setTimeout(function() {
    	window.location.href = "#page-home";
    }, delay);
	
}

function page_creation() {
	
	var homepageDiv;
	homepageDiv=home_page.create();
	$("body").append(homepageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	
	
	var welcomepageDiv;
	welcomepageDiv=welcome_page.create();
	$("body").append(welcomepageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	
	var juego1pageDiv;
	juego1pageDiv=juego1_page.create();
	$("body").append(juego1pageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	
	var juego2pageDiv;
	for(var i=0;i<juego2.total;i++)
	{
		juego2pageDiv=juego2_page.create(i);
		$("body").append(juego2pageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	}
		$("#next-juego-2-"+(juego2.total-1)).attr("href","#juego-2-0");//Hace que el siguiente de la ultima pagina del ultimo ejercicio del juego 2 vuelva al primer ejercicio

	var juego3pageDiv;
	juego3pageDiv=juego3_page.create();
	$("body").append(juego3pageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	
	var juego4pageDiv;
	for(var i=0;i<juego4.total;i++)
	{
		juego4pageDiv=juego4_page.create(i);
		$("body").append(juego4pageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	}
	$("#next-juego-4-"+(juego4.total-1)).attr("href","#juego-4-0");//Hace que el siguiente de la ultima pagina del ultimo ejercicio del juego 4 vuelva al primer ejercicio
	
	
	//window.location.href = "#page-home";
	
	welcome();
	
}

function queryJuegos() {
	
	var contentDiv='<div data-role="content" id="scrollable">';
	contentDiv+='<option value="juego-1">Juego 1</option>';
	contentDiv+='<option value="juego-2">Juego 2</option>';
	contentDiv+='<option value="juego-3">Juego 3</option>';
	contentDiv+='<option value="juego-4">Juego 4</option>';
	contentDiv+='</select>';
	contentDiv+='<img id="kultur_map" class="fitpadding fit center"src="img/kulturapp_cerrado.jpg"/>';
	contentDiv+='</div>';
	
	return contentDiv;
	
}

function selectJuego(datos) {
	
	alert("Juego seleccionado");
	
	var juego_selector = document.getElementById(datos).value;

	var delay=3000;
	
	var elemento = "#kultur_map";
	
	$(elemento).remove();
	
	alert('img/kulturapp_'+juego_selector+'.gif');
	
	//falla lo siguiente:
	//document.getElementById(elemento).src='img/kulturapp_'+juego_selector+'.gif'; 
	
    setTimeout(function() {
    	
    	juego_selector = "#"+juego_selector+"-0";// Se añade el 0 para que haga referencia a las paginas inicial del juego
    	
    	window.location.href = juego_selector;
    	
    }, delay);
    
	
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

function checkJuego2(i) {
//	alert("check 1");
	
	resultsJuego.answered++;
	
	var answer=$("input[name='radio-choice-"+i+"']:checked").val();//Obtener el valor del radio seleccionado por el usuario, en el conjunto de inputs de nombre'radio-choice-1' 
	//checked ha sido seleccionado por el usuario
	if(answer==juego2.preguntas[i].sol) {
		alert("Zuzena");
		resultsJuego.corrects++;
	}
	else {
		alert("Okerra");
	}
	
	$(".res-1").text(""+resultsJuego.corrects+"/"+resultsJuego.answered);
	$(".res-2").text(""+(resultsJuego.corrects*100/resultsJuego.answered).toFixed(2)+"%");
	
	$("label[id|='label-radio-choice-"+i+"']").each(
		function(index) {
			if(index!=juego2.preguntas[i].sol) { //This can be done because of appropriate "value" attributes and label-radio-choice id attributes
				$(this).css("color","red");
			}
			else
				$(this).css({"color":"white","background-color":"green","font-size":"24px"});
		}
	);

	$("#button-Juego2-"+i+"-1").attr("onclick","");//desactiva el boton de check
//	alert("check 7");
}

function checkJuego4(i) {
//	alert("check 1");
	
	resultsJuego.answered++;
	
	var answer=$("input[name='radio-choice-"+i+"']:checked").val();//Obtener el valor del radio seleccionado por el usuario, en el conjunto de inputs de nombre'radio-choice-1' 
	//checked ha sido seleccionado por el usuario
	if(answer==juego4.preguntas[i].sol) {
		alert("Zuzena");
		resultsJuego.corrects++;
	}
	else {
		alert("Okerra");
	}
	
	$(".res-1").text(""+resultsJuego.corrects+"/"+resultsJuego.answered);
	$(".res-2").text(""+(resultsJuego.corrects*100/resultsJuego.answered).toFixed(2)+"%");
	
	$("label[id|='label-radio-choice-"+i+"']").each(
		function(index) {
			if(index!=juego4.preguntas[i].sol) { //This can be done because of appropriate "value" attributes and label-radio-choice id attributes
				$(this).css("color","red");
			}
			else
				$(this).css({"color":"white","background-color":"green","font-size":"24px"});
		}
	);

	$("#button-Juego4-"+i+"-1").attr("onclick","");//desactiva el boton de check
//	alert("check 7");
}

