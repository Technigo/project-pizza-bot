const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//console.log(`${vegetarian} + ${hawaiian} + ${pepperoni} + ${pizzaPrice}`);

//Put your Javscript code here:
let orderQuantity;
let orderTotal;
let orderName;
let cookingTime;

alert(`Welcome to Andrea & Jamie's Pizza Corner! On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`); //iteration2

orderName = prompt("Enter the name of the pizza you want to order today");//iteration3


const validateOrderName = (order) => {
  if (order === "vegetarian" || order === "pepperoni" || order ==="hawaiian") {
    orderQuantity = prompt(`How many of ${orderName} would you like?`);
    validateOrderCount(order);
  } else {
    alert("Please choose a pizza from our menu");
  }
}

validateOrderName(orderName);

const validateOrderCount = (order) => {
  orderQuantity = prompt(`How many of ${order} would you like today?`);
  orderTotal = orderQuantity * pizzaPrice;
  calculateCookingTime(orderQuantity);
}

const calculateCookingTime = (order) => {
  if (order <= 2) {
    cookingTime = 10;
  } else if (order > 2 && order < 6) {
    cookingTime = 15;
  } else {
    cookingTime = 20;
  }
  alert(`Great I'll get started on your ${orderName} right away. It will cost ${orderTotal}kr. The pizzas will take ${cookingTime} minutes`);
}

validateOrderCount();

     
