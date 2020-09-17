let orderName;
// constants
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const pizzaPrice = 80

// functions
const gotoNext = () => {

  if (document.getElementById("first").style.display === "block") {
      document.getElementById("first").style.display = "none"
      document.getElementById("second").style.display = "block"
      document.getElementById("back_btn").style.display = "inline-block"
      document.getElementById("next_btn").disabled = true
  } else if (document.getElementById("second").style.display === "block") {
      document.getElementById("second").style.display = "none"
      document.getElementById("third").style.display = "block"
      document.getElementById("next_btn").disabled = true
  } else if (document.getElementById("third").style.display === "block") {
      document.getElementById("third").style.display = "none"
      document.getElementById("fourth").style.display = "block"
      document.getElementById("next_btn").style.display = "none"
      document.getElementById("back_btn").innerHTML = "Restart"
  }
};

const gotoPrevious = () => {
  document.getElementById("next_btn").disabled = false

  if (document.getElementById("second").style.display === "block") {
      document.getElementById("second").style.display = "none"
      document.getElementById("first").style.display = "block"
      document.getElementById("back_btn").style.display = "none"
  } else if (document.getElementById("third").style.display === "block") {
      document.getElementById("third").style.display = "none"
      document.getElementById("second").style.display = "block"
  } else if (document.getElementById("fourth").style.display === "block") {
      document.getElementById("fourth").style.display = "none"
      document.getElementById("first").style.display = "block"
      document.getElementById("next_btn").style.display = "inline-block"
      document.getElementById("back_btn").innerHTML = "Back"
      document.getElementById("back_btn").style.display = "none"
  }
}



const getOrderName = (event) => {
  const orderName = event.target.value
  document.getElementById("pizzaChoice").innerHTML = orderName
  document.getElementById("next_btn").disabled = false
}

const getConfirmation = () => {
  orderName = document.querySelector('input[name="pizzaChoice"]:checked').value
  document.getElementById("next_btn").disabled = false
  const totalPrice = orderQuan
  tity * pizzaPrice
  const cookingTime = getCookingTime(orderQuantity)
  fourth.innerHTML = `<h3>Great, I'll get started on your ${orderName}  
                      right away,  it will cost  ${totalPrice} kr and will 
                      take ${cookingTime} minutes</h3>
                      <img src="assets/time.png">`
}

const getCookingTime = (orderQuantity) => {
  if (orderQuantity <= 2) {
      return 10
  } else if (orderQuantity >= 6) {
      return 20
  } else {
      return 15
  }
}



const next_btn = document.getElementById("next_btn")
const back_btn = document.getElementById("back_btn")

// Radio inputs
const radio_vegetarian = document.getElementById("vegetarian")
const radio_hawaiian = document.getElementById("hawaiian")
const radio_pepperoni = document.getElementById("pepperoni")


// Connecting functions to buttons
next_btn.addEventListener("click", gotoNext)
back_btn.addEventListener("click", gotoPrevious)

radio_vegetarian.addEventListener("click", getOrderName)
radio_hawaiian.addEventListener("click", getOrderName)
radio_pepperoni.addEventListener("click", getOrderName)

document.getElementById("btn1").addEventListener("click", getConfirmation)



// Starts when loading page
document.getElementById("first").style.display = "block"
document.getElementById("second").style.display = "none"
document.getElementById("third").style.display = "none"
document.getElementById("fourth").style.display = "none"
document.getElementById("back_btn").style.display = "none"

let first = document.getElementById("first")
document.getElementById("first").innerHTML = `<h1>Hey! Happy to serve your pizza</h1>
                                            <h3>On our menu we have:</h3> 
                                            ${vegetarian}<br>
                                            ${hawaiian}<br>
                                            ${pepperoni}`