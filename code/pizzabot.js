const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
alert(`Hey, happy to serve you pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

let orderName = prompt('Enter the name of the pizza you want to order today.');

let orderQuantity = prompt(`How many of ${orderName} do you want?`);

let orderTotal = orderQuantity * pizzaPrice;

alert(`Great. I'll get started on your ${orderName} right away, it will cost ${orderTotal}kr`);
