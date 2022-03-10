var idade = 16;
var nome = "Carlos";

if (nome == "Carlos" && idade == 16) {
    console.log("O carlos pode entrar na aula");
} else {
    console.log("Esse não é o Carlos");
}

if (1 == 1 && 3 > 2 && true) {
    console.log("Passou");
}

if ((1 == 1 && 3 > 3) && true) {
    console.log("Passou");
} else if (nome === "Carlos" && idade >= 14) {
    console.log("Aqui passou");
}