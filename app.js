'use strict'

let formulario = document.querySelector('#formulario');
let texto = document.querySelector('input');
let contenedor = document.querySelector('#contenedor');

let productos = [
    { nombre: 'platano', valor: 30 },
    { nombre: 'cebolla', valor: 10 },
    { nombre: 'tomate', valor: 10 },
    { nombre: 'pamela', valor: 10 },
    { nombre: 'canela', valor: 10 },
    { nombre: 'piña', valor: 10 },
    { nombre: 'coco', valor: 10 },
    { nombre: 'banana', valor: 10 },
    { nombre: 'quineo', valor: 10 },
]

// Event Listener
formulario.addEventListener('submit' || 'keyup', (e) => {
    e.preventDefault()

    let valor = texto.value.toLowerCase()
    filtrar(valor);
})

// texto.addEventListener('submit',filtrar)

//funcion de flecha con un solo parametro
let filtrar = valor => {

    contenedor.innerHTML = '';

    for (let producto of productos) {

        if (producto.nombre.toLowerCase().includes(valor)) {

            contenedor.innerHTML += `
                <li>
                    Nombre: <b>${producto.nombre}</b>
                    Precio RD$:<b>${producto.valor}</b>
                </li>
            `
        }

    }
}

