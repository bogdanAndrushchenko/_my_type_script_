const connect = 'connect';

/////task 1
type LogItems = (array: string[] | number[]) => void;

const logItems: LogItems = (array) => {
    for (let i = 0; i < array.length; i += 1) {
        console.log(`${i + 1} - ${array[i]}`)
    }
    ;
};
logItems(["Mango", "Poly", "Ajax", "Kiwi", "John", "Vasja"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

////task 2
// interface CalculateEngravingPrice  {
// (message:string, price:number):number
// }
// const calculateEngravingPrice:CalculateEngravingPrice = function(message, pricePerWord) {
//     const words:string[]= message.split(' ')
//     return words.length * pricePerWord
// };
//
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus',
//         10,
//     ),
// ); // 80
//
// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus',
//         20,
//     ),
// ); // 160
//
// console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240
//
// console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

//// task 3

// type FindLongestWord = (string: string) => string;
//
// const findLongestWord: FindLongestWord = function (string) {
//     const words: string[] = string.split(' ')
//     let length: number = 0;
//     let word: string = '';
//     for (let i = 0; i < words.length; i += 1) {
//         if (words[i].length > length) {
//             length = words[i].length;
//             word = words[i]
//         }
//     }
//     return word;
// };
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'

//// task 4
type FormatString = (string: string) => string;
const formatString: FormatString = function (string) {
    let newString: string = '';
    string.length < 40
        ? newString = string
        : newString = `${string.slice(0, 39)}...`
    return newString
};
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);

///// task 5

interface CheckForSpam {
    (message: string): boolean;
}

const checkForSpam: CheckForSpam = function (message) {
    const includes_spam = 'spam';
    const includes_save = 'sale';
    let spam = false
    if (message.toLowerCase().includes(includes_spam) || message.toLowerCase().includes(includes_save)) spam = true
    return spam
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

export {connect, logItems}