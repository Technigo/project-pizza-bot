const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

const submitForm = document.getElementById("form-action");

document.getElementById("welcomeMessage").innerHTML=(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

/*A function that checks if userinput-choice is on menu. Returns true or false. The argument 
is the input from the form in html and is passed as a value to the parameter "chosenPizza" in the js function. 
Also uses the toLowerCase method to allow for users using capitals and lower case. Stores the true
value in orderName. Is checked in if-statement: if true a particular code is run. If false, another code is run. ????*/ 
const validateOrderName = (chosenPizza) => {
   if (chosenPizza.toLowerCase() === vegetarian.toLowerCase() || chosenPizza.toLowerCase() === pepperoni.toLowerCase() || chosenPizza.toLowerCase() === hawaiian.toLowerCase()) {
      return true;
   } else {
      return false;
   }
};

//Function that provides us a totalprice of order by calculating price and number of pizzas. Will run of if-statement is true.
const calculateTotalCost = (pizzaPrice, orderQuantity) => {
   orderTotal = (pizzaPrice * orderQuantity);
   return orderTotal;
}

//Function that provdies the total cooking time depending on number of pizzas. Will run if if-statement is true.
const calculateCookingTime = (quantity) => {
   if (quantity <= 2) {
      return 10; 
   } else if (quantity > 2 && quantity <= 5) {
      return 15;
   } else {
      return 20;
   }
};

document.getElementById("choosePizzaText").innerHTML=("What pizza do you want to order today?");
   
//Can not solve this issue. Method asking for user input. Connecting the above getElementById with this (orderName). Not working since orderName is defined inside of function. 
//document.getElementById("amountsOfPizza").innerHTML=(`How many of ${orderName} do you want?`);

//Function that runs code when user clicks submit. Connects the values from the html to javascript and outputs in browser.
const submitOrder= (event) => {
   //Prevents the page from being refreshed when the form is submitted.
   event.preventDefault(); 
   
   let orderName = document.getElementById("pizzaSort").value;

   /*Stores a true or false value in a variable called pizzaIsOnMenu. The value will now be possible to access outside 
   the function validateOrderName when running the if-statement below. orderName refers to user input from form. That value is passed to the function validateOrderName. The function checks true or false. That value is then stored in the variable let isPizzaOnMenu.*/
   let pizzaIsOnMenu = validateOrderName(orderName);

   //If-statement that runs one code if true, and another if false. Uses declared functions that are stored in new variables.
   if (pizzaIsOnMenu === true) {

   let orderQuantity = document.getElementById("pizzaAmount").value;

   let totalPrice = calculateTotalCost(orderQuantity, pizzaPrice);

   let cookingTime = calculateCookingTime(orderQuantity);

   //Calls the orderName, the totalPrice and cookingTime in order to summarize order and output in browser.
   document.getElementById("orderSummary").innerHTML = (`Great, I'll get started on your ${orderName} right away, it will cost ${totalPrice} kr. The pizza(s) will take ${cookingTime} minutes.`); 
   } else {
   document.getElementById("orderSummary").innerHTML = ("Sorry, you have to order someting off the menu.");
}
};

//A variable holding the value from the form. When user submits input, the javascript in the submitOrder function is excuted. 
submitForm.onsubmit=submitOrder;