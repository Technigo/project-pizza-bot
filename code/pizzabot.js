//Variables defining data
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80;

const vegPic = document.getElementById("vegPizza");
const pepPic = document.getElementById("pepPizza");
const hawPic = document.getElementById("hawPizza");

//--------------------------------------------------------------------------//

//Sentances showing in html via the getElementById()
// Greeting to the user from the pizzabot
document.getElementById("greeting").innerHTML = `&#129302 Hi! Welcome to Claire & Claudia's pizza ordering service. I'm pizza bot and I'm here to help you with your order.`;

//Showing the menu
document.getElementById("menu").innerHTML = `On the menu we have: <li>${vegetarian}: ${pizzaPrice}kr</li> <li>${hawaiian}: ${pizzaPrice}kr</li> <li>${pepperoni}: ${pizzaPrice}kr</li>`;

//Message to the user asking them to choose a pizza from the menu
document.getElementById("choosePizza").innerHTML = "&#129302 Ok great. Let's get started with your order! Please write the name of the pizza you want to order:";

//--------------------------------------------------------------------------//

//Function compares if the parameter chosenPizza is true or false. Will return true if user inputs correct pizza name, otherwise will show message which is called further down in enteredPizzaValue
const validateOrderName = (chosenPizza) => {
    if (chosenPizza.toLowerCase() === vegetarian.toLowerCase() || chosenPizza.toLowerCase() === hawaiian.toLowerCase() || chosenPizza.toLowerCase() === pepperoni.toLowerCase()){
        return true;
    }
    else { 
        return false;
    }
};

//Function calculating the cost of the pizza based on the pizzaAmount and pizzaPrice. Returnsg the amount when function is called further down
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

//Function that assigns an image to the type of pizza ordered
pizzaImage = (orderName) => { 
    console.log(orderName);
    if (orderName.toLowerCase() === vegetarian.toLowerCase()) {
        return vegPic;
    } else if (orderName.toLowerCase() === pepperoni.toLowerCase()) {
        return pepPic;
    } else {
        return hawPic;
    }
};

//--------------------------------------------------------------------------//

//Function which is connected to the first form in html inside the onsubmit() attribute of the form. When the user inputs the username and the pizza they want and presses the submit button, if true (i.e. if pizza name matches what's on the menu), it runs the code and also shows the next prompt of how many pizzas they want. If that is not true then the they get the wrongPizza message asking them to order a pizza from the menu.
const enteredPizzaName = (event) => {
    event.preventDefault();//Stops the page from submitting information to the backend.
    let orderName = document.getElementById("enterPizza").value;
    let correctPizzaName = validateOrderName(orderName);

    if (correctPizzaName === true) {
        document.getElementById("orderDifferentPizza").style.display= "none";
        document.getElementById("howMany").innerHTML = `&#129302 And how many ${orderName}'s would you like to order?`;
        document.getElementById("formTwo").style.display = "flex";
        //The second form (where the user will input how many pizzas they want) will be show if true as we make that element in html to display flex. Before this time it's defined as display: none is css.
    }
    else {
        document.getElementById("wrongPizza").innerHTML = "&#129302 Sorry that pizza isn't on the menu. Please order a pizza from the menu";
        document.getElementById("orderDifferentPizza").style.display= "flex";
    }
};

//Function that is connected to the second form in html inside the onsubmit() attribute in the form. When user inputs the amount of pizzas they want and  press the submit button, the code inside the function is run. Which is the final order message clarifying all the details of their order and an image of the pizza they've ordered.   
const enteredPizzaAmount = (event) => {
    event.preventDefault(); //Stops the page from submitting information to the backend.
    let orderAmount = document.getElementById("enterAmount").value; //Taking the value (the amount) the user has inputted in the DOM for the amount of pizzas they want to order and put this inside a function to then use to calculate the cooking time below. 
    let correctOrderAmount = calculateCookingTime(orderAmount);
    let totalPrice = calculateTotalCost(orderAmount, pizzaPrice);
    let orderName = document.getElementById("enterPizza").value;
    let pizzaImages = pizzaImage(orderName);
    document.getElementById("formTwo").style.display = "flex";

    //Defined variable and if statement which helps to change if the pizza if plural or not in the final order statement.
    let plural = "'s";
    if (orderAmount === "1") {
        plural = "";
    }

    document.getElementById("finalize").innerHTML = `&#129302 Thanks for your order! I'll get started on your ${orderName}${plural} right away, it will cost ${totalPrice}kr. The Pizza${plural} will take ${correctOrderAmount} minuites to cook. Our driver will deliver your pizza within the hour!`;

    //Changes the display of the final order statement and the correct image of the pizza from none to flex. In css this is defined as nonw. 
    document.getElementById("finalOrder").style.display= "flex";
    pizzaImages.style.display = "flex";
};

//Changed the javascript code so it doesn't only prompt or print the information to the DOM. Now it prints certain questions based on user input. 
//Functions being called when user inputs information and clicks submit. Before javascript was being run based on prompts which automatically waited for user input. But now javascript is being run on demand when an event happens(call back) and for this to work you need to seperate the parts of the programs into functions. And this is why the code has been moved around (refactored).
































