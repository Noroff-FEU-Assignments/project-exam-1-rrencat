const form = document.querySelector(".contact");
const yourName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const yourMessage = document.querySelector("#message");
const messageError = document.querySelector("#message-error");


function validateForm(event) {
    event.preventDefault();

    if (checkLength(yourName.value, 4) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 14) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkLength(yourMessage.value, 24) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
    

    console.log("EUREKA!");

}

form.addEventListener("submit", validateForm);


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

