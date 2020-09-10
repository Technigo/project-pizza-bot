console.log('Is this working?');

const vegetarian = "Vegetarian"
console.log(vegetarian);

const hawaiian = "Hawaiian"
console.log(hawaiian);

const pepperoni = "Pepperoni"
console.log(pepperoni);

const pizzaPrice = 80;
console.log(pizzaPrice);

//Put your Javscript code here:


// second iteration
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)


// fifth iteration

const orderName = prompt('Enter the name of the pizza you want to order today.');
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) { 
        var orderQuantity = prompt("How many " + orderName + " pizzas do you want?");  
    } else {
        alert("Select a pizza from the menu")
    }

    //alert("Great, I'll get started on your " + orderName + " pizza(s) right away, it will cost " + orderTotal +" kr.");

    const orderTotal = orderQuantity * pizzaPrice;

    const cookingTime = () => {
        if (orderQuantity === 1 || orderQuantity === 2) return "10 minutes"
        else if (orderQuantity === 3 || orderQuantity === 4 || orderQuantity === 5 ) return "15 minutes"
        else return "20 minutes"
    }

// fourth iteration

alert("Great, I'll get started on your " + orderName + " pizza(s) right away, it will cost " + orderTotal +" kr. The pizzas will take " + cookingTime() + "")





