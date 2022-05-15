const simpleNumber = () => {
    const num = +prompt('Введите простое число');
    let flag = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = false;
            console.log('Число непростое')
            break;
        }
    }
    if (flag && num > 1) {
        console.log('Число простое')
    }
}