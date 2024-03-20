// adding type annotation on function

// 01 way one using normal function

function userInfo(name: string, email: string, password: string): string {
    return `Name: ${name}, Email: ${email}, Password: ${password}`;
}

console.log(userInfo("john", "john@google.com", "123456"));

// 02 way two using arrow function
const userDetails = (name: string, email: string, password: string): string => {
    return ` Name: ${name}, Email: ${email}, Password: ${password}`;
};

console.log(userDetails("james", "james@google.com", "654321"));

// default

const studentInfo: Array<{ id: number; name: string; favMovies: string[] }> = [
    {
        id: 0,
        name: "John",
        favMovies: ["lala", "lala"],
    },
    {
        id: 0,
        name: "John",
        favMovies: ["lala", "lala"],
    },
];

console.log(studentInfo);

// void and never return

// void mens a function return nothing.

const myFavHero = (hero: string): void => {
    // if you can't return any thing on function then please define [ void ]
    console.log(`hy there... my favorite hero is ${hero}`);
};

myFavHero("Bat Man");

// never mens a function never return a value.

const consoleErr = (msg: string): never => {
    // if the function never return a value then please define [ never ]
    // for handling errors we use never instead
    throw new Error(msg);
};

consoleErr("something went wrong");
