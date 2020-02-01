const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80
let orderName
let orderQuantity
let orderTotal

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

orderName = prompt("Enter the name of the pizza you want to order today.");

orderQuantity = prompt(`How many of ${orderName} do you want?`);

orderTotal = pizzaPrice * parseFloat(orderQuantity);

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr.`);