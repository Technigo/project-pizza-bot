const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

// Iteration 1 - Setting everything up

// console.log(vegetarian);
// console.log(hawaiian);
// console.log(pepperoni);
// console.log(pizzaPrice);

// Iteration 2 - Greetings

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)

// Iteration 3 - Ask the customer

const orderName = prompt('Enter the name of the pizza you want to order today.');
// console.log(orderName);

// const orderQuantity = prompt(`How many of ${orderName}(s) do you want?`)
// console.log(orderQuantity)

// Iteration 4 - Finalize the order

// const orderTotal = orderQuantity * pizzaPrice;

// alert(`Great, I'll get started on your ${orderName}(s) right away, it will cost ${orderTotal} kr.`);

// Iteration 5 - Add Conditionals

// if ((orderName === hawaiian) || (orderName === vegetarian) || (orderName === pepperoni)) {
//   const orderQuantity = prompt(`How many ${orderName}(s) do you want?`);
//   const orderTotal = orderQuantity * pizzaPrice;
//     if (orderQuantity <= 2) {
//       alert(`Great, I'll get started on your ${orderName}(s) right away, it will cost ${orderTotal} kr. The pizza(s) will take 10 minutes.`);
//     } else if (orderQuantity > 2 && orderQuantity <= 5) {
//       alert(`Great, I'll get started on your ${orderName}(s) right away, it will cost ${orderTotal} kr. The pizza(s) will take 15 minutes.`);
//     } else {
//       alert(`Great, I'll get started on your ${orderName}(s) right away, it will cost ${orderTotal} kr. The pizza(s) will take 20 minutes.`);
//     }
// } else {
//   alert('Select a pizza from the menu');
// }

// Iteration 6 - Add functions

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

if (validateOrderName(orderName) === true) {
  const orderQuantity = prompt(`How many ${orderName}(s) do you want?`);
  alert(`Great, I'll get started on your ${orderName}(s) right away, it will cost ${calculationTotalCost(orderQuantity, pizzaPrice)} kr. The pizza(s) will take ${calculateCookingTime(orderQuantity)} minutes.`);
} else {
  alert('Select a pizza from the menu');
}