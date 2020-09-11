const vegetarian = "vegetarian";
const hawaiian = "hawaiian";
const pepperoni = "pepperoni";
const capricciosa = "capricciosa";
const margherita = "margherita";
const pizzaPrice = 80;

//Put your Javscript code here:
/*Functions*/

/*Check pizza name*/
const validateOrderName = (orderName) => {
  if (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  ) {
    return true;
  } else return false;
};

/*Calculate the cost of order*/
const calculateTotalCost = (orderQuantity, pizzaPrice) => {
  const orderTotal = orderQuantity * pizzaPrice;
  return orderTotal;
};

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

/* Start of program before turning into form*/
//alert(`Hello! Happy to serve you pizza. On our menu we have ${vegetarian}, ${pepperoni}, ${hawaiian}`);

//const orderName = prompt("Enter the name of the pizza you want to order");

/*
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

/*New functions for form-input*/
const placeOrder = () => {
  console.log("placeOrder function");

  // if (validateInput()) {

  const name = document.getElementById("name").value;
  const orderName = document.getElementById("pizza").value;
  const orderQuantity = document.getElementById("pizza-slider").value;
  console.log(name, orderName, orderQuantity);

  const orderTotal = calculateTotalCost(orderQuantity, pizzaPrice);
  let cookingTime = calculateCookingTime(orderQuantity);
  const messageText = `Great ${name}, I'll get started on your ${orderName} right away.<br> It will cost ${orderTotal} kr. <br>The pizza(s) will take ${cookingTime} minutes.`;
  document.getElementById("message").innerHTML = messageText;

  toggleDisableForm();
  togglePizzaImage(orderName);
  return false;
  // } else alert("Please fill in the form")
};

/*Validate input kan användas som printOrderSummary, hämta värdena och skriv ut dem i ett p-element.
const validateInput = () =>{
    console.log("validateInput");
    const inputValues = document.getElementById("order-form").elements; 

    let numberOfValidInput =0;
    for(i=0;i<inputValues.length;i++)
    {
        //Vi vill inte kolla på värdet i output-taggen, därför exkluderar vi den. if-satsen körs ej för den
        //och därmed kommer räknaren inte att räknas upp.
        if(inputValues[i].value != "" && inputValues[i].value != "0" && inputValues[i].type != "output")
        {
            numberOfValidInput++;
            console.log("value of element:" + inputValues[i].value);
            console.log(inputValues[i].type + " type of element");
            console.log("numberOfValidInput= "+numberOfValidInput);
        }
        else console.log("no value in array");
    }
    console.log("Number of valid input after loop:" +numberOfValidInput);
    //returera true om valid = 3 annars false
    return(numberOfValidInput > 2 ? true : false);
}
  */

/*changeRangeOutput*/
const changeRangeOutput = () => {
  let rangeValue = document.getElementById("pizza-slider").value;
  document.getElementById("number-output").innerHTML = rangeValue;
};

/*toggle pizza image */
const togglePizzaImage = (orderName) => {
  //console.log(orderName);
  //console.log(vegetarian +" constant");
  switch (orderName) {
    case vegetarian:
      document.getElementById("pizza-image").classList.toggle(vegetarian);
      break;
    case hawaiian:
      document.getElementById("pizza-image").classList.toggle(hawaiian);
      break;
    case pepperoni:
      document.getElementById("pizza-image").classList.toggle(pepperoni);
      break;
    case capricciosa:
      document.getElementById("pizza-image").classList.toggle(capricciosa);
      break;
    case margherita:
      document.getElementById("pizza-image").classList.toggle(margherita);
      break;
  }
};

const toggleDisableForm = () => {
  document.getElementById("order-form").classList.toggle("visible");
  document.getElementById("order-form").classList.toggle("invisible");
  document.getElementById("order-confirmation").classList.toggle("invisible");
  document.getElementById("order-confirmation").classList.toggle("visible");
};

const clickNextButton = (windowId) => {
  //här ska vi anropa validate input. om false ska vi ej gömma rutan
  if (validateInput(windowId)) {
    console.log(windowId + " the window id");
    let windowElement = document.getElementById(windowId);
    let nextWindow = windowElement.nextElementSibling.id;
    console.log(nextWindow + " next window id");
    toggleWindow(windowId, nextWindow);
  } else {
    alert("Please fill in a value");
  }
};

const toggleWindow = (windowId, nextWindow) => {
  document.getElementById(windowId).classList.toggle("visible");
  document.getElementById(windowId).classList.toggle("invisible");
  document.getElementById(nextWindow).classList.toggle("visible");
  document.getElementById(nextWindow).classList.toggle("invisible");
};

const validateInput = (windowId) => {
  console.log("validateInput");
  let isValid;

  if (windowId === "chatWindow1") {
    let inputToCheck = document.getElementById("name").value; //inputArray.find(x => x.type === "text");
    console.log(inputToCheck + "inputToCheckvalue");
    if (inputToCheck === "") {
      isValid = false;
      console.log(isValid);
    } else {
      setGreetingName(inputToCheck);
      setProgressBarValue();
      console.log();
      isValid = true;
    }
  } else if (windowId === "chatWindow2") {
    let inputToCheck = document.getElementById("pizza").value;
    console.log(inputToCheck + " inputToCheckvalue");
    if (inputToCheck === "") {
      isValid = false;
      console.log(isValid);
    } else {
      setOrderName(inputToCheck);
      setProgressBarValue();
      isValid = true;
    }
  } else if (windowId === "chatWindow3") {
    let inputToCheck = document.getElementById("pizza-slider").value;
    console.log(inputToCheck + "inputToCheckvalue");
    if (inputToCheck === "0") {
      isValid = false;
      console.log(isValid);
    } else {
      setOrderSummary();
      //anropa set orderSummary P hämta alla värden i formuläret och skriv ut dem
      setProgressBarValue();
      isValid = true;
    }
  } else {
    isValid = false;
  }

  return isValid;
};

const setProgressBarValue = () => {
  document.getElementById("progress-bar").value += 1;
};

const setGreetingName = (inputToCheck) => {
  let inputName = inputToCheck;
  console.log(inputName + " inputName");
  inputName = capitalizeFirstLetter(inputName);
  const greetingText = `Great ${inputName}! On our menu we have ${vegetarian}, ${hawaiian}, ${pepperoni}, ${capricciosa} and ${margherita} pizza. Choose the pizza you want to order.`;
  console.log(greetingText);
  document.getElementById("order").innerHTML = greetingText;
};

const setOrderName = (inputToCheck) => {
  let inputOrderName = inputToCheck;
  console.log(inputOrderName + " inputOrderName");
  inputOrderName = capitalizeFirstLetter(inputOrderName);
  const orderNameText = `${inputOrderName} pizza, great choice! How many do you want to order?`;
  console.log(orderNameText);
  document.getElementById("order-name").innerHTML = orderNameText;
};

const capitalizeFirstLetter = (inputToCheck) => {
  const inputToCapitalize =
    inputToCheck[0].toUpperCase() + inputToCheck.slice(1);
  console.log(inputToCapitalize);
  return inputToCapitalize;
};

const setOrderSummary = () => {
  const inputValues = document.getElementById("order-form");
  console.log(inputValues);
  let text = "";
  let i;
  for (i = 0; i < inputValues.length; i++) {
    text = text + inputValues.elements[i].value;
    console.log(text);
  }
  // let numberOfValidInput = 0;
  // for (i = 0; i < inputValues.length; i++) {
  //   //const name = inputValues[i].value
  //   numberOfValidInput++;
  //   console.log("value of element:" + inputValues[i].value);
  //   console.log(inputValues[i].type + " type of element");
  //   console.log("numberOfValidInput= " + numberOfValidInput);
  // }
};

// var x = document.getElementById("myForm");
// var txt = "";
// var i;
// for (i = 0; i < x.length; i++) {
//   txt = txt + x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = txt;

/*funktion setOrderSummary
använd från validateInput
const inputValues = document.getElementById("order-form").elements;*/

/*Validate input kan användas som printOrderSummary, hämta värdena och skriv ut dem i ett p-element.
const validateInput = () =>{
    console.log("validateInput");
    const inputValues = document.getElementById("order-form").elements; 

    let numberOfValidInput =0;
    for(i=0;i<inputValues.length;i++)
    {
        //Vi vill inte kolla på värdet i output-taggen, därför exkluderar vi den. if-satsen körs ej för den
        //och därmed kommer räknaren inte att räknas upp.
        if(inputValues[i].value != "" && inputValues[i].value != "0" && inputValues[i].type != "output")
        {
            numberOfValidInput++;
            console.log("value of element:" + inputValues[i].value);
            console.log(inputValues[i].type + " type of element");
            console.log("numberOfValidInput= "+numberOfValidInput);
        }
        else console.log("no value in array");
    }
    console.log("Number of valid input after loop:" +numberOfValidInput);
    //returera true om valid = 3 annars false
    return(numberOfValidInput > 2 ? true : false);
}
  */
