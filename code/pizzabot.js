const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
console.log(`${vegetarian}. ${hawaiian}, ${pepperoni}, ${pizzaPrice}`)

const greeting = () => {
  alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)

}

console.log(greeting())

const order = () => {
  let orderName = prompt("Enter the name of the pizza you want to order today!")
  let orderQuantity = prompt(`How many of ${orderName} would you like?`)
}



order()
