const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//ITERATION 1
console.log(vegetarian, hawaiian, pepperoni, pizzaPrice);

//ITERATION 2
let welcomeMessage = document.getElementById("welcomeMessage");
document.getElementById("welcomeMessage").innerHTML = document.write(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

//ITERATION 3
let orderName = document.write("Enter the name of the pizza you want to order today.");
console.log(orderName);

document.write

//ITERATIONS 4, 5 & 6
//checkOrderName() which should take the orderName variable as an argument and return true or false if the pizza is on the menu or not.
let orderQuantity;

const checkOrderName = () => {
  if (orderName === 'vegetarian' || orderName === 'hawaiian' || orderName === 'pepperoni') {
    //orderQuantity = prompt(`How many of ${orderName} pizza do you want?`);
    console.log(orderQuantity);
    return true;
  } else {
    //alert("This pizza is not on the menu. Please try again.");
    // orderName = prompt("Enter the name of the pizza you want to order today.");
    checkOrderName()
  };
};
checkOrderName();

// totalCost() which takes orderQuantity as an argument and returns the total cost for the order.
let orderTotal;

const totalCost = () => {
  orderTotal = orderQuantity * pizzaPrice;
};
console.log(orderTotal);
totalCost();

//cookingTime()` which takes `orderQuantity` and returns the number of minutes it will take to finish the order.
let cookingTime;

const getCookingTime = () => {
  if (orderQuantity < 3) {
    cookingTime = '10';
  } else if (orderQuantity >= 3 && orderTotal <= 5) {
    cookingTime = '15';
  } else {
    cookingTime = '20';
  }
};
getCookingTime();

//alert(`Great! I'll get started on your ${orderName} pizza right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime} minutes!`);












