function UserTable (params) {
    this.init = function() {
        params.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addUser();
        })
    }
    this.addUser = function() {
        this.userTemplate({
            id: Math.floor(Math.random() * 100),
            name: params.form['name'],
            phone: '0631234554',
            age: 33
        })
        params.form.reset();
    }
    this.updateUser = function() {

    }
    this.userTemplate = function(user) {
        params.content.insertAdjacentHTML('beforeend', (
            `<tr>
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
    }
}

const params = {
    content: document.querySelector('.js--content'),
    add: document.querySelector('.js--add'),
    form: document.querySelector('.js--form'),
    user: document.querySelector('.js--user')
}

const userTable = new UserTable(params);

userTable.init();