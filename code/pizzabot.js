const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

const submitForm = document.getElementById('form-action');

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

submitForm.onsubmit = submitOrder;

function submitOrder(event) {
event.preventDefault();  //Prevents the page from being refreshes when the form is submitted
let customerName = document.getElementById('userName').value; //gets user's name
let orderName = document.getElementById('pizza-type').value; //gets user input on type of pizza

if (confirmName(orderName)) { //Calls confirmName function to check if pizza type entered by user is correct
    let orderQuantity = document.getElementById('pizza-number').value;  //gets user input on amount of pizzas

    let orderTotal = totalCost(orderQuantity); //Calls totalCost function to calculate total order cost

    let orderTime = prepTime(orderQuantity); //Calls prepTime function to calculate total preparation time

    let confirmText = document.getElementById('confirm');
    let pizzaPhoto = document.getElementById('pizza-photo');
    confirmText.style.display = "block";

    confirmText.innerHTML = `Great ${customerName}, I'll get started on your ${orderName} Pizza(s) right away, it will cost ${orderTotal} kr. The pizza(s) will take ${orderTime} minutes.`;
    pizzaPhoto.src = pizzaImage(orderName); // Calls pizzaImage function to show the ordered Pizza's image by replacing src property

} else {
    alert('Please select a Pizza from the menu.');
    }
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

//Function to choose which Pizza imagee
const pizzaImage = (pizza) => {
    if(pizza.toLowerCase() === 'vegetarian') {
        return "./vegetarian.jpg"
    } else if (pizza.toLowerCase() === 'hawaiian') {
        return "./hawaiian.jpg"
    } else {
        return "./pepperoni.jpg"
    }
};