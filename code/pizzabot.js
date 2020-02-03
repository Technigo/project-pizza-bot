const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

console.log(vegetarian, hawaiian, pepperoni, pizzaPrice)

var x = vegetarian
var y = hawaiian
var z = pepperoni

alert("Hey! Happy to serve you pizza! On our menu we have " + x + ", " + y + " and " + z + ".")

let orderName = prompt("Enter the name of the pizza you want to order today.");
console.log(orderName);

if (orderName == "vegetarian") {
  modifiedName = x;
} else if (orderName == "hawaiian") {
  modifiedName = y;
} else if (orderName == "pepperoni") {
  modifiedName = z;
} else {
  alert('Select a pizza form the menu')
}

let orderQuantity = prompt("How many of " + modifiedName + " do you want?");
console.log(orderQuantity);

const totalCost = orderQuantity * 80;

console.log(`The customer has ordered ${orderQuantity} of ${orderName}.`);

if (orderQuantity < 3) {
  cookingTime = "10";
} else if (orderQuantity < 6) {
  cookingTime = "15";
} else {
  cookingTime = "20";
} 

alert("Great, I'll get started on your " + modifiedName + " right away, it will cost you " + orderTotal + "kr. The pizzas will take " + cookingTime + " minutes." );

console.log("It will cost " + orderQuantity * 80 + "kr.");







/*
let orderTotal = orderQuantity * pizzaPrice
alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr.");*/





//Put your Javscript code here: