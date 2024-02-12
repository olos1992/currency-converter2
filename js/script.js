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

    switch (true) {
        case inputPLN.checked && outputPLN.checked:
            result.innerText = `${(amount.value / 1).toFixed(2)} PLN`;
            break;
        case inputPLN.checked && outputEUR.checked:
            result.innerText = `${(amount.value / 4.34).toFixed(2)} EUR`;
            break;
        case inputPLN.checked && outputUSD.checked:
            result.innerText = `${(amount.value / 4.03).toFixed(2)} USD`;
            break;
        case inputEUR.checked && outputPLN.checked:
            result.innerText = `${(amount.value * 4.34).toFixed(2)} PLN`;
            break;
        case inputEUR.checked && outputEUR.checked:
            result.innerText = `${(amount.value / 1).toFixed(2)} EUR`;
            break;
        case inputEUR.checked && outputUSD.checked:
            result.innerText = `${(amount.value * 1.077).toFixed(2)} USD`;
            break;
        case inputUSD.checked && outputPLN.checked:
            result.innerText = `${(amount.value * 4.03).toFixed(2)} PLN`;
            break;
        case inputUSD.checked && outputEUR.checked:
            result.innerText = `${(amount.value * 0.929).toFixed(2)} EUR`;
            break;
        case inputUSD.checked && outputUSD.checked:
            result.innerText = `${(amount.value / 1).toFixed(2)} USD`;
            break;
    };
});