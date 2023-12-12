document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".container");
  const submitBtn = document.querySelector("button");

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission for now

    // Reset error messages
    resetErrorMessages();

    // Validate each input field
    const name = getInputValue('input[placeholder="Type your full name"]');
    const username = getInputValue(
      'input[placeholder="Type your unique username"]'
    );
    const email = getInputValue('input[placeholder="Type your email address"]');
    const phoneNumber = getInputValue(
      'input[placeholder="Type your Phone Number"]'
    );
    const dob = getInputValue('input[type="date"]');
    const gender = document.getElementById("gender").value;
    const selfDescription = getInputValue("textarea#selfDescription");
    const password = getInputValue(
      'input[placeholder="Type here a unique and strong password"]'
    );
    const confirmPassword = getInputValue(
      'input[placeholder="retype here a unique and strong password"]'
    );
    const termsChecked = document.querySelector(".terms").checked;

    // Perform validation and display error messages
    validateRequiredField(name, "error1", "Full Name is required.");
    validateRequiredField(username, "error2", "Username is required.");
    validateRequiredField(email, "error3", "Email is required.");
    validateRequiredField(phoneNumber, "error4", "Phone Number is required.");
    validateRequiredField(dob, "error5", "Date of Birth is required.");
    validateRequiredField(gender, "error6", "Gender is required.");
    validateRequiredField(selfDescription, "error7", ""); // No error message for description
    validatePassword(password, "error7"); // Password validation without a specific error message
    validateConfirmPassword(password, confirmPassword, "error8");

    if (!termsChecked) {
      displayError("error9", "You must agree to the terms and conditions.");
    }

    // If there are no errors, you can proceed with form submission
    if (document.querySelectorAll(".error").length === 0) {
      form.submit();
    }
  });

  function getInputValue(selector) {
    return document.querySelector(selector).value.trim();
  }

  function validateRequiredField(value, errorId, errorMessage) {
    if (value === "" && errorMessage !== "") {
      displayError(errorId, errorMessage);
    }
  }

  function validatePassword(password, errorId) {
    // Password validation logic (customize as needed)
    if (password === "") {
      displayError(errorId, "Password is required.");
    } else if (password.length < 8) {
      displayError(errorId, "Password must be at least 8 characters long.");
    }
  }

  function validateConfirmPassword(password, confirmPassword, errorId) {
    // Confirm Password validation logic (customize as needed)
    if (confirmPassword === "") {
      displayError(errorId, "Confirm Password is required.");
    } else if (password !== confirmPassword) {
      displayError(errorId, "Password do not match.");
    }
  }

  function displayError(errorId, errorMessage) {
    const errorElement = document.getElementById(errorId);
    errorElement.innerText = errorMessage;
  }

  function resetErrorMessages() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function (element) {
      element.innerText = "";
    });
  }
});
