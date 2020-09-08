const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

console.log(vegetarian, hawaiian, pepperoni)

// Welcome message
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)


// Order-function - choose pizza + amount, if error occurs it will restart function
let orderName = ""
let orderQuantity = 1

orderName = prompt(`Enter the name of the pizza you want to order today. Choose among ${vegetarian}, ${hawaiian} or ${pepperoni}.`)

let validateOrderName = () => {
    
    let orderQuantityFunction = () => {
        orderQuantity = prompt(`How many of ${orderName} do you want?`)
    }
    
    if (orderName.match(/vegetarian/g)) {
        orderQuantityFunction()
    } else if (orderName.match(/hawaiian/g)) {
        orderQuantityFunction()
    } else if (orderName.match(/pepperoni/g)) {
        orderQuantityFunction()
    } else {
        console.log("wrong name")
        orderName = prompt(`Please choose a pizza from our menu. Choose among ${vegetarian}, ${hawaiian} or ${pepperoni}.`)
        validateOrderName()
    }
}

validateOrderName()
console.log(orderName)
console.log(orderQuantity)


// Total cost-function
let orderTotal = 1

let calculateTotalCost = () => {
    orderTotal = orderQuantity * pizzaPrice
}
calculateTotalCost()
console.log(orderTotal)

// Total cooking-time-function
let cookingTime = 1

let calculateCookingTime = () => {
    if (orderQuantity < 3) {
        cookingTime = 10
    } else if (orderQuantity < 6) {
        cookingTime = 15
    } else {
        cookingTime = 20
    }
}

calculateCookingTime()
console.log(cookingTime)

// Confirmation message
alert(`Great, I'll get started on your ${orderName}(s) right away, it will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`)
