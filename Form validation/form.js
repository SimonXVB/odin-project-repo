const mail = document.getElementById("mail");
const form = document.querySelector("form");
const error = document.getElementById("error");
const country = document.getElementById("country");
const countryError = document.getElementById("country-error");
const zip = document.getElementById("zip");
const zipError = document.getElementById("zip-error");

const pass = document.getElementById("pass");
const passError = document.getElementById("pass-error");
const conPass = document.getElementById("passCon");
const conPassError = document.getElementById("passCon-error");

mail.addEventListener("input", () => {
    if(mail.validity.valid) {
        error.textContent = "";
    } else {
        showError()
    }
});

country.addEventListener("input", () => {
    if(country.value === ""){
        countryError.style.display = "block";
        countryError.textContent = "Enter a country";
    } else {
        countryError.style.display = "none";
    }
});

const regEx = /^[0-9]+$/;

zip.addEventListener("input", () => {
    if(zip.value.match(regEx)){
        zipError.style.display = "none";
    } else {
        zipError.style.display = "block";
        zipError.textContent = "Enter a zip-code";
    }
});

pass.addEventListener("input", () => {
    if(pass.value === ""){
        passError.style.display = "block";
        passError.textContent = "Enter a password";
    } else {
        passError.style.display = "none";
    }
});

conPass.addEventListener("input", () => {
    if(conPass.value !== pass.value) {
        conPassError.style.display = "block";
        conPassError.textContent = "Passwords must match";
    } else {
        conPassError.style.display = "none";
    }
})



form.addEventListener("submit", (e) => {
    if(!mail.validity.valid || mail.value === ""){
        showError();
        e.preventDefault();
    }

    if(country.value === ""){
        countryError.style.display = "block";
        countryError.textContent = "Enter a country";
        countryError.style.backgroundColor = "red";
        countryError.style.width = "fit-content";
        e.preventDefault();
    }

    if(!zip.value.match(regEx)){
        zipError.style.display = "block";
        zipError.textContent = "Enter a zip-code";
        zipError.style.backgroundColor = "red";
        zipError.style.width = "fit-content";
        e.preventDefault();
    }

    if(pass.value === ""){
        passError.style.display = "block";
        passError.textContent = "Enter a password";
        passError.style.backgroundColor = "red";
        passError.style.width = "fit-content";
        e.preventDefault();
    }

    if(conPass.value !== pass.value || conPass === ""){
        conPassError.style.display = "block";
        conPassError.textContent = "Passwords must match";
        conPassError.style.backgroundColor = "red";
        conPassError.style.width = "fit-content";
        e.preventDefault();
    }
});

function showError() {
    if(!mail.validity.valid || mail.value === ""){
        error.style.display = "block"
        error.textContent = "Enter valid E-Mail address"
        error.style.backgroundColor = "red";
        error.style.width = "fit-content";
    }
};