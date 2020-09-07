const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javascript code here:
console.log(vegetarian)
console.log(hawaiian)
console.log(pepperoni)
console.log(pizzaPrice)

// Use alert() to print the message "Hey! Happy to serve your pizza. On our menu we have X, Y and Z".
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)

const orderName = prompt(`Enter the name of the pizza you want to order today`)
console.log(orderName)

const orderQuantity= prompt(`How many of ${orderName} do you want?`)
console.log(orderQuantity)

// -----------------------------------------------------------------------------------------------

// Är det här en funktion? Eller bara en variabel med andra variabler?
const orderTotal = pizzaPrice * orderQuantity
console.log(orderTotal)

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} Swedish Kronor.`)
// Literal template orderName, Total Price


// console.log(pizzaCalculation)