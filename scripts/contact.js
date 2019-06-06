//Input fields
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var message = document.getElementById("message");

firstName.focus();

//RegEx for email and phone
var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
var phoneRegex = /^(\d{3}[\- .]\d{3}[\- .]\d{4})$/;

var validFields = [];

//Validate firstname
firstName.addEventListener("blur", function() {
  if (firstName.value === "") {
    document.getElementById("firstNameError").style.display = "block";
    if (validFields.includes("firstName")) {
      validFields = validFields.filter(
        validationError => validationError !== "firstName"
      );
    }
  } else {
    document.getElementById("firstNameError").style.display = "none";
    if (!validFields.includes("firstName")) {
      validFields.push("firstName");
    }
  }
});

//Validate lastname
lastName.addEventListener("blur", function() {
  if (lastName.value === "") {
    document.getElementById("lastNameError").style.display = "block";
    if (validFields.includes("lastName")) {
      validFields = validFields.filter(
        validationError => validationError !== "lastName"
      );
    }
  } else {
    document.getElementById("lastNameError").style.display = "none";
    if (!validFields.includes("lastName")) {
      validFields.push("lastName");
    }
  }
});

//Validate email
email.addEventListener("blur", function() {
  if (email.value === "") {
    document.getElementById("emailError").style.display = "block";
    if (validFields.includes("email")) {
      validFields = validFields.filter(
        validationError => validationError !== "email"
      );
    }
  }
  if (emailRegex.test(email.value) === false) {
    document.getElementById("emailError").style.display = "block";
    if (validFields.includes("email")) {
      validFields = validFields.filter(
        validationError => validationError !== "email"
      );
    }
    return false;
  } else {
    document.getElementById("emailError").style.display = "none";
    if (!validFields.includes("email")) {
      validFields.push("email");
    }
    return true;
  }
});

//Validate message
message.addEventListener("blur", function() {
  if (message.value === "") {
    document.getElementById("messageError").style.display = "block";
    if (validFields.includes("message")) {
      validFields = validFields.filter(
        validationError => validationError !== "message"
      );
    }
  } else {
    document.getElementById("messageError").style.display = "none";
    if (!validFields.includes("message")) {
      validFields.push("message");
    }
  }
});

var submitButton = document.getElementById("submitContact");

submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(validFields);
  if (validFields.length === 4) {
    document.getElementById("contactForm").submit();
  }
});
