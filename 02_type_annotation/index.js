"use strict";
// ===== noEmitOnError ===== //
/** to enable no emit on error on typescript first create tsconfig.json and in tsconfig.json comment out noEmitOnError */

// ==== enable es2022 on typescript ==== //
/** first open tsconfig.json and search for target default it's es2016 change into latest version in my case it's es2022 also copy es2022 value and change into lib and also add DOM into lib */

const age = 20;
const myName = "John";
const numRandom = Math.random();
const stringRandom = Math.random().toString();
const notNumber = NaN;
const firstName = "John";
const lastName = "Deo";
const fullName = `${firstName} ${lastName}`;
console.log(typeof notNumber);
console.log(`hy there my name is ${myName} and my age is ${age}`);
console.log(fullName);
