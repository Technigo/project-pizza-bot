const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const kebeb = "Kebab Pizza" //We added an extra pizza with the aim to specify a different price, but we didn't have time to finih it and make the new price work.

const pizzaPrice = 80

//console.log(vegetarian);
//console.log(hawaiian);
//console.log(pepperoni);

/*Functions below */

/*Check valid pizza name*/
const validateOrderName = (orderName) =>{
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni || orderName === kebab)
    {
        return true;
    }
    else return false;
}
//console.log(validateOrderName);

/*Calculate order total price*/
const calculateTotalCost = (orderQuantity, pizzaPrice) =>{
   const orderTotal = orderQuantity * pizzaPrice;
   return orderTotal;
}
//console.log(calculateTotalCost);

/*Calculate cooking time depending on orderQuantity*/
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
const pizzaImageFunction = (orderName) => {
    if(orderName === vegetarian) {
        return "./vegetarian.png";
    } else if (orderName === hawaiian) {
        return "./hawaiian.png";
    } else {
        return "./pepperoni.png";
    }
};

//Excecuted when button is clicked (INPUTS FROM FORM, validate everything is filled in correctly)
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

//Function PIZZA SLIDER VALUE
const changeRangeValue = () => {
    const rangeValue = document.getElementById("pizzaRangeSlider").value;
    document.getElementById("output-pizzaRange").innerHTML = rangeValue;
}


/* BLUE LEVEL - We saved this to show that we did the blue level.

//alert(`Hello! Happy to serve you pizza. On our menu we have ${vegetarian}, ${pepperoni}, ${hawaiian}`);
const orderName = prompt("Enter the name of the pizza you want to order");
console.log(orderName);

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
