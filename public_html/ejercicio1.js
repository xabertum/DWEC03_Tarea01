/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.title = "Hola";

NUMMAXELEMENTOS = 0;

function create(numMaxElementos) {

    NUMMAXELEMENTOS = numMaxElementos;
    var lista = new Array(numMaxElementos);
    return lista;
}


function  isEmpty(lista) {

    return (lista.length == 0);
}

function  isFull (lista) {
    
    return (lista.length == NUMMAXELEMENTOS);
    
}

function size (lista) {
    
    return lista.length;
    
}

function add (lista, elemento) {
    
    
    
    
} 





