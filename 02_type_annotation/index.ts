// ===== noEmitOnError ===== //
/** to enable no emit on error on typescript first create tsconfig.json and in tsconfig.json comment out noEmitOnError */

const age: number = 20;
const myName: string = "John";

const numRandom: number = Math.random();
const stringRandom: string = Math.random().toString();
const notNumber: number = NaN;

const firstName: string = "John";
const lastName: string = "Deo";

const fullName: string = `${firstName} ${lastName}`;
console.log(typeof notNumber);
console.log(`hy there my name is ${myName} and my age is ${age}`);
console.log(fullName);
