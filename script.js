const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const form = document.querySelector('#form')
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#result');

/* btn.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    // console.log({event});
    event.preventDefault();
    let resultito = +input1.value + +input2.value;
    resultado.innerHTML = 'Resultado: ' + resultito;
} */

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    // console.log({event});
    // event.preventDefault();
    let resultito = +input1.value + +input2.value;
    resultado.innerHTML = 'Resultado: ' + resultito;
}