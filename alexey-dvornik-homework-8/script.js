function cardRotate() {
    document.querySelector('.form__cvv').addEventListener('mouseenter', () => {
        document.querySelector('.card__front').style.transform = 'perspective(1000px) rotateY(-180deg)';
        document.querySelector('.card__back').style.transform = 'perspective(1000px) rotateY(0deg)';
    })
    document.querySelector('.form__cvv').addEventListener('mouseleave', () => {
        document.querySelector('.card__front').style.transform = 'perspective(1000px) rotateY(0deg)';
        document.querySelector('.card__back').style.transform = 'perspective(1000px) rotateY(180deg)';
    })
}

cardRotate();

function FormValidate (form) {
    this.setNumber = function (selector) {
        form.number.addEventListener('input', function() {
            const value = this.value;
            document.querySelector(selector).innerHTML = value.replace(/(.{4})/g, '$1 ').slice(0, 19);
            if (value.length > 16) {
                this.value = value.slice(0, 16);
            }
        })
    }
    this.setHolder = function (selector) {
        form.holder.addEventListener('input', function() {
            const value = this.value.split(/\s/, 2);
            document.querySelector(selector).innerHTML = value.join(' ').replace(/\d/g, '');
        })
        form.holder.addEventListener('keypress', function(event) {
            if (this.value.split(/\s/).length > 2) {
                event.preventDefault();
            }
        })
    }
    this.setDate = function (dateType, selector) {
        dateType.addEventListener('input', function() {
            document.querySelector(selector).innerHTML = this.value;
        })
    }
    this.setCVV = function (selector) {
        form.cvv.addEventListener('input', function () {
            const value = this.value;
            document.querySelector(selector).innerHTML = value.slice(0, 3);
            if (value.search(/[A-Za-zА-Яа-я]/) !== -1) {
                alert('CVV может содержать только цифры');
                form.cvv.value = '';
                document.querySelector(selector).innerHTML = '';
            }
            if (value.length > 3) {
                this.value = value.slice(0, 3);
            }
        })
    }
}

const formFields = {
    number: document.querySelector('.js--number'),
    holder: document.querySelector('.js--holder'),
    month: document.querySelector('.js--month'),
    year: document.querySelector('.js--year'),
    cvv: document.querySelector('.js--cvv')
}

const submit = document.querySelector('.js--submit');

const form = document.querySelector('.form');

const formValidate = new FormValidate (formFields);

formValidate.setNumber('.js--res-number');
formValidate.setHolder('.js--res-holder');
formValidate.setDate(formFields.month, '.js--res-month');
formValidate.setDate(formFields.year, '.js--res-year');
formValidate.setCVV('.js--res-cvv');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(`
    Card Number: ${formFields.number.value}
    Card Holder: ${formFields.holder.value}
    Exp. Date:  ${formFields.month.value}/${formFields.year.value}
    CVV: ${formFields.cvv.value}
    `)
})