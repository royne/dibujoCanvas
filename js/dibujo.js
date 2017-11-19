canvas.addEventListener("mouseup", hacerClick);
canvas.addEventListener("mousedown", soltarClick);
var cuadro = document.getElementById("canvas");
var area_dibujo = cuadro.getContext("2d");
var color = document.getElementById("eligeColor");
var colorLinea;
var xi;
var yi;
var xf;
var yf;

function hacerClick(evento)
{
    xi = evento.layerX;
    yi = evento.layerY;
}

function soltarClick(evento2)
{
    xf = evento2.layerX;
    yf = evento2.layerY;
    colorLinea = color.value
    dibujarLinea(colorLinea, xi, yi, xf, yf, area_dibujo);
}

//dibujarLinea("red", 120, 110, 151, 151, area_dibujo);

function dibujarLinea(colorLinea, xi, yi, xf, yf, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = colorLinea;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}
console.log(color.value);
