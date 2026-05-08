const {
  QUALIDADES,
  familia,
  pets,
} = require("./random.js");

// console.log("roda budega")
// // for normal
// for (let i = 0; i < familia.length; i++) {
//  a volta dos mortos vivos   console.log("rodou uma vez " + i) // const element = array[i];
// }

// // for each
// familia.forEach(pessoa => {
//     console.log("O nome dessa pessoa é: " + pessoa.nome)
// })

// let joyce = familia.find(pessoa => pessoa.nome === "Joyce");

// let resumo = familia.map(each => {
//     // achar todos pets
//     // mapear nome e dono
//     // usar aqui embaixo
//     return {
//         nome: each.nome,
//         idade: each.idade,
//         pet: pets.find(pet => pet.dono === each.nome)?.nome
//     }
// })

// console.log(resumo)

// function listarFamilia() {
// return familia;
// }
// console.log(listarFamilia());

//usar find
function buscarPessoaPorNome(quem) {
    let nome = familia.find(pessoa => pessoa.nome === quem);
    return nome;
}
console.log(buscarPessoaPorNome("Bento"));

//usar filter
function buscarFofoqueiros() {
    let fofoqueiros = familia.filter(pessoas => pessoas.qualidades.includes(QUALIDADES.FOFOQUEIRO));
    return fofoqueiros;
}
console.log(buscarFofoqueiros());

function buscarPorCidade(cidade) {
    let municipio = familia.filter(pessoa => pessoa.cidade === cidade);
    return municipio
}
console.log(buscarPorCidade("Imbituba"));


 //usar map
function criarResumo() {
  let resumo = familia.map((pessoa) => {
    let pet = pets.find((pet) => pet.dono === pessoa.nome)?.nome ?? "Não tem";
    return {
      nome: pessoa.nome,
      idade: pessoa.idade,
      cidade: pessoa.cidade,
      pet: pet,
    };
  });
  return resumo;
}
console.log(criarResumo());

// usar forEach
function mostrarFrasesDaFamilia() {
  familia.forEach((pessoa) => {
    console.log(`${pessoa.nome} mora em ${pessoa.cidade}`);
  });
}
mostrarFrasesDaFamilia();



// let formularioDeInclusao = document.getElementById("form-cadastro");
// let nome = document.getElementById("nome");
// let idade = document.getElementById("idade");
// let cidade = document.getElementById("cidade");
// let temPet = document.getElementById("tem_pet")
// let listaFamilia = document.getElementById("lista-familia")

