// Réécris ces deux types d'objets pour utiliser des classes, plutôt que directement
// manipulation de prototypes. Le Speaker est un type simple qui expose une méthode speake
// qui, lorsqu'il est appelé, affiche le texte donné avec le nom de Speaker.
// Shouter est un sous-type de Speaker qui crie son texte et le met en majuscules.

function Speaker(name, verb) {
    this.name = name;
    this.verb = verb || "says";
}

Speaker.prototype.speak = function (text) {
    console.log(this.name + " " + this.verb + " '" + text + "'");
};

function Shouter(name) {
    Speaker.call(this, name, "shouts");
}

Shouter.prototype = Object.create(Speaker.prototype);
Shouter.prototype.speak = function (text) {
    Speaker.prototype.speak.call(this, text.toUpperCase());
};

new Shouter("Dr. Loudmouth").speak("hello there");
