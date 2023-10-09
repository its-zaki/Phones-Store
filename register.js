const submit = document.querySelector("#submit");
const head = document.querySelector("#head-three");

// const data_arr = [];

function identity() {
  const email = document.querySelector("#email-input").value;
  const password = document.querySelector("#password-input").value;
  const name = document.querySelector("#name-input").value;
  const date = document.querySelector("#date-input").value;
  // data_arr.push(email.value, password.value);
  email.value = "";
  password.value = "";  
  name.value = "";  
  date.value = "";  
  // const string_data = JSON.stringify(data_arr);
  // localStorage.setItem("itentity", string_data);
  localStorage.setItem("is_name", name);
  localStorage.setItem("is_email", email);
  localStorage.setItem("is_password", password);
  localStorage.setItem("is_date", date);
  // if(email.value !== null ){
  //   head.innerHTML="You Are not Registered"
  //   console.log("have registered");
  // }
  // else{
  //   head.innerHTML="You Are Registered"
  //   console.log("not registered");
  
  // }

}

function login() {
  window.location = "login.html";
}
