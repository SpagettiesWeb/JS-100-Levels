// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

const num = 5;

const isPos = num => Math.abs(num) === num;

console.log(isPos(num));