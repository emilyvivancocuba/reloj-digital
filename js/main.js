/*OBTENIENDO*/
$(document).ready(function(){
    var captura=new Date();
   	var horas=captura.getHours();
   	var minutos=captura.getMinutes();
   	var segundos=captura.getSeconds();
   	$("#parrafo_hora").text(horas+':'+minutos+':'+segundos);
});