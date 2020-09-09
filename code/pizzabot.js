const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)

const orderName = prompt(`Enter the name of the pizza you want to order today`)
// Om användaren skriver något annat än "Hawaiian pizza, Pepperoni pizza, eller Vegetarian pizza, så ska datorn säga "Vi har tyvärr inte den pizzan".

// ===== EXAMPLE FROM THE LABS =======

const orderCheck = (orderName) => {
  if (orderName === "Vegetarian Pizza" || "Pepperoni Pizza" || "Hawaiian Pizza") {

    const orderQuantity = prompt(`How many of ${orderName} do you want?`);
    console.log(`Number of pizzas: ` + orderQuantity);
    
    const orderTotal = pizzaPrice * orderQuantity
    console.log(`Totala priset blir ` + orderTotal)

    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} Swedish Kronor.`)

  } else {
    console.log("Sorry we don't have that pizza!");  
  }
};



orderCheck(orderName);


 
// ===== END OF EXAMPLE FROM THE LABS =======


// ## **Iteration 4 - Finalize the order**

// Calculate the total price of the order using the `orderQuantity` and `pizzaPrice` variables and store it in a variable called `orderTotal`. Use an alert to tell the user: `Great, I'll get started on your X right away, it will cost Y kr` (where X should be replaced by the `orderName` variable and Y should be replaced by the `orderTotal` variable).

// For example, if I ordered 3 Hawaiian pizzas, the message should read: "Great, I'll get started on your Hawaiian Pizza(s) right away, it will cost 240 kr"


// Är det här en funktion? Eller bara en variabel med andra variabler?


// ## **Iteration 5 - Add conditionals**
// We want you to add conditionals statements (if-statements) to your program to improve it.


