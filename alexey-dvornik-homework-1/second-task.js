const makeSentence = () => {
    const firstName = prompt('Укажите ваше имя');
    const surName = prompt('Укажите ваше отчество');
    const lastName = prompt('Укажите вашу фамилию');
    alert(`Вас зовут ${lastName} ${firstName} ${surName}`);
}