var pessoa = {
  nome: ["Antonio", "Rochel"],
  idade: 20,
  sexo: "masculino",
  interesses: ["música", "estudar"],
  bio: function () {
    alert(
      this.nome[0] +
        " " +
        this.nome[1] +
        " tem " +
        this.idade +
        " anos de idade. Ele gosta de cantar" +
        this.interesses[0] +
        " e " +
        this.interesses[1] +
        ".",
    );
  },
  saudacao: function () {
    alert("Oi! Eu sou Paulo " + this.nome[0] + ".");
  },
};
