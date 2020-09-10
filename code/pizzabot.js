// GRADIENT BACKGROUND


// Iteration 1 - Setting everything up
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)

const welcome = () => {
    orderName = prompt(`Enter the name of the pizza you want to order today.`)
    validateOrderName(orderName)
}

const calculateTotalCost = () => {
    orderQuantity = prompt(`How many of ${orderName} do you want?`)
    orderTotal = (orderQuantity * pizzaPrice)
}

const calculateCookingTime = () => {
    if (orderQuantity > 0 && orderQuantity <= 2) {
        orderTime = 10
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        orderTime = 15
    } else if (orderQuantity >= 6) {
        orderTime = 20
    }
}

const wrongOrder = () => {
    alert(`No such pizza on the menu. Please choose one of the following pizzas: ${vegetarian}, ${hawaiian} or ${pepperoni}`)
    welcome()
}

let validateOrderName = () => {
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
        calculateTotalCost()
        calculateCookingTime()
        return alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and it will take ${orderTime} minutes.`)
    } else {
        return wrongOrder()
    }
}

welcome()







