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

//validateOrderName() which should take the orderName variable as an argument and return true 
//or false if the pizza is on the menu or not.

let orderName = prompt('Enter the name of the pizza you want to order today.');

const validateOrderName = () => { 
    if (orderName.toLowerCase() === vegetarian.toLowerCase() || orderName.toLowerCase() === hawaiian.toLowerCase() || orderName.toLowerCase() === pepperoni.toLowerCase()) { 
        return true; 
    } else {
        alert("Select a pizza from the menu")
        prompt('Enter the name of the pizza you want to order today.');
        validateOrderName();
    }
   }
   validateOrderName();

   let orderQuantity = prompt(`How many ${orderName} pizzas do you want?`);


   const calculateTotalCost = () => {
    orderTotal = orderQuantity * pizzaPrice;
   };
   calculateTotalCost();

    
const cookingTime = () => {
    if(orderQuantity<2) {
      pizzaTime = "10 minutes.";
    } else if (orderQuantity>=2 && orderQuantity<=5) {
      pizzaTime = "15 minutes.";
      } else {
      pizzaTime = "20 minutes."
    }
  };
 cookingTime();


alert(`Great, I'll get started on your ${orderName} pizza(s) right away, it will cost ${orderTotal} kr. The pizzas will take ${pizzaTime}`)

    




