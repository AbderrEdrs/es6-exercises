// Déplacez l'object triangle dans un nouveau fichier triangle.js
const triangle = {
  isIsosceles(a,b,c){
    if(a===b || b===c || a===c) return true;
    return false;
  },
  area(base, height){
    return (base * height) / 2;
  }
};

// Déplacez l'object square dans un nouveau fichier square.js
const square = {
  area(x){
    return x * x;
  }
};

// Déplacez l'object circle dans un nouveau fichier circle.js
const circle = {
  area(r){
    return Math.PI * (r * r);
  },
  diameter(r){
    return r + r;
  }
};

// Utilisez `import` et `export` pour faire fonctionner le code:
//
// e.g. import {pizza} from "jammy"

// Ne modifiez pas les lignes suivantes;
console.log(isIsosceles(3,7,7) === true);
console.log(triangle.area(4,7) === 14);
console.log(square.area(2,2) === 4);
console.log(circle.area(4.7) === 69.39778171779854 );
console.log(diameter(4.7) === 9.4);