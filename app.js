// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://
const arr = [
    'http://a.co', 'http://x.io',
    'http://q.gs', 'http://t.ly',
    'Any', 'Rofls', 'Kek',
    'http://u.nu', 'http://v.gd',
    'Something'
];

const arrLinks = arr.filter(str => str.startsWith('http://'));
console.log(arrLinks);

// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
const arr2 = [
  "index.html", "42",
  "about.html", "7",
  "contact.html", "100",
  "blog.html", "3.14",
  "portfolio.html", "-5"
];
const arr2Html = arr2.filter(str => str.endsWith('.html'));
console.log(arr2Html);

// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
const numsArr = [1,2,3,4,5,6,7,8,9,10];
const numsArrPercent = numsArr.map(num => Number((num + num /10).toFixed(1)));
console.log(numsArrPercent);
