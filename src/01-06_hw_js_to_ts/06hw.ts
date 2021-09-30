import {arr, IArray} from "./users";

export const connect = "connect 06"

type GetUserNames = (users: IArray[]) => string[]
type FilteredArr = (users: IArray[], color: string) => IArray[]
const getUserNames: GetUserNames = users => users.map(el => el.name);

console.log(getUserNames(arr));

const getUsersWithEyeColor: FilteredArr = (users, color) => {
    return users.filter(el => el.eyeColor === color)
};
const getUsersWithGender = (users: IArray[], gender: string): string[] => {
    return users.filter(el => el.gender === gender).map(e => e.name)
};
const getInactiveUsers = (users: IArray[]) => {
    return<IArray[]> users.filter(el=>!el.isActive)
};
const getUserWithEmail = (users:IArray[], email:string) => {
    return <IArray>users.find(el => el.email === email)
};

const s: string[] = getUsersWithGender(arr, 'male')
console.log(s, 's')
console.log(getUsersWithGender(arr, 'male'));
console.log(getUsersWithEyeColor(arr, 'blue'));
console.log(getInactiveUsers(arr), '!isActive');
console.log(getUserWithEmail(arr, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(arr, 'elmahead@omatom.com'));