// Le fait que account est constant signifie-t-il que nous ne pouvons pas mettre à jour le password ?
// Pourquoi ou pourquoi pas? Et sinon, comment faire pour que nous ne puissions pas le modifier ?

const account = {
  username: "marijn",
  password: "xyzzy"
};

account.password = "s3cret"; // (*much* more secure)

console.log(account.password);
