// Simplifiez ces trois fonctions en utilisant la spread syntax.

// La première fonction, remplace, remplace une partie d'un tableau avec des éléments d'un autre
// tableau.

function replace(array, from, to, elements) {
    array.splice.apply(array, [from, to - from].concat(elements));
}

let testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log(testArray);

// la deuxième, copyReplace, Fait de même, mais crée un nouveau tableau plutôt
// que de modifier son argument.

function copyReplace(array, from, to, elements) {
    return array.slice(0, from).concat(elements).concat(array.slice(to))
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));
