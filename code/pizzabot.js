const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const margherita = "Margherita Pizza"

const pizzaPrice = 80

const pizzaVegImg = document.getElementById("veg")
const pizzaHawImg = document.getElementById("haw")
const pizzaPepImg = document.getElementById("pep")
const pizzaMarImg = document.getElementById("mar")


console.log(vegetarian, hawaiian, pepperoni, pizzaPrice)

document.getElementById("menu").innerHTML = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, ${pepperoni}, and ${margherita}.`


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

  if (orderName === "Vegetarian Pizza") {
    pizzaVegImg.setAttribute("style", "display:block;");
  } else if (orderName === "Hawaiian Pizza") {
    pizzaHawImg.setAttribute("style", "display:block;")
  } else if (orderName === "Pepperoni Pizza") {
    pizzaPepImg.setAttribute("style", "display:block;")
  } else if (orderName === "Margherita Pizza") {
    pizzaMarImg.setAttribute("style", "display:block;")
  }

}

document.getElementById("submit").addEventListener("click", handleClick)








