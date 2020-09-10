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

alert(`Welcome to Pizza Corner! On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`); //iteration2

const validateOrderName = (order) => {
  if (order === "vegetarian pizza" || order === "pepperoni pizza" || order ==="hawaiian pizza") {
    orderQuantity = prompt(`How many ${orderName}'s would you like?`);
    orderQuantity = parseInt(orderQuantity, 10);
  } else {
    alert("Please choose a pizza from our menu");
    askForPizza();
  }
}

const askForPizza = () => {
  //alert(`Welcome to Pizza Corner! On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`); //iteration2
  orderName = prompt("Enter the name of the pizza you want to order today");//iteration3
  orderName = orderName.toLowerCase();
  validateOrderName(orderName);
}

askForPizza();

const calculateTotalCost = (quantity, price) => {
  orderTotal = quantity * price;
  alert(`The total cost is ${orderTotal}`);
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
  document.getElementById('printOrder').innerHTML = `You have ordered: ${orderName} x${orderQuantity} and the total price is: ${orderTotal}kr`;
}

calculateTotalCost(orderQuantity, pizzaPrice);
calculateCookingTime(orderQuantity);

     
