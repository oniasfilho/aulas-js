// variaveis
var idade = 31;
let sobrenome = "da Rocha Filho";
const nome = "Onias";
var nomeCompleto;

// função
function obtemNomeCompleto(primeiroParametro, segundoParametro) {
    console.log("Acabou de chamar a função obtemNomeCompleto")
    return primeiroParametro + " " + segundoParametro;
}

nomeCompleto = obtemNomeCompleto(nome, sobrenome);

console.log(nomeCompleto)

var resultado;

function soma(numero1, numero2) {
    return numero1 + numero2;
}

resultado = soma(5, 5);

console.log(resultado);


// EXERCICIO DO DIA
// - Store a user name and age
// - Print user information
// - Create a simple calculator (soma, divisao, multiplicacao)


//FOCOS -> variaveis e funcao
// VARIAVEL -> ARMAZENA DADO
// FUNCAO -> recebe parametros (variaveis) e devolve algo (variavel)