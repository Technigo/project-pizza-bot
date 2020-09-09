// Variables
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaList = ["Vegetarian Pizza","Hawaiian Pizza","Pepperoni Pizza"]

const pizzaPrice = 80


// Functions

// 1. `validateOrderName()` which should take the `orderName` variable as an argument and return `true` or `false` if the pizza is on the menu or not.
// 2. `calculateTotalCost()` which takes `orderQuantity` and `pizzaPrice` as arguments and returns the total cost for the order.
// 3. `calculateCookingTime()` which takes `orderQuantity` and returns the number of minutes it will take to finish the order.

const validateOrderName = (orderName) => {
  if (pizzaList.includes(orderName)) {
    return true;  
  } else {
    return false; 
  }
};

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
  const totalCost = (orderQuantity * pizzaPrice);
  return totalCost;
};

const calculateCookingTime = (orderQuantity) => {

  if (orderQuantity >= 1 && orderQuantity <= 2 ) {
    return "10 min";

  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return "15 min";

  } else { 
    return "20 min";
  }

};


// ===== Here starts the actual program =======

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)

const orderName = prompt(`Enter the name of the pizza you want to order today`)

// If validateOrderName är true, så ska datorn fråga hur många. Om V-O-N är false, så ska datorn säga "Sorry, vi har inte den pizzan"
if (validateOrderName(orderName) === true) {
  const orderQuantity = prompt(`How many of ${orderName} do you want?`);
  const totalCost = calculateTotalCost(orderQuantity, pizzaPrice);
  const totalTime = calculateCookingTime(orderQuantity);

  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${totalCost} Swedish Krona. It will take ${totalTime}.`);

} else {
  prompt(`Sorry, we don't have ${orderName}. We only have ${vegetarian}, ${pepperoni}, and ${hawaiian}.`)
  // Här ska vi få in något slags funktionsanrop
}


