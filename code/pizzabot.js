const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);
console.log(pizzaPrice);

//Put your Javscript code here:

const checkOrderName = orderName => {
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

const totalCost = orderQuantity => {
  let orderTotal = pizzaPrice * parseFloat(orderQuantity);
  return orderTotal;
};

const cookingTime = orderQuantity => {
  let cookingTime;

  if (parseFloat(orderQuantity) <= 2) {
    cookingTime = 10;
  } else if (parseFloat(orderQuantity) >= 6) {
    cookingTime = 20;
  } else {
    cookingTime = 15;
  }
  return cookingTime;
};

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);
let orderName = prompt("Enter the name of the pizza you want to order today.");
if (checkOrderName(orderName)) {
  let orderQuantity = prompt(`How many of ${orderName} do you want?`);
  console.log(orderQuantity);

  alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(
      orderQuantity
    )} kr. The pizzas will take ${cookingTime(orderQuantity)} minutes.`
  );
} else {
  alert("Select a pizza from the menu");
}
