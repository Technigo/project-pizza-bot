// Iteration 1

const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);
console.log(pizzaPrice);

//Iteration 2

alert(`Hey, happy to serve your pizza! On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}!`);

// Iteration 3

const orderName = prompt("Enter the name of the pizza you want to order today!");

const orderQuantity = prompt(`How many of ${orderName} do you want?`);

console.log(orderQuantity);

// Iteration 4

const orderTotal = (orderQuantity * pizzaPrice);
console.log(orderTotal);

alert(`Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kronor!`)