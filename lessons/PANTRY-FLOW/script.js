let number = document.querySelector(".amount");
// AUMENTAR
let btnPlus = document.querySelector(".btn-plus");
btnPlus.addEventListener("click", () => {
  let amount = number.textContent;
  let currentAmount = Number(amount) + 1;
  number.textContent = currentAmount;
});
// DIMINUIR
let btnMinus = document.querySelector(".btn-minus");
btnMinus.addEventListener("click", () => {
  let amount = number.textContent;
  let currentAmount = Number(amount) - 1;
  if (currentAmount >= 0) {
    number.textContent = currentAmount;
  } else {
    number.textContent = 0;
  }
});
