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

function  isFull(lista) {

    return (lista.length === NUMMAXELEMENTOS);

}

function size(lista) {

    return lista.length;

}

function add(lista, elemento) {

    lista[lista.length] = elemento;

    return lista.length;

}

function addAt(lista, elemento, index) {

    lista[index] = elemento;

    return lista.length;

}

function get(lista, index) {

    return lista[index];

}

function toString(lista) {

    return lista;

}

function indexOf(lista, elemento) {
    var index;
    for (var i = 0; i < lista.length; i++) {

        if (lista[i] === elemento)
            index = i;
        else
            index = -1;
    }

    return index;
}

function lastIndexOf(lista, elemento) {

    var index;
    for (var i = lista.length; i > 0; i--) {

        if (lista[i] === elemento)
            index = i;
        else
            index = -1;
    }

    return index;

}