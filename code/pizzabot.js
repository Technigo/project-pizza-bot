const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:


alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and  ${pepperoni}.`);


let orderName = prompt("Enter the name of the pizza you want to order today.");


if (orderName === vegetarian) {
  prompt(`How many of ${orderName} do you want?`)
} else if (orderName === hawaiian) {
  prompt(`How many of ${orderName} do you want?`)
} else if (orderName === pepperoni) {
  prompt(`How many of ${orderName} do you want?`)
}
else {
  alert("Please select a pizza from the menu.")
  prompt("Enter the name of the pizza you want to order today.")
};

let orderQuantity = prompt(`How many of ${orderName} do you want?`);

let orderTotal = (orderQuantity * pizzaPrice);

if (orderQuantity < 3) {
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take 10 minutes`)
} else if (orderQuantity < 6) {
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take 15 minutes`)
} else {
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take 20 minutes`)
};

