const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//main function that calls itself
const validateOrderName = () => {
  alert(
    `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
  );

  let orderName = prompt(
    "Enter the name of the pizza you want to order today.. "
  );

  //main conditional statement
  if (
    orderName === "vegetarian" ||
    orderName === "hawaiian" ||
    orderName === "pepperoni"
  ) {
    //defining orderQuantity
    let orderQuantity = prompt(`How many of ${orderName} do you want?`);

    //function cooking time
    let cookingTime;
    const cookingTimeFunction = (orderQuantity) => {
      if (orderQuantity == 1 || orderQuantity == 2) {
        cookingTime = 10;
      } else if (orderQuantity > 2 && orderQuantity < 6) {
        cookingTime = 15;
      } else if (orderQuantity >= 6) {
        cookingTime = 20;
      } else {
        alert("Choose a valid number please");
      }
    };

    // defining totalCost
    let totalCost = orderQuantity * pizzaPrice;

    cookingTimeFunction(orderQuantity);
    // function final alert
    const finalAlert = () => {
      alert(
        ` Great! I'll get started on your ${orderName} right away!, it will cost ${totalCost} kr. The pizzas will take ${cookingTime} minutes`
      );
    };

    // totalCost;
    //cookingTimeFunction(orderQuantity);
    finalAlert();
  } else {
    alert("Order something from the menu");
    validateOrderName();
  }
};

validateOrderName();
