import {sumar,restar,multiplicar,dividir} from './funciones.js'
let btnSumar = document.querySelector("#btnSumar");
let btnRestar = document.querySelector("#btnRestar");
let btnMultiplicar = document.querySelector("#btnMultiplicar");
let btnDividir = document.querySelector("#btnDividir");
btnSumar.addEventListener('click', ()=>{
  let no1 = parseInt(document.querySelector("#no1").value);
  let no2 = parseInt(document.querySelector("#no2").value);
  sumar(no1,no2);
})

btnRestar.addEventListener("click", ()=>{
  let no1 = parseInt(document.querySelector("#no1").value);
  let no2 = parseInt(document.querySelector("#no2").value);
  restar(no1,no2);
})

btnMultiplicar.addEventListener("click", () => {
  let no1 = parseInt(document.querySelector("#no1").value);
  let no2 = parseInt(document.querySelector("#no2").value);
  multiplicar(no1, no2);
})

btnDividir.addEventListener("click", () => {
  let no1 = parseInt(document.querySelector("#no1").value);
  let no2 = parseInt(document.querySelector("#no2").value);
  dividir(no1, no2);
})