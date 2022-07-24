function Todos (params) {
    const { form, input, todos } = params;

    this.init = async () => {
        this.loadFromServer(await this.getTodos());
        form.addEventListener('submit', this.formSubmit)
    };

    this.formSubmit = async (event) => {
        const value = input.value;
        event.preventDefault();
        if (value !== '') {
            await this.addTodo();
        }
        input.value = '';
    };

    this.loadFromServer = function (response) {
        response.forEach(item => {
            todos.appendChild(this.createTemplate(
                item.body,
                item.checked,
                item.id
            ))
        })
    };

    this.getTodos = async () => {
        try {
            const response = await fetch('http://localhost:3000/todos', {method: 'GET'});
            return await response.json();
        } catch (err) {
            console.log(err);
        }
    };

    this.addTodo = async function () {
        const response = await fetch('http://localhost:3000/todos', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
                "body": input.value,
                "checked": false,
            })
        })
        const item = await response.json();
        todos.appendChild(this.createTemplate(
            item.body,
            item.checked,
            item.id
        ))
    };

    this.completeTodo = async (desc, id, item) => {
        const checkBox = item.querySelector('.js--check');
        const label = item.querySelector('.js--label');
        const response = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": id,
                "body": desc,
                "checked": checkBox.checked,
            })
        })
        if (checkBox.checked === true) {
            label.classList.add('checked');
        } else {
            label.classList.remove('checked');
        }
        return await response.json();
    };

    this.deleteTodo = async (id, item) => {
        const response = await fetch(`http://localhost:3000/todos/${id}`, {method: 'DELETE'})
        todos.removeChild(item);
        return await response.json();
    };

    this.createTemplate = function (desc, checked, id) {
        const item = document.createElement('div');
        item.classList.add('todos__list-item');
        item.classList.add('js--todo-item');
        item.dataset.id = id;
        item.innerHTML = (`
                <label class="todos__list-item-label js--label">
                    <input class="todos__list-item-check js--check" type="checkbox"  ${checked ? 'checked="true"' : ''}>
                    <span class="todos__list-item-desc js--desc">${desc}</span>
                </label>
                <button class="todos__list-item-button js--delete" type="button"></button>
            `)
        const deleteButton = item.querySelector('.js--delete');
        const checkBox = item.querySelector('.js--check');
        const label = item.querySelector('.js--label');
        checkBox.addEventListener('click', () => this.completeTodo(desc, id, item));
        deleteButton.addEventListener('click', () => this.deleteTodo(id, item));
        if (checkBox.checked === true) {
            label.classList.add('checked');
        } else {
            label.classList.remove('checked');
        }
        return item;
    };
}

const todos = new Todos({
    form: document.querySelector('.js--form'),
    input: document.querySelector('.js--input'),
    todos: document.querySelector('.js--todos-list'),
});

document.addEventListener('DOMContentLoaded', todos.init);