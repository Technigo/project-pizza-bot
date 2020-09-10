
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

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

const wrongOrder = () => {
    alert(`No such pizza on the menu. Please choose one of the following pizzas: ${vegetarian}, ${hawaiian} or ${pepperoni}`)
}

let validateOrderName = (orderName, orderQuantity) => {
    event.preventDefault();
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
        calculateTotalCost(orderQuantity)
        calculateCookingTime(orderQuantity)
        document.getElementById("final").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and take ${orderTime} minutes.`
    } else {
        document.getElementById("final").innerHTML = `No such pizza on the menu. Please choose one of the following pizzas: ${vegetarian}, ${hawaiian} or ${pepperoni}`
    }
}











