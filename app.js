// Заполните массив случайными числами из промежутка от 1 до 100.
const arr = [];
for (let i = 0; i < 10; i++) {
    const num = Math.floor(Math.random() * 100) + 1;
    arr.push(num);
}
console.log(arr);

// Выведите в консоль все его символы с конца.
const num = 12345;
const numStr = String(num);
for (let i = numStr.length - 1; i >= 0; i--) {
    console.log(numStr[i]);
}

// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
const arr2 = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < arr2.length; i += 2) {
    console.log(arr2.slice(i, i + 2));
}

// Слейте эти массивы в новый массив:
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
const arr5 = [...arr3,...arr4];
console.log(arr5);