// Declaring variables for the pizzas on the menu & the price
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const kebab = "Kebab Pizza";

let pizzaPrice;

// Welcome message - Pizza-chat box 2
document.getElementById("welcome").innerHTML = `On our menu we have ${vegetarian}, ${hawaiian}, ${pepperoni} and ${kebab}.`;

// Declaring variables
let orderName; 

// Makes Pizza-chat box 3 + User-chat box 2 visible. Function is called in next function.
let displayOrderQuantityBox = () => {
    const orderQuantityBox = document.getElementById("orderQuantityBox");
    const selectQuantityBox = document.getElementById("selectQuantityBox");

    orderQuantityBox.classList.remove("invisible");
    orderQuantityBox.classList.add("visible");
    selectQuantityBox.classList.remove("invisible");
    selectQuantityBox.classList.add("visible");
    }

// Main order-function to select pizza sort + invokes function above
let orderPizza = (name) => {
    orderName = name;
    document.getElementById("howMany").innerHTML = `OK, how many ${orderName}(s) do you want?`;
    
    // Show progress-bar when clicking on a pizza-sort
    const progressBar = document.getElementById("progressBar");
    progressBar.classList.remove("invisible");
    progressBar.classList.add("visible");

    // Push header-section down when progress-bar is shown
    const headerBox = document.querySelector("header");
    headerBox.classList.add("marginTop");
    
    // Add pizza-name + first progress-box to progress-bar
    document.getElementById("topBarPizza").innerHTML = `${orderName}`;
    document.getElementById("progressOne").style.background = "#01DC3E";

    displayOrderQuantityBox()
}

// Counting-function to select amount of pizzas
let quantityFunction = (event) => {
    event.preventDefault();

    // Get quantity from user input-counter 
    let orderQuantity = document.getElementById("quantityUser").value;

    // The box which confirms Pizza-sort + price + cooking-time
    const confirmationBox = document.getElementById("confirmationBox");
    
    // Total cost-function
    let orderTotal;
    let calculateTotalCost = () => {
        
        // Conditional statement given other price for kebab pizza
        let otherPrice = () => {
            if (orderName === kebab)
            {
                pizzaPrice = 100;
            } 
            else {
                pizzaPrice = 80;
            }
        }
        
        otherPrice() 

        orderTotal = orderQuantity * pizzaPrice;
    }

    // Total cooking-time-function
    let cookingTime;

    let calculateCookingTime = () => {
        if (orderQuantity < 3) {
            cookingTime = 10;
        } else if (orderQuantity < 6) {
            cookingTime = 15;
        } else {
            cookingTime = 20;
        }
    }
    
    calculateTotalCost()
    calculateCookingTime()

    // Confirmation message
    document.getElementById("topBarCount").innerHTML = `${orderQuantity} x`; 
    document.getElementById("progressTwo").style.background = "#01DC3E";
    document.getElementById("confirmation").innerHTML = `Great, I'll get started on your ${orderName}(s) right away, it will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`;
    
    confirmationBox.classList.remove("invisible");
    confirmationBox.classList.add("visible");

    //Count-down timer gets visible
    timerBox.classList.remove("invisible");
    timerBox.classList.add("visible");

    //Order Summary   
    document.getElementById("count").innerHTML = `${orderQuantity}`;
    document.getElementById("pizza").innerHTML = `${orderName}`;
    document.getElementById("price").innerHTML = `${pizzaPrice} kr`;
    document.getElementById("total").innerHTML = `Total: ${orderTotal} kr`;
    document.getElementById("topBarTotal").innerHTML = ` = ${orderTotal} kr`;
    
    //Order Summary gets visible
    const orderSummaryBox = document.getElementById("orderSummaryBox");
    orderSummaryBox.classList.remove("invisible");
    orderSummaryBox.classList.add("visible");

    //Count-down timer function
    let startingMinutes = cookingTime;
    let time = startingMinutes * 60;

    const countdownEl = document.getElementById("time");

    const updateCountdown = () => {   
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
    
        countdownEl.innerHTML = `${minutes}:${seconds}`;
        time--;
    }

    setInterval(updateCountdown, 1000)
    updateCountdown()
}



