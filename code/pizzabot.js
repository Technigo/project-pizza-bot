const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

console.log(vegetarian, hawaiian, pepperoni, pizzaPrice);

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);
let orderName = prompt("Enter the name of the pizza you want to order today.");
console.log(orderName);

let orderQuantity;

const checkOrderName = () => {
  if (orderName === 'vegetarian' || orderName === 'hawaiian' || orderName === 'pepperoni') {
    orderQuantity = prompt(`How many of ${orderName} pizza do you want?`);
    console.log(orderQuantity);
    return true;
  } else {
    alert("This pizza is not on the menu. Please try again.");
    orderName = prompt("Enter the name of the pizza you want to order today.");
    checkOrderName()
  };
};
checkOrderName();

let orderTotal;

const totalCost = () => {
  orderTotal = orderQuantity * pizzaPrice;
};
console.log(orderTotal);
totalCost();

let cookingTime;

const getCookingTime = () => {
  if (orderQuantity < 3) {
    cookingTime = '10';
  } else if (orderQuantity >= 3 && orderTotal <= 5) {
    cookingTime = '15';
  } else {
    cookingTime = '20';
  }
};
getCookingTime();

document.getElementById("order-confirmation").innerHTML = (`Great! I'll get started on your ${orderName} pizza right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime} minutes!`);