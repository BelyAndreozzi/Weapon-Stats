"use strict"

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
    } else {
        document.querySelector("#formButton").setAttribute("disabled", "")
        document.querySelector("#formButton").classList.remove("btnValid")
        document.querySelector("#formButton").classList.add("btnInvalid")

    }
}


let submitBtn = document.querySelector(".submitBtn");
let contactForm = document.querySelector("#contactForm");
let submittedForm = document.querySelector(".submittedForm");
let formTitle = document.querySelector(".formTitle");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
});

submitBtn.addEventListener("click", function () {
    contactForm.classList.add("hideContactForm");
    formTitle.innerHTML = "GRACIAS POR CONTACTARNOS!";
    submittedForm.classList.add("showSubmittedForm");
    setTimeout('document.location.reload()', 3000);

})



