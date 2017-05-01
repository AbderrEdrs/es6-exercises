// C'est une erreur répondu en JavaScript. Nous créons un certain nombre de
// fonctionne en boucle, et se réfère à une variable externe à partir de ces fonctions.
// Tous finissent par se référer à la même variable, qui finit par être
// augmenté de 10. Ainsi, les callbacks [2] ne enregistrent pas 2. Il enregistre 10, tout comme tous
// fonctionne dans le tableau.
//
// Connaissez-vous la solution pour de telles situations dans ES5 ? ES6 fournit-il un
// solution plus propre?

"use strict"

var callbacks = [];
for (var i = 0; i < 10; i++) {
  callbacks.push(function() { console.log(i) })
}

callbacks[2]();
