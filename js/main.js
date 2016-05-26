/*CARGANDO DOCUMENT*/
$(document).ready(function(){
	setInterval(hora_peru, 1000);
	fecha_peru();
	$('input[type=checkbox]').on('click', show_country);
});

function hora_peru(){
	var datos=new Date();
   	var horas=datos.getHours();
   	var minutos=datos.getMinutes();
   	var segundos=datos.getSeconds();

   	if (horas<10) {horas='0'+horas;}
   	if (minutos<10) {minutos='0'+minutos;}
   	if (segundos<10) {segundos='0'+segundos;}

   	$("#parrafo_hora").text(horas+':'+minutos+':'+segundos);
}

function fecha_peru(){
	var datos=new Date();
	var array_dias=['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
	var array_meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

	var dia=datos.getDay();
	var fecha=datos.getDate();
	var mes=datos.getMonth();

	$("#parrafo_fecha").text(array_dias[dia]+', '+fecha+' de '+array_meses[mes]);
}

function show_country(){
	if ($('input'.data()==0)) {
		console.log('hola');
	}
}
