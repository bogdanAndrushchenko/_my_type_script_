import {arr, IArray} from "./users";

export const connect = "connect 06"

type GetUserNames = (users: IArray[]) => string[]
type FilteredArr = (users: IArray[], color: string) => IArray[]
const getUserNames: GetUserNames = users => users.map(el => el.name);

console.log(getUserNames(arr));

const getUsersWithEyeColor: FilteredArr = (users, color) => {
    return users.filter(el => el.eyeColor === color)
};
const getUsersWithGender = (users:IArray[] , gender: string) => {
    return users.filter(el => el.gender === gender).map(e => e.name)
};
const getInactiveUsers = (users: IArray[]) => {
    return users.filter(el => !el.isActive)
};
const getUserWithEmail = (users: IArray[], email: string) => {
    return users.find(el => el.email === email)
};
const getUsersWithAge = (users: IArray[], min: number, max: number): IArray[] => {
    return users.filter(el => el.age >= min && el.age <= max)
};


const s = getUsersWithGender(arr, 'male')
console.log(s, 's')
console.log(getUsersWithGender(arr, 'male'));
console.log(getUsersWithEyeColor(arr, 'blue'));
console.log(getInactiveUsers(arr), '!isActive');
console.log(getUserWithEmail(arr, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(arr, 'elmahead@omatom.com'));
console.log(getUsersWithAge(arr, 20, 30));
console.log(getUsersWithAge(arr, 30, 40));
const a = {a: 1, b: 2}
const b = {a: 1, b: 2}
console.log(Object.is(1, b))
