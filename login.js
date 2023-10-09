const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");


const lemail = localStorage.getItem("is_email")
const lpassword = localStorage.getItem("is_password")

email.value = lemail
password.value = lpassword

if(lemail !== null && lpassword !== null){
  function logedIn() {
    window.location = "index.html";
  }
}
else{
  console.log("not loged");
}

function register() {
  window.location = "register.html";
}
