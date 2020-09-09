const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`
);

let orderName = prompt(`Enter the name of the pizza you want to order today`);
let orderQuantity;

const validateOrderName = (orderName) => {
  if (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  ) {
    orderQuantity = prompt(`How many ${orderName} do you want?`);
    return true;
  } else {
    orderName = prompt(`Enter the name of a pizza on the menu`);
    console.log(orderName);
    validateOrderName(orderName);
    return false;
  }
};

validateOrderName(orderName);

console.log(orderName);

/*if (validateOrderName(orderName)) {
  orderQuantity = prompt(`How many of ${orderName} do you want?`);
} else {
  orderName = prompt(`Select a pizza from the menu`);
  validateOrderName(orderName);
}*/

/*orderQuantity = prompt(`How many of ${orderName} do you want?`);...

validateOrderName (orderName);
alert(`Select a pizza from the menu`);*/

// if (
//   orderName === vegetarian ||
//   orderName === hawaiian ||
//   orderName === pepperoni
// ) {
//   orderQuantity = prompt(`How many of ${orderName} do you want?`);
// } else {
//   alert(`Select a pizza from the menu`);
// }

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

alert(
  `Great, I´ll get started on your ${orderName} right away, it will cost ${calculateTotalCost(
    orderQuantity,
    pizzaPrice
  )} kr. The pizza(s) will take ${calculateCookingTime(orderQuantity)} minutes.`
);
