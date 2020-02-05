const vegetarian = "Vegetarian";
const hawaiian = "Hawaiian";
const pepperoni = "Pepperoni";
const pizzaPrice = 80;

const greet = (`Hey! Happy to serve your pizza! <br> On our menue we have <span style="color:#fa3e54">${vegetarian}</span>, <span style="color:#4c3ffc">${hawaiian}</span> and <span style="color:#059e7b">${pepperoni}</span> pizzas.`);
document.getElementById("welcome").innerHTML = greet;

let clicked = () => {

  let checkOrderName = () => {
    let orderName = prompt('Enter the name of the pizza you want to order today');

    if (orderName == vegetarian || orderName == hawaiian || orderName == pepperoni) {
      orderQuantity = Number(prompt(`How many ${orderName} would you like?`));
      return true;
    } else {
      alert('Select a pizza from the menue')
      return false;
    }
    // return orderQuantity
  }
  checkOrderName()

  // Hur accessa orderName in i funktionen:

  let totalCost = () => {
    let pizzaCalculation = pizzaPrice * orderQuantity
    let pizzaCost = (`This order will cost you ${pizzaCalculation} kronor.`)
    document.getElementById("pizzaCost").innerHTML = pizzaCost;
  }

  totalCost()


  let cookingTime = () => {

    if (orderQuantity <= 2) {
      const pizzaTime10 = (`The pizzas will take 10 min.`)
      document.getElementById("pizzaDelivery").innerHTML = pizzaTime10;
    } else if (orderQuantity >= 6) {
      const pizzaTime20 = (`The pizzas will take 20 min.`)
      document.getElementById("pizzaDelivery").innerHTML = pizzaTime20;
    } else {
      const pizzaTime15 = (`The pizzas will take 15 min.`)
      document.getElementById("pizzaDelivery").innerHTML = pizzaTime15;
    }
  }
  cookingTime()
}