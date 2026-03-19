// Даны два целых числа. Найдите остаток от деления первого числа на второе.
const num1 = 5;
const num2 = 2;
console.log(num1 % num2);

// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
const string = 'Something';
for (let i = -1; Math.abs(i) <= string.length; i--) {
    console.log(string.at(i));
}