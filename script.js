function runPizza() {
  const vegetarian = "Vegetarian Pizza"
  const hawaiian = "Hawaiian Pizza"
  const pepperoni = "Pepperoni Pizza"

  const pizzaPrice = 80

  //Put your Javscript code here:
  // functions
  function checkOrder (name){
    const type = name 
    let status = true
    if (name === pepperoni || name === hawaiian || name === vegetarian){
      alert("good choice")
      status = true
    } 
    else{
      alert("sorry try again")
      status = false
    } 
    return status
    }
  function cost (num, pricr){
    const quant = num
    const price = pricr
    const tot = quant*price
    return tot
    }
  function cookingTime(num){
      const quant = num
      let time = 0
      if (orderQuantity>5) {
        time = 20
        //  block of code to be executed if condition1 is true
      } else if (orderQuantity>2) {
        time = 15
        //  block of code to be executed if the condition1 is false and condition2 is true
      } else if (orderQuantity>0) {
        time = 10
        //  block of code to be executed if the condition1 is false and condition2 is true
      }
    
      else {
        //  block of code to be executed if the condition1 is false and condition2 is false
        alert("opps something wnet wrong");}
        return time
    }


  console.log(vegetarian);
  console.log(hawaiian);
  console.log(pepperoni);
  // Greeting
  //alert("hey happy to serve your pizza on our menu we have "+ vegetarian+" "+ hawaiian+" " +pepperoni +".")
  //Order:
  const orderName = document.getElementById('pType').value
  const orderQuantity = document.getElementById('pNum').value


  // What kind
  //let orderName = prompt("Enter the name of the pizza you want to order today.");
  const bol = checkOrder(orderName);
if (bol === false){
  return
} 


  // how many
  //let orderQuantity = prompt("How many of "+orderName+" do you want?");
  let orderTotal = cost(orderQuantity,pizzaPrice);
  console.log(orderTotal);
  //Cost:
  let cookTime = cookingTime(orderQuantity);
  console.log(cookTime);
  const sent = "You ordered "+orderQuantity+" "+orderName+ " it will take "+cookTime+ " minuts and set you back "+orderTotal+" kr.";
  document.getElementById('word1').innerHTML = sent
}


document.getElementById('button1').onclick = runPizza;
//document.getElementById("demo").innerHTML = y;

 
