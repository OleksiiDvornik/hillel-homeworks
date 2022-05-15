const addNumber = () => {
    const number1 = Number(prompt('Введите число 0, 1, 2 или 3'));
    switch (number1) {
        case 0:
            console.log('Вы ввели число 0');
            break;
        case 1:
            console.log('Вы ввели число 1');
            break;
        case 2:
        case 3:
            console.log('Вы ввели число 2, а может и 3');
            break;
        default:
            console.log('Вы ввели недопустимое число');
    }
}