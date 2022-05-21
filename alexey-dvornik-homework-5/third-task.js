// Создать функцию, которая удаляет из строки все символы, переданные вторым аргументом.
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor"

function editString (string, char) {
    for (let i = 0; i < char.length; i++) {
        string = string.replaceAll(char[i], '');
    } return string;
}
