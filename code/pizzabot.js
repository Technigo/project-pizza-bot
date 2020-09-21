const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

let orderQuantity;
let orderTotal;
let orderName;
let cookingTime;
let imageName;

const askForPizza = () => {
  orderName = prompt("Enter the name of the pizza you want to order today");
  validateOrderName(orderName);
};

const calculateTotalCost = (quantity, price) => {
  orderTotal = quantity * price;
};

const finalizeOrder = (order) => {
  if (order <= 2) {
    cookingTime = 10;
  } else if (order > 2 && order < 6) {
    cookingTime = 15;
  } else {
    cookingTime = 20;
  }
  alert(
    `Great I'll get started on your ${orderName} order right away. It will cost ${orderTotal}kr. The pizza(s) will take ${cookingTime} minutes`
  );

  document.getElementById(
    "printOrder"
  ).innerHTML = `You have ordered: ${orderName} x${orderQuantity} and the total price is: ${orderTotal}kr`;
  document.getElementById(
    "pizzaImage"
  ).innerHTML = pizzaImage.src = findPizzaImage(orderName);
};

const findPizzaImage = (order) => {
  if (order.toLowerCase() === vegetarian.toLowerCase()) {
    return "./images/vegetarian-pizza.jpg";
  } else if (order.toLowerCase() === pepperoni.toLowerCase()) {
    return "./images/pepperoni-pizza.jpg";
  } else {
    return "./images/hawaiian-pizza.jpg";
  }
};

const validateOrderName = (order) => {
  if (order.toLowerCase() === vegetarian.toLowerCase() || order.toLowerCase() === pepperoni.toLowerCase() || order === hawaiian.toLowerCase()) {
    orderQuantity = prompt(`How many ${orderName}'s would you like?`);
    orderQuantity = parseInt(orderQuantity, 10);
    calculateTotalCost(orderQuantity, pizzaPrice);
    finalizeOrder(orderQuantity);
  } else {
    alert("Please choose a pizza from our menu");
    askForPizza();
  }
};

const welcomeMessage = (event) => {
  event.preventDefault();
  alert(
    `Welcome to Pizza Corner! On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
  );
  askForPizza();
};
