const connect = "connect 04"

///task 1
interface I_account {
    owner: string
    balance: number
    discount: number
    orders: string[]
    changeDiscount(value:number) :void
showOrders() :string[]
addOrder(cost:number, order:string) :void
}

const account:I_account = {
    owner: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['order-1', 'order-2', 'order-3'],
    changeDiscount(value) {
        this.discount = value;
    },
    showOrders() {
        return this.orders;
    },
    addOrder(cost, order) {
        this.balance -= cost;
        this.orders.push(order);
    },
};

account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
console.log(account.balance); // 19000
console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// task 2

interface I_inventory {
    items: string[]
    add(itemName: string): void
    remove(itemName: string): void
}

type callback = (itemName: string)=> void;
type func = (itemName:string, action:callback)=> void;

const inventory:I_inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
        console.log(`Adding ${itemName} to inventory`);

        this.items.push(itemName);
    },
    remove(itemName) {
        console.log(`Removing ${itemName} from inventory`);

        this.items = this.items.filter(item => item !== itemName);
    },
};

const invokeInventoryAction:func = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action.call(inventory,itemName)
};

invokeInventoryAction('Medkit', inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']

export {connect}