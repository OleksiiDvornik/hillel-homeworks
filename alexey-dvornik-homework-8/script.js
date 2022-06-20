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

const formFields = {
    number: document.querySelector('.js--number'),
    holder: document.querySelector('.js--holder'),
    month: document.querySelector('.js--month'),
    year: document.querySelector('.js--year'),
    cvv: document.querySelector('.js--cvv'),
}

const submit = document.querySelector('.js--submit');

function formValidate(form) {
    form.number.addEventListener('input', function() {
        const value = this.value;
        document.querySelector('.js--res-number').innerHTML = value.replace(/(.{4})/g, '$1 ').slice(0, 19);
        if (value.length >= 16) {
            this.value = value.slice(0, 16);
        }
        checkAllFields();
    })
    form.holder.addEventListener('input', function() {
        const value = this.value.split(/\s/, 2);
        document.querySelector('.js--res-holder').innerHTML = value.join(' ').replace(/\d/g, '');
        checkAllFields();
    })
    form.holder.addEventListener('keypress', function(event) {
        if (this.value.split(/\s/).length > 2) {
            event.preventDefault();
        }
    })
    function addDate(dateType, selector) {
        dateType.addEventListener('input', function() {
            document.querySelector(selector).innerHTML = this.value;
            checkAllFields();
        })
    }
    addDate(form.month, '.js--res-month');
    addDate(form.year, '.js--res-year');
    form.cvv.addEventListener('input', function () {
        const value = this.value;
        document.querySelector('.js--res-cvv').innerHTML = value.slice(0, 3);
        if (value.search(/[A-Za-zА-Яа-я]/) !== -1) {
            alert('CVV может содержать только цифры');
            form.cvv.value = '';
            document.querySelector('.js--res-cvv').innerHTML = '';
        }
        if (value.length >= 3) {
            this.value = value.slice(0, 3);
            checkAllFields();
        }
    })
    function checkAllFields() {
        let valid = [];
        for (let key in form) {
            if ((key === 'number' && form[key].value.length >= 16) || key !== 'number') {
                valid.push(form[key].value.length !== 0);
            } else {
                valid.push(false);
            }
        }
        submit.disabled = !valid.every(currentValue => currentValue === true);
    }
}

formValidate(formFields);

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(`
    Card Number: ${formFields.number.value} 
    Card Holder: ${formFields.holder.value}
    Exp. Date:  ${formFields.month.value}/${formFields.year.value}
    CVV: ${formFields.cvv.value}
    `)
})

