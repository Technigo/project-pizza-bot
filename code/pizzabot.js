const vegetarian = "Vegetarian";
const hawaiian = "Hawaiian";
const pepperoni = "Pepperoni";
const pizzaPrice = 80;

//Put your Javscript code here:


let clicked = () => {
  const greet = alert(`Hey! Happy to serve your pizza. On our menue we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)
}


let checkOrderName = () => {
  let orderName = prompt('Enter the name of the pizza you want to order today');

  if (orderName == vegetarian || orderName == hawaiian || orderName == pepperoni) {
    orderQuantity = Number(prompt(`How many ${orderName} would you like?`));
    return true;
  } else {
    alert('Select a pizza from the menue')
    return false;
  }
  return orderQuantity
}
checkOrderName()


let totalCost = () => {

  let pizzaCalculation = pizzaPrice * orderQuantity
  const pizzaKronor = (`This order will cost you ${pizzaCalculation} kronor`)
  document.getElementById("pizzapris").innerHTML = pizzaKronor;
}

totalCost()


let cookingTime = () => {

  if (orderQuantity <= 2) {
    const pizzaTime10 = (`The pizzas will take 10 min`)
    document.getElementById("pizzaleverans").innerHTML = pizzaTime10;
  }else if (orderQuantity >= 6) {
    const pizzaTime20 = (`The pizzas will take 20 min`)
    document.getElementById("pizzaleverans").innerHTML = pizzaTime20;
  }else {
    const pizzaTime15 = (`The pizzas will take 15 min`)
    document.getElementById("pizzaleverans").innerHTML = pizzaTime15;
  }
}

cookingTime()