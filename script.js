const pizzaPrice = 80;

console.log(vegetarian, hawaiian, pepperoni, pizzaPrice);

alert(
    `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

let orderName = prompt("Enter the name of the pizza you want to order today.. ");

let orderQuantity = prompt(`How many of ${orderName} do you want?`);
console.log(orderQuantity);

let orderTotal = orderQuantity * pizzaPrice;

console.log(orderTotal);

if ((orderName === "vegetarian", "hawaiian", "pepperoni")) {
    orderQuantity;
} else {
    alert("Order something else");
    return [orderName];
}

let orderQuantity = prompt(`How many of ${orderName} do you want?`);
console.log(orderQuantity);

let orderTotal = orderQuantity * pizzaPrice;
console.log(orderTotal);

alert(
    ` Great! I'll get started on your ${orderName} right away!, it will cost ${orderTotal} kr`
);

if (validateOrderName === true) {
    //orderQuantity
    let orderQuantity = prompt(`How many of ${orderName} do you want?`);
    // function totalCost
    const totalCost = (orderQuantity, pizzaPrice) => {
      return orderQuantity * pizzaPrice;
    };
  
  
  
    const promptAge = () => {
      const orderQuantity = prompt(`How many of ${orderName} do you want?`);
      if (age == 35) {
        alert("You might be Van, proceed to the next step...");
        // Do some next step.
      } else {
        alert("It does not seem like you could be Van... Sorry");
        promptAge();
      }
    };
    //function cookingTime
    // const cookingTimeTotal = (orderQuantity) => {
    // if (orderQuantity === 1 || 2) {
    //   let cookingTime = 10;
    // } else if (orderQuantity > 2 && < 6 ) {
    //   let cookingTime = 15;
    // }
    // else {
    //   let cookingTime = 20;
    // }
    // }
  } else {
    alert("Order something from the menu");
  }
  
  // if (
  //   orderName === "vegetarian" ||
  //   orderName === "hawaiian" ||
  //   orderName === "pepperoni"
  // ) {
  //   let orderQuantity = prompt(`How many of ${orderName} do you want?`);
  //   let orderTotal = orderQuantity * pizzaPrice;
  //   alert(
  //     ` Great! I'll get started on your ${orderName} right away!, it will cost ${orderTotal} kr`
  //   );
  // } else {
  //   alert("Order something else");
  // }
  
  // const orderTime = (orderName) => {
  //   if (orderQuantity === 1 || 2) {
  //     alert("The pizzas will take 10 minutes");
  //   } //(orderQuantity < 2 && > 6 )
  //   else {
  //     alert("The pizzas will take 15 minutes");
  //   }
  // };
  
  // if 1-2 20 minutes
  // 3-5 403min
  
  //alert ordername + orderQuantity + order time  .
  // let orderQuantity = prompt(`How many of ${orderName} do you want?`)
  
  // if (orderName === "vegetarian" || orderName === "hawaiian" || orderName === "pepperoni") {
  
  // }  else {
  //         alert("order something else?");
  
  //   if (orderQuantity === 1 || 2) {
  //     alert("The pizzas will take 10 minutes.");
  //   }
  //     else if (orderQuantity >= 3 && orderQuantity <= 5){
  //       alert("The pizzas will take 15 minutes");
  //     } else{
  //       alert("The pizzas will take 20 minutes.");
  //     }
  //     let orderTotal = orderQuantity * pizzaPrice;
  //     alert(`Great! I'll get started on your ${orderName} right away!, it will cost ${orderTotal} kr` );
  //     }  else {
  //       alert("order something else?");
  //     }
  // if (
  //   orderName === "vegetarian" ||
  //   orderName === "hawaiian" ||
  //   orderName === "pepperoni"
  // ) {
  //   let orderQuantity = prompt(`How many of ${orderName} do you want?`);
  //   if (orderQuantity === 1 || 2) {
  //     alert("The pizzas will take 10 minutes.");
  //   }
  //    else if {(orderQuantity >= 3 && orderQuantity <= 5)
  //     alert("The pizzas will take 15 minutes");
  //    }
  //    else {
  //     alert("The pizzas will take 20 minutes.");
  //    }
  //   let orderTotal = orderQuantity * pizzaPrice;
  //   alert (
  //     ` Great! I'll get started on your ${orderName} right away!, it will cost ${orderTotal} kr`
  //   );
  // }
  //   else
  //   alert("Order something else");
  // }
  
