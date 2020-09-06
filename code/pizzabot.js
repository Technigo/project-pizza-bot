const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
console.log(vegetarian)
console.log(hawaiian)
console.log(pepperoni)

//Greet the customer (Iteration 2)

const orderPizza = () => {
        alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)

        //Ask the customer (Iteration 3)
        const orderName = prompt("Enter the name of the pizza you want to order today: ")
        console.log(orderName)

        if ((orderName == `${vegetarian}`) || (orderName == `${hawaiian}`) || (orderName == `${pepperoni}`)) {

            const orderQuantity = prompt(`How many of ${orderName} do you want?`)
            console.log(orderQuantity)
            //Finalize the order (Iteration 4)
            const orderTotal = orderQuantity * pizzaPrice
            console.log(orderTotal)

            let orderTime = 0;
            if (orderQuantity <= 2) {
                orderTime = 10
                console.log("1-2")
            } else if (orderQuantity >= 3 && orderQuantity <= 5) {
                console.log("3-5") 
                orderTime = 15
           
            } else if (orderQuantity >= 6) {
                console.log("6 och fler") 
                orderTime = 20
            }
        
            alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take ${orderTime} minutes.`)
            
        }
        else{
            alert("Select a pizza from the menu")
            orderPizza()
            }
}
        orderPizza()

        //Add conditonals (Iteration 5)

        //Add functions (Iteration 6)

        //Make it visual (Iteration 7)