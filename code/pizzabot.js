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


// Greeting the user
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)


// Function for getting input from user and changing the input to lower cases. Plus if conditions.

const orderName = prompt('Enter the name of the pizza you want to order today.');
    if (orderName.toLowerCase() === vegetarian.toLowerCase() || orderName.toLowerCase() === hawaiian.toLowerCase() || orderName.toLowerCase() === pepperoni.toLowerCase()) { 

// Prompt Function to save input from user in a variable 
        var orderQuantity = prompt(`How many ${orderName} pizzas do you want?`);  

// Variable to calculate total price
        const orderTotal = orderQuantity * pizzaPrice;

// Function to calculate cooking time and its alert 
        const cookingTime = () => { 
            if(orderQuantity<2) return 10  
            if(orderQuantity>=2 && orderQuantity<=5) return 15
            else return 20
        }
        alert(`Great, I'll get started on your ${orderName} pizza(s) right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime()}`)
    } else {
        alert("Select a pizza from the menu")
    }





