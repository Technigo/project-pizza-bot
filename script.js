  console.log("first step")
  const vegetarian = "Vegetarian Pizza"
  const hawaiian = "Hawaiian Pizza"
  const pepperoni = "Pepperoni Pizza"

  const pizzaPrice = 80  
  
  const checkOrder = (name) => {
    
    if (name === pepperoni || name === hawaiian || name === vegetarian){
      status = true
    } 
    else{
      status = false
    } 
    return status
    }

  const cost = (num) => {
    return num*pizzaPrice
    }

    const cookingTime = (num) => {
      const quant = num
      let time = 0
      if (num>5) {
        time = 20
        //  block of code to be executed if condition1 is true
      } else if (num>2) {
        time = 15
        //  block of code to be executed if the condition1 is false and condition2 is true
      } else if (num>0) {
        time = 10
        //  block of code to be executed if the condition1 is false and condition2 is true
      }
  return time
    }  

const handleForm = () => {
  console.log("handleform")
  let orderName = document.getElementById('pizzaKind').value
  let orderQuantity = document.getElementById('pizzaNum').value
  let words = ""
  const checking = checkOrder(orderName)
  if (checking && orderQuantity>0){
  const total = cost(orderQuantity)
  const time = cookingTime(orderQuantity)

  words = `You ordered ${orderQuantity} ${orderName}, it will take ${time} minuts and set you back ${total} kr.`
  }
  else {
    words = "There was an issue with the order, try again"
  }
  orderName = document.getElementById('pizzaKind').value = ""
  orderQuantity = document.getElementById('pizzaNum').value =""
  document.getElementById('word1').innerHTML = words
 
}
document.getElementById('button1').onclick = handleForm;