const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

//Put your Javscript code here:

const orderPizza = () => {
  alert(
    `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`
  );
  const orderName = prompt(
    "Enter the name of the pizza you want to order today."
  );

  const validateOrderName = () => {
    if (
      orderName === vegetarian ||
      orderName === hawaiian ||
      orderName === pepperoni
    ) {
      //checks if orderName is true, if orderName false, go to the last else
      return true;
    } else {
      alert("Choose a pizza that's on the menu");

      return false;
    }
    /*if orderName false, should prompt again, or loop from start,
     */
  };

  if (validateOrderName(orderName)) {
    const orderQuantity = prompt(`How many ${orderName}s do you want?`);
    //then prompts how many pizzas you want
    const orderTotal = orderQuantity * pizzaPrice;
    //calculates the total amount of money

    const calculateCookingTime = () => {
      //checks cooking time after the amount of pizzas
      if (orderQuantity <= 2) {
        alert("The pizzas will take 10 minutes.");
      } else if (orderQuantity < 6) {
        alert("The pizzas will take 15 minutes.");
      } else {
        alert("The pizzas will take 20 minutes.");
      }
    };

    alert(
      `Great I'll get started on your ${orderName}s right away, it will cost ${orderTotal} kr.`
    );
    calculateCookingTime();
    //invokes calculateCookingTime function, shows cooking time
    //confirms pizzaorder and the cost
  } else {
    orderPizza();
  }
};

orderPizza();
//invokes the whole pizza-ordering-function
