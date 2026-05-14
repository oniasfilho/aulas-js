function changeAmount(button, change) {
  let card = button.closest(".product-card");
  let number = card.querySelector(".amount");
  let amount = number.textContent;
  let currentAmount = Number(amount) + change;
  if (currentAmount >= 0) {
    number.textContent = currentAmount;
  } else {
    number.textContent = 0;
  }
}

// INCREASE
let btnPlus = document.querySelectorAll(".btn-plus");
btnPlus.forEach((button) => {
  button.addEventListener("click", () => {
    changeAmount(button, 1);
  });
});

// DECREASE
let btnMinus = document.querySelectorAll(".btn-minus");
btnMinus.forEach((button) => {
  button.addEventListener("click", () => {
    changeAmount(button, -1);
  });
});
