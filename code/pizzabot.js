const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

// Checking variables with console.log
console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);

console.log(pizzaPrice);

//Greet your customer
//const greeting = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`;
//console.log(greeting);
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

//Ask your customer
//let orderName = ("Enter the name of the pizza you want to order today!");
let orderName = prompt("Enter the name of the pizza you want to order today!");

//Add function to validate pizza order

const validateOrderName = (orderName) => {
  //**** ADD STRING INCLUDES METHOD TO OUR IF STATEMENT
  if (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  ) {
    return true;
  } else {
    return false;
  }
};

let orderQuantity;

if (validateOrderName(orderName)) {
  orderQuantity = prompt(`How many of ${orderName} do you want?`);
} else {
  alert("Please, select a pizza from the our menu");
}

//Function to calculate price- *** CHECK IF WE WANT TO USE LET***

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
  return orderQuantity * pizzaPrice;
};

const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);

// Calculate cooking time
const calculateCookingTime = (orderQuantity) => {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity > 2 && orderQuantity < 6) {
    return 15;
  } else {
    return 20;
  }
};

const cookingTime = calculateCookingTime(orderQuantity);

const finalMessage = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizza(s) will take ${cookingTime} minutes!`;

console.log(finalMessage);

// innerHTML

// Greeting message
//document.getElementById("greeting-message").innerHTML = greeting;

// Name of Pizza
//document.getElementById("name-of-pizza").innerHTML = orderName;

// Final message
document.getElementById("WelcomeP").innerHTML = finalMessage;
