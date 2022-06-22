function FormValidate (form) {
    const _elements = form.elements;
    const _parentItemClass = 'form-control';
    const _errorWrapperClass = 'error';
    const _errorItemClass = 'error__item';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        this.checkFormElements();
        this.validateSuccess();
    })

    this.checkFormElements = function () {
        for (let i = 0; i < _elements.length; i++) {
            const element = _elements[i];
            this.checkElement(element);
            const reqMessage = element.dataset.req;
            const emailMessage = element.dataset.email;
            const minLengthMessage = element.dataset.min_message;
            const passwordMessage = element.dataset.password;
            if (reqMessage) {
                this.required(element, reqMessage);
            }
            if (emailMessage) {
                this.validEmail(element, emailMessage);
            }
            if (minLengthMessage) {
                this.minLength (element, minLengthMessage);
            }
            if (passwordMessage) {
                this.validPassword(passwordMessage);
            }
        }
    }

    this.checkElement = function (element) {
        const parent = element.closest(`.${_parentItemClass}`);
        if (parent !== null && parent.classList.contains(_errorWrapperClass) === true) {
            parent.classList.remove(_errorWrapperClass);
            parent.querySelector(`.${_errorItemClass}`).remove();
        }
    }

    this.required = function (element, message) {
        const notValidString = element.value.length === 0;
        const notValidCheckBox = element.type === 'checkbox' && element.checked === false;
        if (notValidString || notValidCheckBox) {
            this.errorTemplate (element, message);
        }
    }

    this.validEmail = function (element, message) {
        const emailString = element.value;
        const reg = emailString.match(/^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/);
        if (Boolean(reg) === false) {
            this.errorTemplate(element, message);
        }
    }

    this.minLength = function (element, message) {
        const minLength = element.dataset.min_length;
        const elementLength = element.value.length;
        const changeMessage = message.replace('N', minLength);
        if (elementLength < minLength) {
            this.errorTemplate(element, changeMessage);
        }
    }

    this.validPassword = function (message) {
        const allPasswordElements = form.querySelectorAll("input[type='password']");
        Array.from(allPasswordElements).map (item => {
            if (allPasswordElements[0].value !== allPasswordElements[1].value) {
                this.errorTemplate(item, message);
            }
        });

    }

    this.errorTemplate = function (element, message) {
        const parent = element.closest(`.${_parentItemClass}`);
        if (parent.classList.contains(_errorWrapperClass) === false) {
            parent.classList.add(_errorWrapperClass);
            parent.insertAdjacentHTML('beforeend', `<small class="${_errorItemClass}">${message}</small>`)
        }
    }

    this.validateSuccess = function () {
        for (let i = 0; i < _elements.length; i++) {
            const element = _elements[i];
            const parent = element.closest(`.${_parentItemClass}`);
            if (parent !== null && parent.classList.contains(_errorWrapperClass) === false) {
                parent.classList.add('success');
            }
        }
    }
}

new FormValidate(document.querySelector('#form'));