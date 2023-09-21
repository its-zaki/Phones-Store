const cartdiv = document.querySelector("#cart_div")
const data = localStorage.getItem(Items)
const obj_data = JSON.parse(data)
cartdiv.innerHTML += `${obj_data}` ; 
 