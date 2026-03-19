// Дано число. Выведите в консоль первую цифру этого числа.

const num = 1252;
console.log(Number(String(Math.abs(num))[0]));