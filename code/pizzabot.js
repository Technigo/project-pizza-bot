const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80;

// Greeting giving the user the pizza choices
document.getElementById("greeting").innerHTML = `I'm pizza bot &#129302; and I'm here to help you with your order. On our menu we have: <li>${vegetarian}</li><li>${hawaiian}</li><li>${pepperoni}</li>`;

//Message to the user asking them to choose a pizza from the menu
document.getElementById("choosePizza").innerHTML = "Ok great. Let's get started with your order! Please write the name of the pizza you want to order:";

//Function compares the parameter chosenPizza is true or false and will return which ever is true
const validateOrderName = (chosenPizza) => {
    if (chosenPizza.toLowerCase() === vegetarian.toLowerCase() || chosenPizza.toLowerCase() === hawaiian.toLowerCase() || chosenPizza.toLowerCase() === pepperoni.toLowerCase()){
        return true;
    }
    else { 
        return false;
    }
};

//Function calculating the cost of the pizza based on the pizzaAmount and returning the amount.
const calculateTotalCost = (orderQuantity, pizzaPrice) => {
    const orderTotal = (orderQuantity * pizzaPrice);
    return orderTotal;     
};

//Function calculating the cooking time based on amount of pizzas ordered
const calculateCookingTime = (pizzaAmount) => {
    if (pizzaAmount <= 2) {
        return 10;
    } else if (pizzaAmount >= 3 && pizzaAmount <= 5) {
        return 15;
    } else {
        return 20;
    }
};

//New function to be called when the user inputs the pizza they want + press the submit button, which then shows the next prompt of how many they want. If that is not true then the get the wrongPizza message asking them to order a pizza from the menu.
const enteredPizzaName = (event) => {
    event.preventDefault();
    let orderName = document.getElementById("enterPizza").value;
    let correctPizzaName = validateOrderName(orderName);

    if (correctPizzaName === true) {
        document.getElementById("howMany").innerHTML = `And how many ${orderName}'s would you like to order?`;
        document.getElementById("formTwo").style.display = "flex";
    }
    else {
        document.getElementById("wrongPizza").innerHTML = "Please order a pizza from the menu";
        document.getElementById("orderDifferentPizza").style.display= "flex";
    }
};

pizzaImage = (orderName) => { 
    if (orderName === vegetarian) {
        document.getElementById("vegPizza").src = "./vegetarian-pizza.jpg";
    } else if (orderName === pepperoni) {
        document.getElementById("pepPizza").src = "./pepperoni-pizza.jpg";
    } else {
        document.getElementById("hawPizza").src= "./hawaiian-pizza.png";
    }
};


//New function to be called when the user inputs the amount of pizzas they want + press the submit button, which then shows the final message which clarifies how what kind of pizza they've ordered, how much it'll cost and the amount of minuites it'll take to cook the pizza. 
const enteredPizzaAmount = (event) => {
    event.preventDefault();
    let orderAmount = document.getElementById("enterAmount").value;
    let correctOrderAmount = calculateCookingTime(orderAmount);
    let totalPrice = calculateTotalCost(orderAmount, pizzaPrice);
    let orderName = document.getElementById("enterPizza").value;
    document.getElementById("finalize").innerHTML = `Thanks for your order! I'll get started on your ${orderName} right away, it will cost ${totalPrice} kr. The Pizzas will take ${correctOrderAmount} minuites.`;
    document.getElementById("finalOrder").style.display= "flex";
    document.getElementById("showPizzaPicture").innerHTML = pizzaImage(orderName);
    
    // document.getElementById("vegPizza").style.display= "flex";
};

//Changed the javascript code so it doesn't only prompt or print the information to the DOM. Now it prints certain questions based on user input. 
//Functions being called when user inputs information and clicks submit. Before javascript was being run based on prompts which automatically waited for user input. But now javascript is being run on demand when an event happens(call back) and for this to work you need to seperate the parts of the programs into functions. And this is why the code has been moved around (refactored).































