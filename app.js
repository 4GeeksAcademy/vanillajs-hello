

// colocar el ejemplo

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

// declarar una funcion
// hacer 3 bucles anidados
// esto hace que se generen todas las combinaciones posibles

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let x = 0; x < noun.length; x++) {
      let domainName = pronoun[i] + adj[j] + noun[x] + ".com";
      console.log(domainName);
    }
  }
}
