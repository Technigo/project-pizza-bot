const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80;

// Greeting giving the user the menu
document.getElementById("greeting").innerHTML = `Hey! Welcome to the pizza bot! On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`;

// Enter name of pizza you want to order
let orderName = document.getElementById("choosePizza").innerHTML = "Choose the name of the pizza you want to order today";

//Function compares the paramater chosenPizza is true or false and will return which ever is true
const validateOrderName = (chosenPizza) => {
    if (chosenPizza.toLowerCase() === vegetarian.toLowerCase() || chosenPizza.toLowerCase() === hawaiian.toLowerCase() || chosenPizza.toLowerCase() === pepperoni.toLowerCase()){
        return true; 
    }
    else { 
        return false;
    }
};

//Calling the function and in the paramater we define what is in the orderName variable to then tell chosenPizza what pizza has been chosen so then it can check this against what is defined in the if and else statements. The outcome, true or false will e stored on the pizzaIsOnMenu variable.
let pizzaIsOnMenu = validateOrderName(orderName);

//Function calculating the cost of the pizza based on the pizzaAmount and returning the amount.
const calculateTotalCost = (orderQuantity, pizzaPrice) => {
    const orderTotal = (orderQuantity * pizzaPrice);
    return orderTotal;     
};

const calculateCookingTime = (pizzaAmount) => {
    if (pizzaAmount <= 2) {
        return 10;
    } else if (pizzaAmount >= 3 && pizzaAmount <= 5) {
        return 15;
    } else {
        return 20;
    }
};

//if statement which tells us if the user has put in a valid pizza name and if true then will create the promt asking them how many they want, which is then stored in the variable pizzaAmount. Otherwsie they will get the alert.
if (pizzaIsOnMenu === true) {
    let pizzaAmount = document.getElementById("howmany").innerHTML = `How many of ${orderName} do you want?`;
    //Calling the function and in the parameter taking the data inside the pizzaAmount and pizzaPrice and using that to put into into the calculateCost function to then be able to do the calculation.
    let totalPrice = calculateTotalCost(pizzaAmount, pizzaPrice);
    let cookingTimeMin = calculateCookingTime(pizzaAmount);
    document.getElementById("finalize").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${totalPrice} kr. The Pizzas will take ${cookingTimeMin}.`;
} else {
    document.getElementById("error").innerHTML = "Sorry you have to order something off the menu";
}
































