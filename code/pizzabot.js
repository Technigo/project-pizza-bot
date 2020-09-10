const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80


// validateOrderName() which should take the orderName variable as an argument and return true or false if the pizza is on the menu or not.
const validateOrderName = (orderName) => {
  if ((orderName === hawaiian) || (orderName === vegetarian) || (orderName === pepperoni)) {
    return true;
  } else {
    return false;
  }
}

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

// The whole order as a function
const botOrder = () => {
  alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);
  const orderName = prompt('Enter the name of the pizza you want to order today.');
  if (validateOrderName(orderName) === true) {
    const orderQuantity = prompt(`How many ${orderName}(s) do you want?`);
    const confirmation = (`Great, I'll get started on your ${orderName}(s) right away, it will cost ${calculationTotalCost(orderQuantity, pizzaPrice)} kr. The pizza(s) will take ${calculateCookingTime(orderQuantity)} minutes.`);
    document.getElementById("confirmation-container").style.display = "flex";
    document.getElementById('confirmation').innerHTML = confirmation;
  } else {
    alert('Select a pizza from the menu');
    botOrder();
  }
}

botOrder();
