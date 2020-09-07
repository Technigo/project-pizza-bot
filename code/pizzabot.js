const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//ITERATION 1
console.log(vegetarian, hawaiian, pepperoni);

//ITERATION 2
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

//ITERATION 3
orderName = prompt(`Enter the name of the pizza you want to order today. Choose among ${vegetarian}, ${hawaiian} or ${pepperoni}.`);

//ITERATION 5
if (orderName === "vegetarian") {
    prompt(`How many of ${orderName} do you want?`);
   } else {
    prompt("Please choose one of the pizzas from our menu!");
}

orderQuantity = prompt(`How many of ${orderName} do you want?`);

console.log(orderName);
console.log(orderQuantity);

//ITERATION 4
orderTotal = orderQuantity * pizzaPrice


//ITERATION 5
let cookingTime = 10

if (orderQuantity >= 3) {
    cookingTime = 15
} else if (orderQuantity >= 6) {
    cookingTime = 20
}

alert(`Great, I'll get started on your ${orderName}(s) right away, it will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`);


