// Создать функцию, вычисляющую среднее арифметическое числовых элементов массива любой длины.

const getAverage = (array) => {
    return array.reduce(function (sum, current) {
        return sum + current;
    }, 0) / array.length;
}





