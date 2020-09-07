const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
console.log(vegetarian, hawaiian, pepperoni, pizzaPrice)

alert(`Hello! Happy to serve you pizza. On our menu we have ${vegetarian}, ${pepperoni}, ${hawaiian}`);

const orderName = prompt("Enter the name of the pizza you want to order");
const orderQuantity = prompt(`How many of ${orderName} do you want?`);

const orderTotal = orderQuantity * pizzaPrice;

alert(`Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr`);

