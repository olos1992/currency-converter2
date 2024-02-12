const form = document.querySelector(".js-form");
const amount = document.querySelector(".js-amount");
const result = document.querySelector(".js-result");

const inputPLN = document.querySelector(".js-inputPLN");
const inputEUR = document.querySelector(".js-inputEUR");
const inputUSD = document.querySelector(".js-inputUSD");

const outputPLN = document.querySelector(".js-outputPLN");
const outputEUR = document.querySelector(".js-outputEUR");
const outputUSD = document.querySelector(".js-outputUSD");

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