//Put your Javascript code here:

//Anna: variables with a value a user can choose?????
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

//Anna: variable that allows us to calculate total price.
const pizzaPrice = 80;

//En variabel som hämtar user input från html-formuläret
const submitForm = document.getElementById("form-action");

//Anna: A welcome message in an alert box.
document.getElementById("welcomeMessage").innerHTML=(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

//A variable holding the value from the form. When user submits input, the javascript in the submitOrder function is excuted. 
submitForm.onsubmit=submitOrder;


/*Anna: A function that checks if userinput-choice is on menu. Returns true or false. The argument 
is the prompt-input and is passed as a value to the parameter "chosenPizza" in the function. 
Also uses the toLowerCase method to allow for users using capitals and lower case. Stores the true
value in ????*/
const validateOrderName = (chosenPizza) => {
   if (chosenPizza.toLowerCase() === vegetarian.toLowerCase() || chosenPizza.toLowerCase() === pepperoni.toLowerCase() || chosenPizza.toLowerCase() === "hawaiian".toLowerCase()) {
      return true;
   } else {
      return false;
   }
};


/*Anna: stores the true value in a variable called pizzaIsOnMenu. The value will now be possible to access outside 
the function validateOrderName when running the if statement below. orderName is given the value of pizzaIsOnMenu???*/
//let pizzaIsOnMenu = validateOrderName(orderName);


const calculateTotalCost = (pizzaPrice, orderQuantity) => {
   orderTotal = (pizzaPrice * orderQuantity);
   return orderTotal;
}


const calculateCookingTime = (quantity) => {
   if (quantity <= 2) {
      return 10; 
   } else if (quantity > 2 && quantity <= 5) {
      return 15;
   } else {
      return 20;
   }
};

function submitOrder(event) {
   event.preventDefault(); //Prevents the page from being refreshed when the form is submitted.
   let orderName = document.getElementById("pizzaSort").value;
   let pizzaIsOnMenu = validateOrderName(orderName);
//Anna: Variable asking for user input using the prompt method. 
document.getElementById("choosePizzaText").innerHTML=("Enter the name of the pizza you want to order today.");
//let orderName = document.getElementById("pizzaSort").value;

document.getElementById("amountsOfPizza").innerHTML=(`How many of ${orderName} do you want?`);

   
   if (pizzaIsOnMenu === true) {
   let orderQuantity = document.getElementById("pizzaAmount").value;
   let totalPrice = calculateTotalCost(orderQuantity, pizzaPrice);
   let cookingTime = calculateCookingTime(orderQuantity);
   alert(`Great, I'll get started on your ${orderName} right away, it will cost ${totalPrice} kr. The pizza will take ${cookingTime} minutes.`); 
} else {
   alert("Sorry, you have to order someting off the menu.");
}
};
