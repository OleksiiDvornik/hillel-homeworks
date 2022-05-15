const decomposeNumber = () => {
    const randomNumber = prompt('Введите любое пятизначное число');
    if (randomNumber.length !== 5) {
        alert('Вы ввели не пятизначное число')
    }
    else {
        alert(`Введенное число состоит из цифр: ${randomNumber[0]} ${randomNumber[1]} ${randomNumber[2]} ${randomNumber[3]} ${randomNumber[4]}`);
    }
}