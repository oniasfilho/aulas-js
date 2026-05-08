
// let studentName;
// let studentAge;
// let profAge = 31
 
// function studentInformation(studentName, studentAge) {
// console.log(`O(a) aluno(a) se chama ${studentName}, e tem ${studentAge}  anos.`)
//     if (studentAge < profAge) {
//         console.log("Aluno(a) xovem")
//     }else{
//         console.log("Aluno(a) véio(a)")
//     }
// }

// studentInformation("Joyce", 35);

// let number1;
// let number2;

// function adicao(number1, number2) {
//     let adicao = number1 + number2;
//     console.log(`O resultado da soma de ${number1} + ${number2} é ${adicao}`);
// }
// function subtracao(number1, number2) {
//     let subtracao = number1 - number2;
//     console.log("O resultado da subtração de " + number1 + " - " + number2 + " é " + subtracao);
// }
// function multiplicacao(number1, number2) {
//     let multiplicacao = number1 * number2;
//     console.log("O resultado da multiplicação de " + number1 + " x " + number2 + " é " + multiplicacao);
// }
// function divisao(number1, number2) {
//     let divisao = number1 / number2;
//     console.log("O resultado da divisão de " + number1 + " / " + number2 + " é " + divisao);
// }
// function resto(number1, number2) {
//     let resto = number1 % number2;
//     console.log("O resultado do resto da divisão de " + number1 + " / " + number2 + " é " + resto);
// }
// adicao(2, 2);
// subtracao(10, 7);
// multiplicacao(6, 6);
// divisao(10, 2)
// resto(100, 30);

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
  FOCO_DE_3SEG: "foco de 3 segundos",
  SEMPRE_TA_CERTO: "sempre tá certo",
};

// PETS
let pets = [
  {
    nome: "Alfredo, Layla, Cookie e Lucy",
    raca: "Cheetos",
    dono: "Onias Filho",
  },
  {
    nome: "Mel, Filó, Morgana e João Victor",
    raca: "Vira lata",
    dono: "Joyce",
  },
  {
    nome: "Alfredo, Layla, Cookie e Lucy",
    raca: "Cheetos",
    dono: "Jéssica",
  },
  {
    nome: "Mel, Filó, Morgana e João Victor",
    raca: "Vira lata",
    dono: "Rafael",
  },
  {
    nome: "Thor e Margarida",
    raca: "Vira lata",
    dono: "Elenil",
  },
];

// FAMÍLIA (SEM PARENTESCO)
let familia = [
  {
    id: 1,
    nome: "Cris",
    idade: 39,
    cidade: "Cuiabá",
    temPet: false,
    nivelEstresse: 4,
    qualidades: [
      QUALIDADES.FOFOQUEIRO,
      QUALIDADES.NOVELEIRO,
      QUALIDADES.SEMPRE_TA_CERTO,
    ],
  },
  {
    id: 2,
    nome: "Joyce",
    idade: 36,
    cidade: "Imbituba",
    temPet: true,
    nivelEstresse: 3,
    qualidades: [
      QUALIDADES.ACORDA_CANSADO,
      QUALIDADES.FOFOQUEIRO,
      QUALIDADES.DORME_VENDO_SERIE,
      QUALIDADES.FATNESS,
      QUALIDADES.FOCO_DE_3SEG,
      QUALIDADES.MEMORIA_DA_DORY,
      QUALIDADES.PROMETE_DIETA,
    ],
  },
  {
    id: 3,
    nome: "Elenil",
    idade: 55,
    cidade: "Cuiabá",
    temPet: true,
    nivelEstresse: 8,
    qualidades: [
      QUALIDADES.BARRAQUEIRO,
      QUALIDADES.DORME_VENDO_SERIE,
      QUALIDADES.FOFOQUEIRO,
      QUALIDADES.TESTEMUNHA_DO_MOUNJARO,
    ],
  },
  {
    id: 4,
    nome: "Onias Filho",
    idade: 31,
    cidade: "Cuiabá",
    temPet: true,
    nivelEstresse: 10,
    qualidades: [
      QUALIDADES.FATNESS,
      QUALIDADES.FOCO_DE_3SEG,
      QUALIDADES.FOFOQUEIRO,
      QUALIDADES.MEMORIA_DA_DORY,
      QUALIDADES.PROMETE_DIETA,
    ],
  },
  {
    id: 5,
    nome: "Onias",
    idade: 83,
    cidade: "Cuiabá",
    temPet: false,
    nivelEstresse: 0,
    qualidades: [
      QUALIDADES.ACORDA_CANSADO,
      QUALIDADES.DORME_VENDO_SERIE,
      QUALIDADES.MEMORIA_DA_DORY,
      QUALIDADES.SEMPRE_TA_CERTO,
    ],
  },
];

// ADICIONANDO MAIS MEMBROS
familia.push(
  {
    id: 6,
    nome: "Rafael",
    idade: 42,
    cidade: "Imbituba",
    temPet: true,
    nivelEstresse: 5,
    qualidades: [
      QUALIDADES.FATNESS,
      QUALIDADES.FOFOQUEIRO,
      QUALIDADES.MEMORIA_DA_DORY,
      QUALIDADES.PROMETE_DIETA,
    ],
  },
  {
    id: 7,
    nome: "Felipe",
    idade: 17,
    cidade: "Imbituba",
    temPet: false,
    nivelEstresse: 1,
    qualidades: [
      QUALIDADES.ACORDA_CANSADO,
      QUALIDADES.FOFOQUEIRO,
      QUALIDADES.NOVELEIRO,
    ],
  },
  {
    id: 8,
    nome: "Jéssica",
    idade: 28,
    cidade: "Cuiabá",
    temPet: true,
    nivelEstresse: 6,
    qualidades: [
      QUALIDADES.DORME_VENDO_SERIE,
      QUALIDADES.MEMORIA_DA_DORY,
    ],
  },
  {
    id: 9,
    nome: "Bento",
    idade: 1,
    cidade: "Cuiabá",
    temPet: false,
    nivelEstresse: 0,
    qualidades: [
      QUALIDADES.ACORDA_CANSADO,
      QUALIDADES.DORME_VENDO_SERIE,
    ],
  }
);


module.exports = {
  QUALIDADES,
  familia,
  pets,
};
