const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

/* Display welcome message */
document.getElementById("welcome").innerHTML = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`;

/* Order Funktion */
const orderPizza = () => {

  /* Function Order Name */
  const checkOrderName = () => {

    if (orderName === hawaiian || orderName === pepperoni || orderName === vegetarian) {
      return true;
    }
    else {
      return false;
    }
  }

  /* Function Total Cost */
  const totalCost = (quantity) => {
    const orderTotal = pizzaPrice * quantity;
    return orderTotal;
  }

  /* Function Cooking Time */
  const cookingTime = (quantity) => {

    let orderTime;

    if (quantity <= 2) {
      orderTime = 10;
    }
    else if (quantity <= 5) {
      orderTime = 15;
    }
    else {
      orderTime = 20;
    }

    return orderTime;
  }

  /* Order */
  const orderName = prompt(`Enter the name of the pizza you want to order today`);
  console.log(orderName);

  if (checkOrderName(orderName) === true) {

    const orderQuantity = +prompt(`How many of ${orderName} do you want`);
    console.log(orderQuantity);

    document.getElementById("order").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(orderQuantity)} kr. 
    The pizza will take ${cookingTime(orderQuantity)} minutes.`;
  }

  else {
    document.getElementById("order").innerHTML = `Select a pizza from the menu!`;
  }
}



