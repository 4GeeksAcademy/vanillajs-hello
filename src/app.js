/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numeroPintas = Math.floor(Math.random() * 4);

  let pintas = ["♥", "♠", "♣", "♦"];
  let pintaEstilos = [
    "card text-center text-danger",
    "card text-center",
    "card text-center",
    "card text-center text-danger"
  ];
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numeroAleatorio = numeros[Math.floor(Math.random() * 13)];
  let pintaAleatoria = pintas[numeroPintas];
  let pintaEstilo = pintaEstilos[numeroPintas];

  document.getElementById("arriba").innerHTML = pintaAleatoria;
  document.getElementById("abajo").innerHTML = pintaAleatoria;
  document.getElementById("numero").innerHTML = numeroAleatorio;

  document
    .getElementById("carta")
    .setAttribute("class", "card text-center " + pintaEstilo);
  console.log(pintaAleatoria);
};
