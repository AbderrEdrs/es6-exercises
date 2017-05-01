// Notre caisse enregistreuse a quelques sérieux problèmes

var register = {
  balance: 0,
  deposit: function(value){
    this.balance += value;
  },
  withdraw: function(value){
    this.balance -= value;
  }
};

// Toute personne peut mettre à jour directement son solde sans retrait / dépôt:

register.balance = 100000;

// La balance peut être manipulée avec une entrée non saturée:

register.deposit(1);
register.deposit("0");
register.deposit("00000");
register.balance;

// Modifiez l'objet de registre pour utiliser les getters et les setters. Retournez une erreur
// si l'utilisateur définit une valeur qui n'est pas un entier positif