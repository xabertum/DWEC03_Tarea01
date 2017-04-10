/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.title = "Hola";


function  inicializar()
{
    document.getElementById("crear-ventana").onclick = crearNueva;
    document.getElementById("cerrar-ventana").onclick = cerrarNueva;
}
var nuevaVentana;
function  crearNueva()
{
    nuevaVentana = window.open("http://www.google.es", "", "height=400,width=800");
}
function  cerrarNueva()
{
    if (nuevaVentana)
    {
        nuevaVentana.close();
        nuevaVentana = null;
    }
}


var num = new Number(54.1234);
document.write(num.toPrecision(3)+ "<br/>");
document.write(num.toFixed(1) + "<br/>");
document.write(num.toString(2) + "<br/>");
document.write(num.toString(8) + "<br/>");
document.write(num.toString(16) + "<br/>");
document.write(Number.MIN_VALUE);
document.write(Number.MAX_VALUE);

