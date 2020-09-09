// Declaring variables for the pizzas on the menu & the price
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const kebab = "Kebab Pizza"

const pizzaPrice = 80

// Welcome message - Pizza-chat box 2
document.getElementById("welcome").innerHTML = `On our menu we have ${vegetarian}, ${hawaiian}, ${pepperoni} and ${kebab}.`

// Declaring variables
let orderName = "" 

// Makes Pizza-chat box 3 + User-chat box 2 visible. Function is called in next function.
let displayOrderQuantityBox = () => {
    const orderQuantityBox = document.getElementById("orderQuantityBox")
    const selectQuantityBox = document.getElementById("selectQuantityBox")

    orderQuantityBox.classList.remove("invisible")
    orderQuantityBox.classList.add("visible")
    selectQuantityBox.classList.remove("invisible")
    selectQuantityBox.classList.add("visible")
    }

// Main order-function to select pizza sort + invokes function above
let orderPizza = (name) => {
    orderName = name
    document.getElementById("howMany").innerHTML = `OK, how many ${orderName}(s) do you want?`
    displayOrderQuantityBox()
}

// Counting-function to select amount of pizzas
let quantityFunction = (event) => {
    event.preventDefault()

    // Get quantity from user input-counter 
    let orderQuantity = document.getElementById("quantityUser").value

    // The box which confirms Pizza-sort + price + cooking-time
    const confirmationBox = document.getElementById("confirmationBox")
    
    // Total cost-function
    let orderTotal = 1
    let calculateTotalCost = () => {
        orderTotal = orderQuantity * pizzaPrice
    }
    
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
    calculateTotalCost()
    calculateCookingTime()

    // Confirmation message
    document.getElementById("confirmation").innerHTML = `Great, I'll get started on your ${orderName}(s) right away, it will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`

    confirmationBox.classList.remove("invisible")
    confirmationBox.classList.add("visible")
}

