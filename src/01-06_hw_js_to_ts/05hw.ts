const connect = "connect 05"
////TypeScript Classes time code 1.36.55
/// task 1
// interface IParam {
//     login: string,
//     email: string
// }
//
// type account = (login:string, email:string) => object
// const Account: account = function (login, email) {
//     return{
//         login,
//         email
//     }
// }
//
//
//  console.log(Account.prototype.getInfo); // function
//
// const mango = new Account(
//     'Mangozedog',
//      'mango@dog.woof',
// );
//
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
//
// const poly = new Account({
//     login: 'Poly',
//     email: 'poly@mail.com',
// });
//
// poly.getInfo(); // Login: Poly, Email: poly@mail.com
//////task 2

/**
 * Напиши класс User для создания пользователя со следующим свойствами:
 name - строка
 age - число
 followers - число
 Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers
 */
type GetInfo = () => string

interface IUserParams {
    name: string,
    age: number,
    followers: number,
}

interface IUser {
    name: string
    age: number
    followers: number
    getInfo: GetInfo
}


class User implements IUser {
    name: string
    age: number
    followers: number

    constructor({name, age, followers}: IUserParams) {
        this.name = name
        this.age = age
        this.followers = followers

    }

    getInfo = () => {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    }
}

const user1:IUser = new User({name: 'vasja', age: 5, followers: 77})
const user2:IUser = new User({name: 'scjopa', age: 7, followers: 99})
console.log(user1.getInfo(), "user1")
console.log(user2.getInfo(), "user1")

//// task3
/**
 * Напиши класс Storage, который будет создавать объекты для управления складом товаров.
 * При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

 Добавь методы класса:

 getItems() - возвращает массив текущих товаров
 addItem(item) - получает новый товар и добавляет его к текущим
 removeItem(item) - получет товар и, если он есть, удаляет его из текущих
 * */

type GetItems = () => string[]
type AddItem = (item: string) => void
type RemoveItem = (item: string) => void

interface IStorage {
    items: string[]
    getItems: GetItems
    addItem: AddItem
    removeItem: RemoveItem
}

class Storage implements IStorage {
    items: string[]

    constructor(items: string[]) {
        this.items = items
    }

    getItems: GetItems = () => this.items
    addItem: AddItem = (item) => {
        this.items.push(item)
    }
    removeItem: RemoveItem = (item) => {
        if (!this.items.includes(item)) console.log(`not ${item}`);
        this.items = this.items.filter(el => el !== item)
    }
}

const stor1 = new Storage(['qwe', 'ewq', 'wer'])
console.log(stor1.addItem('per'))
console.log(stor1.removeItem('peg'))
console.log(stor1.removeItem('per'))
console.log(stor1.getItems())

export {connect}