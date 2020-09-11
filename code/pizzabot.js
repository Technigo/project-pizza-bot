// Variables
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

// Validation
const pizzaList = [
  "Vegetarian Pizza",
  "Hawaiian Pizza",
  "Pepperoni Pizza",
  "Vegetarian",
  "Hawaiian",
  "Pepperoni",
  "vegetarian pizza",
  "hawaiian pizza",
  "pepperoni pizza",
  "vegetarian",
  "hawaiian",
  "pepperoni", ]

const pizzaPrice = 80


const validateOrderName = (orderName) => {
  if (pizzaList.includes(orderName)) {
    return true;  
  } else {
    return false; 
  }
};


const calculateTotalCost = (orderQuantity, pizzaPrice) => {
  const totalCost = (orderQuantity * pizzaPrice);
  return totalCost;
};

const calculateCookingTime = (orderQuantity) => {

  if (orderQuantity >= 1 && orderQuantity <= 2 ) {
    return "10 min";

  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return "15 min";

  } else { 
    return "20 min";
  }

};

// startOrder is called when the user clicks the "Start order" button. 
const startOrder = () => {
  const botMessage = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
  alert(botMessage);

  askForPizza();
}


// Found info on how to make a recursive function from Van's code snippet: https://gist.github.com/puj/157701fec857e5b9cd98556a4129361d
const askForPizza = () => {
  
  const botMessage = `Enter the name of the pizza you want to order today`
  const orderName = prompt(botMessage);
  
  // If validateOrderName is true, then the bot should ask how many. If validateOrderName is false, the computer should say "Sorry, we don't have that pizza".
  if (validateOrderName(orderName) === true) {
    const orderQuantity = prompt(`How many of ${orderName} do you want?`);
    const totalCost = calculateTotalCost(orderQuantity, pizzaPrice);
    const totalTime = calculateCookingTime(orderQuantity);

  
    // document.getElementById("confirmation-box") searches the DOM for an element with the ID "confirmation-box".
    // innerHTML is the function(?) that says "Hey, replace the inner HTML with whatever's after the equation mark".
    document.getElementById("welcome-box").innerHTML = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`;
    document.getElementById("ourPizzaMenu").innerHTML = `Enter the name of the pizza you want to order today`;
    document.getElementById("nameOfPizza").innerHTML = orderName;
    document.getElementById("pizzaReply").innerHTML = `How many of ${orderName} do you want?`;
    document.getElementById("numberOfPizzas").innerHTML = orderQuantity;
    document.getElementById("confirmation-box").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost} Swedish Krona. It will take ${totalTime}.`;
    
  } else {
    
    // The "else" is triggered if a user orders something that isn't on the menu
    alert(`Sorry, we don't have ${orderName}. We only have ${vegetarian}, ${pepperoni}, and ${hawaiian}.`)

    // If the user orders a pizza that's not on the menu, call this function again, until the input is correct.
    askForPizza();
  }

}

