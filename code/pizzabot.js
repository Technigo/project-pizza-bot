// Iteration 1 - Setting everything up
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

// Iteration 2 - Greet the customer
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)

// Iteration 3 - Ask the customer
const orderName = prompt(`Enter the name of the pizza you want to order today.`)


if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
    orderQuantity = prompt(`How many of ${orderName} do you want?`)
    const orderTotal = (orderQuantity * pizzaPrice)

    if (orderQuantity > 0 && orderQuantity <= 2) {
        orderTime = 10
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        orderTime = 15
    } else if (orderQuantity >= 6) {
        orderTime = 20
    }

    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and it will take ${orderTime}`)
} else {
    alert(`We don't have that pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)
    prompt(`Enter the name of the pizza you want to order today.`)
}







