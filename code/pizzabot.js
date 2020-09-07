const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
console.log(vegetarian, hawaiian, pepperoni, pizzaPrice)
/*Funktioner*/

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



alert(`Hello! Happy to serve you pizza. On our menu we have ${vegetarian}, ${pepperoni}, ${hawaiian}`);

const orderName = prompt("Enter the name of the pizza you want to order");

if (validateOrderName(orderName)===true) {

    const orderQuantity = prompt(`How many of ${orderName} do you want?`);
    const orderTotal = calculateTotalCost(orderQuantity);

    let cookingTime = calculateCookingTime(orderQuantity);
   
    alert(`Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`);
}
 else {
    alert("Select a pizza from the menu");
}



