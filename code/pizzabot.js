//1) Defenition of variables 

const vegetarian = "Vegetarian"
const hawaiian = "Hawaiian"
const pepperoni = "Pepperoni"
const pizzaPrice = 80


//Functions

const validateOrderName = (orderName) => {
    if (orderName.toLowerCase() === vegetarian.toLowerCase()) {
        return true;

    } else if (orderName.toLowerCase() === hawaiian.toLowerCase()) {
        return true;
    
    } else if (orderName.toLowerCase() === pepperoni.toLowerCase()) {
        return true;
    
    } else {
        alert('Select a pizza from the menu!');
        return false;
    }
};

const calculateTotalCost = (orderQuantity, pizzaPrice) => {
    let orderTotal = orderQuantity * pizzaPrice;
    return orderTotal;
}

const calculateCookingTime = (orderQuantity) => {
    let orderTime = 0; 
    if (orderQuantity <= 2) {
        orderTime = 10;
        return orderTime;

    } else if (orderQuantity < 6) {
        orderTime = 15;
        return orderTime;

    } else {
        orderTime = 20;
        return orderTime;
    }
}

//Welcome message 
const firstMessage = document.querySelector('.welcome'); 
const welcomeMessage = `Hey! Happy to serve your pizza!`;
firstMessage.innerHTML = `<div>${welcomeMessage}</div>`
console.log(welcomeMessage);

//Ask what pizza they would like to order 
const askPizzas = () => {
    const orderName = `On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}. Choose which pizza you want.`
    document.getElementById("pizzaName").innerHTML = orderName;
  }
  askPizzas()

//Ask how many pizzas they would like to order 
const askNumber = () => {
    const orderQuantity = `How many Pizzas do you want?`;
    document.getElementById("pizzaQuantity").innerHTML = orderQuantity;
  }
askNumber();

console.log(askPizzas);

const getOrderName = () => {
    return document.getElementById('pizzaNameInput').value;
};

const getOrderQuantity = () => {
    return document.getElementById('pizzaQuantityInput').value;
};

const handleOrder = (event) => {
  event.preventDefault();
  const orderName = getOrderName();
  const orderQuantity = getOrderQuantity();
  const isValidOrder = validateOrderName(orderName);
  if (isValidOrder === true) {
    const isTotalCost = calculateTotalCost(orderQuantity, pizzaPrice);
    const isOrderTime = calculateCookingTime(orderQuantity);
    const finalOrderMessage = `Great, I'll get started on your ${orderName} right away, it will cost ${isTotalCost} kr. The pizzas will take ${isOrderTime} minutes.`;
    document.getElementById("finalOrderMessage").innerHTML = finalOrderMessage;
  } else {
    return false;
  }
};

