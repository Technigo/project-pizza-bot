const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

const validateOrderName = (orderName) => {
  if (
    orderName === "vegetarian" ||
    orderName === "pepperoni" ||
    orderName === "hawaiian"
  ) {
    return true;
  } else {
    return false;
  }
};

const calculateTotalCost = (orderQty, pizzaPrice) => {
  return orderQty * pizzaPrice;
};

const calculateCookingTime = (orderQty) => {
  if (orderQty <= 2) {
    return 10;
  } else if (orderQty <= 5) {
    return 15;
  } else {
    return 20;
  }
};

const order = () => {
  const orderName = prompt("Enter the name of the pizza you want to order today.");
  if (validateOrderName(orderName)) {
    let orderQty = prompt(`How many of ${orderName} do you want?`);
    let orderTotal = calculateTotalCost(orderQty, pizzaPrice);
    let pizzaCookingTime = calculateCookingTime(orderQty);
    document.getElementById("final-order").innerHTML = `Great! I will get started on your ${orderName} right away, it will cost ${orderTotal}kr. The pizza(s) will be ready in ${pizzaCookingTime} minutes.`;
  } else {
    document.getElementById("menu").innerHTML =`Please select a pizza from our menu. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`;
  }

  document.getElementById("button").style.display = "none";
}










