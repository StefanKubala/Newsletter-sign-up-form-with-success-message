const input = document.querySelector(".form-email");
const formButton = document.querySelector(".form-button");
const dismissButton = document.querySelector(".dismiss-button");
const form = document.querySelector("form");
const containerNormal = document.querySelector(".container-normal");
const containerSuccess = document.querySelector(".container-success");
const successEmail = document.querySelector(".success-email");
const formError = document.querySelector(".form-error");

const checkEmail = (validity) => {
    if (validity.value.match(validRegex) && form.classList.contains('error')) {
        form.classList.remove('error');
        formError.classList.remove("d-block")
    }
}

const vibrate = () => {
    setTimeout(() => {
        input.classList.add('vibrate')
    }, "100");

    setTimeout(() => {
        input.classList.remove('vibrate')
    }, "2000");
}

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

formButton.addEventListener("click", function (e) {
    e.preventDefault();

    if (input.value.length === 0) {
        form.classList.add('error')
        formError.classList.add("d-block")
        vibrate()
    } else if (!input.value.match(validRegex)) {
        form.classList.add('error')
        formError.classList.add("d-block")
        vibrate()
    } else {
        successEmail.innerText = input.value;
        containerNormal.classList.add("d-none");
        containerSuccess.classList.remove("d-none");
        checkEmail(input);
        input.value = ""
    }
})

dismissButton.addEventListener("click", function () {
    containerNormal.classList.remove("d-none");
    containerSuccess.classList.add("d-none")
})