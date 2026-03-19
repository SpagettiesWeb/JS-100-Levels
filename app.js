// Дано число. Выведите в консоль последнюю цифру этого числа.

const num = 1252;
console.log(Number(String(Math.abs(num)).at(-1)));