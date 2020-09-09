const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);

//Greeting:

const x = "vegeterian";
const y = "hawaiian";
const z = "pepperoni";

alert(`Hey! Happy to serve your pizza. On our menu we have ${x}, ${y} and ${z}.`);


//Ask the customer:

const orderName = prompt("Enter the name of the pizza you want to order today."); 

const orderQuantity = prompt (`How many of ${orderName} do you want?`);

console.log(orderName, orderQuantity);

//Finalize the order:

const orderTotal = orderQuantity * pizzaPrice

alert (`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`);

console.log(orderTotal);