const btn1 = document.getElementById("wash-car");
const btn2 = document.getElementById("mow-lawn");
const btn3 = document.getElementById("pull-weeds");
const itemName = document.querySelector(".item-name");
const itemPrice = document.querySelector(".item-price");
const itemName2 = document.querySelector(".item-name2");
const itemPrice2 = document.querySelector(".item-price2");
const itemName3 = document.querySelector(".item-name3");
const itemPrice3 = document.querySelector(".item-price3");
const itemPriceDolar = document.querySelector(".item-price > span");
const totalPrice = document.getElementById("total-price");
const removeBtn = document.querySelector("#remove-btn1");
const sendBtn = document.getElementById("send");
let price = 0;

btn1.addEventListener("click", () => {
  itemName.textContent = `Wash Car`;
  itemName.innerHTML += `<button id="remove-btn1">Remove</button>`;
  price = 10;
  itemPrice.textContent = `$${price}`;
  totalPrice.textContent = `$${10}`;
});

btn2.addEventListener("click", () => {
  itemName2.textContent = `Mow Lawn`;
  price = 20;
  itemPrice2.textContent = `$${price}`;
  totalPrice.textContent = `$${20}`;
});
btn3.addEventListener("click", () => {
  itemName3.textContent = `Pull Weeds`;
  price = 30;
  itemPrice3.textContent = `$${price}`;
  totalPrice.textContent = `$${30}`;
});
if ((btn1 && btn2).clicked === true) {
  totalPrice.textContent = `$${30}`;
}
sendBtn.addEventListener("click", () => {
  itemName.innerHTML = "";
  itemPrice.innerHTML = "";
  itemName2.innerHTML = "";
  itemPrice2.innerHTML = "";
  itemName3.innerHTML = "";
  itemPrice3.innerHTML = "";
});
