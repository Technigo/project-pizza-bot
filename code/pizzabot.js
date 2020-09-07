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

const orderQuantity = prompt(`How many of ${orderName} do you want?`);

//Finalize the order - *** CHECK IF WE WANT TO USE LET***

let orderTotal = orderQuantity * pizzaPrice;

//take away later
console.log(orderTotal);

orderTotal = alert(
  `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`
);
