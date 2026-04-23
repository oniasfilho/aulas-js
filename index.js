/* // variaveis
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
console.log(`O(a) aluno(a) se chama ${studentName}, e tem ${studentAge}  anos.`)
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
    console.log(`O resultado da soma de ${number1} + ${number2} é ${adicao}`);
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

// DAILY EXERCISE (16/04)
// - USE RETURN IN ALL METHODS
// - USE VARIABLES TO STORE METHOD'S RETURN VALUES
// - USE DEBUGGER
//  - COMO FUNCIONA DEBUGGER NUMA APP IGUAL ESSAS
//  - COMO USAR NO VSCODE
//  - COMO OBSERVAR UMA VARIÁVEL
*/


//CATALOGO DE QUALIDADES
let QUALIDADES = {
    FOFOQUEIRO: "fofoqueiro", 
    DORME_VENDO_SERIE: "dorme vendo série", 
    ACORDA_CANSADO: "acorda cansado", 
    BARRAQUEIRO: "barraqueiro", 
    PROMETE_DIETA: "promete dieta toda segunda", 
    TESTEMUNHA_DO_MOUNJARO: "testemunha do mounjaro", 
    NOVELEIRO: "noveleiro", 
    USUARIO_DO_TADALA: "usuário do tadala", 
    FATNESS: "fatness", 
    MEMORIA_DA_DORY: "memoria da Dory", 
    FOCO_DE_3SEG:"foco de 3 segundos", 
    SEMPRE_TA_CERTO: "sempre tá certo"};


    //BASE DE DADOS DA FAMÍLIA
let familia = [
    {nome: "Cris", idade: 39, parentesco: "tia", cidade: "Cuiabá", temPet: false, nivelEstresse: 4, qualidades: [QUALIDADES.FOFOQUEIRO, QUALIDADES.NOVELEIRO, QUALIDADES.SEMPRE_TA_CERTO]
    },
    {nome: "Joyce", idade: 36, parentesco: "eu", cidade: "Imbituba", temPet: true, nivelEstresse: 3, qualidades:[QUALIDADES.ACORDA_CANSADO, QUALIDADES.FOFOQUEIRO, QUALIDADES.DORME_VENDO_SERIE, QUALIDADES.FATNESS, QUALIDADES.FOCO_DE_3SEG, QUALIDADES.MEMORIA_DA_DORY, QUALIDADES.PROMETE_DIETA]
    },
    {nome:"Elenil", idade: 55, parentesco:"mãe", cidade: "Cuiabá", temPet: true, nivelEstresse: 8, qualidades: [QUALIDADES.BARRAQUEIRO, QUALIDADES.DORME_VENDO_SERIE, QUALIDADES.FOFOQUEIRO, QUALIDADES.TESTEMUNHA_DO_MOUNJARO]
    },
    {nome: "Onias Filho", idade:31, parentesco: "irmão", cidade: "Cuiabá", temPet: true, nivelEstresse: 10, qualidades: [QUALIDADES.FATNESS, QUALIDADES.FOCO_DE_3SEG, QUALIDADES.FOFOQUEIRO, QUALIDADES.MEMORIA_DA_DORY, QUALIDADES.PROMETE_DIETA]
    },
    {nome: "Onias", idade: 83, parentesco: "pai", cidade: "Cuiabá", temPet: false, nivelEstresse: 0, qualidades: [QUALIDADES.ACORDA_CANSADO, QUALIDADES.DORME_VENDO_SERIE, QUALIDADES.MEMORIA_DA_DORY, QUALIDADES.SEMPRE_TA_CERTO]}];


    //ADICIONANDO NOVOS MEMBROS
familia.push(
    {nome: "Rafael", idade:42, parentesco: "marido", cidade: "Imbituba", temPet: true, nivelEstresse:5, qualidades: [QUALIDADES.FATNESS, QUALIDADES.FOFOQUEIRO, QUALIDADES.MEMORIA_DA_DORY, QUALIDADES.PROMETE_DIETA]},
    {nome:"Felipe", idade: 17, parentesco: "enteado", cidade: "Imbituba", temPet: false, nivelEstresse: 1, qualidades: [QUALIDADES.ACORDA_CANSADO, QUALIDADES.FOFOQUEIRO, QUALIDADES.NOVELEIRO] },
    {nome: "Jéssica", idade: 28, parentesco: "cunhada", cidade: "Cuiabá", temPet: true, nivelEstresse: 6, qualidades:[QUALIDADES.DORME_VENDO_SERIE, QUALIDADES.MEMORIA_DA_DORY]}, 
    {nome: "Bento", idade: 1, parentesco: "primo", cidade: "Cuiabá", temPet: false, nivelEstresse: 0, qualidades:[QUALIDADES.ACORDA_CANSADO, QUALIDADES.DORME_VENDO_SERIE]}
)
 //TESTANDO ACESSO AOS DADOS DA FAMÍLIA
/* console.log(familia);
console.log(familia[0].nome);
console.log(familia[1].idade);
familia.forEach(membro => {console.log(membro.nome)});
console.log(familia[4].cidade);
console.log(familia[0].qualidades[0]);
console.log(familia.length);
console.log(familia[8].nome); */

//FUNÇÕES

//IDENTIFICANDO FOFOQUEIROS
function identificadorDeFofoqueiro() {
    let nomeFofoqueiros = [];
    for (let i = 0; i < familia.length; i++) {
         if (familia[i].qualidades.includes(QUALIDADES.FOFOQUEIRO)){
            nomeFofoqueiros.push(familia[i].nome)
    }
    
}
return nomeFofoqueiros;}
let fofoqueiros = identificadorDeFofoqueiro()
console.log(fofoqueiros);

 //QUEM É PAI/MAE DE PET
 function paisDePet(){
    nomePais = [];
    for (let i = 0; i < familia.length; i++) {
        if (familia[i].temPet == true){
            nomePais.push(familia[i].nome)
        }
    }
    return nomePais;
 }


console.log(paisDePet());

/*
if (familia[2].cidade == "Cuiabá"){
    console.log(`${familia[2].nome} morre de calor`)
}else{
    console.log(`${familia[2].nome} não precisa de ar condicionado`)
}
if(familia[3].qualidades.includes(QUALIDADES.MEMORIA_DA_DORY)){
    console.log(`Haja Venvanse para ${familia[3].nome}`)
} else {
    console.log(`${familia[3].nome} tem boa memória`)
};

familia.map(pessoa =>{
    if (pessoa.nivelEstresse < 5){
        console.log(`${pessoa.nome} é uma pessoa tranquila`)
    }else{
        console.log(`${pessoa.nome} é uma pessoa estressada`)
    }
})

for(let i = 0; i < familia.length; i++){
    console.log(familia[i].nome);
}

for(let i = 0; i < familia.length; i++){
    if(familia[i].temPet == true){
        console.log(`${familia[i].nome} ama os animais`)
    };
}

for (let i = 0 ; i < familia.length; i++) {
    if (familia[i].cidade == "Cuiabá") {
        console.log(familia[i].nome)
    }
}

for (let i = 0; i < familia[1].qualidades.length; i++) {
    console.log(familia[1].qualidades[i]);
}

function quantEstressados() {
    let nomeEstressados = [];
    for (let i = 0 ; i < familia.length; i++) {
    if (familia[i].nivelEstresse > 5) {
        nomeEstressados.push(familia[i].nome); 
    }
}
return nomeEstressados.length;
}
console.log(quantEstressados()); */