// Pizza names and price

const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;



// Welcome 

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

// Get initial pizza choice input

let orderName = prompt("Enter the name of the pizza you want to order today.");

console.log(orderName);

// Validate if input match pizzas on menu

const validateOrderName = (orderName) => {
  if (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  ) {
    return true;
  } else {
    document.getElementById("error").innerHTML = "Select a pizza from the menu";
    return false;
  }
};
validateOrderName(orderName);


// check if validation returns true

if (validateOrderName(orderName)){

// Get input on how many pizzas customer want

let orderQuantity = prompt(`How many of ${orderName} do you want?`);

console.log(typeof orderQuantity);

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
  return orderQuantity * pizzaPrice;
};
calculateTotalCost(orderQuantity, pizzaPrice);

// Convert input string into integer

const num = Number(orderQuantity);

console.log(typeof num);

// Calculate cooking time depending on how many pizzas customer want

const calculateCookingTime = (num) => {
  if (num === 1 || num === 2) {
    return 10;
  } else if (num > 2 && num < 6) {
    return 15;
  } else {
    return 20;
  }
};

calculateCookingTime(num);

console.log(calculateCookingTime(num));

// alert(`Great, I'll get started on your ${orderName} right away, it will cost ${calculateTotalCost(
//   orderQuantity,
//   pizzaPrice
// )} kr
// The pizza(s) will take ${calculateCookingTime(num)} minutes.`);

// Provide confirmation of pizza, cost and time

document.getElementById("chat").innerHTML = `Great, I'll get started on your order of ${orderName} right away, it will cost ${calculateTotalCost(orderQuantity,pizzaPrice)}kr. The pizza(s) will take ${calculateCookingTime(num)} minutes.`;
}