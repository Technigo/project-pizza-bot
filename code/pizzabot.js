const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

// //Put your Javscript code here:

// /* Iteration 2 */
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

/* Iteration 3 */

let orderName = prompt("Enter the name of the pizza you want to order today.");

console.log(orderName);

const validateOrderName = (orderName) => {
  if (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  ) {
    return true;
  } else {
    alert("Select a pizza from the menu");
    return false;
  }
};
validateOrderName(orderName);

let orderQuantity = prompt(`How many of ${orderName} do you want?`);

console.log(typeof orderQuantity);

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
  return orderQuantity * pizzaPrice;
};
calculateTotalCost(orderQuantity, pizzaPrice);

const num = Number(orderQuantity);

console.log(typeof num);

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

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${calculateTotalCost(
  orderQuantity,
  pizzaPrice
)} kr
The pizza(s) will take ${calculateCookingTime(num)} minutes.`);

document.getElementById("chat")