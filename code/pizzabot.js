const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);
console.log(pizzaPrice);

//Put your Javscript code here:

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);
let orderName = prompt("Enter the name of the pizza you want to order today.");
let orderQuantity = prompt(`How many of ${orderName} do you want?`);

console.log(orderQuantity);

let orderTotal = pizzaPrice * parseFloat(orderQuantity);
console.log(orderTotal);

alert(
  `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`
);
