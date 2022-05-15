const checkNumber = () => {
    const userNumber = prompt('Введите трехзначное число');
    if (userNumber.length !==3)
        alert('Вы ввели не трехзначное число');
    else {
        const a = userNumber[0];
        const b = userNumber[1];
        const c = userNumber[2];
        if ((a===b) && (a===c))
            alert('Все цифры числа одинаковые');
        else if ((a===b) || (a===c) || (b===c))
            alert('Некоторые цифры числа одинаковые');
        else
            alert('Число состоит из разных цифр');
    }
}