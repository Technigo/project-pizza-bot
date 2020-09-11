
// *** declairing variables
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const pizzaPrice = 80;

const pizzaVegImg = document.getElementById("veg");
const pizzaHawImg = document.getElementById("haw");
const pizzaPepImg = document.getElementById("pep");


// !! HIDING THIS PART SINCE IT ONLY WAS PART OF ITERATION 1-7. !!
/*** Function 1 - Order Name 
    const validateOrderName = (order) => {
        if (order === vegetarian || order === hawaiian || order === pepperoni) {
          return true;
        } else {
          return false;
        }
      };
***/

// *** Function 2 - Total Cost
const calculateTotalCost = (quantity, price) => {
  return quantity * price;
}

// *** Function 3 - Cooking Time
const calculateCookingTime = (time) => {
  if (time <= 2) {
    return 10;
  } else if (time >= 3 && time <=5) {
    return 15;
  } else {
    return 20;
  }
}

// *** Function - Submit form

const handleSubmit = (event) => {
  event.preventDefault();
  let userName = document.forms.pizzaForm.userName.value;
  // makes first letter to uppercase and the rest of the mane to lowercase
  userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

  const pizzaType = document.forms.pizzaForm.elements.pizza.value;
  const orderQuantity = document.forms.pizzaForm.numberOfPizzas.value;
  
    const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);
    const cookingTime = calculateCookingTime(orderQuantity);

    // 'ternary operator' (puts the 's for plural number of pizzas)
    const plural = orderQuantity > 1 ? "'s" : "";

    document.getElementById(
      "orderSummery"
    ).innerHTML = `Hello ${userName}! I'll get started on your ${orderQuantity} ${
      pizzaType + plural
    } right away. It will cost ${orderTotal} kr and will take ${cookingTime} minutes.`;
    
    if (pizzaType === "Vegetarian Pizza") {
      pizzaVegImg.setAttribute ("style", "display:block;");
    } else if (pizzaType === "Hawaiian Pizza") {
      pizzaHawImg.setAttribute ("style", "display:block;")
    } else if (pizzaType === "Pepperoni Pizza") {
      pizzaPepImg.setAttribute ("style", "display:block;")
    }
}; 

/* !!  HIDING THIS PART SINCE IT ONLY WAS PART OF ITERATION 1-7 !!
alert(
    `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
  );

const orderName = prompt(
    "Enter the name of the pizza you want to order today."
  );
*/

/* !! HIDING THIS PART SINCE IT ONLY WAS PART OF ITERATION 1-7 !!
if (validateOrderName(orderName) === true) {
  const orderQuantity = +prompt(`How many of ${orderName} do you want?`);
  ///
  const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);
  const cookingTime = calculateCookingTime(orderQuantity);

  document.getElementById("orderSummery").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`;

//} else {
//  alert('Select a pizza from the menu');
}
*/

