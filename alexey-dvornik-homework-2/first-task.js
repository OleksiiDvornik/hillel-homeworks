const checkValue = () => {
    const value = prompt('Введите трехзначное число');
    if (value.length !==3) {
        alert('Вы ввели не трехзначное число');
    } else {
        const a = value[0];
        const b = value[1];
        const c = value[2];
        if ((a===b) && (a===c)) {
            alert('Все цифры числа одинаковые');
        } else if ((a===b) || (a===c) || (b===c)) {
            alert('Некоторые цифры числа одинаковые');
        } else {
            alert('Число состоит из разных цифр');
        }
    }
}

//Попробовал для практики

// const checkValue = () => {
//     const value = prompt('Введите трехзначное число');
//     const a = value[0];
//     const b = value[1];
//     const c = value[2];
//     switch (true) {
//         case ((a===b) && (a===c)):
//             alert('Все цифры числа одинаковые');
//             break;
//         case ((a===b) || (a===c) || (b===c)):
//             alert('Некоторые цифры числа одинаковые');
//             break;
//         default:
//             alert('Число состоит из разных цифр');
//     }
// }