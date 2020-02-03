const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
console.log(vegetarian, hawaiian, pepperoni, pizzaPrice)

alert(`Hey! Happy to serve you a pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)

// const checkOrderName = () => {
  
// }

const orderName = prompt(`Enter the name of the pizza you want to order today.`);

let orderQuantity;

const checkOrderName = () => {
  if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
    orderQuantity = Number(prompt(`How many of ${orderName} would you like?`));
    return true;
    } else {
    alert(`Your choice, ${orderName}, is not on our menu. Please choose again`);
    return false;
    
  };
}

checkOrderName();


console.log(orderName);




let orderTotal;

const totalCost = () => {
  orderTotal = orderQuantity * pizzaPrice;
  console.log(orderTotal);

};

totalCost();

let ovenTime;

const cookingTime = () => {
  if (orderQuantity < 3) {
    ovenTime = 10;
    return(+10);
  } else if (orderQuantity > 5) {
    ovenTime = 20;
    return(+20);
  } else {
    ovenTime = 15;
    return(+15);
  };

}


cookingTime();

console.log(ovenTime);
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${ovenTime} minutes`);


console.log(orderQuantity);




// 