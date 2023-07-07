const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Chairs",
    price: "200",
    colors: [
      {
        code: "greyk",
        img: "./img/chairs 2.jpg",
      },
      {
        code: "darkblue",
        img: "./img/freezer 6.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Freezer",
    price: 500,
    colors: [
      {
        code: "lightgray",
        img: "./img/freezer 6.jpg",
      },
      {
        code: "blue",
        img: "./img/iphone.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Iphone",
    price: 600,
    colors: [
      {
        code: "lightgray",
        img: "./img/iphone.jpg",
      },
      {
        code: "green",
        img: "./img/iphone.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "TV",
    price: 150,
    colors: [
      {
        code: "black",
        img: "./img/tv.jpg",
      },
      {
        code: "lightgray",
        img: "./img/tv.jp",
      },
    ],
  },
  {
    id: 5,
    title: "Car",
    price: 1500,
    colors: [
      {
        code: "gray",
        img: "./img/car 3.jpeg",
      },
      {
        code: "black",
        img: "./img/car 3.jpeg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
