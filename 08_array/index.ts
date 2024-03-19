// how to use type annotation in array

// 01 : Way One
const avengers: string[] = ["Thor", "Captain America", "Hulk"];

// 02 : Way Two
const new_avengers: string[] = new Array("Thor", "Captain America", "Hulk");

// types of array annotation on typescript

// string type
const str_array: string[] = ["hello", "hi", "how are you"];

// number type
const num_array: number[] = [22, 33, 45.45, -29];

// boolean type
const boo_array: boolean[] = [true, false, true];

// mix type
const mix_array: (string | number | boolean)[] = ["John", 18, true];
