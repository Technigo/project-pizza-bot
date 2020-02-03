const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

console.log("Vegetarian Pizza", "Hawaiian Pizza", "Pepperoni Pizza", 80)

//Put your Javscript code here:

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)

const orderName = prompt(`Enter the name of the pizza you want to order today.`)
 let orderQuantity
    if ((orderName == "Vegetarian Pizza" || orderName == "Hawaiian Pizza" || orderName == "Pepperoni Pizza")) {
        orderQuantity = Number(prompt(`How many of ${orderName} do you want?`))
    } else {
        alert(`Select a pizza from the menu`)
    
    }

const orderTotal = orderQuantity * pizzaPrice

let orderTime
    if (orderQuantity <= 2) {
        orderTime = 10
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        orderTime = 15
    } else {
        orderTime = 20
    }

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza will take ${orderTime} minutes.`)
 


