const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const menu = [vegetarian, hawaiian, pepperoni];

const pizzaPrice = 80;

//Put your Javscript code here:

const checkOrderName = orderName => {
  for (let i = 0; i < menu.length; i++) {
    if (orderName === menu[i]) {
      return true;
    }
  }
  return false;
};

const totalCost = orderQuantity => {
  let orderTotal = pizzaPrice * parseFloat(orderQuantity);
  return orderTotal;
};

const cookingTime = orderQuantity => {
  let cookingTime;

  if (parseFloat(orderQuantity) <= 2) {
    cookingTime = 10;
  } else if (parseFloat(orderQuantity) >= 6) {
    cookingTime = 20;
  } else {
    cookingTime = 15;
  }
  return cookingTime;
};

document.getElementById(
  "menu"
).innerHTML = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`;

document.getElementById("customer-q").innerHTML =
  "Enter the name of the pizza you want to order today.";

document.getElementById(
  "customer-q2"
).innerHTML = `How many pizzas do you want?`;

const clickFunction = () => {
  //The customer types the type of pizza in customer-value (input box 1) and the value is stored in orderName
  let orderName = document.getElementById("customer-value").value;

  if (checkOrderName(orderName)) {
    //The customer types the no of pizzas in customer-value2 (input box 2) and the value is stored in orderQuantity
    let orderQuantity = document.getElementById("customer-value2").value;

    //Depending on the return type from the checkOrderName function (true/false), the "final-message" will change
    document.getElementById(
      "final-message"
    ).innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(
      orderQuantity
    )} kr. The pizzas will take ${cookingTime(orderQuantity)} minutes.`;
  } else {
    document.getElementById("final-message").innerHTML =
      "Select a pizza from the menu";
  }
};
