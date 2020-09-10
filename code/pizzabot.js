const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
let orderName = "Pizza";


const pizzaPrice = 80


console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);

const pizzaBotText = document.getElementById('pizzaBotText');
//Put your Javscript code here:

const startOrdering = () => {
  pizzaBotText.innerHTML = `On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`;

  document.getElementById("startBtn").style.display = "none";

  document.getElementById("pizzaContainer").style.display = "block";
    
}


const choosePizza = (pizzaName) => {
    document.getElementById("pizzaContainer").style.display = "none";

    pizzaBotText.innerHTML = `How many of ${pizzaName} do you want?`;
    orderName = pizzaName;

}


const calculateCookingTime = () => {
    const quantity = document.getElementById("quantity").value;

    if (quantity <= 2 ) {
        return 10;
    } else if (quantity < 6) {
        return 15;
     } else {
         return 20;
     };
};

const calculateTotalCost = () => {
    const quantity = document.getElementById("quantity").value;
    return pizzaPrice * quantity;
};


const orderSummary = () => {

    pizzaBotText.innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${calculateTotalCost()}kr. The pizza(s) will take ${calculateCookingTime()} minutes.`;
}






/*
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

const orderName = prompt("Enter the name of the pizza you want to order today.");

let orderQuantity ;

/*let validateOrderName = (orderName) => {
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
        return true;
    }    else {
        return false;
    }

};*/
/*
const validateOrderName = (pizzaName) => {
    if ((pizzaName === hawaiian) || (pizzaName === pepperoni ) || (pizzaName === vegetarian)) {
    orderQuantity = prompt(`How many of ${orderName} do you want?`);
}   else {
    alert("Select a pizza from the menu"); 
    
}

}

validateOrderName(orderName);


const calculateTotalCost = (num1, num2) => {
    return num1 * num2;
}

const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);



const calculateCookingTime = (quantity) => {

    if (quantity <= 2) {
        return 10;
    } else if (quantity > 2 && quantity < 6) {
        return 15;
    } else {
        return 20;
    };
}

let cookingTime = calculateCookingTime(orderQuantity); 

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal}kr. The pizza(s) will take ${cookingTime} minutes.`);

/*

if (orderName === vegetarian ) {
    orderQuantity = prompt(`How many of ${orderName} do you want?`);

} else if (orderName === hawaiian) {
    orderQuantity = prompt(`How many of ${orderName} do you want?`);

} else if (orderName === pepperoni) {
    orderQuantity = prompt(`How many of ${orderName} do you want?`);
} else {
    alert("Select a pizza from the menu"); 
    orderName = prompt("Enter the name of the pizza you want to order today.");
};

let cookingTime; 

if (orderQuantity <= 2) {
    cookingTime = 10;
} else if (orderQuantity > 2 && orderQuantity < 6) {
    cookingTime = 15;
} else {
    cookingTime = 20;
};

const orderTotal = orderQuantity * pizzaPrice;
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal}kr. The pizza(s) will take ${cookingTime} minutes.`);

*/