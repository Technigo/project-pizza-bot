const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80


// validateOrderName() which should take the orderName variable as an argument and return true or false if the pizza is on the menu or not.
// const validateOrderName = (orderName) => {
//   if ((orderName === hawaiian) || (orderName === vegetarian) || (orderName === pepperoni)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// calculateTotalCost() which takes orderQuantity and pizzaPrice as arguments and returns the total cost for the order.
const calculationTotalCost = (orderQuantity, pizzaPrice) => {
  return orderQuantity * pizzaPrice;
}

// calculateCookingTime() which takes orderQuantity and returns the number of minutes it will take to finish the order.
const calculateCookingTime = (orderQuantity) => {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity > 2 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

const greeting = (`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);
document.getElementById('greeting').innerHTML = greeting;

const greet = (event) => {
  event.preventDefault();
  const enterName = ('What is your name?');
  document.getElementById('enterName-container').style.display = "flex";
  document.getElementById('enterName').innerHTML = enterName;
  document.getElementById('nameForm-container').style.display = "flex";
  document.getElementById('nameForm').style.display = "flex";
}

const submitName = (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const orderName = (`${name}, enter the name of the pizza you want to order today.`);
  document.getElementById('pizzaName-container').style.display = "flex";
  document.getElementById('pizzaName').innerHTML = orderName;
  document.getElementById('pizzaForm-container').style.display = "flex";
  document.getElementById('pizzaForm').style.display = "flex";
  document.getElementById('pizzaForm').scrollIntoView(true);
}

const submitPizza = (event) => {
  event.preventDefault();
  const orderName = document.getElementById('orderName').value;
  const pizzaQuantity = (`How many ${orderName}(s) do you want?`);
  document.getElementById('pizzaQuantity-container').style.display = "flex";
  document.getElementById('pizzaQuantity').innerHTML = pizzaQuantity;
  document.getElementById('quantityForm-container').style.display = "flex";
  document.getElementById('quantityForm').style.display = "flex";
  document.getElementById('quantityForm').scrollIntoView(true);
}

const submitQuantity = (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const orderName = document.getElementById('orderName').value;
  const orderQuantity = document.getElementById('orderQuantity').value;
  const confirmation = (`Great ${name}! I'll get started on your ${orderName}(s) right away, it will cost ${calculationTotalCost(orderQuantity, pizzaPrice)} kr. The pizza(s) will take ${calculateCookingTime(orderQuantity)} minutes.`);
  document.getElementById('confirmation-container').style.display = "flex";
  document.getElementById('confirmation').innerHTML = confirmation;
  document.getElementById('confirmation').scrollIntoView(true);
}