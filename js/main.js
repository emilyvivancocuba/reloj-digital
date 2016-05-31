/*TENER EN CUENTA QUE EN VEZ DEL ATRIBUTO DATA, TAMBIÉN SE PUDO HABER DETERMINADO CUALQUIER OTRO ATRIBUTO COMO VALUE, POR EJEMPLO*/




/*CARGANDO DOCUMENT*/
$(document).ready(function(){
	insertar_ciudades();
	hora_peru();
	fecha_peru();
	show_country();

});
/*INSERTANDO LAS CIUDADES EN LOS INPUT CHECKBOX DE LA LISTA DE OPCIONES DEL MODEL*/
function insertar_ciudades(){
	for (var i = 0; i < ciudades.length; i++) {
		$('.form').append('<div class="checkbox"><label><input type="checkbox" data="'+i+'">'+ciudades[i].ciudad+'</label></div>');
	}
}

/*IMPRIME LA HORA LOCAL, EN ESTE CASO PERÚ LIMA*/
function hora_peru(){
	var datos=new Date();
   	var horas=datos.getHours();
   	var minutos=datos.getMinutes();
   	var segundos=datos.getSeconds();

   	if (horas<10) {horas='0'+horas;}
   	if (minutos<10) {minutos='0'+minutos;}
   	if (segundos<10) {segundos='0'+segundos;}

   	setTimeout('hora_peru()', 10);

   	$("#parrafo_hora").text(horas+':'+minutos+':'+segundos);
}

/*IMPRIME LA FECHA LOCAL*/
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


/*MOSTRAR LA CIUDAD SEGÚN LA DATA LEÍDA DEL CHECKBOX SELECCIONADO*/
function show_country() {

	$('input[type=checkbox]').click(function(){
		var data=$(this).attr('data');
		
		if ($(this).is(':checked')) {
			
			$('#lista_paises').append('<div id='+data+'></div>');
			setInterval("hora_ciudad_func("+data+")", 10);

		}else{
			$('#'+data).remove();
		}
	});
};

/*IMPRIME LA HORA ACTUALIZADA DE LA CIUDAD CADA SEGUNDO*/
function hora_ciudad_func(data){
	var datos=new Date();
   	var horas=datos.getHours();
   	var minutos=datos.getMinutes();
   	var segundos=datos.getSeconds();

   	if (horas<10) {horas='0'+horas;}
   	if (minutos<10) {minutos='0'+minutos;}
   	if (segundos<10) {segundos='0'+segundos;}

   	var hora_ciudad=horas+ciudades[data].dif_horario;
	$('#'+data).html('<span class="text-left">'+ciudades[data].ciudad+'</span><span class="pull-right">'+hora_ciudad+':'+minutos+':'+segundos+'</span>');
}
