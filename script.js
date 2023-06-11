const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");
const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");
const loginRememberMe = document.querySelector("#login-remember-me");
const loginButton = document.querySelector("#login-button");
const signupUsername = document.querySelector("#signup-username");
const signupPhone = document.querySelector("#signup-phone");
const signupEmail = document.querySelector("#signup-email");
const signupPassword = document.querySelector("#signup-password");
const signupConfirmPassword = document.querySelector("#signup-confirm-password");
const signupButton = document.querySelector("#signup-button");
const emailError = document.querySelector(".email-error");
const phoneError = document.querySelector(".phone-error");
const usernameError = document.querySelector(".username-error");
const passwordError = document.querySelector(".password-error");
const confirmPasswordError = document.querySelector(".confirm-password-error");
const otpForm = document.querySelector("#otp-form");
const otpInput = document.querySelector("#otp-input");
const otpSubmitButton = document.querySelector("#otp-submit-button");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function validatePassword(password) {
  return password.length >= 8;
}

function checkConfirmPassword() {
  const password = signupPassword.value;
  const confirmPassword = signupConfirmPassword.value;

  if (confirmPassword !== password) {
    confirmPasswordError.innerHTML = "Passwords don't match";
    return false;
  } else {
    confirmPasswordError.innerHTML = "";
    return true;
  }
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();
  const rememberMe = loginRememberMe.checked;

  if (!validateEmail(email)) {
    emailError.innerHTML = "Please enter a valid email";
    return;
  } else {
    emailError.innerHTML = "";
  }

  if (!validatePassword(password)) {
    passwordError.innerHTML = "Password must be at least 8 characters long";
    return;
  } else {
    passwordError.innerHTML = "";
  }

  // Code for login goes here
});

signupButton.addEventListener("click", (e) => {
  e.preventDefault();

  const username = signupUsername.value.trim();
  const phone = signupPhone.value.trim();
  const email = signupEmail.value.trim();
  const password = signupPassword.value.trim();
  const confirmPassword = signupConfirmPassword.value.trim();

  if (username.length === 0) {
    usernameError.innerHTML = "Please enter a username";
    return;
  } else {
    usernameError.innerHTML = "";
  }

  if (!validatePhone(phone)) {
    phoneError.innerHTML = "Please enter a valid phone number";
    return;
  } else {
    phoneError.innerHTML = "";
  }

  if (!validateEmail(email)) {
    emailError.innerHTML = "Please enter a valid email";
    return;
  } else {
    emailError.innerHTML = "";
  }

  if (!validatePassword(password)) {
    passwordError.innerHTML = "Password must be at least 8 characters long";
    return;
  } else {
    passwordError.innerHTML = "";
  }

  if (!checkConfirmPassword()) {
    return;
  }

  alert("Signup is successful");
});
function openPage() {
  window.open("index.html", "_blank"); 
}


