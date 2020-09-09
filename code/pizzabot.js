// Iteration 1 - Setting everything up
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

// Iteration 2 - Greet the customer
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)

// Iteration 3 - Ask the customer
const orderName = prompt(`Enter the name of the pizza you want to order today.`)

const orderQuantity = prompt(`How many of ${orderName} do you want?`)

// Iteration 4 - Finalize the order
const orderTotal = (orderQuantity * pizzaPrice)
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`)