let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

//Вариант решения 1

const someFunc = () => {
    for (let key in menu) {
        if (typeof(menu[key]) == "number") {
            console.log(`${key} = ${menu[key]*2}`)
        }
    }
};

//Вариант решения 2

// const someFunc = () => {
//     for (let key in menu) {
//         if (!isNaN(menu[key])) {
//             console.log(`${key} = ${menu[key]*2}`)
//         }
//     }
// };

