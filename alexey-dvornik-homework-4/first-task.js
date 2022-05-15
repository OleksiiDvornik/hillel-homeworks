const getValue = () => {
    let inputValue = prompt("Введите число больше 100");
    for (let i = 1; i < 10; i++) {
        if (inputValue < 100) {
            inputValue = prompt("Пожалуйста, введите число больше 100");
        } else break;
    }
    return console.log(inputValue);

}