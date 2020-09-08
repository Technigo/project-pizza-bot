const vegetarian = "vegetarian";
const hawaiian = "hawaiian";
const pepperoni = "pepperoni";
const capricciosa = "capricciosa";
const margherita = "margherita";
const pizzaPrice = 80;


//Put your Javscript code here:
/*Functions*/

/*Check pizza name*/ 
const validateOrderName = (orderName) =>{
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni)
    {
        return true;
    }
    else return false;
}

/*Calculate the cost of order*/ 
const calculateTotalCost = (orderQuantity, pizzaPrice) =>{
    const orderTotal = orderQuantity * pizzaPrice;
    return orderTotal;
}

const calculateCookingTime = (orderQuantity) =>{

    let cookingTime;

    if (orderQuantity >= 1 && orderQuantity <=2) {
        cookingTime = 10;
    } else if (orderQuantity >=3 && orderQuantity <=5) {
        cookingTime = 15;
    } else if (orderQuantity >= 6) {
        cookingTime = 20;
    } else {
        cookingTime = 0;
    }
    return cookingTime;
}

/* Start of program before turning into form*/
//alert(`Hello! Happy to serve you pizza. On our menu we have ${vegetarian}, ${pepperoni}, ${hawaiian}`);

//const orderName = prompt("Enter the name of the pizza you want to order");

/*
if (validateOrderName(orderName)===true) {

    const orderQuantity = parseInt(prompt(`How many of ${orderName} do you want?`), 10);
    
    const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);

    let cookingTime = calculateCookingTime(orderQuantity);
    const messageText = (`Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`)
    document.getElementById("message").innerHTML = messageText;
}
 else {
    alert("Select a pizza from the menu");
}
*/

/*New functions for form-input*/
const placeOrder = () =>{
    console.log("placeOrder function");

    if (validateInput()) {

    const name = document.getElementById("name").value; 
    const orderName = document.getElementById("pizza").value; 
    const orderQuantity = document.getElementById("pizza-slider").value; 
    console.log(name,orderName,orderQuantity);

    const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);
    let cookingTime = calculateCookingTime(orderQuantity);
    const messageText = (`Great ${name},<br> I'll get started on your ${orderName} right away.<br> It will cost ${orderTotal} kr. <br>The pizza(s) will take ${cookingTime} minutes.`)
    document.getElementById("message").innerHTML = messageText;

    toggleDisableForm();
    togglePizzaImage(orderName);
    return false;
    } else alert("Please fill in the form")
} 

/*Validate input*/
const validateInput = () =>{
    console.log("validateInput");
    const inputValues = document.getElementById("order-form").elements; 

    let numberOfValidInput =0;
    for(i=0;i<inputValues.length;i++)
    {
        //Vi vill inte kolla på värdet i output-taggen, därför exkluderar vi den. if-satsen körs ej för den
        //och därmed kommer räknaren inte att räknas upp.
        if(inputValues[i].value != "" && inputValues[i].value != "0" && inputValues[i].type != "output")
        {
            numberOfValidInput++;
            console.log("value of element:" + inputValues[i].value);
            console.log(inputValues[i].type + " type of element");
            console.log("numberOfValidInput= "+numberOfValidInput);
        }
        else console.log("no value in array");
    }
    console.log("Number of valid input after loop:" +numberOfValidInput);
    //returera true om valid = 3 annars false
    return(numberOfValidInput > 2 ? true : false);
}
  



/*changeRangeOutput*/
const changeRangeOutput = () =>{
    let rangeValue = document.getElementById("pizza-slider").value;
    document.getElementById("number-output").innerHTML = rangeValue;
}

/*toggle pizza image */
const togglePizzaImage = (orderName) => {
    console.log(orderName);
    console.log(vegetarian +" constant");
    switch(orderName) {
       
        case vegetarian: document.getElementById("pizza-image").classList.toggle(vegetarian);
        break;
        case hawaiian: document.getElementById("pizza-image").classList.toggle(hawaiian);
        break;
        case pepperoni: document.getElementById("pizza-image").classList.toggle(pepperoni);
        break;
        case capricciosa: document.getElementById("pizza-image").classList.toggle(capricciosa);
        break;
        case margherita: document.getElementById("pizza-image").classList.toggle(margherita);
        break;
    }
}

const toggleDisableForm = () =>{
    document.getElementById("order-form").classList.toggle("order-form-inactive");
}


