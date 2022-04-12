const container = document.querySelector(".Products");

const productInventory = [
  {
    id: 1,
    name: "Galaxy s6 Edge",
    img: "/images/products/1.png",
    stock: 123,
    status: "active",
    price: 1500000,
  },
  {
    id: 2,
    name: "Huawei HD",
    img: "/images/products/2.png",
    stock: 80,
    status: "active",
    price: 9000000,
  },
  {
    id: 3,
    name: "Redmi 8",
    img: "/images/products/3.png",
    stock: 123,
    status: "active",
    price: 700000,
  },
  {
    id: 4,
    name: "Itel youngsters",
    img: "/images/products/4.png",
    stock: 180,
    status: "active",
    price: 357000,
  },
  {
    id: 5,
    name: "Redmi Smart",
    img: "/images/products/5.png",
    stock: 200,
    status: "active",
    price: 400000,
  },

  {
    id: 6,
    name: "Redmi Redberry",
    img: "/images/products/11.png",
    stock: 150,
    status: "active",
    price: 550000,
  },
  {
    id: 8,
    name: "Redmi",
    img: "/images/products/8.png",
    stock: 500,
    status: "active",
    price: 750000,
  },
  {
    id: 8,
    name: "Redmi",
    img: "/images/products/12.png",
    stock: 340,
    status: "active",
    price: 750000,
  },
  {
    id: 10,
    name: "Itel Smart",
    img: "/images/products/10.png",
    stock: 245,
    status: "active",
    price: 8000000,
  },
  {
    id: 11,
    name: "Iphone 11",
    img: "/images/products/iphone 11.jpg",
    stock: 245,
    status: "active",
    price: 1200000,
  },
  {
    id: 12,
    name: "Iphone 13",
    img: "/images/products/iphone 13.jpg",
    stock: 100,
    status: "active",
    price: 3000000,
  },
  {
    id: 13,
    name: "Playstation 5",
    img: "/images/products/playstation 5.jpg",
    stock: 100,
    status: "active",
    price: 2500000,
  },
  {
    id: 14,
    name: "Smart Watch",
    img: "/images/products/Smart watch.jpg",
    stock: 100,
    status: "active",
    price: 580000,
  },
  {
    id: 15,
    name: "Smart TV HD",
    img: "/images/products/television.jpg",
    stock: 100,
    status: "active",
    price: 1500000,
  },
];
const addToCart = (e) => {
  let cart;
  if (e.target.classList.contains("orderProduct")) {
    const id = Number(
      e.target.parentElement.parentElement.parentElement.dataset.id
    );
    const product = productInventory.find((item) => item.id === id);
    console.log(product);
    // store cart in local storage
    if (localStorage.getItem("cart") === null) {
      cart = [];
    } else {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    const quantity = Number(e.target.previousElementSibling.value);

    if (quantity !== 0 && quantity !== "") {
      product.quantity = quantity;
      product.bill = product.price * product.quantity;
      cart.push(product);

      localStorage.setItem("cart", JSON.stringify(cart));
    }

    // redirect to cart page
    window.location.href = "/cart.html";
  }
};

container.addEventListener("click", addToCart);
