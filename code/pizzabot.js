const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

// Ieteration 1
console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);
console.log(pizzaPrice);

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

// alert("Hey! Happy to serve your pizza. On our menu we have " + vegetarian + " , " + hawaiian + " and " + pepperoni)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Example : `string text ${variable} string text`


let orderName = prompt(`Enter the name of the pizza you want to order today.`);
// Check if user input is stored in orderName
console.log(orderName);

let orderQuantity = prompt(`How many of ${orderName} do you want?`);
// Check if user input is stored in orderQuantity
console.log(orderQuantity);

let orderTotal = orderQuantity * pizzaPrice

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`);


// https://www.w3schools.com/js/js_arithmetic.asp