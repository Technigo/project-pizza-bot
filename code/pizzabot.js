const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
console.log(vegetarian, hawaiian, pepperoni, pizzaPrice)

alert(`Hey! Happy to serve you a pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)

const orderName = prompt(`Enter the name of the pizza you want to order today.`);

const orderQuantity = prompt(`How many of ${orderName} do you want?`)

const orderTotal = (orderQuantity * pizzaPrice);
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`);

