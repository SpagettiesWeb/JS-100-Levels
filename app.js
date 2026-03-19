// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

const string = 'Something';

const PenultimateChar = str => {
    if (str.length > 1) {
        return str.at(-2);
    } else {
        return 'Little string';
    }
}

console.log(PenultimateChar(string));

// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

const num1 = 50;
const num2 = 25;
console.log(num1 % num2 === 0);

