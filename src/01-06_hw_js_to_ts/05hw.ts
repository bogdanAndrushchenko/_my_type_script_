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

const user1: IUser = new User({name: 'vasja', age: 5, followers: 77})
const user2: IUser = new User({name: 'scjopa', age: 7, followers: 99})
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

////task 4
/**
 * Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

 Добавь классу следующий функционал:

 Геттер value - возвращает текущее значение поля _value
 Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
 Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
 Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
 * */

type Added = (str: string) => void

interface IStringBuilder {
    value: string
    append: Added
    prepend: Added
    pad: Added
}

class StringBuilder implements IStringBuilder {
    private _value: string

    constructor(value: string) {
        this._value = value
    }

    get value(): string {
        return this._value
    }

    append: Added = (str) => this._value = this._value + str
    prepend: Added = (str) => this._value = str + this._value
    pad: Added = (str) => this._value = str + this._value + str
}

const builder: IStringBuilder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'
//
// builder.prepend('^');
// console.log(builder.value); // '^.^'
//
// builder.pad('=');
// console.log(builder.value); // '=^.^='

////task 5
interface ICarParams {
    speed?: number
    price: number
    maxSpeed: number
    isOn?: boolean
    distance?: number
}

interface ICar extends ICarParams {
    // price(pr: number): void

    turnOn(): void

    turnOff(): void

    accelerate(value: number): void

    decelerate(value: number): void

    drive(hours: number): void
}

class Car implements ICar {
    static getSpecs = (car: ICarParams) => {
        console.log(car.maxSpeed, car.speed, car.isOn, car.distance, car.price)
    }

    speed: number
    private _price: number
    maxSpeed: number
    isOn: boolean
    distance: number

    constructor({
                    speed = 0,
                    price,
                    maxSpeed,
                    isOn = false,
                    distance = 0
                }: ICarParams) {
        this.speed = speed
        this._price = price
        this.maxSpeed = maxSpeed
        this.isOn = isOn
        this.distance = distance
    }

    get price(): number {
        return this._price
    }

    set price(pr: number) {
        this._price = pr
    }

    turnOn(): void {
        this.isOn = true
    }

    turnOff(): void {
        this.isOn = false
        this.speed = 0
    }

    accelerate(value: number): void {
        if (this.speed + value <= this.maxSpeed) {
            this.speed = this.speed + value
        }
    }


    decelerate(value: number): void {
        if (this.speed - value >= 0) {
            this.speed = this.speed - value
        }
    }

    drive(hours: number): void {
        if (!this.isOn) return
        this.distance = this.distance + this.speed * hours
    }
}

const mustang: ICar = new Car({maxSpeed: 200, price: 2000});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000