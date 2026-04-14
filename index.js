const firstName = "Joyce";
const lastName = "Rocha";

function mergeName(name, lastName) {
  const fullName = name + lastName;
  return fullName;
}

const nomeGerado = mergeName(firstName, lastName);

console.log(nomeGerado);