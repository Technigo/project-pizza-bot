const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

console.log(vegetarian, hawaiian, pepperoni, pizzaPrice)

document.getElementById("menu").innerHTML = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`

//alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, ${pepperoni}.`)


const calculateTotalCost = (orderQuantity) => {
  return orderQuantity * pizzaPrice
}

const calculateCookingTime = (orderQuantity) => {
  let cookingTime

  if (orderQuantity <= 2) {
    cookingTime = "10 minutes"
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    cookingTime = "15 minutes"
  } else {
    cookingTime = "20 minutes"
  }

  return cookingTime
}

const handleClick = () => {
  const orderName = document.getElementById("pizzas").value
  const orderQuantity = document.getElementById("numberOfPizzas").value
  const orderTotal = calculateTotalCost(orderQuantity)
  const cookingTime = calculateCookingTime(orderQuantity)

  document.getElementById("message").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizza will take ${cookingTime}.`
}

document.getElementById("submit").addEventListener("click", handleClick)



// const promptOrderName = () => {
//   orderName = prompt("Enter the name of the pizza you want to order today.")
//   validateOrderName()
// }



// promptOrderName()


// const orderQuantity = prompt(`How many of ${orderName} do you want?`)
// let orderTotal




//alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The Pizza will take ${cookingTime}.`)




