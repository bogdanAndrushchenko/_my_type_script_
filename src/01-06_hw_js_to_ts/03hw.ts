const connect = "connect 03"

///task 1

// interface User{
//     name:string
//     age:number
//     hobby:string
//     premium: boolean
//     // [key:string]:string
// }
// const user:User = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
// // user.mood = "happy" !!!!
// user.hobby = 'skydiving';
// user.premium=false;
//
// for(let [key,value] of Object.entries(user)){
//     console.log(key, value)
// }

/// task 2

// type T_countProps = (obj: object) => number
// const countProps: T_countProps = (obj) => Object.keys(obj).length;
//
// console.log(countProps({})); // 0
// console.log(countProps({name: 'Mango', age: 2})); // 2
// console.log(countProps({mail: 'poly@mail.com', isOnline: true, score: 500})); // 3

///task 3

// type T_findBestEmployee = (employee:object)=>string;
//
// const findBestEmployee:T_findBestEmployee = (employees) =>{
//     const entries = Object.entries(employees)
//     let nameE = '';
//     let index = 0;
//     for(const [name, value] of entries){
//         if(index<=value){
//             nameE = name
//         }
//     }
//     return nameE
// };
//
// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

///task 4

// type T_countTotalSalary = (employees: object) => number;
//
// const countTotalSalary: T_countTotalSalary = (employees) => {
//     const salaries: number[] = Object.values(employees);
//     return salaries.reduce((a, e) => a + e, 0)
// };
//
// console.log(countTotalSalary({})); // 0
// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80,
//     }),
// ); // 330
// console.log(
//     countTotalSalary({
//         kiwi: 200,
//         lux: 50,
//         chelsy: 150,
//     }),
// ); // 400

//// task 5

// const products = [
//     {name: 'Радар', price: 1300, quantity: 4},
//     {name: 'Сканер', price: 2700, quantity: 3},
//     {name: 'Дроид', price: 400, quantity: 7},
//     {name: 'Захват', price: 1200, quantity: 2},
// ];
// interface Obj {
//     name: string
//     price: number
//     quantity: number
// }
// type T_getAllPropValues = (arr: Obj[], prop: string) => string[] | number[];
// const getAllPropValues:T_getAllPropValues =  (arr, prop) =>{
//     const findProp:object[] = arr.filter((el)=>Object.keys(el).includes(prop))
//     let totalPrice = [];
//     for (const el of arr) {
//         if (el[prop]) {
//             totalPrice.push(el[prop])
//         }
//     }
//     return findProp.length !==0
//         ? arr.map(el=>el[prop])
//         :findProp
// };
//
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []

/// task 6

// const products = [
//     {name: 'Радар', price: 1300, quantity: 4},
//     {name: 'Сканер', price: 2700, quantity: 3},
//     {name: 'Дроид', price: 400, quantity: 7},
//     {name: 'Захват', price: 1200, quantity: 2},
// ];
//
// interface Obj {
//     name: string
//     price: number
//     quantity: number
// }
//
// type T_calculateTotalPrice = (allProducts: Obj[], productName: string) => number
// const calculateTotalPrice: T_calculateTotalPrice = function (allProdcuts, productName) {
//     // const product:object = allProdcuts.find((el)=> el.name === productName )
//     let totalPrice = 0;
//     for (const {price,quantity, name} of allProdcuts) {
//         if (name === productName) {
//             totalPrice = price * quantity
//         }
//     }
//     return totalPrice
// };
// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

///task 7

// enum TypeTransaction {
//     DEPOSIT = 'deposit',
//     WITHDRAW = 'withdraw',
//     ERROR = 'not found'
// }
//
// interface ITransaction {
//     id: number
//     type: TypeTransaction.DEPOSIT | TypeTransaction.WITHDRAW
//     amount: number
// }
//
// interface IAccount {
//     balance: number
//     transactions: ITransaction[]
//
//     _createTransaction(amount: number, type: TypeTransaction.DEPOSIT | TypeTransaction.WITHDRAW): ITransaction
//
//     deposit(amount: number): void
//
//     withdraw(amount: number): void
//
//     getBalance(): number
//
//     getTransactionDetails(iD: number): ITransaction | TypeTransaction.ERROR
//
//     getTransactionTotal(type: TypeTransaction.DEPOSIT | TypeTransaction.WITHDRAW): number
//
// }
//
// const account: IAccount = {
//     balance: 0,
//     transactions: [],
//
//     _createTransaction(amount, type) {
//         const id = Math.round(Math.random()*100)
//         const transaction = {id, type, amount};
//         return transaction
//     },
//
//     deposit(amount) {
//         this.transactions.push(this._createTransaction(amount, TypeTransaction.DEPOSIT))
//         this.balance = this.balance + amount
//     },
//
//     withdraw(amount) {
//         if (this.balance > amount) {
//             this.transactions.push(this._createTransaction(amount, TypeTransaction.WITHDRAW))
//             this.balance = this.balance - amount
//         }else
//         console.log('снятие такой суммы не возможно, недостаточно средств')
//     },
//
//     getBalance() {
//         return this.balance
//     },
//
//     getTransactionDetails(iD) {
//         const transaction: ITransaction | undefined = this.transactions.find(({id}) => id === iD)
//         return transaction ? transaction : TypeTransaction.ERROR
//     },
//
//     getTransactionTotal(Type) {
//         return this.transactions
//             .filter(({type}) => type === Type)
//             .reduce((a, {amount}) => a + amount, 0)
//     },
// };
// console.log(account.withdraw(37),'withdraw')
// console.log(account.deposit(126),'deposit')
// console.log(account.deposit(426),'deposit')
// console.log(account.deposit(26),'deposit')
// console.log(account.deposit(226),'deposit')
// console.log(account.getBalance(),'getBalance')
// console.log(account.withdraw(27),'withdraw')
// console.log(account.withdraw(37),'withdraw')
// console.log(account.withdraw(47),'withdraw')
// console.log(account.withdraw(57),'withdraw')
// console.log(account.getBalance(),'getBalance')
// console.log(account.transactions,'transactions')
// console.log(account.getTransactionTotal(TypeTransaction.DEPOSIT),'Total')
// console.log(account.getTransactionTotal(TypeTransaction.WITHDRAW),'Total')
// console.log(account.getTransactionDetails(95))
export {connect}