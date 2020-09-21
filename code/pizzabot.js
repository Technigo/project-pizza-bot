const vegetarian = 'vegetarian';
const hawaiian = 'hawaiian';
const pepperoni = 'pepperoni';
const capricciosa = 'capricciosa';
const margherita = 'margherita';
const pizzaPrice = 80;

/* FUNCTIONS */

/* Calculate the cost of order */
const calculateTotalCost = (orderQuantity, pizzaPrice) => {
  const orderTotal = orderQuantity * pizzaPrice;
  return orderTotal;
};

/* Calculate cooking time */
const calculateCookingTime = (orderQuantity) => {
  let cookingTime;
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    cookingTime = 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    cookingTime = 15;
  } else if (orderQuantity >= 6) {
    cookingTime = 20;
  } else {
    cookingTime = 0;
  }
  return cookingTime;
};

/* Place order. This function is called when the user presses the "Place Order Button." */
const placeOrder = () => {
  const name = capitalizeFirstLetter(document.getElementById('name').value);
  const orderName = document.getElementById('pizza').value;
  const orderQuantity = document.getElementById('pizza-slider').value;
  const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);
  let cookingTime = calculateCookingTime(orderQuantity);
  const messageText = `Great ${name}, I'll get started on your ${orderName} 
    right away. It will cost ${orderTotal} kr. The pizza(s) will take 
    ${cookingTime} minutes.`;
  document.getElementById('message').innerHTML = messageText;
  updateCountdown(cookingTime);
  toggleDisableForm();
  togglePizzaImage(orderName);
};

/* Change range output so the user can see the current value of the range slider */
const changeRangeOutput = () => {
  let rangeValue = document.getElementById('pizza-slider').value;
  document.getElementById('number-output').innerHTML = rangeValue;
};

/* Toggle pizza image, when order is placed. */
const togglePizzaImage = (orderName) => {
  switch (orderName) {
    case vegetarian:
      document.getElementById('pizza-image').classList.toggle(vegetarian);
      break;
    case hawaiian:
      document.getElementById('pizza-image').classList.toggle(hawaiian);
      break;
    case pepperoni:
      document.getElementById('pizza-image').classList.toggle(pepperoni);
      break;
    case capricciosa:
      document.getElementById('pizza-image').classList.toggle(capricciosa);
      break;
    case margherita:
      document.getElementById('pizza-image').classList.toggle(margherita);
      break;
  }
};

/* Hides the order form window and shows the order confirmation window */
const toggleDisableForm = () => {
  document.getElementById('flex-container').classList.toggle('visible');
  document.getElementById('flex-container').classList.toggle('invisible');
  document.getElementById('order-confirmation').classList.toggle('invisible');
  document.getElementById('order-confirmation').classList.toggle('visible');
};

/* This function is called when the user presses the "Continue" button. 
It calls the validate-function for validating the input, and then the toggleWindow 
to show the next window. */

const clickNextButton = (windowId) => {
  if (validateInput(windowId)) {
    let windowElement = document.getElementById(windowId);
    let nextWindow = windowElement.nextElementSibling.id;
    toggleWindow(windowId, nextWindow);
  } else {
    alert('Please fill in a value');
  }
};

/*Hides the current window and displays the next window*/
const toggleWindow = (windowId, nextWindow) => {
  document.getElementById(windowId).classList.toggle('visible');
  document.getElementById(windowId).classList.toggle('invisible');
  document.getElementById(nextWindow).classList.toggle('visible');
  document.getElementById(nextWindow).classList.toggle('invisible');
};

/*  Checks which window that is passed into the function, and depending on the window-ID, validates the input-field in that window.
    If the input value is valid:
    Calls setGreetingName, setOrderaName or setOrderSummary to set the info that should be displayed for the user in the next window.
    The function calls the progress bar functions to increase and display the new value of progress. 

*/
const validateInput = (windowId) => {
  let isValid;
  if (windowId === 'chatWindow1') {
    let inputToCheck = document.getElementById('name').value;
    if (inputToCheck === '') {
      isValid = false;
    } else {
      setGreetingName(inputToCheck);
      setProgressBarValue();
      setProgressBarLabel();
      isValid = true;
    }
  } else if (windowId === 'chatWindow2') {
    let inputToCheck = document.getElementById('pizza').value;
    if (inputToCheck === '') {
      isValid = false;
    } else {
      setOrderName(inputToCheck);
      setProgressBarValue();
      setProgressBarLabel();
      isValid = true;
    }
  } else if (windowId === 'chatWindow3') {
    let inputToCheck = document.getElementById('pizza-slider').value;
    if (inputToCheck === '0') {
      isValid = false;
    } else {
      setOrderSummary();
      setProgressBarValue();
      setProgressBarLabel();
      isValid = true;
    }
  } else {
    isValid = false;
  }
  return isValid;
};

/* Increases the progressbar-value by one */
const setProgressBarValue = () => {
  document.getElementById('progress-bar').value += 1;
};

/* Displays the value of the progressbar in a label */
const setProgressBarLabel = () => {
  const progressBarValue = document.getElementById('progress-bar').value;
  document.getElementById(
    'progress-bar-label'
  ).innerHTML = `${progressBarValue} out of 3 answered`;
};

/* Is called to Capitalize the first letter of the name typed in by the user */
const capitalizeFirstLetter = (inputToCheck) => {
  const inputToCapitalize =
    inputToCheck[0].toUpperCase() + inputToCheck.slice(1);
  return inputToCapitalize;
};

/* Receives the value of the input field and displays it in a message */
const setGreetingName = (inputToCheck) => {
  const inputName = capitalizeFirstLetter(inputToCheck);
  document.getElementById('order').innerHTML = `Great ${inputName}! On our menu
   we have ${vegetarian}, ${hawaiian}, ${pepperoni}, ${capricciosa} and 
   ${margherita} pizza. Choose the pizza you want to order.`;
};

/* Receives the value of the select field and displays it in a message */
const setOrderName = (inputToCheck) => {
  const inputOrderName = capitalizeFirstLetter(inputToCheck);
  document.getElementById('order-name').innerHTML = `${inputOrderName} pizza, 
    great choice! How many do you want to order?`;
};

/* Is called by the last window to summarize all the input fields and put them in a message */
const setOrderSummary = () => {
  const name = capitalizeFirstLetter(document.getElementById('name').value);
  const orderName = document.getElementById('pizza').value;
  const orderQuantity = document.getElementById('pizza-slider').value;
  document.getElementById('summary').innerHTML = `${name}, you want to order
   ${orderQuantity} ${orderName} pizza(s). What a feast!`;
};

/* Is called to display a countdown timer on the screen. */
const updateCountdown = (cookingTime) => {
  let counter = cookingTime * 60;
  const interval = setInterval(() => {
    const countdown = document.getElementById('countdown');
    const minutes = Math.floor(counter / 60);
    let seconds = counter % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    countdown.innerHTML = `${minutes}: ${seconds}`;
    counter--;
    counter < 0 ? clearInterval(interval) : counter;
    if (counter <= 0) {
      document.getElementById('countdown').innerHTML = 'Pizza time!';
    }
  }, 1000);
};

/* OLD FUNCTIONS . These are left here from the blue/red level for you to track our progress. */

/* Validate input
This function was called when the user press Place order. 
Gets all the relevant fields from the order form and validates them. 
This was used in the red level. 
*/
/*const validateInput = () =>{
    const inputValues = document.getElementById("order-form").elements; 
    let numberOfValidInput =0;
    for(i=0;i<inputValues.length;i++)
    {
      if(inputValues[i].value != "" && inputValues[i].value != "0" && inputValues[i].type != "output")
      {
        numberOfValidInput++;
      }
      else console.log("no value in array");
    }
    console.log("Number of valid input after loop:" +numberOfValidInput);
    return(numberOfValidInput > 2 ? true : false);
}
  */

/* Check pizza name 
This function was used when the pizza-name was retreived from a prompt. (Blue level)
Not necessary now when we have the pizza names in a select-list.
*/
/* const validateOrderName = (orderName) => {
  if (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  ) {
    return true;
  } else return false;
};*/

/* Start of program before turning into form */
/*alert(`Hello! Happy to serve you pizza. On our menu we have ${vegetarian}, ${pepperoni}, ${hawaiian}`);
const orderName = prompt("Enter the name of the pizza you want to order");
if (validateOrderName(orderName)===true) {
  const orderQuantity = parseInt(prompt(`How many of ${orderName} do you want?`), 10);
  const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);
  let cookingTime = calculateCookingTime(orderQuantity);
  const messageText = (`Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes.`)
  document.getElementById("message").innerHTML = messageText;
}
 else {
  alert("Select a pizza from the menu");
}
*/
