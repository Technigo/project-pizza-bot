const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

console.log(vegetarian)
console.log(hawaiian)
console.log(pepperoni)
console.log(pizzaPrice)



let message;
message = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, ${pepperoni}.`

alert(message);

var orderName = prompt(`Enter the name of the pizza you want to order today?`)

let orderQuantity = prompt(`How many of ${orderName} do you want?`)

if (orderName === vegetarian) {
  prompt(`How many of ${orderName} do you want?`)
} else if (orderName === hawaiian) {
  prompt(`How many of ${orderName} do you want?`)
} else if (orderName === pepperoni) {
  prompt(`How many of ${orderName} do you want?`)
} else {
  alert(`Please select something from our menu`)
}





let total = (pizzaPrice * orderQuantity)
var orderTotal = prompt(`Great, we will get started on your ${orderName} right away, it will cost ${total} kr, the pizzas will take ${orderQuantity}`)








if (orderQuantity >= 1 && orderQuantity <= 2) {
  orderQuantity = prompt(`The pizzas will take 10 minutes`)
}
