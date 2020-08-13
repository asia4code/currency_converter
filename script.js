let changeElement = document.querySelector(".js-change");
let amountElement = document.querySelector(".js-amount");
let optionElement = document.querySelector(".js.option")
let resultElement = document.querySelector(".js-result");
let formElemet = document.querySelector(".js-form");

formElemet.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let change = changeElement.value;
   
    let EURpln = 4.40;
    let USDpln = 3.77;
    let result = (change === "EUR na PLN") ? (amount * EURpln) : (amount * USDpln);
    
   //resultElement.innerText = result.toFixed(2);
   resultElement.innerText = `${amount.toFixed(2)} ${change} = ${result.toFixed(2)} PLN `;
});

