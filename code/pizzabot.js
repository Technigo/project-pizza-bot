const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

document.getElementById(
  "welcome"
).innerHTML = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`;

let orderName;
let orderQuantity;

// function to validate order. takes input from form and validates that pizza exist on the menu.
// Returns true or false

const validateOrderName = (validOrder) => {
  return (
    validOrder == vegetarian ||
    validOrder == hawaiian ||
    validOrder == pepperoni
  );
};

// Function to calculate cooking time based on order quantity

const calculateCookingTime = (orderQuantity) => {
  if (orderQuantity >= 1 && orderQuantity <= 3) {
    return 10;
  } else if (orderQuantity < 6) {
    return 15;
  }
  return 20;
};

// Function to calculate total cost based on order quantity

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
  return orderQuantity * pizzaPrice;
};

// Function to toggle active css class of order summary bubble (to show/hide)

const toggle = () => classList.toggle("active-summary");

//Handles submit of order form. Will call each above function and generate either error message or order summary.

const handleSubmit = (event) => {
  event.preventDefault();
  const orderName = document.getElementById("orderName").value;
  const orderQuantity = document.getElementById("orderQuantity").value;

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
  } else {
    document.getElementById("orderSummary").classList = toggle;
    document.getElementById("orderSummary").innerHTML =
      "Please chooose a Pizza from the menu";
  }
};
