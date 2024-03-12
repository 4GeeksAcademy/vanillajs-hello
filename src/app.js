/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("generarExcusa").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = generarEscusa();
  });
};
let who = ["El perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
let action = ["se comió", "orinó en", "aplastó", "rompió"];
let what = ["mi tarea", "las llaves", "el coche"];
let when = [
  "antes de la clase",
  "justo a tiempo",
  "cuando terminé",
  "durante mi almuerzo",
  "mientras rezaba"
];
function generarEscusa() {
  let randomWho = who[Math.floor(who.length * Math.random())];
  let randomAction = action[Math.floor(action.length * Math.random())];
  let randomWhat = what[Math.floor(what.length * Math.random())];
  let randomWhen = when[Math.floor(when.length * Math.random())];
  const excusaAleatoria = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  return excusaAleatoria;
}
