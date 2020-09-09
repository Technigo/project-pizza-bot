
// *** declairing variables
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80;

// *** Function 1 - Order Name 
    const validateOrderName = (order) => {
        if (order === vegetarian || order === hawaiian || order === pepperoni) {
          return true;
        } else {
          return false;
        }
      };

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



alert(
    `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
  );

const orderName = prompt(
    "Enter the name of the pizza you want to order today."
  );

if (validateOrderName(orderName) === true) {
  const orderQuantity = +prompt(`How many of ${orderName} do you want?`);
  ///
  const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);
  const cookingTime = calculateCookingTime(orderQuantity);

  document.getElementById("orderSummery").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`;
  ///
} else {
  alert('Select a pizza from the menu');
}




/// How to create a progress bar: https://www.w3schools.com/howto/howto_js_progressbar.asp
/// Design progress bar: https://medium.com/@CanvasFlip/best-practices-in-designing-awesome-progress-bars-e051bef10c28 & https://codemyui.com/place-order-progress-bar-animation-steps/ & https://uimovement.com/tag/progress-bar/?page=2

/// How to create a countdown timer: https://www.w3schools.com/howto/howto_js_countdown.asp

