const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

console.log("Vegetarian Pizza", "Hawaiian Pizza", "Pepperoni Pizza", 80)

//Put your Javscript code here:

document.getElementById("button").onclick = function() {myFunction()};
function myFunction() {
    alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)
    const orderName = prompt(`Enter the name of the pizza you want to order today.`)
    checkOrderName(orderName);
  }

const checkOrderName = (orderName) => { 
    const isCorrect = orderName == "Vegetarian Pizza" || orderName == "Hawaiian Pizza" || orderName == "Pepperoni Pizza"
    let orderQuantity
  
    if (isCorrect) {
        orderQuantity = Number(prompt(`How many of ${orderName} do you want?`))

        const totalCost = (orderQuantity) => {
        return orderQuantity * pizzaPrice
        }

         const cookingTime = (orderQuantity) => {
            if (orderQuantity <= 2) {
            return 10
            } else if (orderQuantity >= 3 && orderQuantity <= 5) {
            return 15
            } else {
            return 20
            }  
        }
    
        document.getElementById("final-greeting").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(orderQuantity)} kr. The pizza will take ${cookingTime(orderQuantity)} minutes.`

    } else {
        alert(`Select a pizza from the menu`)
    }
  }
  
 

  


  







 


