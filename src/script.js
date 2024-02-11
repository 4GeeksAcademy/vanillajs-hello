/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = ['my mom', 'my dog'];

  let adjs = ['burned', 'ate'];

  let nouns = ['my homework'];


for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjs.length; j++) {
        for (let k = 0; k < nouns.length; k++) {
            let excuseName = pronouns[i] + adjs[j] + nouns[k];
            console.log(excuseName);
        }
    }
}