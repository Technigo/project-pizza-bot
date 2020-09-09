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
const greeting = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`;
document.getElementById("greeting-message").innerHTML = greeting;

//Ask your customer which pizza
const decidePizza = "Enter the name of the pizza you want to order today!";
document.getElementById("name-of-pizza").innerHTML = decidePizza;

//How many Pizza's
let orderQuantityMsg = `How many do you want?`;
document.getElementById("quantity-of-pizza").innerHTML = orderQuantityMsg;

// Function for pizza choice/order
let addOrder = (event) => {
  console.log(event);
  event.preventDefault();
  console.log("Hejjehjj");
  const orderName = document.getElementById("form-text").value;
  document.getElementById("form-text").value = "";
  let orderQuantity = document.getElementById("form-number").value;
  document.getElementById("form-number").value = "";

  if (validateOrderName(orderName)) {
    orderQuantityMsg = `How many of ${orderName} do you want?`;
    document.getElementById("quantity-of-pizza").innerHTML = orderQuantityMsg;
    toggleQuantityInput();
  } else {
    const errorMessage = "Please, select a pizza from the our menu";
    document.getElementById("errorMessage").innerHTML = errorMessage;
    return;
  }

  const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);
  console.log(orderTotal);

  const cookingTime = calculateCookingTime(orderQuantity);
  console.log(cookingTime);

  const finalMessage = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizza(s) will take ${cookingTime} minutes!`;
  console.log(finalMessage);

  // Final message
  document.getElementById("final-message").innerHTML = finalMessage;
};

// Button for pizza choice
document.getElementById("button-1").addEventListener("click", addOrder);

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

//Function to calculate price- *** CHECK IF WE WANT TO USE LET***
const calculateTotalCost = (orderQuantity, pizzaPrice) => {
  return orderQuantity * pizzaPrice;
};

// Function to calculate cooking time
const calculateCookingTime = (orderQuantity) => {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity < 6) {
    return 15;
  } else {
    return 20;
  }
};

// Function to reveal quantity input
const toggleQuantityInput = () => {
  document
    .getElementById("test")
    .classList.toggle("quantity-of-pizza-wrapper-active");
};

// if (validateOrderName(pizzaName)) {
//   orderQuantity = prompt(`How many of ${pizzaName} do you want?`);
// } else {
//   alert("Please, select a pizza from the our menu");
// }

//const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);

//const cookingTime = calculateCookingTime(orderQuantity);

// const finalMessage = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizza(s) will take ${cookingTime} minutes!`;

// console.log(finalMessage);

// innerHTML

// Final message
//document.getElementById("WelcomeP").innerHTML = finalMessage;
