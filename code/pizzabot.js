const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

const checkOrderName = orderName => {
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

/*const clickFunction = () => {
  let orderName = document.getElementById("order-type").value;
  console.log(orderName);
  console.log("kommer vi hit?");
};*/

//Fungerar toppen!
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

let orderName = prompt("Enter the name of the pizza you want to order today.");

if (checkOrderName(orderName)) {
  let orderQuantity = prompt(`How many of ${orderName} do you want?`);
  console.log(orderQuantity);

  document.getElementById(
    "final-message"
  ).innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(
    orderQuantity
  )} kr. The pizzas will take ${cookingTime(orderQuantity)} minutes.`;
} else {
  document.getElementById("final-message").innerHTML =
    "Select a pizza from the menu";
}
