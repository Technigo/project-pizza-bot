const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const pizzaPrice = 80
//Put your Javscript code here:
console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);
/*Functions*/
//Three functions in total needed - iteration 7
/*Check valid pizza name*/
const validateOrderName = (orderName) =>{
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni)
    {
        return true;
    }
    else return false;
}
//console.log(validateOrderName);
/*calculate order total price*/
const calculateTotalCost = (orderQuantity, pizzaPrice) =>{
    const orderTotal = orderQuantity * pizzaPrice;
    return orderTotal;
}
//console.log(calculateTotalCost);
/*calculate cooking time depending on orderQuantity*/
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
//console.log(calculateCookingTime);
/*Function to specify pizza image depending on pizza selection*/
//FUNKAR MEN BEHÖVER VI LET pizzaImage????
const pizzaImageFunction = (orderName) => {
    //let pizzaImage;
    if(orderName === vegetarian) {
        return "./vegetarian.png";
    } else if (orderName === hawaiian) {
        return "./hawaiian.png";
    } else {
        return "./pepperoni.png";
    }
};
/*
const pizzaImageFunction = (orderName) => {
    let pizzaImage;
    if (orderName === vegetarian) {
       "./vegetarian.jpg";
    } else if (orderName === hawaiian) {
        "./hawaiian.jpg";
    } else {
        "./pepperoni.jpg";
    }
return pizzaImage;
    //console.log(pizzaImageFunction);
}*/
/* PMG STARTS*/
//GET INPUTS FROM THE FORM validate everything is filled in correctly
const createPizzaOrder = () => {
    const customerName = document.getElementById('firstName').value;
    let orderName = document.getElementById('pizzaSelection').value;
    let orderQuantity = document.getElementById('pizzaRangeSlider').value;
    //console.log(customerName);
    //console.log(orderName);
    //console.log(orderQuantity);
    if (customerName.length > 0) {
        const cookingTime = calculateCookingTime(orderQuantity);
        //console.log(cookingTime);
        const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);
        //console.log(orderTotal);
        const orderConfirmation = (`Hey, ${customerName}, I'll get started on your ${orderName} right away.
        It will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`)
        //console.log(orderConfirmation);
        document.getElementById('orderConfirmationText').innerHTML = orderConfirmation;
        pizzaPhoto.src = pizzaImageFunction(orderName); // Calls pizzaImage function to show the ordered Pizza's image by replacing src property
        console.log(pizzaPhoto.src);
    } else {
        alert('Please specify all information in the form');
    }
};
//PIZZA SLIDER - har inget med övriga funktioner att göra (inget med pizza order att göra)
const changeRangeValue = () => {
    const rangeValue = document.getElementById("pizzaRangeSlider").value;
    document.getElementById("output-pizzaRange").innerHTML = rangeValue;
}
/* BLUE LEVEL - dont need these because......
//alert(`Hello! Happy to serve you pizza. On our menu we have ${vegetarian}, ${pepperoni}, ${hawaiian}`);
const orderName = prompt("Enter the name of the pizza you want to order");
console.log(orderName);
//Do we have to validate again? Since the selection is in a selectlist in the form?
if (validateOrderName(orderName)===true) {
    const orderQuantity = prompt(`How many of ${orderName} do you want?`);
    const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);
    let cookingTime = calculateCookingTime(orderQuantity);
    //TO GET MESSAGE IN ALERT:
    //const messageText = alert(`Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`)
    //TO GET MESSAGE SHOWN IN OUR HTML FILE
    const messageText = (`Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`)
    document.getElementById("message").innerHTML = messageText;
}
 else {
    alert("Select a pizza from the menu");
}
*/
