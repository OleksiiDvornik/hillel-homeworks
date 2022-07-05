const func = (arg1 = 'Error', arg2, arg3, ...args) => {
    if (args.length < 2) {
        return console.log('Error');
    } else {
        const obj = {...args};
        return console.log(`${arg1}-${arg2}-${arg3}`, obj)
    }
}

const arr = [undefined, 2, 3, 4, 'string'];

func(...arr);