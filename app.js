// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

const string1 = 'Something';
const string2 = 'Any';

const isMatch = (str1, str2) => str1[0] === str2[0];

console.log(isMatch(string1, string2));