/* const vegetarian = document.getElementById('vegetarianPizza')
const hawaiian = document.getElementById('hawaiianPizza')
const pepperoni = document.getElementById('pepperoniPizza') 

-----CODE TO CAPTURE ALL OF OUR CODE AND CONNECT IT TO HTML-----

const handleSubmit = (event) => {
  event.preventDefault();
  ALL THE CODE 
}*/

const vegetarian = "vegetarian pizza";
const hawaiian = "hawaiian pizza";
const pepperoni = "pepperoni pizza";

const pizzaPrice = 80;

//Put your Javscript code here:
console.log(vegetarian, hawaiian, pepperoni);

alert(
  `Hey, happy to serve your pizza! In our menu we have: ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

const validateOrderName = () => {
  let isCorrect = false;
  let orderName = "";
  while (isCorrect === false) {
    orderName = prompt(
      "Enter the name of the pizza you want to order today",
      "Enter Pizza"
    );
    orderName = orderName.toLowerCase();

    isCorrect =
      orderName === vegetarian ||
      orderName === hawaiian ||
      orderName === pepperoni;

    isCorrect
      ? alert(`You have ordered ${orderName}`)
      : alert(`Select a pizza from the menu please`);
  }
  return orderName
};

const validOrderName = validateOrderName();

const orderQuantity = prompt(
  `How many of ${validOrderName} do you want?`,
  `Number of pizza`
);

const calculateCookingTime = (orderQuantity) => {
  if (orderQuantity > 0 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
};
console.log(orderQuantity);

const orderTotal = orderQuantity * pizzaPrice;
alert(
  `Great! I'll get started on your ${validOrderName}, It will cost you ${orderTotal} kr. The pizza(s) will take ${calculateCookingTime()} minutes.`
);
