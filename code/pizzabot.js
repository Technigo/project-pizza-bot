const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

//Put your Javscript code here:

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`
);

//function for prompting for pizzaname
const order = () => {
  const orderName = prompt(
    "Enter the name of the pizza you want to order today."
  ); //returns the pizzaname
  return orderName;
};


//variable to store the pizzaname
const ordered = order();


//function to check if pizzaname is valid
const validateOrderName = () => {
  const orderLower = ordered.toLowerCase();
  const vegetarianLower = vegetarian.toLowerCase();
  const hawaiianLower = hawaiian.toLowerCase();
  const pepperoniLower = pepperoni.toLowerCase();
  if (orderLower === vegetarianLower) {
    return true;
  } else if (orderLower === pepperoniLower) {
    return true;
  } else if (orderLower === hawaiianLower) {
    return true;
  } else {
    return false;
  }
};


//function to check how many pizzas the user wants
const orderQuantity = () => {
  const howManyPizzas = prompt(`How many ${ordered}s do you want?`);
  //returns how many pizzas the user wants
  return Number(howManyPizzas);
};


//if order is valid call the function orderQuantity and store that in amountOfPizzas.
if (validateOrderName() === true) {
  //stores the orderQuantity in the amountOfPizza variable
  var amountOfPizzas = orderQuantity();
} else {
  alert("Choose a pizza that's on the menu");
}



//function to calculate the cost
const calculateTotalCost = () => {
  const total = amountOfPizzas * pizzaPrice;
  //returns the total cost
  return total;
};

//gets the value of the order total
const orderTotal = calculateTotalCost();


const calculateCookingTime = () => {
    //checks cooking time after the amount of pizzas
    if (Number.isInteger(amountOfPizzas) === false) {
    //if value is something else than a number, you get no pizza
    document.getElementById("pizza-cookingtime").innerHTML = `No pizza for you`;
  }  else if (amountOfPizzas < 1) {
    document.getElementById("pizza-cookingtime").innerHTML = `No pizza for you`;
  } else if (amountOfPizzas < 3) {
    document.getElementById("pizza-confirmation").innerHTML = `Great I'll get started on your ${amountOfPizzas}${ordered}s right away, it will cost ${orderTotal} kr.`;
    document.getElementById("pizza-cookingtime").innerHTML = "Your order will take 10 minutes.";
  } else if (amountOfPizzas < 6) {
    document.getElementById("pizza-confirmation").innerHTML = `Great I'll get started on your ${amountOfPizzas} ${ordered}s right away, it will cost ${orderTotal} kr.`;
    document.getElementById("pizza-cookingtime").innerHTML = "Your order will take 15 minutes.";
  } else {
    document.getElementById("pizza-confirmation").innerHTML = `Great I'll get started on your ${amountOfPizzas} ${ordered}s right away, it will cost ${orderTotal} kr.`;
    document.getElementById("pizza-cookingtime").innerHTML = "Your order will take 20 minutes.";
  }
};
//calls the funtions
validateOrderName();

calculateCookingTime();

