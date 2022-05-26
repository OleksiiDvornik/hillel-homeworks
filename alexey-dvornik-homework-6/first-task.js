// Создать сущность человека, который будет содержать свойства “имя” и “возраст”. А также иметь метод вывода данных объекта
//
// Создать сущность автомобиля. Она должна содержать минимум 3 характеристики. А также иметь метод вывода на экран данных об этом автомобиле
// и метод присвоение этого автомобиля владельцу (метод должен записать в автомобиль объект владельца)
//
// Все данные о человеке и автомобиле получать от пользователя.
//
// Реализовать необходимые проверки на корректность ввода (пустые поля, возраст >18 у человека и т.д. в случае необходимости).
//
// Максимально использовать функции и конструкторы.

function User(name, age) {
    this.name = name;
    this.age = age;
    this.setUserName = function () {
        this.name = prompt('Как вас зовут?');
        if (this.name === '' || !isNaN(this.name)) {
            this.setUserName();
        } return this.name;
    }
    this.setUserAge = function () {
        this.age = +prompt('Сколько вам лет?');
        if (this.age < 18) {
            alert('К сожалению, вам нет 18');
            this.setUserAge();
        } return this.age;
    }
    this.getUserData = function () {
        return console.log(`Имя пользователя: ${this.name}. Возраст пользователя: ${this.age}`)
    }
}

function Car(brand, volume, color, carUser) {
    this.brand = brand;
    this.volume = volume;
    this.color = color;
    this.carUser = carUser;
    this.setCarBrand = function () {
        this.brand = prompt('Укажите марку автомобиля');
        if (this.brand === '' || !isNaN(this.brand)) {
            this.setCarBrand();
        } return this.brand;
    }
    this.setEngineVolume = function () {
        this.volume = +prompt('Укажите объем двигателя');
        if (typeof this.volume !== 'number' || this.volume === 0) {
            this.setEngineVolume();
        } return this.volume;
    }
    this.setCarColor = function () {
        this.color = prompt('Укажите цвет автомобиля');
        if (this.color === '' || !isNaN(this.color)) {
            this.setCarColor();
        } return this.color;
    }
    this.setCarUser = function (user) {
        this.carUser = user;
        return this.carUser;
    }
    this.getCarData = function () {
        return console.log(`Марка: ${this.brand}. Объем двигателя: ${this.volume}л. Цвет: ${this.color}. Владелец: ${this.carUser}`)
    }

}

let newUser;
let newCar;

const createUserButton = document.querySelector('.js--user');
createUserButton.addEventListener('click', () => {
    newUser = new User();
    newUser.setUserName();
    newUser.setUserAge();
    newUser.getUserData();
})

const createCarButton = document.querySelector('.js--car');
createCarButton.addEventListener('click', () => {
    newCar = new Car();
    newCar.setCarBrand();
    newCar.setEngineVolume();
    newCar.setCarColor();
    newCar.setCarUser(newUser.name);
    newCar.getCarData();
})

const showInfo = document.querySelector('.js--info');
showInfo.addEventListener('click', () => {
    console.log(newUser, newCar);
})







