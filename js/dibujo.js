canvas.addEventListener("mouseup", hacerClick);
canvas.addEventListener("mousedown", soltarClick);
var cuadro = document.getElementById("canvas");
var area_dibujo = cuadro.getContext("2d");

function hacerClick(evento)
{
    console.log(evento);
}

function soltarClick(evento2)
{
    console.log(evento2);
}

//dibujarLinea("red", 120, 110, 151, 151, area_dibujo);

function dibujarLinea(color, xi, yi, xf, yf, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}
