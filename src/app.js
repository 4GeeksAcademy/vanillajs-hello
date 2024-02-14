/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Usar nombres de variables descriptivos y evitar nombres genéricos
const iconos = ["♦", "♥", "♠", "♣"];
const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const colores = ["#000000", "#ff0000"];

// Evitar anidamiento excesivo y usar nombres de funciones descriptivos
function generarCartaAleatoria() {
  const indiceIconoAleatorio = Math.floor(Math.random() * iconos.length);
  const indiceNumeroAleatorio = Math.floor(Math.random() * numeros.length);
  const indiceColorAleatorio = Math.floor(Math.random() * colores.length);

  document.querySelector("#numero").innerHTML = numeros[indiceNumeroAleatorio];
  document.querySelector("#simboloTop").innerHTML =
    iconos[indiceIconoAleatorio];
  document.querySelector("#simboloBottom").innerHTML =
    iconos[indiceIconoAleatorio];
  document.querySelector("#simboloBottom").style.color =
    colores[indiceColorAleatorio];
  document.querySelector("#simboloTop").style.color =
    colores[indiceColorAleatorio];
}

// Mejorar la legibilidad y evitar el uso excesivo de funciones anidadas
function iniciarCicloDeCartas() {
  generarCartaAleatoria();
  setInterval(generarCartaAleatoria, 2000);
}

// Usar window.onload para inicializar la aplicación
window.onload = function() {
  iniciarCicloDeCartas();
  document.querySelector("button").onclick = generarCartaAleatoria;
};
