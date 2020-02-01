const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80
let orderName
let orderQuantity
let orderTotal
let cookingTime

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

orderName = prompt("Enter the name of the pizza you want to order today.");

orderQuantity = prompt(`How many of ${orderName} do you want?`);

orderTotal = pizzaPrice * parseFloat(orderQuantity);

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr.`);

if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
  alert("correct");
} else {
  alert("Select a pizza from the menu")
}

if (parseFloat(orderQuantity) <= 2) {
  alert("The pizzas will take 10 minutes.")
} else if (parseFloat(orderQuantity) < 6) {
  alert("The pizzas will take 15 minutes.")
} else {
  alert("The pizzas will take 20 minutes.")
}