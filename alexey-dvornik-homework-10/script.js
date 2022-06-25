function UserTable (params) {

    this.init = function () {
        params.form.addEventListener('submit', (event) => {
            this.formSubmit(event);
        })
        params.add.addEventListener('click', function () {
            params.form.classList.add('open');
        })
    }

    this.formSubmit = function (event) {
        event.preventDefault();
        const currentID = params.form.elements['id'].value;
        if (currentID) {
            this.updateUser({
                id: params.form['id'].value,
                name: params.form['name'].value,
                phone: params.form['phone'].value,
                age: params.form['age'].value,
            });
            params.form.classList.remove('open')
        } else {
            this.addUser({
                id: Math.floor(Math.random() * 100),
                name: params.form['name'].value,
                phone: params.form['phone'].value,
                age: params.form['age'].value,
            });
        }
    }

    this.addUser = function (user) {
        this.userTemplate(user);
        const users = JSON.parse(localStorage.getItem('users'));
        const currentUsers = users || [];
        currentUsers.push(user);
        localStorage.setItem('users', JSON.stringify(currentUsers));
        params.form.reset();
    }

    this.updateUser = function (user) {
        const users = JSON.parse(localStorage.getItem('users'));
        const newUsers = users.map(item => {
            if (item.id === Number(user.id)) {
                return user;
            }
            return item;
        });
        params.content.innerHTML = '';
        newUsers.forEach((newUser) => {
            this.userTemplate(newUser);
        })
        localStorage.setItem('users', JSON.stringify(newUsers));
    }

    this.loadUser = function () {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            users.forEach(user => {
                this.userTemplate(user);
            })
        }
    }

    this.userTemplate = function (user) {
        params.content.insertAdjacentHTML('beforeend', (
            `<tr data-id="${user.id}">
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.phone}</td>
                <td>${user.age}</td>
                <td>
                    <button class="btn btn-primary js--view">View</button>
                    <button class="btn btn-primary js--edit">Edit</button>
                    <button class="btn btn-primary js--delete">Delete</button>
                </td>
            </tr>`
        ))

        const currentElement = document.querySelector(`[data-id="${user.id}"]`);
        const viewButton = currentElement.querySelector('.js--view');
        const editButton = currentElement.querySelector('.js--edit');
        const deleteButton = currentElement.querySelector('.js--delete');

        const editUser = function () {
            const form = params.form;
            form.classList.add('open');
            form.elements['id'].value = user.id;
            form.elements['name'].value = user.name;
            form.elements['phone'].value = user.phone;
            form.elements['age'].value = user.age;
        }

        const showUser = function () {
            params.user.innerHTML = JSON.stringify(user, undefined, 2);
        }

        const deleteUser = () => {
            const users = JSON.parse(localStorage.getItem('users'));
            const newUsers = [];
            users.forEach(item => {
                if (item.id !== user.id) {
                    newUsers.push(item);
                }
            })
            params.content.innerHTML = '';
            newUsers.forEach((newUser) => {
                this.userTemplate(newUser);
            })
            localStorage.setItem('users', JSON.stringify(newUsers));
        }

        viewButton.addEventListener('click', showUser);
        editButton.addEventListener('click', editUser);
        deleteButton.addEventListener('click', deleteUser);
    }

    this.loadUser();
}

const params = {
    content: document.querySelector('.js--content'),
    add: document.querySelector('.js--add'),
    form: document.querySelector('.js--form'),
    user: document.querySelector('.js--user'),
}

const userTable = new UserTable(params);

userTable.init();
