function myFunk() {
  const vegetarian = "Vegetarian Pizza"
  const hawaiian = "Hawaiian Pizza"
  const pepperoni = "Pepperoni Pizza"

  const pizzaPrice = 80
  console.log(vegetarian)

  //Put your Javscript code here:
  function checkPizza(pizza) {
    const type = pizza;
    if (type === hawaiian || type === pepperoni || type === vegetarian) {
      return type
    }
    else {
      return "Pepperoni Pizza"
    }
  }
  function totalCost(x, y) {
    const pizzaTotal = x * y;
    return pizzaTotal;
  }

  function cooking(number) {
    const quantity = number;
    if (quantity > 5) {
      return 20
    }
    else if (quantity > 2) {
      return 15
    }
    else if (quantity > 0) {
      return 10
    }
    else {
      return 0
    }
  }
  let pizzaType = document.getElementById('pizza').value
  let pizzaNum = document.getElementById('quantity').value


  pizzaType = checkPizza(pizzaType);
  const total = totalCost(pizzaNum, pizzaPrice)

  const time = cooking(pizzaNum);


  const para = "You have ordered " + pizzaNum + " " + pizzaType + " cooking will take " + time + " and the cost is " + total

  document.getElementById("text").innerHTML = para;

}

document.getElementById('button').onclick = myFunk;

