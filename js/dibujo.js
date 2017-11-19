canvas.addEventListener("mouseup", hacerClick);
canvas.addEventListener("mousedown", soltarClick);
canvas.addEventListener("mousemove", dibujar);
var clear = document.getElementById("Borrar");
var cuadro = document.getElementById("canvas");
var area_dibujo = cuadro.getContext("2d");
var color = document.getElementById("eligeColor");
var colorLinea;
var xi;
var yi;
var xf;
var yf;
var iniciar = false

function soltarClick(evento)
{
    iniciar = true;
    xi = evento.layerX;
    yi = evento.layerY;
}

function dibujar(evento2)
{
  if (iniciar) {
    xf = evento2.layerX;
    yf = evento2.layerY;
    colorLinea = color.value
    dibujarLinea(colorLinea, xi, yi, xf, yf, area_dibujo);
		xi = xf;
		yi = yf;
  }

}

function hacerClick(){
    iniciar= false
}


function dibujarLinea(colorLinea, xi, yi, xf, yf, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = colorLinea;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}


clear.addEventListener("click",function(){
	canvas.width=canvas.width;
},false);
