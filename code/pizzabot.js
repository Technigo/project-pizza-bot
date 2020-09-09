// Declaring pizza variables 
const hawaii = 'Hawaiian Pizza';
const pepperoni = 'Pepperoni Pizza';
const vegetarian = 'Vegetarian Pizza';
const kebab = 'Kebabpizza';
const mozzarella = 'Mozzarella Pizza';


/* Function to show username and welcome message  */
const showName = () => {
    const name = document.getElementById("name").value;
    document.getElementById("messageName").innerHTML=`<h3>Hey ${name}, happy to serve you pizza.</h3> On our menu we have: <ul> <li>${vegetarian}</li> <li>${hawaii}</li> <li>${pepperoni}</li> <li>${kebab}</li> <li>${mozzarella}</li> </ul>`;
    document.getElementById("inputPizza").style.display = "inline";
    document.getElementById("inputName").style.display = "none";
}


/* Function to choose pizza and view pizza message */
const choosePizza = () => {
    const pizza = document.getElementById("pizzaType").value;
    let messagePizza;

    if (pizza === 'Hawaii') {
        messagePizza = 'Aloha, great choice! Who does not love pineapple on pizza? &#x1f34d;';
        document.getElementById("form-group-hawaii").style.display="inline";
        document.getElementById("choosenPizza").innerHTML = 'Hawaii';

    } else if (pizza === 'Pepperoni') {
        messagePizza = 'Buongiorno! &#127829; Pepperoni is my favorite too.';
        document.getElementById("form-group-pepperoni").style.display="inline";
        document.getElementById("choosenPizza").innerHTML = 'Pepperoni';

    } else if (pizza === 'Vegetarian') {
        messagePizza = 'Excellent choice, vegetarian is good for your soul. &#129365;';
        document.getElementById("form-group-vegetarian").style.display="inline";
        document.getElementById("choosenPizza").innerHTML = 'Vegetarian';

    } else if (pizza === 'Kebab') {
        messagePizza = 'This is Annas favourite as well!';
        document.getElementById("form-group-kebab").style.display="inline";
        document.getElementById("choosenPizza").innerHTML = 'Kebab';

    } else if (pizza === 'Mozzarella') {
        messagePizza = 'This is Emmas favourite as well!';
        document.getElementById("form-group-mozzarella").style.display="inline";
        document.getElementById("choosenPizza").innerHTML = 'mozzarella';
    
    } else {
        messagePizza = 'I have never heard of that one!';
    }

    document.getElementById("messagePizza").innerHTML = messagePizza;

    document.getElementById("selectNumber").style.display = "inline";
    document.getElementById("inputPizza").style.display = "none";
}

// Calculating price for pizza order
const pizzaPrice = 80; // Price

const calculateOrder = () => {
    let hawaiiValue = document.getElementById("hawaii").value;
    let pepperoniValue = document.getElementById("pepperoni").value;
    let vegetarianValue = document.getElementById("vegetarian").value;
    let kebabValue = document.getElementById("kebab").value;
    let mozzarellaValue = document.getElementById("mozzarella").value;

    let orderTotal = hawaiiValue * pizzaPrice + pepperoniValue * pizzaPrice + vegetarianValue * pizzaPrice + kebabValue * pizzaPrice + mozzarellaValue * pizzaPrice;

    

    // Calculating cooking time based on number of pizzas. 
    let orderQuantity = +hawaiiValue + +pepperoniValue + +vegetarianValue + +kebabValue + +mozzarellaValue;
    let orderTime;

    if (orderQuantity === 0) {
        orderTime = '0 minutes.';  
    } else if (orderQuantity <= 2) { 
        orderTime = '10 minutes.'; 
    } else if (orderQuantity <= 5) {
        orderTime = '15 minutes.'; 
    } else {
        orderTime = '20 minutes.';
    }

    document.getElementById("endMessage").innerHTML = `Great, I'll get started on your order right away! The total sum of your order is ${orderTotal} and the pizzas will take ${orderTime}`;

    // Choosing image depending on ordered pizza
    let image;

    if (hawaiiValue > 0){
        image = `<img src="./img/hawaii.jpg">`;
    } else if (pepperoniValue > 0) {
        image = `<img src="./img/pepperoni.jpg">`;
    } else if (vegetarianValue > 0) {
        image = `<img src="./img/vegetarian.jpg">`;
    } else if (kebabValue > 0) {
        image = `<img src="./img/kebab.jpg">`;
    } else if (mozzarellaValue > 0) {
        image = `<img src="./img/mozzarella.jpg">`;
    } else {
        image = `<img src="./img/Maksy-Meme.001.jpeg">`; //If no pizza is choosen, Maks will appear! :)
    }

    document.getElementById("image").innerHTML = image;

}

/* Iteration 1First alert/welcome message. 
alert(`Hey, happy to serve you pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

// Let customer decide which pizza they want. 
let orderName = prompt('Enter the name of the pizza you want to order today.');

// Function for validating that the pizza is on the menu.
const validateOrderName = (orderName) => {
    if (orderName === vegetarian || orderName === hawaiian || orderName == pepperoni) {
        return true
    } else {
        alert('You must select a pizza from the menu!');
    }
}
validateOrderName(orderName); // Calling the validation function

// Asking customer how many pizzas they want. 
let orderQuantity = prompt(`How many of ${orderName} do you want?`);
let orderTotal = orderQuantity * pizzaPrice;
*/