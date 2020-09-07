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
let orderName = prompt("Enter the name of the pizza you want to order today!");

//Add conditionals - **** ADD STRING INCLUDES METHOD TO OUR IF STATEMENT

const validateOrderName = (orderName) => {
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

let orderQuantity;

if (validateOrderName(orderName)) {
  orderQuantity = prompt(`How many of ${orderName} do you want?`);
} else {
  alert("Please, select a pizza from the our menu");
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
