/*CARGANDO DOCUMENT*/
$(document).ready(function(){
	insertar_ciudades();
	setInterval(hora_peru, 1000);
	fecha_peru();
	$('input[type=checkbox]').click(function(){
		setTimeout(show_country, 5000);
	});
	
});
function insertar_ciudades(){
	for (var i = 0; i < ciudades.length; i++) {
		$('.form').append('<div class="checkbox"><label><input type="checkbox" data="'+i+'">'+ciudades[i].ciudad+'</label></div>');
	}
}
var datos, horas, minutos, segundos;
function hora_peru(){
	datos=new Date();
   	horas=datos.getHours();
   	minutos=datos.getMinutes();
   	segundos=datos.getSeconds();

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
var ciudades=[
	{ciudad: 'Chicago',
	dif_horario:0},
	{ciudad: 'Sao Paulo',
	dif_horario:2},
	{ciudad: 'Santiago',
	dif_horario:1},
	{ciudad: 'Mexico D.F.',
	dif_horario:0},
	{ciudad: 'Caracas',
	dif_horario:1},
	{ciudad: 'Brasilia',
	dif_horario:2},
	{ciudad: 'Quito',
	dif_horario:0},
	{ciudad: 'Guayaquil',
	dif_horario:0},
	{ciudad: 'Santa Marta',
	dif_horario:0},
	{ciudad: 'Bogota',
	dif_horario:0}];

function show_country() {
	var data=$(this).attr('data');
	if ($(this).is(':checked')) {
		var hora_ciudad=horas+ciudades[data].dif_horario;
		$('#lista_paises').append('<div id='+data+'><span class="text-left">'+ciudades[data].ciudad+'</span><span class="pull-right">'+hora_ciudad+':'+minutos+':'+segundos+'</span></div>');
	}else{
		$('#'+data).remove();
	}
};
