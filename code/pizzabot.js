const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

let orderQuantity = document.getElementById('pizzaNumber').defaultvalue;

let orderTotal = 0

let time = 0;

let orderName = ""

//Put your Javscript code here:

console.log(vegetarian, hawaiian, pepperoni, pizzaPrice);

/*alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`)*/

/*let orderName = prompt('Enter the name of the pizza you want to order today.');

if (orderName === vegetarian || orderName === hawaiian || orderName=== pepperoni){
   orderQuantity = prompt(`How many of ${orderName} do you want?`);

  orderTotal = (orderQuantity * pizzaPrice);
  
  if(orderQuantity <=2 ){
    time = 10;
  }else if (orderQuantity <=5 ){
    time = 15;
  }else if (orderQuantity >=6){
    time = 20;
  };

   alert(`Great, I'll get started on your ${orderName}s right away, it will cost ${orderTotal}kr. The pizzas will take ${time} minutes.`);





  } else{
 alert('Select a pizza from the menu')
};*/

const checkOrderName = () => {
  orderName = document.getElementById('pizzaChoice').value.toLowerCase();
  if (orderName === vegetarian.toLowerCase() || orderName === hawaiian.toLowerCase() || orderName === pepperoni.toLowerCase()) {
    return orderName;
  } else {
    return null

  }
}

const confirmOrderName = () => {
  checkOrderName()
  if (checkOrderName() === null) {
    document.getElementById('pizzaType').innerHTML = '';
    alert('Please order an item from our menu')
  } else {
    document.getElementById('pizzaType').innerHTML = checkOrderName();
  }
}

document.getElementById('orderConfirm').onclick = confirmOrderName;

const pizzaNumber = () => {
  orderQuantity = document.getElementById('pizzaNumber').value;
  if (checkOrderName() !== null) {
    document.getElementById('pizzaAmount').innerHTML = orderQuantity

    document.getElementById('pizzaCost').innerHTML = cost(orderQuantity);
  } else {
    alert('Please select a pizza first.')
    document.getElementById('pizzaNumber').value = 1;
  }
}
document.getElementById('pizzaNumber').onchange = pizzaNumber;



const cost = (orderQuantity) => {
  return `${orderQuantity * pizzaPrice} kr`
}



const totalCost = (orderQuantity) => {
  if (document.getElementById('delivery').checked) {
    return `${orderQuantity * pizzaPrice + 100} kr`;
  } else {
    return `${orderQuantity * pizzaPrice} kr`
  }
}

const cookingTime = () => {
  if (orderQuantity <= 2) {
    return 5;
  } else if (orderQuantity <= 5) {
    return 10;
  } else if (orderQuantity >= 6) {
    return 15;
  }
}



const finalMessage = () => {
  if (checkOrderName() === null) {
    document.getElementById('pizzaWait').innerHTML = '';
  } else if (document.getElementById('pickUp').checked === false && document.getElementById('delivery').checked === false) {
    alert('Please select a collection option.')
  } else {
    document.getElementById('pizzaWait').innerHTML = `Thank you for ordering. Your ${checkOrderName()}s will be ready in ${cookingTime()} minutes. The total cost is ${totalCost(orderQuantity)}.`
  }
}

document.getElementById('pizzaConfirm').onclick = finalMessage

const menu = () => {
  if (document.getElementById('btn').innerHTML === '➕') {
    document.getElementById('btn').innerHTML = '➖';
    document.getElementById('menuHeader').classList.toggle('clicked')
  } else {
    document.getElementById('btn').innerHTML = '➕'
    document.getElementById('menuHeader').classList.toggle('clicked')
  }
}
document.getElementById('btn').onclick = menu
