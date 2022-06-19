const password = document.querySelector('.js--pass');
const condition1 = document.querySelector('.js--item1');
const condition2 = document.querySelector('.js--item2');
const condition3 = document.querySelector('.js--item3');
const condition4 = document.querySelector('.js--item4');

const regExNum = /\d/;
const regExLetter = /[A-ZА-Я]/;
const regExPunc = /[\W_]/;
const regExLength = /.{8,}/

let value;

function matchValue (regex, selector) {
    if (value.match(regex) !== null) {
        console.log(value);
        selector.classList.add('list__item--green')
    } else {
        selector.classList.remove('list__item--green')
    }
}

password.addEventListener('input', function () {
    value = password.value;
    matchValue(regExLetter, condition1);
    matchValue(regExNum, condition2);
    matchValue(regExPunc, condition3);
    matchValue(regExLength, condition4);
})