const createbutton = document.querySelector(".create-button");
const ageError = document.querySelector(".age-error-div");
const password = document.querySelector(".password");
const confirmpassword = document.querySelector(".confirm-password");
const username = document.querySelector("#username-input");
const emailAddress = document.querySelector("#emailaddress-input");

const phonenumber = document.querySelector(".phonenumber-input");
const telephone = document.querySelector(".telephone-input");

const accountdetails = [];

const ageDisplay = document.querySelector(".input-age");

//bday
let age;
let birthDateInput;

//To set the Maximum set of date
const bdayInput = document.getElementById("birthdate-input");
let maxYear = new Date().getFullYear() - 18;
let maxDay = new Date().getDate();
let maxMonth = new Date().getMonth() + 1;
let maxBdayInput = `${maxYear}-${maxMonth.toString().padStart(2, "0")}-${maxDay
  .toString()
  .padStart(2, "0")}`;
bdayInput.max = maxBdayInput;

// For Birthdate Min and Max

function calculateAge() {
  birthDateInput = document.getElementById("birthdate-input").value;
  let bDay = new Date(birthDateInput);
  let currentDate = new Date();

  // Calculate the difference in years
  age = currentDate.getFullYear() - bDay.getFullYear();

  // Check if the current date's month and day are before the birthdate's month and day
  if (
    currentDate.getMonth() < bDay.getMonth() ||
    (currentDate.getMonth() === bDay.getMonth() &&
      currentDate.getDate() < bDay.getDate())
  ) {
    age--;
  }

  ageDisplay.value = age || null;
}

//For the Login and Signup Popup
const loginForm = document.querySelector(".login-main-container");
const loginFormPage = document.querySelector(".login-form");
const signupForm = document.querySelector(".main-container");
const signupFormPage = document.querySelector(".signup-form-page");
const successCreate = document.querySelector(".success-create-acc");

const createAccButton = document.querySelector(".create-button");

const names = document.querySelectorAll(".name");
console.log(names);

function createAcc(event) {
  const letters = /^[A-Za-z]+$/;

  for (let i = 0; i < names.length; i++) {
    if (!names[i].value.match(letters) && names[i].value !== "") {
      names[i].setCustomValidity("Names can only contain letters.");
      return;
    } else {
      names[i].setCustomValidity("");
    }
  }

  if (
    password.value !== confirmpassword.value &&
    password.value !== "" &&
    confirmpassword.value !== ""
  ) {
    confirmpassword.setCustomValidity(
      "Passwords are not the same. Please check and try again."
    );
    return;
  } else {
    confirmpassword.setCustomValidity("");
  }
  if (phonenumber.value == "" && telephone.value == "") {
    phonenumber.setCustomValidity("Enter at least one contact number.");
    telephone.setCustomValidity("Enter at least one contact number.");
    return;
  } else {
    phonenumber.setCustomValidity("");
    telephone.setCustomValidity("");
  }

  if (signupFormPage.checkValidity()) {
    event.preventDefault();
    accountdetails.push({
      username: username.value,
      emailAddress: emailAddress.value,
      password: password.value,
    });
    signupFormPage.reset();
    age = undefined;
    birthDateInput = undefined;
    signupForm.classList.add("hide");
    loginForm.classList.add("hide");
    successCreate.classList.remove("hide");
  }
}

function signUp() {
  loginForm.classList.add("hide");
  signupForm.classList.remove("hide");
  document.title = "Account Sign In";
}

function logIn() {
  loginForm.classList.remove("hide");
  signupForm.classList.add("hide");
  signupFormPage.reset();
  age = undefined;
  birthDateInput = undefined;
}

function loginNow() {
  signupForm.classList.add("hide");
  loginForm.classList.remove("hide");
  successCreate.classList.add("hide");
}

function verifyLogin(event) {
  if (loginFormPage.checkValidity()) {
    event.preventDefault();
    const emailuserLogin = document.querySelector("#email-user-login").value;
    const passLogin = document.querySelector("#pass-login").value;

    if (!accountdetails.length) {
      alert("Incorrect Credentials. Please try again");
      loginFormPage.reset();
      return;
    }
    for (let i = 0; i < accountdetails.length; i++) {
      if (
        emailuserLogin == accountdetails[i].username ||
        emailuserLogin == accountdetails[i].emailAddress
      ) {
        if (passLogin == accountdetails[i].password) {
          alert("Successful Log In. Thank you.");
          loginFormPage.reset();
        } else {
          alert("Incorrect Password. Please try again.");
          loginFormPage.reset();
        }
      } else if (
        emailuserLogin !== accountdetails[i].username &&
        emailuserLogin !== accountdetails[i].emailAddress
      ) {
        alert("Incorrect Credentials. Please try again");
        loginFormPage.reset();

        return;
      }
    }
  }
}

//For Reset Button
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", () => {
  age = undefined;
  birthDateInput = undefined;
});
