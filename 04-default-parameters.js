// La façon utilisé pour les arguments facultatifs avant en JavaScript était
// l'opérateur ||:


var myRide = {
  make: "Ford",
  model: "Model T",
  year: 1959,
  location: "the Office",
  driveTo: function ( place ) {
    this.location = place || "Home"
  }
};

myRide.driveTo("Walmart");
myRide.location; // "Walmart"

// vs...

myRide.driveTo();
myRide.location; // "Home"



// TODO: Re-écris la fonction driveTo pour déclarer des paramètres facultatifs proprement

