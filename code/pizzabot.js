const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80
let orderName
let orderQuantity

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

orderName = prompt("Enter the name of the pizza you want to order today.");

orderQuantity = prompt(`How many of ${orderName} do you want?`);

console.log(orderQuantity);