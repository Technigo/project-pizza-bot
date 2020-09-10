const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

//test works
//console.log(`Test if connection HTML-JS works: ${vegetarian}, ${hawaiian} and ${pepperoni}`);

alert(`Welcome, customer! Happy to serve your pizza. On our menu we have: ${vegetarian}, ${hawaiian} and ${pepperoni}`);

const orderName = prompt(`Enter the name of the pizza you want to order today:`);

const orderQuantity = prompt(`How many of ${orderName}s do you want?`);

const orderTotal = orderQuantity * pizzaPrice;

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr.`);

