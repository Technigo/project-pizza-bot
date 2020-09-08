const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

let customerName = document.getElementById('userName').value;


let orderName = document.getElementById('pizza-type').value; //gets user input on type of pizza

//Put this all into a submitOrder function when Submit button is pressed

if (confirmName(orderName)) {
    let orderQuantity = document.getElementById('pizza-number').value;  //gets user input on amount of pizzas

    let orderTotal = totalCost(orderQuantity); //Calls totalCost function to calculate total order cost

    const prepTime = (amount) => {
        if(amount <= 2) {
            return 10
        } else if (amount >= 3 && amount <= 5) {
            return 15
        } else {
            return 20
        }
    };

    let orderTime = prepTime(orderQuantity);

    alert(`Great ${customerName}, I'll get started on your ${orderName} Pizza(s) right away, it will cost ${orderTotal} kr. The pizza(s) will take ${orderTime} minutes.`);

} else {
    alert('Please select a Pizza from the menu.');
};




//Function to check if user's input pizza choice is correct - toLowerCase in case the user has entered with caps
let confirmName = (pizzaName) => {
    if (pizzaName.toLowerCase() === "hawaiian" || pizzaName.toLowerCase() ==="pepperoni" || pizzaName.toLowerCase() === "vegetarian") {
        return true;
    } else {
        return false;
    }
};

//Function to caltulate Total preparation time
let prepTime = (amount) => {
    if(amount <= 2) {
        return 10
    } else if (amount >= 3 && amount <= 5) {
        return 15
    } else {
        return 20
    }
};

//Function to calculate Total Cost
let totalCost = (quantity) => {
    return quantity * pizzaPrice
};