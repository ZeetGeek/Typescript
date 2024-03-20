// way yo define array in typescript.

// string array
const greeting: string[] = ["hello", "hy", "how are you"];

// number array
const marks: number[] = [20, 40, 65];

// boolean array
const isPassed: boolean[] = [true, false, true];

// add object into array

type userInfoProps = {
    name: string;
    email: string;
};

const userInfo: userInfoProps[] = [];

userInfo.push({
    name: "john",
    email: "john@gmail.com",
});

// how to add array into array

const favMovies: string[][] = [
    ["lala land", "cars 3"],
    ["avatar", "avengers"],
    ["interstellar", "titanic"],
];

console.log(favMovies[0][1]);

// remember ----------------------- //

const favHeros: string[] = [];

favHeros.push("bat man");
// if you wan't push any value in array first define it's inset to array in my case it's a [string[]] because by default array has [any[]] inset and any it's not good practice.

export {};
