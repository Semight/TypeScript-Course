// THE ANY TYPE
// let sales = 123_456_789;
// let course= 'TypeScript';
// let is_published = true;

// THE ARRAY
// let numbers: number[] = [];
// numbers.forEach(n => n.toExponential)

// THE TUPLES
// let user: [number, string] = [1, 'David'];

// ENUMMS
//  const enum Size { Small = 1, Medium, Large };
// let mySize: Size = Size.Medium;
// console.log(mySize);

// FUNCTIONS
// function calculateTax(income: number, taxYear = 2022): number {
//     if (taxYear < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }
// calculateTax(10_000);

// OBJECTS
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: 'David',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }

// TYPE ALIASES
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }
// let employee: Employee = {
//     id: 1,
//     name: 'David',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }

// UNIONS AND INTERSECTIONS
// function kgToLbs(weight: number | string): number {
//     //Narrowing
//     if (typeof weight === 'number')
//         return weight * 2.2;
//     else
//         return parseInt(weight) * 2.2;
// }
// kgToLbs(10);
// kgToLbs('10kg');

// TYPE NARRAWOWING
// type Draggable = {
//     drag: () => void
// };
// type Resizable = {
//     resize: () => void
// };
// type UIWidget = Draggable & Resizable;
// let textBox: UIWidget = {
//     drag: () => { },
//     resize: () => { }
// }

// LTERAL TYPES
//Literal (exact, specific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// NULLABLE TYPES
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(undefined);

// OPTIONAL CHAINING
type Customer = {
    birthday: Date
};
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
// if (customer !== null && customer !== undefined)
console.log(customer?.birthday);

// Optional element access operator
// customers?.[0]

//Optional call
let log: any = null;
log?.('a');