function PostsLoader (params) {
    const { elForm, elInput, elFeed } = params;

    this.init = function () {
        elForm.addEventListener('submit', this.formSubmit)
    };

    this.formSubmit = async (event) => {
        event.preventDefault();
        const postID = Number(elInput.value);
        if (postID >= 1 && postID <= 100) {
            await this.showPost(await this.getResponse(postID), postID);
        } else alert('Укажите id от 1 до 100');
        elInput.value = '';
    };

    this.getResponse = async function (postID, source = '') {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}${source}`, {method: "GET"});
        try {
            return {
                isOk: response.ok,
                data: await response.json(),
            }
        } catch (error) {
            return Error(error);
        }
    };

    this.showPost = async (response, postID) => {
        if (response.isOk === true) {
            const { data } = response;
            elFeed.insertAdjacentHTML('beforeend', (
                `<div class="post" id="${data.id}">
                    <p class="post__title">${data.title}</p>
                    <p class="post__content">${data.body}</p>
                </div>`
            ));
            await this.showComments(await this.getResponse(postID, '/comments/'), postID);
        } else alert('Пост не найден');
    };

    this.showComments = async (response, postID) => {
        const commentsFeed = document.getElementById(postID.toString());
        const comments = response.data;
        console.log(comments);
        for (const comment of comments) {
            this.renderComment(comment, commentsFeed);
        }
    };

    this.renderComment = function (comment, selector) {
        selector.insertAdjacentHTML('beforeend', (
            `<div class="comment">
                <p class="comment__body">${comment.body}</p>
                <p class="comment__name">${comment.name}</p>
                <p class="comment__email">${comment.email}</p>
            </div>`
        ))
    }
}

const postsLoader = new PostsLoader({
    elForm: document.querySelector('.js--form'),
    elInput: document.querySelector('.js--input'),
    elFeed: document.querySelector('.js--feed'),
})

document.addEventListener("DOMContentLoaded", () => {
    postsLoader.init();
})


