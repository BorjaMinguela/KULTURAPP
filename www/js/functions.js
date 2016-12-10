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

function genLogIn() {
	
	var logInPageDiv;
	
	logInPageDiv=login_page.create();
	$("body").append(logInPageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	
	window.location.href = "#page-logIn";
	
}

function logInFunction() {
	var userName=$("#username").val();
	var proceder=true;
	alert("Entro al login");
	if((navigator.connection.type!=Connection.WIFI)&&(navigator.connection.type!=Connection.CELL_3G)&&(navigator.connection.type!=Connection.CELL_4G)){
		proceder=confirm("Para el debido funcionamiento de la aplicación, debe estar conectado a la red");
	}
	if(proceder==true){
		$.ajaxSetup({
	        async: false,
	        cache:false,
	        contentType:"application/json"
	    });
		alert("user:"+userName);
		$.getJSON(appConstants.loginURL(),{username:userName},
			function(data,status) {
				if(status=="success"){
					if(data.login!="Invalido"){
	            	usuario.login=data.login;
	            	usuario.progreso=data.progreso;
	            	//alert(usuario.login+','+usuario.progreso);
	            	}
					else{
						addUser();
					}
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}
			}
		);
	}
	else{
		alert("No se pudo conectar con el servidor");
	}
	
	//alert("usuario "+usuario.login+","+usuario.progreso);
	alert("Sartu zara");
	
	page_creation();
	
}

function addUser(){
	
	var username=$("#username").val();
	usuario.login=username;
	
	$.ajaxSetup({contentType: "application/json"});
	usuario.login=username;
	
	$.post(appConstants.addUserURL(),JSON.stringify(usuario),//Enviar al Servidor el objeto critica,que debe ser convertido a string
			function(data,status) {//Función callback
				if(status=="success"){//Si la HTTP-RESPONSE es OK
					alert(data);
					usuario=data;
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}
			},
			"text"//Content-type esperado en HTTP-RESPONSE: text lo que se espera recibir
		);
	
	$.ajaxSetup({
        async: false,
        cache:false,
        contentType:"application/json"
    });
	
	$.getJSON(appConstants.initPuntuacionURL()+"?username="+username,
		function(data,status) {
			if(status!="success"){
				alert("NO RESPONSE FROM SERVER");
			}
		}
	);
}

function welcome() {
	
	window.location.href = "#page-welcome";
	
	var delay=5000;//BM: 5 segundos para que coincida con la duración del gif
		
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
	for(var i=0;i<juego1.total;i++)
	{
		juego1pageDiv=juego1_page.create(i);
		$("body").append(juego1pageDiv); //añadimos el pagediv, con toda la pagina, al DOM
		
	}
		$("#next-juego-1-"+(juego1.total-1)).attr("onclick","terminarJuego1()");
	
	var juego2pageDiv;
	for(var i=0;i<juego2.total;i++)
	{
		juego2pageDiv=juego2_page.create(i);
		$("body").append(juego2pageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	}
		$("#next-juego-2-"+(juego2.total-1)).attr("onclick","terminarJuego2()");//Hace que el siguiente de la ultima pagina del ultimo ejercicio del juego 2 vuelva al primer ejercicio

	var juego3pageDiv;
	for(var i=0;i<juego3.total;i++)
	{
		juego3pageDiv=juego3_page.create(i);
		$("body").append(juego3pageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	}
	$("#next-juego-3-"+(juego3.total-1)).attr("onclick","terminarJuego3()");
	var juego4pageDiv;
	for(var i=0;i<juego4.total;i++)
	{
		juego4pageDiv=juego4_page.create(i);
		$("body").append(juego4pageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	}
	$("#next-juego-4-"+(juego4.total-1)).attr("onclick","terminarJuego4()");//Hace que el siguiente de la ultima pagina del ultimo ejercicio del juego 4 vuelva al primer ejercicio
	
	
	//window.location.href = "#page-home";
	
	welcome();
	
}

function queryJuegos() {
	
	var contentDiv='<div data-role="content" id="scrollable">';
	contentDiv+='<option id="selectjuego1" value="juego-1">Jolasketa 1</option>';
	contentDiv+='<option id="selectjuego2" value="juego-2" hidden>Jolasketa 2</option>';
	contentDiv+='<option id="selectjuego3" value="juego-3" hidden>Jolasketa 3</option>';
	contentDiv+='<option id="selectjuego4" value="juego-4" hidden>Jolasketa 4</option>';
//	contentDiv+='<option value="juego-2">DEBUG Juego 2</option>';//BM: Para que estas opciones esten disponibles aunque no hayamos completado los anteriores, lo quitamos cuando funcione todo
//	contentDiv+='<option value="juego-3">DEBUG Juego 3</option>';
//	contentDiv+='<option value="juego-4">DEBUG Juego 4</option>';
	contentDiv+='</select>';
	contentDiv+='<img id="kultur_map" class="fitpadding fit center"src="img/kulturapp_cerrado.jpg"/>';
	contentDiv+='</div>';
	
	return contentDiv;
	
}
function returnHome(){//funcion para volver al menu principal
	var elemento = "#kultur_map";
	var tablero="";
	switch(usuario.progreso) {
    case 0:
        tablero='img/kulturapp_cerrado.jpg';
        break;
    case 1:
        tablero='img/kulturapp_juego-2.jpg';
        break;
    case 2:
        tablero='img/kulturapp_juego-3.jpg';
        break;
    case 3:
        tablero='img/kulturapp_juego-4.jpg';
        break;
    case 4:
        tablero='https://dl.dropboxusercontent.com/s/96dcgb5owo1881p/video%2010.gif?dl=0';
        break;
}
	$(elemento).attr('src',tablero);
	window.location.href = "#page-home";	
}

function selectJuego(datos) {
	
	alert("Jolasketa aukeratura");
	
	var juego_selector = document.getElementById(datos).value;

	var delay=3000;
	
	var elemento = "#kultur_map";

	$(elemento).attr('src','img/kulturapp_'+juego_selector+'.gif');
	setTimeout(function() {
		$(elemento).attr('src','img/enunciado_'+juego_selector+'.gif');   	
    }, delay);
	
    setTimeout(function() {
    	
    	juego_selector = "#"+juego_selector+"-0";// Se añade el 0 para que haga referencia a las paginas inicial del juego
    	
    	window.location.href = juego_selector;
    	
    }, delay*2);
    
	
}

function queryJuego1() {
	
	var contentDiv='<h2>Jolasketa 1</h2>';
	
	return contentDiv;
	
}

function queryJuego2() {
	
	var contentDiv='<h2>Jolasketa 2</h2>';
	
	return contentDiv;
	
}

function queryJuego3() {
	
	var contentDiv='<h2>Jolasketa 3</h2>';
	
	return contentDiv;
	
}

function queryJuego4() {
	
	var contentDiv='<h2>Jolasketa 4</h2>';
	
	return contentDiv;
	
}

function checkJuego1(i){
	resultsJuego.answered++;
	var selected=$('input[name="radio-choice-Juego-1-'+i+'"]:checked').val();
	if(selected==juego1.preguntas[i].sol) {
		alert("Zuzena");
		resultsJuego.corrects++;
	}
	else {
		alert("Okerra");
	}
	$(".res-1").text(""+resultsJuego.corrects+"/"+resultsJuego.answered);
	$(".res-2").text(""+(resultsJuego.corrects*100/resultsJuego.answered).toFixed(2)+"%");
	
	

	//$("#button-Juego1-"+i+"-1").attr("onclick","");//desactiva el boton de check
	$("#button-Juego1-"+i+"-1").hide();
}

function terminarJuego1(){
	//alert("terminarjuego1");
	if (resultsJuego.corrects==6){
		alert("Primeran! Goazen hurrengo jolasera!");
		puntuacionJuego1.correctas=resultsJuego.corrects;
		puntuacionJuego1.respondidas=resultsJuego.answered;
		if (usuario.progreso<1) usuario.progreso=1;
		resultsJuego.corrects=0;
		resultsJuego.answered=0;
		$(".res-1").text('0');
		$(".res-2").text('0');
		$("#selectjuego2").show();
		returnHome();
	}
	else{
		alert("Saia zaitez berriro");
		resultsJuego.corrects=0;
		resultsJuego.answered=0;
		$(".res-1").text('0');
		$(".res-2").text('0');
		for (i=0;i<juego1.total;i++){
			$("#button-Juego1-"+i+"-1").show();
		}
		window.location.href = "#juego-1-0";
	}
}

function checkJuego2(i) {
//	alert("check 1");
	
	resultsJuego.answered++;
	
	var answer=$("input[name='radio-choice-Juego-2-"+i+"']:checked").val();//Obtener el valor del radio seleccionado por el usuario, en el conjunto de inputs de nombre'radio-choice-1' 
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
	
//	$("label[id|='label-radio-choice-Juego-2-"+i+"']").each(
//		function(index) {
//			if(index!=juego2.preguntas[i].sol) { //This can be done because of appropriate "value" attributes and label-radio-choice id attributes
//				$(this).css("color","red");
//			}
//			else
//				$(this).css({"color":"white","background-color":"green","font-size":"24px"});
//		}
//	);

	$("#button-Juego2-"+i+"-1").hide();//desactiva el boton de check
//	alert("check 7");
}

function terminarJuego2(){
	//alert("terminarjuego1");
	if (resultsJuego.corrects==6){
		alert("Primeran! Goazen hurrengo jolasera!");
		puntuacionJuego2.correctas=resultsJuego.corrects;
		puntuacionJuego2.respondidas=resultsJuego.answered;
		if (usuario.progreso<2) usuario.progreso=2;
		resultsJuego.corrects=0;
		resultsJuego.answered=0;
		$(".res-1").text('0');
		$(".res-2").text('0');
		$("#selectjuego3").show();
		returnHome();
	}
	else{
		alert("Saia zaitez berriro");
		resultsJuego.corrects=0;
		resultsJuego.answered=0;
		$(".res-1").text('0');
		$(".res-2").text('0');
		for (i=0;i<juego2.total;i++){
			$("#button-Juego2-"+i+"-1").show();
		}
		window.location.href = "#juego-2-0";
	}
}
function checkJuego3(i) {
//	alert("check 1");
	
	resultsJuego.answered++;
	
	var answer=$("#eran-juego-3-"+i).val();//Obtener el valor del radio seleccionado por el usuario, en el conjunto de inputs de nombre'radio-choice-1' 
	//checked ha sido seleccionado por el usuario
	if(answer==juego3.preguntas[i].sol) {
		alert("Zuzena");
		resultsJuego.corrects++;
		//$("#eran-juego-3-"+i).css("color","green");
	}
	else {
		alert("Okerra");
		//$("#eran-juego-3-"+i).css("color","red");
	}
	
	$(".res-1").text(""+resultsJuego.corrects+"/"+resultsJuego.answered);
	$(".res-2").text(""+(resultsJuego.corrects*100/resultsJuego.answered).toFixed(2)+"%");

	$("#button-Juego3-"+i+"-1").hide();//desactiva el boton de check
//	alert("check 7");
}

function showInfo(i){
	$("#letras"+i).text(juego3.preguntas[i].pista);
}

function terminarJuego3(){
	//alert("terminarjuego1");
	if (resultsJuego.corrects==4){
		alert("Primeran! Goazen hurrengo jolasera!");
		puntuacionJuego3.correctas=resultsJuego.corrects;
		puntuacionJuego3.respondidas=resultsJuego.answered;
		if (usuario.progreso<3) usuario.progreso=3;
		resultsJuego.corrects=0;
		resultsJuego.answered=0;
		$(".res-1").text('0');
		$(".res-2").text('0');
		$("#selectjuego4").show();
		returnHome();
	}
	else{
		alert("Saia zaitez berriro");
		resultsJuego.corrects=0;
		resultsJuego.answered=0;
		$(".res-1").text('0');
		$(".res-2").text('0');
		for (i=0;i<juego3.total;i++){
			$("#button-Juego3-"+i+"-1").show();
		}
		window.location.href = "#juego-3-0";
	}
}

function checkJuego4(i) {
//	alert("check 1");
	
	resultsJuego.answered++;
	
	var answer=$("input[name='radio-choice-Juego-4-"+i+"']:checked").val();//Obtener el valor del radio seleccionado por el usuario, en el conjunto de inputs de nombre'radio-choice-1' 
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
	
//	$("label[id|='label-radio-choice-Juego-4-"+i+"']").each(
//		function(index) {
//			if(index!=juego4.preguntas[i].sol) { //This can be done because of appropriate "value" attributes and label-radio-choice id attributes
//				$(this).css("color","red");
//			}
//			else
//				$(this).css({"color":"white","background-color":"green","font-size":"24px"});
//		}
//	);

	$("#button-Juego4-"+i+"-1").hide();//desactiva el boton de check
//	alert("check 7");
}

function terminarJuego4(){
	//alert("terminarjuego1");
	if (resultsJuego.corrects==10){
		alert("Eskerrik asko nire etxea berreskuratzeagatik! Hurrengora arte!");
		puntuacionJuego4.correctas=resultsJuego.corrects;
		puntuacionJuego4.respondidas=resultsJuego.answered;
		usuario.progreso=4;
		resultsJuego.corrects=0;
		resultsJuego.answered=0;
		$(".res-1").text('0');
		$(".res-2").text('0');
		$("#selectjuego3").show();
		returnHome();
	}
	else{
		alert("Saia zaitez berriro");
		resultsJuego.corrects=0;
		resultsJuego.answered=0;
		$(".res-1").text('0');
		$(".res-2").text('0');
		for (i=0;i<juego4.total;i++){
			$("#button-Juego4-"+i+"-1").show();
		}
		window.location.href = "#juego-4-0";
	}
}

