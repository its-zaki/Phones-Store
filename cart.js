const cartdiv = document.querySelector("#cart_div");
const head = document.querySelector("#head")
const data = localStorage.getItem("cartarr");
const obj_data = JSON.parse(data);
render();

function render() {
  for (i = 0; i < obj_data.length; i++) {
    cartdiv.innerHTML += `<div class="cart">
        <img src="${obj_data[i].img}" alt="mobile image">
        <div class="specs">
        <h3>Brand : <span>${obj_data[i].brand}</span></h3>
        <h3>Model : <span>${obj_data[i].model}</span></h3>
        <h3>Ram : <span>${obj_data[i].ram}</span></h3>
        <h3>Rom : <span>${obj_data[i].rom}</span></h3>
        <h3>Camera : <span>${obj_data[i].camera}</span></h3>
        <h3>Price : <span>${obj_data[i].price}</span></h3>
        <h3>Quantity : <span>${obj_data[i].quantity}</span></h3>
        <h3>Total Price : <span>${
          obj_data[i].price * obj_data[i].quantity
        }</span></h3>
        <button class="cart-btn3" onclick="Increased(${i})"><h3>+</h3></button>${
      obj_data[i].quantity
    }<button class="cart-btn3"  onclick="Decreased(${i})"><h3>-</h3></button>
        <button class="cart-btn2" onclick="Delete(${i})">Delete</button>
      </div>`;
  }
}
function Increased(index) {
  cartdiv.innerHTML = "";
  obj_data[index].quantity += 1;
  render();
}
function Decreased(index) {
  cartdiv.innerHTML = "";
  obj_data[index].quantity -= 1;
  if (obj_data[index].quantity === 0) {
    obj_data.splice(index, 1);
  }
  render();
}

function Delete(index) {
  cartdiv.innerHTML = "";
  obj_data.splice(index, 1);
  render();
}
function gotohome() {
  window.location = "index.html";
}
function sumofarr(obj_data) {
  const arr = obj_data;
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i].price * arr[i].quantity;
  }
  return sum;
  
}
head.innerHTML = `<span class="sub-head">Total Amount:</span> <span class=total>${sumofarr(obj_data)}</span>`
console.log(sumofarr(obj_data));
