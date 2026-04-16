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

// DAILY EXERCISE (16/04)
// - USE RETURN IN ALL METHODS
// - USE VARIABLES TO STORE METHOD'S RETURN VALUES
// - USE DEBUGGER
//  - COMO FUNCIONA DEBUGGER NUMA APP IGUAL ESSAS
//  - COMO USAR NO VSCODE
//  - COMO OBSERVAR UMA VARIÁVEL

let studentName;
let studentAge;
let profAge = 31
 
function studentInformation(studentName, studentAge) {
console.log("O(a) aluno(a) se chama " + studentName + ", e tem " + studentAge + " anos.")
    if (studentAge < profAge) {
        console.log("Aluno(a) xovem")
    }else{
        console.log("Aluno(a) véio(a)")
    }
}

studentInformation("Joyce", 35);

let number1;
let number2;

function adicao(number1, number2) {
    let adicao = number1 + number2;
    console.log("O resultado da soma de " + number1 + " + " + number2 + " é " + adicao);
}
function subtracao(number1, number2) {
    let subtracao = number1 - number2;
    console.log("O resultado da subtração de " + number1 + " - " + number2 + " é " + subtracao);
}
function multiplicacao(number1, number2) {
    let multiplicacao = number1 * number2;
    console.log("O resultado da multiplicação de " + number1 + " x " + number2 + " é " + multiplicacao);
}
function divisao(number1, number2) {
    let divisao = number1 / number2;
    console.log("O resultado da divisão de " + number1 + " / " + number2 + " é " + divisao);
}
function resto(number1, number2) {
    let resto = number1 % number2;
    console.log("O resultado do resto da divisão de " + number1 + " / " + number2 + " é " + resto);
}


adicao(2, 2);
subtracao(10, 7);
multiplicacao(6, 6);
divisao(10, 2)
resto(100, 30);

let familia = [  {papel: "pai", nome : "Onias", anoNasc : 1943},
    {papel: "mãe", nome : "Elenil", anoNasc : 1971},
    {papel: "filha", nome : "Joyce", anoNasc : 1990},
    {papel: "filho", nome : "Onias F", anoNasc : 1995}]
      
    if (familia[2].anoNasc < 2007 && familia[3].anoNasc < 2007) {
        console.log("Os filhos do Prof Onias e Elenil são todos maiores de idade")
    } else {console.log("Prof Onias e Elenil têm filhos menores de idade")}
  



// EXERCICIO DO DIA
// - Store a user name and age
// - Print user information
// - Create a simple calculator (soma, divisao, multiplicacao)


//FOCOS -> variaveis e funcao
// VARIAVEL -> ARMAZENA DADO
// FUNCAO -> recebe parametros (variaveis) e devolve algo (variavel)