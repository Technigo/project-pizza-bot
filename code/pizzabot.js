const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80;

//Put your Javscript code here:
console.log(vegetarian,hawaiian,pepperoni);


document.getElementById("welcome").innerHTML = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`

const calculateCookingTime = (orderQuantity) => {
    if (orderQuantity <= 2 ) {
       return 10;
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
       return 15;
    } else {
       return 20;
    }
}


const validateOrderName = (orderName) => {
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
        return true 
    } else { 
        return false
    }
};

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
    return orderQuantity*pizzaPrice;
}

const handleSubmit = (event) => {
    event.preventDefault();
    const orderName = document.getElementById("pizzaName").value
        /*prompt('Enter the name of the pizza you want to order today.');*/
    
    validateOrderName(orderName); 
    if (validateOrderName(orderName) === true) {
        const orderQuantity = document.getElementById("pizzaQuantity").value;
        /*prompt(`How many of ${orderName} do you want?`);*/
        const cookingTime = calculateCookingTime(orderQuantity);
        const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);  
        document.getElementById("orderConfirmation").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and the pizzas will take ${cookingTime} minutes`; 
      
    } else {
        document.getElementById("orderConfirmation").innerHTML = `Sorry, we don't have that pizza. Choose a pizza from the menu`;
    }

}


