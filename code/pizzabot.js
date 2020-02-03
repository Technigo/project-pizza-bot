const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
console.log(vegetarian, hawaiian, pepperoni, pizzaPrice)

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)

let orderName = prompt(`Enter the name of the pizza you want to order today.`)

let orderQuantity

if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
  orderQuantity = prompt(`How many of ${orderName} do you want?`)
} else {
  alert(`Select a pizza from the menu`)
}

// let orderQuantity = prompt(`How many of ${orderName} do you want?`)

const orderTotal = orderQuantity * pizzaPrice

let pizzaTime
if (orderQuantity <= 2) {
  pizzaTime = 10
} else if (orderQuantity <= 5) {
  pizzaTime = 15
} else {
  pizzaTime = 20
}


alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${pizzaTime} minutes.`)

