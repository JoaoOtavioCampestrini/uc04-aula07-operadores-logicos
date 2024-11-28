// entrada
const idadePessoa = 17;
const estaComResponsavel = true;
const estaComRG = true;

// processamento

// if = condição se
// else = condição senão

//if (idadePessoa >= 18) {
//    console.log("Entrada Liberada");
//}
//else {
//    console.log("Entrada Bloqueada");
//}


if (estaComRG) {
    if (idadePessoa >= 18) {
        console.log("Entrada liberada");
    } else {
        if (estaComResponsavel) {
            console.log("Entrada liberada");
        } else {
            console.log("Entrada bloqueada");
        }
    }
}
else {
    console.log("Entrada bloqueada");
}

if (estaComRG && (idadePessoa >= 18 || estaComResponsavel)) {
    console.log("Entrada liberada");
}
else {
    console.log("Entrada bloqueada");
}
