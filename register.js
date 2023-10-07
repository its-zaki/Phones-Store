const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");
const submit = document.querySelector("#submit");
const head = document.querySelector("#head-three");

const data_arr = [];

function identity() {
  // console.log(email.value, password.value);
  data_arr.push(email.value, password.value);
  email.value = "";
  password.value = "";
  // console.log(data_arr);

  const string_data = JSON.stringify(data_arr);
  localStorage.setItem("itentity", string_data);
  head.innerHTML="You Are Registered"
}
if(data_arr != null){
  head.innerHTML="You Are Registered"
}
else{
  head.innerHTML="You Are not Registered"

}

function gotohome() {
  window.location = "index.html";
}
function login() {
  window.location = "login.html";
}
