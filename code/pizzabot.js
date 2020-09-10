const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

document.getElementById(
  "welcome"
).innerHTML = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`;

let orderName;
let orderQuantity;

const validateOrderName = (validOrder) => {
  return (
    validOrder == vegetarian ||
    validOrder == hawaiian ||
    validOrder == pepperoni
  );
};

const calculateCookingTime = (orderQuantity) => {
  if (orderQuantity >= 1 && orderQuantity <= 3) {
    return 10;
  } else if (orderQuantity < 6) {
    return 15;
  } else {
    return 20;
  }
};

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
  return orderQuantity * pizzaPrice;
};

const toggle = () => {
  return this.classList.toggle("active-summary");
};

const handleSubmit = (event) => {
  event.preventDefault();
  let orderName = document.getElementById("orderName").value;
  let orderQuantity = document.getElementById("orderQuantity").value;

  if (validateOrderName(orderName)) {
    document.getElementById("orderSummary").classList = toggle;
    document.getElementById(
      "orderSummary"
    ).innerHTML = ` Great, I´ll get started on your ${orderName} right away, it will cost ${calculateTotalCost(
      orderQuantity,
      pizzaPrice
    )} kr. The pizza(s) will take ${calculateCookingTime(
      orderQuantity
    )} minutes.`;
  }
  else {
    document.getElementById("orderSummary").classList = toggle;
    document.getElementById("orderSummary").innerHTML = "Please chooose a Pizza from the menu"; 
  }
};