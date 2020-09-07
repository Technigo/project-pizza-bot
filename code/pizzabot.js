const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);
console.log(pizzaPrice);

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.` )

const orderName = prompt("Enter the name of the pizza you want to order today.");


const validateOrderName = () => {
    
}
validateOrderName()

const orderQuantity = prompt(`How many of ${orderName} do you want?`);

const orderTotal = orderQuantity * pizzaPrice;

if (orderName == vegetarian || hawaiian || pepperoni) {
    alert(`Great I'll get started on your ${orderName}s right away, it will cost ${orderTotal} kr.`)
} else {
    alert("Select a pizza from the menu")
}

if (orderQuantity <= 2) {
    alert("The pizzas will take 10 minutes.")
} else if (orderQuantity >2 & 5) {
    alert("The pizzas will take 15 minutes.")
} else {
    alert("The pizzas will take 20 minutes.")
}

