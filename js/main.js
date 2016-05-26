/*OBTENIENDO*/
$(document).ready(function(){
	captura();
   	
});
function captura(){
	var captura=new Date();
   	var horas=captura.getHours().toString();
   	var minutos=captura.getMinutes().toString();
   	var segundos=captura.getSeconds().toString();
   	if (parseInt(horas)<10) {
   		horas='0'+horas;
   	}
   	if (parseInt(minutos)<10) {
   		minutos='0'+minutos;
   	}
   	if (parseInt(segundos)<10) {
   		segundos='0'+segundos;
   	}
   	$("#parrafo_hora").text(horas+':'+minutos+':'+segundos);
}

