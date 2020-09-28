// 1. Definition of variables 

const vegetarian = "Vegetarian";
const hawaiian = "Hawaiian";
const pepperoni = "Pepperoni";
const pizzaPrice = 80;


// 2. Functions

// Function for validating ordername
const validateOrderName = (orderName) => {
    if (orderName.toLowerCase() === vegetarian.toLowerCase()) {
        return true;
    } else if (orderName.toLowerCase() === hawaiian.toLowerCase()) {
        return true;
    } else if (orderName.toLowerCase() === pepperoni.toLowerCase()) {
        return true;
    } else {
        alert('Select a pizza from the menu!');
        return false;
    };
};

// Function for calculating total cost
const calculateTotalCost = (orderQuantity, pizzaPrice) => {
    let orderTotal = orderQuantity * pizzaPrice;
    return orderTotal;
};

// Function for calculating total cooking time
const calculateCookingTime = (orderQuantity) => {
    let orderTime = 0; 
    if (orderQuantity <= 2) {
        orderTime = 10;
        return orderTime;

    } else if (orderQuantity < 6) {
        orderTime = 15;
        return orderTime;

    } else {
        orderTime = 20;
        return orderTime;
    }
};

//Function for asking what kind of pizza user would like to order 
const askPizzas = () => {
    const orderName = `On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}. Choose which pizza you want.`;
    document.getElementById("pizzaName").innerHTML = orderName;
};

 
// Function to ask how many pizzas user would like to order 
const askNumber = () => {
    const orderQuantity = `How many Pizzas do you want?`;
    document.getElementById("pizzaQuantity").innerHTML = orderQuantity;
};

// Function for input value from pizza name
const getOrderName = () => {
    return document.getElementById('pizzaNameInput').value;
};

// Function for input value from pizza quantity
const getOrderQuantity = () => {
    return document.getElementById('pizzaQuantityInput').value;
};

// The chatbot / form

// Welcome message 
const firstMessage = document.querySelector('.welcome-message-container'); 
const welcomeMessage = `Hey! Happy to serve your pizza!`;
firstMessage.innerHTML = `<div>${welcomeMessage}</div>`;

// Form questions
askPizzas();
askNumber();

// Handle user input
const handleOrder = (event) => {
  event.preventDefault();
  const orderName = getOrderName();
  const orderQuantity = getOrderQuantity();
  const isValidOrder = validateOrderName(orderName);
  if (isValidOrder === true) {
    const isTotalCost = calculateTotalCost(orderQuantity, pizzaPrice);
    const isOrderTime = calculateCookingTime(orderQuantity);
    const finalOrderMessage = `Great, I'll get started on your ${orderName} right away! It will cost ${isTotalCost} kr. The pizzas will take ${isOrderTime} minutes.`;
    document.getElementById("finalOrderMessage").innerHTML = finalOrderMessage;
  } else {
    return false;
  }
};