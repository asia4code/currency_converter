{
    const calculateResult = (amount, change) => {

        const EURpln = 4.40;
        const USDpln = 3.77;

        switch (change) {
            case "EUR":
                return amount * EURpln;
            case "USD":
                return amount * USDpln;

        }
    };
    const updateResultText = (amount, result, change) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount.toFixed(2)} ${change} = ${result.toFixed(2)} PLN `;
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        const changeElement = document.querySelector(".js-change");
        const amountElement = document.querySelector(".js-amount");
        

        const amount = +amountElement.value;
        const change = changeElement.value;
        
        const result = calculateResult(amount, change);
        
        updateResultText(amount, result, change);

    };

    const init = () => {
        const formElemet = document.querySelector(".js-form");
        formElemet.addEventListener("submit", onFormSubmit);
    };
        init();
    }