// Дан массив с числами. Найдите сумму квадратов элементов этого массива.
const arr = [1,2,3,4,5];
const sum = arr.reduce((acc, el) => acc + el**2,0);
console.log(sum);

// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
const arr2 = [4, 16, 25, 36];
const sum2 = arr2.reduce((acc, el) => acc + Math.sqrt(el), 0);
console.log(sum2);

// Дан массив с числами. Найдите сумму положительных элементов этого массива
const arr3 = [1, -5, -10, 15, 32, 63, -350];
const sum3 = arr3.reduce((acc, el) => {
    if (el > 0) {
        return acc + el;
    } else {
        return acc;
    }
}, 0);
console.log(sum3);

// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
const arr4 = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16];
const sum4 = arr4.reduce((acc, el) => {
    if (el > 0 && el < 10) {
        return acc + el;
    }
    return acc;
}, 0)
console.log(sum4);