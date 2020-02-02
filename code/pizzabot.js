const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);
console.log(pizzaPrice);

//Put your Javscript code here:

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);
let orderName = prompt("Enter the name of the pizza you want to order today.");
if (
  orderName === vegetarian ||
  orderName === hawaiian ||
  orderName === pepperoni
) {
  let orderQuantity = prompt(`How many of ${orderName} do you want?`);
  console.log(orderQuantity);

  let orderTotal = pizzaPrice * parseFloat(orderQuantity);
  console.log(orderTotal);
  let cookingTime;

  if (parseFloat(orderQuantity) <= 2) {
    cookingTime = "The pizzas will take 10 minutes.";
  } else if (parseFloat(orderQuantity) >= 6) {
    cookingTime = "The pizzas will take 20 minutes.";
  } else {
    cookingTime = "The pizzas will take 15 minutes.";
  }

  alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. ${cookingTime}`
  );
} else {
  alert("Select a pizza from the menu");
}
