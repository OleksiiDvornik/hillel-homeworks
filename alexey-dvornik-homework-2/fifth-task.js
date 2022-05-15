const showNumbers = () => {
    const userNumber = +prompt('Введите целое число');
    if (!Number.isInteger(userNumber)) {
        alert('Вы ввели не целое число!')
    } else {
        for (let i=1; i<=100; i++) {
            if (Math.pow(i,2) <= userNumber) {
                console.log(i);
            }
        }
    }
}