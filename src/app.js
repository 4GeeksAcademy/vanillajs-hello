/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog ", "My granma ", "His turtle ", "My bird "];
  const random = who[Math.floor(Math.random() * who.length)];

  let what = ["eat ", "pissed ", "crushed ", "broked "];
  const random2 = what[Math.floor(Math.random() * what.length)];

  let when = [
    "before the class.",
    "right in time.",
    "when I finished.",
    "during my lunch.",
    "while I was praying."
  ];
  const random3 = when[Math.floor(Math.random() * when.length)];

  const mensaje = who => {
    return `<h1>${who}</h1>`;
  };
  const showMessage = message => {
    const elemento = document.querySelector("#excuse");
    elemento.innerHTML = message;
  };
  const result = mensaje(random + random2 + random3);
  showMessage(result);
};
