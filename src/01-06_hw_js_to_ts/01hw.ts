const connect ='connect';
////task1

// const name: string = "generator safe network";
// let price: number = 1000;
// console.log(`you bought ${name}, price${price}`)

///task 2
// const success_message: string = "Operation success! :-)";
// const error_message: string = "Operation ERROR!!!"
// let total: number = 100;
// let ordered: number;
// ordered = 1300
// if (ordered > total) console.log(error_message);
// else console.log(success_message);

///task 3
// const PASSWORD_ADMIN: string = '123456';
// let message_for_user: string;
// let user_input: string | null = prompt('Enter your password please!', 'Your' +
//     ' password' +
//     ' here');
// if (user_input === null) {
//     message_for_user = `${error_message} user CANCELED!`;
//     console.log(message_for_user)
// } else if (user_input === PASSWORD_ADMIN) {
//     message_for_user = `${success_message} Welcome!`
//     console.log(message_for_user)
// } else {
//     message_for_user = `${error_message} password is not valid!!!`
//     console.log(message_for_user)
// }

///task 4
// const user_credits = 23580;
// const price_per_dr = 3000;
// // let totalPrice;
// let number_dr: string | null = prompt('How many do you want?', '123');
// !number_dr
//     ? console.log(error_message)
//     : user_credits < price_per_dr * Number(number_dr)
//     ? console.log(`${error_message} not have a money`)
//     : console.log(`${success_message}, you bought ${number_dr} total ${price_per_dr * Number(number_dr)}`)

///task 5
// let country: string | null = prompt("To what country?", "China...");
// const priceToChina = 100;
// const priceToChili = 250;
// const priceToAustralia = 170;
// const priceToIndia = 80;
// const priceToJamaica = 120;
//
// const message_ok: string = `Delivery to ${country}, coast`;
// const message_error = 'In your country not have delivery';
//
// if(!country) {
//     console.log(`${error_message} canceled!!!`)}
// else {
//     switch (country.toLowerCase()) {
//         case 'china':
//             console.log(`${message_ok} price ${priceToChina}`);
//             break
//         case 'chili':
//             console.log(`${message_ok} price ${priceToChili}`);
//             break
//         case 'australia':
//             console.log(`${message_ok} price ${priceToAustralia}`);
//             break
//         case 'india':
//             console.log(`${message_ok} price ${priceToIndia}`);
//             break
//         case 'jamaica':
//             console.log(`${message_ok} price ${priceToJamaica}`);
//             break
//         default:
//             console.log(message_error)
//
//     }
// };

// ///task 6
// let total = 0;
// do {
//     let input: string | null | number = prompt('Enter number!', '1,2,3')
//     if (!input) break
//     input = Number(input);
//     if (Number.isNaN(input)) {
//         console.log('NaN')
//         continue;
//     }
//     total += input;
// } while (true);
// console.log(`total ${total}`)
//
//

export {connect}