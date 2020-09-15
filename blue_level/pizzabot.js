const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

const validateOrderName = orderName => {
  if (
    orderName === "vegetarian" ||
    orderName === "pepperoni" ||
    orderName === "hawaiian"
  ) {
    return true;
    } 
    return false;
};

const calculateTotalCost = (orderQty, pizzaPrice) => orderQty * pizzaPrice;

const calculateCookingTime = orderQty => {
  if (orderQty >= 1 && orderQty <= 2) {
    return 10;
  } else if (orderQty <= 5) {
    return 15;
  } else if (orderQty >=6 && orderQty <= 50) {
    return 20;
  } {
    alert('Please enter a number between 1-50.')
  }
};

const order = () => {
  const orderName = prompt("Enter the name of the pizza you want to order today.");
  if (validateOrderName(orderName)) {
    const orderQty = prompt(`How many of ${orderName} do you want?`);
    const orderTotal = calculateTotalCost(orderQty, pizzaPrice);
    const pizzaCookingTime = calculateCookingTime(orderQty);
    document.getElementById("final-order").innerHTML = `Great! I will get started on your ${orderName} right away, it will cost ${orderTotal}kr. The pizza(s) will be ready in ${pizzaCookingTime} minutes.`;
    document.getElementById("button").style.display = "none";
    document.getElementById("menu").style.display = "none";
  } else {
    document.getElementById("menu").innerHTML =`Please select a pizza from our menu. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`;
  }
};
