let formElement = document.querySelector(".js-form")
let amountElement = document.querySelector(".js-amount")
let currencyElement = document.querySelector(".js-currency")
let resultElement = document.querySelector(".js-result")
// jakie czyniki ma brać console pod uwagę 

let rateEUR = 4.4944;
let rateUSD = 4.1930;
let rateGBP = 5.2220;
let rateNOK = 0.3820;
//nadanie kursu wartości 

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
// dodanie czyności dla button
    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;
// jak console ma przeliczać 
    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
        case "NOK":
            result = amount / rateNOK;
            break;

    }
// przełanczanie pomiendzy walutami
    resultElement.innerHTML = result.toFixed(2) + " " + currency;
})
// wynik 



