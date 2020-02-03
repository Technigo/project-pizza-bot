const A = "Vegetarian Pizza"
const B = "Hawaiian Pizza"
const C = "Pepperoni Pizza"
 
let pizzaPrice = 80

 
const greeting = () => {
  const welcome = (`Hey, happy to serve your pizza. We have ${A}, ${B}, ${C}, which one would you like?`)
  document.getElementById("welcomePizza").innerHTML = welcome
}
greeting()

const amount = () => {
  const orderQuantity = 'How many pizzas would you like?'
  document.getElementById("pizzaAmount").innerHTML = orderQuantity
}
amount()


const checkOrderName = () => {
  orderInput = document.getElementById("pizza").value
  numberPizza = document.getElementById("numberPizza").value
  let totalprice = pizzaPrice * numberPizza
  if (orderInput === A || orderInput === B || orderInput === C) {
    if (numberPizza <= 2) {
      time = '10 min'
    } else if (numberPizza >= 3 && numberPizza <= 5) {
      time = '15 min'
    } else {
      time = '20 min'
    }
    let final = `You have ordered ${numberPizza} ${orderInput} and it will cost ${totalprice} SEK 
    and it will take ${time}!`
    document.getElementById("orderComplete").innerHTML = final
  } else {
    alert(`We don't serve that. We have ${A}, ${B}, ${C}, which one would you like?`)
    return false
    }
 } 