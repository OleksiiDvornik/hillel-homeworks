const form = document.querySelector('.js--form');
const input = document.querySelector('.js--input');
const postsFeed = document.querySelector('.js--feed');

function renderPost(post) {
    postsFeed.insertAdjacentHTML('beforeend', (
        `<div class="post" id="${post.id}">
            <p class="post__title">${post.title}</p>
            <p class="post__content">${post.body}</p>
            <div class="post__comments js--comments"></div>
        </div>`
    ))
}

function renderComments(comment, selector) {
    selector.insertAdjacentHTML('beforeend', (
        `<div class="comment">
            <p class="comment__body">${comment.body}</p>
            <p class="comment__name">${comment.name}</p> 
            <p class="comment__email">${comment.email}</p>
        </div>`
    ))
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = Number(input.value);
    if (value >= 1 && value <= 100) {
        input.value = '';
        fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
            .then(response => response.json())
            .then(post => {
                renderPost(post)
                return fetch(`https://jsonplaceholder.typicode.com/posts/${value}/comments`)
            })
            .then(response => response.json())
            .then(comments => {
                const commentsFeed = document.getElementById(value.toString())
                for (const comment of comments) {
                    console.log(comment);
                    renderComments(comment, commentsFeed);
                }
            })
    } else {
        alert('Ошибка: id должен содержать число от 1 до 100')
        input.value = '';
    }
})
