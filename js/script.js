var schemeSVG = document.querySelector(".scheme-svg");
const ticketPrice = 800;
let totalPrice = 0;
const priceValue = document.querySelector('.price__value'),
    buyBTN = document.querySelector('.pay__btn');

function priceCalc() {
    price = schemeSVG.querySelectorAll('.choosen').length * ticketPrice;
    priceValue.textContent = price + " ₽";
}

priceCalc();

schemeSVG.addEventListener('click', (event) => {

    if (!event.target.classList.contains('booked') && event.target.nodeName != "rect") {
        console.log(event.target.nodeName);
        event.target.classList.toggle("choosen");
        priceCalc();
    }
});

buyBTN.addEventListener('click', () => {
    console.log(schemeSVG.querySelectorAll('.choosed').length);
});