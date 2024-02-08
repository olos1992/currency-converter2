let form = document.querySelector(".js-form");
let amount = document.querySelector(".js-amount");
let result = document.querySelector(".js-result");
let button = document.querySelector(".js-button");
let label = document.querySelector(".js-label");

let inputPLN = document.querySelector(".js-inputPLN");
let inputEUR = document.querySelector(".js-inputEUR");
let inputUSD = document.querySelector(".js-inputUSD");

let outputPLN = document.querySelector(".js-outputPLN");
let outputEUR = document.querySelector(".js-outputEUR");
let outputUSD = document.querySelector(".js-outputUSD");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (inputPLN.checked && outputPLN.checked) {
        result.innerText = `${amount.value} PLN`
    } else if (inputPLN.checked && outputEUR.checked) {
        result.innerText = `${(amount.value / 4.34).toFixed(2)} EUR`
    } else if (inputPLN.checked && outputUSD.checked) {
        result.innerText = `${(amount.value / 4.03).toFixed(2)} USD`
    } else if (inputEUR.checked && outputPLN.checked) {
        result.innerText = `${(amount.value * 4.34).toFixed(2)} PLN`
    } else if (inputEUR.checked && outputEUR.checked) {
        result.innerText = `${amount.value} EUR`
    } else if (inputEUR.checked && outputUSD.checked) {
        result.innerText = `${(amount.value * 1.077).toFixed(2)} USD`
    } else if (inputUSD.checked && outputPLN.checked) {
        result.innerText = `${(amount.value * 4.03).toFixed(2)} PLN`
    } else if (inputUSD.checked && outputEUR.checked) {
        result.innerText = `${(amount.value * 0.929).toFixed(2)} EUR`
    } else if (inputUSD.checked && outputUSD.checked) {
        result.innerText = `${amount.value} USD`
    }
});

