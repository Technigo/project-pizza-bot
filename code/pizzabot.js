// Pizza names and price
let pizzaList = [
  {
    name: "Vegetarian Pizza",
    price: 80,
    img:
      "https://www.thehecticvegan.com/wp-content/uploads/2020/08/Vegan-Vegi-Supreme.jpg",
    id: "vegetarian-pizza",
  },
  {
    name: "Hawaiian Pizza",
    price: 80,
    img:
      "https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/quick-hawaiian-pizza-2465265.jpg",
    id: "hawaiian-pizza",
  },
  {
    name: "Pepperoni Pizza",
    price: 80,
    img:
      "https://photos.bigoven.com/recipe/hero/awesome-pepperoni-pizza-7f8696.jpg?h=300&w=300",
    id: "pepperoni-pizza",
  },
  {
    name: "Mexican Pizza",
    price: 90,
    img:
      "https://photos.bigoven.com/recipe/hero/mexican-pizza-main-dish.jpg?h=300&w=300",
    id: "mexican-pizza",
  },
  {
    name: "Quattro Formaggi Pizza",
    price: 85,
    img:
      "https://photos.bigoven.com/recipe/hero/white-pizza-12.jpg?h=300&w=300",
    id: "quattro-formaggi-pizza",
  },
];

const generateMenu = () => {
  for (let i = 0; i < pizzaList.length; i++) {
    document.getElementById(
      "menu-list"
    ).innerHTML += `<label for=${pizzaList[i].id}>
    <input
      type="radio"
      id=${pizzaList[i].id}
      name="pizza"
      value=${pizzaList[i].id}
    />${pizzaList[i].name}</label
  >`;
  }
};
generateMenu();

const orderSubmit = (event) => {
  event.preventDefault();
  let inputList = document.querySelector('input[name="pizza"]:checked');
  document.getElementById("info").style.display = "block";

  if (inputList === null) {
    document.getElementById("info").innerHTML = "Select a pizza from the menu";
  } else {
    const orderId = inputList.value;
    const orderQuantity = document.getElementById("amountPizzaInputId").value;
    let resultObject = pizzaList.find((obj) => {
      return obj.id === orderId;
    });
    const price = resultObject.price;
    const totalCost = calculateTotalCost(orderQuantity, price);
    const cookingTime = calculateCookingTime(orderQuantity);
    const imgPizza = resultObject.img;

    document.getElementById(
      "info"
    ).innerHTML = `Great, I'll get started on your order of ${orderId} right away, it will cost ${totalCost} kr.
      The pizza(s) will take ${cookingTime} minutes.`;
    document.getElementById("info").innerHTML += `<img src="${imgPizza}">`;
  }
};

const calculateTotalCost = (orderQuantity, price) => {
  return orderQuantity * price;
};

const calculateCookingTime = (orderQuantity) => {
  if (orderQuantity == 1 || orderQuantity == 2) {
    return 10;
  } else if (orderQuantity > 2 && orderQuantity < 6) {
    return 15;
  } else {
    return 20;
  }
};
