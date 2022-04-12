const loginEmailInput = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginForm = document.querySelector(".login-form");

// login users
const loginUser = (e) => {
  e.preventDefault();
  console.log("clicked....");
  //search local storage for user with email
  let userList = JSON.parse(localStorage.getItem("customers"));
  const loggedUser = userList.find((user) => {
    return user.email === loginEmailInput.value;
  });

  if (!loggedUser) {
    alert("please sign up first");
    window.location.href = "/signup.html";
  }
  //compare input password to stored password
  if (loginPassword.value === loggedUser.password) {
    localStorage.setItem("user", JSON.stringify(loggedUser));
    window.location.href = "/products.html";
  } else {
    alert("wrong email/password!");
  }
};

// hiding cart from non logged user
if (localStorage.getItem("user") === null) {
  document.querySelector(".cart").style.display = "none";
}
loginForm.addEventListener("submit", loginUser);
