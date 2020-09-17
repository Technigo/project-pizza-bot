
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const margherita = "Margherita Pizza"

const pizzaPrice = 80


const calculateTotalCost = (orderQuantity) => {
    orderTotal = (orderQuantity * pizzaPrice)
}

const calculateCookingTime = (orderQuantity) => {
    if (orderQuantity > 0 && orderQuantity <= 2) {
        orderTime = 10
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        orderTime = 15
    } else if (orderQuantity >= 6) {
        orderTime = 20
    }
}

let validateOrderName = (orderName, orderQuantity) => {
    Event.preventDefault();
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
        calculateTotalCost(orderQuantity)
        calculateCookingTime(orderQuantity)
        document.getElementById("orderPlaced").innerText = `Thanks ${firstName.value}! You have ordered ${orderQuantity} of the ${orderName}, your total is ${orderTotal} kr and your order will take ${orderTime} minutes.`
    } else if (orderName === margherita) {
        document.getElementById("final").innerText = `Oh no! ${margherita} is sadly out of stock. Please order something else!`
    } else {
        document.getElementById("final").innerText = `Sorry ${firstName.value}. We don't serve that. Please choose one of the following pizzas: ${vegetarian}, ${hawaiian} or ${pepperoni}`

    }

}










