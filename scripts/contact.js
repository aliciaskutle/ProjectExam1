//Input fields
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var message = document.getElementById("message");

firstName.focus();

//RegEx for email and phone
var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
var phoneRegex = /^(\d{3}[\- .]\d{3}[\- .]\d{4})$/;

var validationErrors = [];

function arrayContainsString(arrayToSearchIn, stringToSearchFor) {
  return arrayToSearchIn.includes(stringToSearchFor);
}

//Validate firstname
firstName.addEventListener("blur", function() {
  if (firstName.value === "") {
    document.getElementById("firstNameError").style.display = "block";
    if (!arrayContainsString(validationErrors, "firstNameError")) {
      validationErrors.push("firstNameError");
    }
  } else {
    document.getElementById("firstNameError").style.display = "none";
    if (arrayContainsString(validationErrors, "firstNameError")) {
      validationErrors = validationErrors.filter(
        validationError => validationError !== "firstNameError"
      );
    }
  }
});

//Validate lastname
lastName.addEventListener("blur", function() {
  if (lastName.value === "") {
    document.getElementById("lastNameError").style.display = "block";
    if (!arrayContainsString(validationErrors, "lastNameError")) {
      validationErrors.push("lastNameError");
    }
  } else {
    document.getElementById("lastNameError").style.display = "none";
    if (arrayContainsString(validationErrors, "lastNameError")) {
      validationErrors = validationErrors.filter(
        validationError => validationError !== "lastNameError"
      );
    }
  }
});

//Validate email
email.addEventListener("blur", function() {
  if (email.value === "") {
    document.getElementById("emailError").style.display = "block";
    if (!arrayContainsString(validationErrors, "emailError")) {
      validationErrors.push("emailError");
    }
  }
  if (emailRegex.test(email.value) === false) {
    document.getElementById("emailError").style.display = "block";
    if (!arrayContainsString(validationErrors, "emailError")) {
      validationErrors.push("emailError");
    }
    return false;
  } else {
    document.getElementById("emailError").style.display = "none";
    if (arrayContainsString(validationErrors, "emailError")) {
      validationErrors = validationErrors.filter(
        validationError => validationError !== "emailError"
      );
    }
    return true;
  }
});

//Validate message
message.addEventListener("blur", function() {
  if (message.value === "") {
    document.getElementById("messageError").style.display = "block";
    if (!arrayContainsString(validationErrors, "messageError")) {
      validationErrors.push("messageError");
    }
  } else {
    document.getElementById("messageError").style.display = "none";
    if (arrayContainsString(validationErrors, "messageError")) {
      validationErrors = validationErrors.filter(
        validationError => validationError !== "messageError"
      );
    }
  }
});

var submitButton = document.getElementById("submitContact");

submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(validationErrors);
  if (validationErrors.length === 0) {
    document.getElementById("contactForm").submit();
  }
});
