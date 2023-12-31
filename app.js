const phones = [
  {
    brand: "Samsung",
    img: "./assest/img/samsung.jpg",
    model: "S20",
    ram: "8gb",
    rom: "256gb",
    camera: "20mp",
    price: 120000,
  },
  {
    brand: "Xiomi",
    img: "./assest/img/xiomi.jpg",
    model: "note10",
    ram: "4gb",
    rom: "64gb",
    camera: "10mp",
    price: 50000,
  },
  {
    brand: "Infinix",
    img: "./assest/img/infinix.jpg",
    model: "z10",
    ram: "2gb",
    rom: "16gb",
    camera: "5mp",
    price: 15000,
  },
  {
    brand: "Tecno",
    img: "./assest/img/tecno.jpg",
    model: "spark10",
    ram: "12gb",
    rom: "512gb",
    camera: "25mp",
    price: 70000,
  },
  {
    brand: "Iphone",
    img: "./assest/img/iphone.jpg",
    model: "14",
    ram: "4gb",
    rom: "1024gb",
    camera: "30mp",
    price: 600000,
  },
  {
    brand: "Oppo",
    img: "./assest/img/oppo.jpg",
    model: "F11",
    ram: "8gb",
    rom: "256gb",
    camera: "20mp",
    price: 60000,
  },
  {
    brand: "Vivo",
    img: "./assest/img/vivo.jpg",
    model: "y20",
    ram: "4gb",
    rom: "64gb",
    camera: "8mp",
    price: 30000,
  },
  {
    brand: "Sony",
    img: "./assest/img/sony.jpg",
    model: "Xperia",
    ram: "4gb",
    rom: "128gb",
    camera: "12mp",
    price: 45000,
  },
];
let main_div = document.querySelector("#main_div");

for (i = 0; i < phones.length; i++) {
  main_div.innerHTML += `<div class="cart">
  <img src="${phones[i].img}" alt="mobile image">
  <div class="specs">
  <h3>Brand : <span>${phones[i].brand}</span></h3>
  <h3>Model : <span>${phones[i].model}</span></h3>
  <h3>Ram : <span>${phones[i].ram}</span></h3>
  <h3>Rom : <span>${phones[i].rom}</span></h3>
  <h3>Camera : <span>${phones[i].camera}</span></h3>
  <h3>Price : <span>${phones[i].price}</span></h3>
</div>

  <button class="cart-btn " onclick="AddToCart(${i})">Add To Cart</button>
</div>`;
}

const receive_data = localStorage.getItem("cartarr");
const json_data = JSON.parse(receive_data);

let ArrayOfCart;
if (Array.isArray(json_data)) {
  ArrayOfCart = [...json_data];
} else {
  ArrayOfCart = [];
}
function AddToCart(index) {
  // ArrayOfCart.push(phones[index])
  // console.log(ArrayOfCart);

  if (ArrayOfCart.includes(phones[index]) === true) {
    // console.log('Item Is Existed');
    // phones[index].quantity += 1;
    for (let i = 0; i < ArrayOfCart.length; i++) {
      if (ArrayOfCart[i] === phones[index]) {
        phones[index].quantity += 1;
      }
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Item Quantity Is Increased ",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    phones[index].quantity = 1;
    ArrayOfCart.push(phones[index]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Item Is Successfully Added",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log("cartArr:", ArrayOfCart);
  }
}

// let key = prompt("enter key")
// let value = prompt("enter value")

// localStorage.clear()
function GoToCart() {
  const items = JSON.stringify(ArrayOfCart);
  localStorage.setItem("cartarr", items);
  window.location = "cart.html";
}
function register() {
  window.location = "register.html";
}
function login() {
  window.location = "login.html";
}
