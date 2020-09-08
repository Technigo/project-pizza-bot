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

const orderQuantity = prompt(`How many of ${orderName}(s) do you want?`)
// console.log(orderQuantity)

// Iteration 4 - Finalize the order

const orderTotal = orderQuantity * pizzaPrice;

alert(`Great, I'll get started on your ${orderName}(s) right away, it will cost ${orderTotal} kr.`);