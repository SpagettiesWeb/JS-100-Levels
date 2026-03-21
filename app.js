// Получите массив букв этой строки.
const str = 'abcde';
const strArr = str.split('');
console.log(strArr);

// Получите массив цифр этого числа.
const num = 12345;
const numArr = String(num).split('');
console.log(numArr);

// Дано некоторое число. Переверните его.
const num2 = 12345;
const num2Reversed = Number(String(num2).split('').reverse().join(''));
console.log(num2Reversed);

// Найдите сумму цифр этого числа.
const num3 = 12345;
const num3Sum = String(num3).split('').reduce((acc, el) => acc + Number(el), 0);
console.log(num3Sum);