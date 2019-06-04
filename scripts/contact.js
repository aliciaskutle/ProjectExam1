//Input fields
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var message = document.getElementById("message");

//RegEx for email and phone
var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
var phoneRegex = /^(\d{3}[\- .]\d{3}[\- .]\d{4})$/;

//Validate firstname
firstName.addEventListener("blur", function() {
  if (firstName.value === "") {
    document.getElementById("firstNameError").style.display = "block";
  } else {
    document.getElementById("firstNameError").style.display = "none";
  }
});

//Validate lastname
lastName.addEventListener("blur", function() {
  if (lastName.value === "") {
    document.getElementById("lastNameError").style.display = "block";
  } else {
    document.getElementById("lastNameError").style.display = "none";
  }
});

//Validate email
email.addEventListener("blur", function() {
  if (email.value === "") {
    document.getElementById("emailError").style.display = "block";
  }
  if (emailRegex.test(email.value) === false) {
    document.getElementById("emailError").style.display = "block";
    return false;
  } else {
    document.getElementById("emailError").style.display = "none";
    return true;
  }
});

//Validate message
message.addEventListener("blur", function() {
  if (message.value === "") {
    document.getElementById("messageError").style.display = "block";
  } else {
    document.getElementById("messageError").style.display = "none";
  }
});
