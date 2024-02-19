{
    const calculateResult = (amount) => {
        const inputPLN = document.querySelector(".js-inputPLN");
        const inputEUR = document.querySelector(".js-inputEUR");
        const inputUSD = document.querySelector(".js-inputUSD");

        const outputPLN = document.querySelector(".js-outputPLN");
        const outputEUR = document.querySelector(".js-outputEUR");
        const outputUSD = document.querySelector(".js-outputUSD");

        switch (true) {
            case inputPLN.checked && outputPLN.checked:
                return `${(amount.value / 1).toFixed(2)} PLN`;
            case inputPLN.checked && outputEUR.checked:
                return `${(amount.value / 4.34).toFixed(2)} EUR`;
            case inputPLN.checked && outputUSD.checked:
                return `${(amount.value / 4.03).toFixed(2)} USD`;
            case inputEUR.checked && outputPLN.checked:
                return `${(amount.value * 4.34).toFixed(2)} PLN`;
            case inputEUR.checked && outputEUR.checked:
                return `${(amount.value / 1).toFixed(2)} EUR`;
            case inputEUR.checked && outputUSD.checked:
                return `${(amount.value * 1.077).toFixed(2)} USD`;
            case inputUSD.checked && outputPLN.checked:
                return `${(amount.value * 4.03).toFixed(2)} PLN`;
            case inputUSD.checked && outputEUR.checked:
                return `${(amount.value * 0.929).toFixed(2)} EUR`;
            case inputUSD.checked && outputUSD.checked:
                return `${(amount.value / 1).toFixed(2)} USD`;
        }
    };

    const updateResultText = (amount, result) => {
        result.innerText = calculateResult(amount);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amount = document.querySelector(".js-amount");
        const result = document.querySelector(".js-result");

        updateResultText(amount, result);
    };

    const init = () => {
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

}