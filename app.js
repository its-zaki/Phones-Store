const phones = [
  {
    brand: "Samsung",
    img: "./assest/img/samsung.jpg",
    model: "S20",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
  },
  {
    brand: "Xiomi",
    img: "./assest/img/xiomi.jpg",
    model: "note10",
    ram: 4,
    rom: 64,
    camera: "10 megapixel",
  },
  {
    brand: "Infinix",
    img: "./assest/img/infinix.jpg",
    model: "z10",
    ram: 2,
    rom: 16,
    camera: "5 megapixel",
  },
  {
    brand: "Tecno",
    img: "./assest/img/tecno.jpg",
    model: "spark10",
    ram: 12,
    rom: 512,
    camera: "25 megapixel",
  },
  {
    brand: "Iphone",
    img: "./assest/img/iphone.jpg",
    model: "14",
    ram: 4,
    rom: 1024,
    camera: "30 megapixel",
  },
  {
    brand: "Oppo",
    img: "./assest/img/oppo.jpg",
    model: "F11",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
  },
  {
    brand: "Vivo",
    img: "./assest/img/vivo.jpg",
    model: "y20",
    ram: 4,
    rom: 64,
    camera: "8 megapixel",
  },
];
let main_div = document.querySelector("#main_div");

// for (i = 0; i < phones.length; i++) {
//   main_div.innerHTML += `<div class="container"><h1>${phones[i].brand}</h1> <h3><img class="images" src=${phones[i].img}> </br> Brand: ${phones[i].brand} </br> Model: ${phones[i].model} </br> Ram: ${phones[i].ram} </br> Rom: ${phones[i].rom} </br> Camera: ${phones[i].camera}</h3><button class="btn">ADD TO CART</button></div>`;
// }
