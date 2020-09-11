//1) Defenition of variables 

const vegetarian = "Vegetarian"
const hawaiian = "Hawaiian"
const pepperoni = "Pepperoni"

const pizzaPrice = 80

const orderName = document.getElementById('pizzaNameInput').value;
const orderQuantity = document.getElementById('pizzaQuantityInput').value;

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
    const orderName = (`On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}. Choose which pizza you want.`)
    document.getElementById("pizzaName").innerHTML = orderName;
  }
  askPizzas()

//Ask how many pizzas they would like to order 
const askNumber = () => {
    const orderQuantity = (`How many Pizzas do you want?`)
    document.getElementById("pizzaQuantity").innerHTML = orderQuantity;
  }
  askNumber()

  
    // Get the pizza name from the form input
    

  const isValidOrder = validateOrderName(orderName);
//const askPizzas = document.querySelector('.pizzaName'); 
//const orderName = `On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}. Choose which pizza you want.`;
//askPizzas.innerHTML = `${orderName}`

console.log(askPizzas);

//const orderName = prompt('Enter the name of the pizza you want to order today.');
   time = '20 min'
      }
    }
}
    }
      //let final = `You have ordered ${numberPizza} ${orderInput} and it will cost ${totalprice} SEK 
      //and it will take ${time}!`
      //document.getElementById("orderComplete").innerHTML = final
        //} else {
      //alert(`We don't serve that. We have ${A}, ${B}, ${C}, which one would you like?`)
      //return false
     //