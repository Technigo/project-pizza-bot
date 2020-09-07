const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

// Checking variables with console.log
console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);

console.log(pizzaPrice);

//Greet your customer
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

//Ask your customer
const orderName = prompt(
  "Enter the name of the pizza you want to order today!"
);

//Add conditionals - **** ADD INCLUDES METHOD TO OUR IF STATEMENT
let orderQuantity;

const validateOrderName = (orderName) => {
  if (orderName === vegetarian || hawaiian || pepperoni) {
    validateOrderName = true;
  } else {
    validateOrderName = false;
  }
};

validateOrderName(orderName);

if (orderName === vegetarian || hawaiian || pepperoni) {
  orderQuantity = prompt(`How many of ${orderName} do you want?`);
} else {
  alert("Select a pizza from the menu");
}

//Finalize the order - *** CHECK IF WE WANT TO USE LET***

let orderTotal = orderQuantity * pizzaPrice;

//take away later
console.log(orderTotal);

//Show cooking time

let cookingTime;

if (orderQuantity <= 2) {
  cookingTime = "The pizzas will take 10 minutes";
} else if (orderQuantity > 2 && orderQuantity < 6) {
  cookingTime = "The pizzas will take 15 minutes";
} else {
  cookingTime = "The pizzas will take 20 minutes";
}

orderTotal = alert(
  `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizza(s) will take ${cookingTime}`
);
