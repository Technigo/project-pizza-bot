const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

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
  event.preventDefault();
  const orderName = document.getElementById("form-text").value;
  document.getElementById("form-text").value = "";
  let orderQuantity = document.getElementById("form-number").value;
  document.getElementById("form-number").value = "";
  const customerName = document.getElementById("form-name").value;
  document.getElementById("form-name").value = "";

  if (validateOrderName(orderName)) {
    const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);
    console.log(orderTotal);

    const cookingTime = calculateCookingTime(orderQuantity);
    console.log(cookingTime);

    const finalMessage = `Great ${customerName}, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizza(s) will take ${cookingTime} minutes!`;
    console.log(finalMessage);

    // Final message
    document.getElementById("final-message").innerHTML = finalMessage;
    toggleDisableForm();
  } else {
    const errorMessage = "Please, select a pizza from the our menu";
    document.getElementById("errorMessage").innerHTML = errorMessage;
    return;
  }
};

// Button for pizza choice
document.getElementById("button").addEventListener("click", addOrder);

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

// Function to hide form
const toggleDisableForm = () => {
  document
    .getElementById("hide-form")
    .classList.toggle("greeting-message-container-inactive");
};
