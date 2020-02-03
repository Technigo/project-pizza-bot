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
  orderQuantity = Number(prompt(`How many of ${orderName} do you want?`))
} else if (orderName === hawaiian) {
  orderQuantity = Number(prompt(`How many of ${orderName} do you want?`))
} else if (orderName === pepperoni) {
  orderQuantity = Number(prompt(`How many of ${orderName} do you want?`))
} else {
  alert(`Your choice is not on our menu, please choose again.`)
}


let total = (pizzaPrice * orderQuantity)

var orderTotal = prompt(`Great, we will get started on your ${orderName} right away, it will cost ${total} kr.`)



if (orderQuantity >= 1 && orderQuantity <= 2) {
  orderQuantity = prompt(`The pizzas will take 10 minutes`)
} else if (orderQuantity >= 3 && orderQuantity <= 5) {
  orderQuantity = prompt(`The pizzas will take 15 minutes`)
} else if (orderQuantity >= 6) {
  orderQuantity = prompt(`The pizzas will take 20 minutes`)
}
