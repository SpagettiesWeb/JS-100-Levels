// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

const num = 1252;
const digit = String(Math.abs(num));

console.log(Number(digit[0]) + Number(digit.at(-1)));
