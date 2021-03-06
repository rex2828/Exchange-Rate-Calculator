const currencyEl_one = document.getElementById('currency-one');
const amount_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amount_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amount_two.value = (rate * amount_one.value).toFixed(2);
        });
}




currencyEl_one.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amount_two.addEventListener('input', calculate);


swap.addEventListener('click', function () {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});


calculate();