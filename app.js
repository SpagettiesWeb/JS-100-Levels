// Заполните массив целыми числами от 1 до 10.
const arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);

// Заполните массив четными числами из промежутка от 1 до 100.
const arr2 = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        arr2.push(i);
    }
}
console.log(arr2);

// Округлите эти дроби до одного знака в дробной части.
const arr3 = [1.456, 2.125, 3.32, 4.1, 5.34];
const arr3Rounded = arr3.map(el => Number(el.toFixed(1)));
console.log(arr3Rounded);
