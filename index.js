const { QUALIDADES, familia, pets } = require("../aulas-js/lessons/coisas-da-joyce/random")

console.log("roda budega")
// for normal
for (let i = 0; i < familia.length; i++) {
    console.log("rodou uma vez " + i) // const element = array[i];
}

// for each
familia.forEach(pessoa => {
    console.log("O nome dessa pessoa é: " + pessoa.nome)
})

let joyce = familia.find(pessoa => pessoa.nome === "Joyce");

let resumo = familia.map(each => {
    // achar todos pets
    // mapear nome e dono
    // usar aqui embaixo
    return {
        nome: each.nome,
        idade: each.idade,
        pet: pets.find(pet => pet.dono === each.nome)?.nome
    }
})

console.log(resumo)

// nome
// idade
// pet

// fazer coisas interessantes que usem: map, filter, find, etc