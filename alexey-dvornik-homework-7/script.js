// Задание 1
//
// Есть блок с текстом на странице и кнопка. При нажатии на кнопку текст изменяет цвет. При повторном нажатии – возвращается предыдущий цвет

const text = document.querySelector('.js--text');
const button = document.querySelector('.js--button');

button.addEventListener('click', () => {
    text.classList.toggle('text--red')
})

// Задание 2
//
// На странице есть две кнопки. При нажатии на первую кнопку пользователь должен ввести в prompt ссылку,
// при нажатии на вторую – переадресовывается на другой сайт (по ранее введенной ссылке).

const addLink = document.querySelector('.js--user-link');
const link = document.querySelector('.js--transition');

addLink.addEventListener('click', (event) => {
    event.preventDefault();
    let url;
    function setUrl() {
        url = prompt('Введите URL', 'google.com.ua');
        if (url !== '') {
            return url;
        } setUrl();
    }
    setUrl();
    link.setAttribute('href', `https://${url}`);
})

// Задание 3
//
// Вывести таблицу 10×10, заполненную числами от 1 до 100 (таблица создана динамически)

const newTable = document.querySelector('.js--table');
const box = document.querySelector('.box3');

function createTable(rows, columns) {
    let number = 0;
    let table = document.createElement('TABLE');
    table.className = 'table';
    box.appendChild(table);
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('TR');
        table.appendChild(tr);
        for (let j = 0; j < columns; j++) {
            number = number + 1;
            let td = document.createElement('TD');
            tr.appendChild(td);
            td.innerHTML = number.toString();
        }
    }
}

newTable.addEventListener('click', () => {
    createTable(10 ,10);
})

// Задание 4
//
// В папку images добавить изображения разных размеров: 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вывести изображение из этой папки, полученное случайным образом (Math.random).
// Размер изображения должен соотвецтвовать 80% размеров окна браузера (к примеру окно 1000px, то размер изображения 800px)

const showImage = document.querySelector('.js--image');
const box1 = document.querySelector('.box4');

function getRandomInt(min, max) {
    let randomNumber = min + Math.random() * (max + 1 - min);
    return Math.floor(randomNumber);
}

showImage.addEventListener('click', () => {
    let img = document.createElement('IMG');
    img.className = 'image';
    let index = getRandomInt(1, 9);
    img.setAttribute('src', `./images/${index}.jpg`)
    let width = window.innerWidth * 0.8;
    console.log(window.innerWidth);
    console.log(width);
    img.style.width = `${width}px`;
    box1.appendChild(img);
})
