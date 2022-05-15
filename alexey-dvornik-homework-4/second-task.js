const checkUserAge = () => {
    let userAge = prompt('Укажите свой возраст');
    function checkAge() {
        if (userAge >= 18 && userAge <= 100) {
            return 'Ура!'
        } else {
            return false;
        }
    }
    let access = checkAge();
    console.log(access);
}