const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

console.log(vegetarian, hawaiian, pepperoni, pizzaPrice);

let orderName;
let orderQuantity;

const startOrder = () => {
  alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);
  orderName = prompt("Enter the name of the pizza you want to order today.");
  console.log(orderName);
  checkOrderName(orderName)
};

const checkOrderName = (orderName) => {
  if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
    orderQuantity = prompt(`How many of ${orderName} pizza do you want?`);
    console.log(orderQuantity);
    showConfirmation()
  } else {
    alert("This pizza is not on the menu. Please try again.");
    orderName = prompt("Enter the name of the pizza you want to order today.");
    checkOrderName()
  }
};

const totalCost = () => {
  return orderQuantity * pizzaPrice
};

const getCookingTime = () => {
  if (orderQuantity < 3) {
    return '10';
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return '15';
  } else {
    return '20';
  }
};

const showConfirmation = () => {
  document.getElementById("order-confirmation").innerHTML = (`Great! I'll get started on your ${orderName} pizza right away, it will cost ${totalCost()} kr. The pizzas will take ${getCookingTime()} minutes!`);
};

document.getElementById("orderButton").onclick = startOrder;