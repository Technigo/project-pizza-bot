const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

// Greet your customer
const greeting = `Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`;
document.getElementById("greeting-message").innerHTML = greeting;

// Ask your customer which pizza
const decidePizza = "Enter the name of the pizza you want to order today!";
document.getElementById("name-of-pizza").innerHTML = decidePizza;

// How many Pizza's
const orderQuantityMsg = `How many do you want?`;
document.getElementById("quantity-of-pizza").innerHTML = orderQuantityMsg;

// Function for pizza choice/order
let addOrderPizza = (event) => {
  event.preventDefault();
  const orderName = document.getElementById("form-text").value;

  if (validateOrderName(orderName)) {
    toggleActiveForm();
    toggleDisablePizza();
  } else {
    const errorMessage = "Please, select a pizza from our menu";
    document.getElementById("errorMessage").innerHTML = errorMessage;
    return;
  }
};

// Button for pizza choice
document
  .getElementById("button-pizza-choice")
  .addEventListener("click", addOrderPizza);

// Function for quantity of pizza(s)
let addOrderQuantity = (event) => {
  event.preventDefault();
  const orderName = document.getElementById("form-text").value;

  const orderQuantity = document.getElementById("form-number").value;

  const customerName = document.getElementById("form-name").value;

  const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);

  const cookingTime = calculateCookingTime(orderQuantity);

  const finalMessage = `Great ${customerName}, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizza(s) will take ${cookingTime} minutes!`;

  // Final message
  document.getElementById("final-message").innerHTML = finalMessage;
  toggleLastMessage();
  toggleDisableForm();
  togglePizzaImage(orderName);
  togglePizzaBot();
};

// Button for quantity of pizza(s)
document
  .getElementById("button-quantity")
  .addEventListener("click", addOrderQuantity);

// Add function to validate pizza order
const validateOrderName = (orderName) => {
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

// Function to calculate price
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

// Function to display quantity of pizza (form)
const toggleActiveForm = () => {
  document
    .getElementById("active-form")
    .classList.toggle("quantity-of-pizza-wrapper-active");
};

// Function to hide pizza choice
const toggleDisablePizza = () => {
  document
    .getElementById("hide-pizza-choice")
    .classList.toggle("pizza-choice-wrapper");
};

// Function to hide the whole form, both pizza and quantity choice
const toggleDisableForm = () => {
  document
    .getElementById("hide-form")
    .classList.toggle("greeting-wrapper-inactive");
};

// Function to display final message
const toggleLastMessage = () => {
  document
    .getElementById("wrapper-final-message")
    .classList.toggle("final-message-wrapper-active");
};

// Function to toggle Pizza image
const togglePizzaImage = (orderName) => {
  if (orderName === pepperoni) {
    document.getElementById("pizza-image").classList.toggle("img-pepperoni");
  } else if (orderName === hawaiian) {
    document.getElementById("pizza-image").classList.toggle("img-hawaii");
  } else {
    document.getElementById("pizza-image").classList.toggle("img-veg");
  }
};

// Function to display pizza-bot-end
const togglePizzaBot = () => {
  document
    .getElementById("pizzabot-end")
    .classList.toggle("pizza-bot-image-end");
};
