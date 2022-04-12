// selecting elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const signUpForm = document.querySelector(".register");

// functions
const signUp = (e) => {
  e.preventDefault();
  console.log("signed up");
  let userList;
  let user = {
    name: nameInput.value,
    email: emailInput.value,
    password: password.value,
  };

  console.log(user);
  if (password.value === confirmPassword.value) {
    alert("account created successfully.....");
    // store in local storage
    if (localStorage.getItem("customers") === null) {
      userList = [];
    } else {
      userList = JSON.parse(localStorage.getItem("customers"));
    }

    userList.push(user);
    localStorage.setItem("customers", JSON.stringify(userList));

    window.location.href = "/login.html";
  } else {
    alert("passwords not matching!");
  }
};

// add event listener
signUpForm.addEventListener("submit", signUp);
