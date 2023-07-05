"use strict"

let contactForm = document.querySelector("#contactForm");
let c


numberGenerator()
captchaGenerator()

function numberGenerator() {
    let a = Math.floor((Math.random() * 10) + 1)
    let b = Math.floor((Math.random() * 10) + 1)
    c = a + b

    document.querySelector("#valorA").innerHTML = a
    document.querySelector("#valorB").innerHTML = b
}

function captchaGenerator() {

    let userAnswerInput = document.querySelector("#userAnswer")

    userAnswerInput.addEventListener('input', function () {
        let userAnswerValue = userAnswerInput.value
        if (isNaN(userAnswerValue)) {
            userAnswerInput.value = ""
        } else {
            checkAnswer(userAnswerValue)
        }
    })
}

function checkAnswer(userAnswerValue) {
    if (userAnswerValue == c) {
        document.querySelector("#formButton").removeAttribute("disabled")
        document.querySelector("#formButton").classList.remove("btnInvalid")
        document.querySelector("#formButton").classList.add("btnValid")
        document.querySelector("#captchaVerification").innerHTML = "Resultado correcto :)"
    } else {
        document.querySelector("#formButton").setAttribute("disabled", "")
        document.querySelector("#formButton").classList.remove("btnValid")
        document.querySelector("#formButton").classList.add("btnInvalid")
        document.querySelector("#captchaVerification").innerHTML = "Resultado incorrecto :("
    }
}


contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
        showFormConfirmation()
    }
})

function getFormValue() {

    let allFormDataInputs = document.querySelectorAll('.formData')

    let allDataValue = []

    allFormDataInputs.forEach(input => allDataValue.push(input.value))

    return allDataValue
}

function validateForm() {
    let formData = getFormValue()

    if (formData == '') {
        return false
    } else {
        return true
    }
}

function showFormConfirmation() {
    contactForm.classList.add("hideContactForm");
    document.querySelector(".formTitle").innerHTML = "¡GRACIAS POR CONTACTARNOS!";
    document.querySelector(".submittedForm").classList.add("showSubmittedForm");
    setTimeout('document.location.reload()', 5000);
}





