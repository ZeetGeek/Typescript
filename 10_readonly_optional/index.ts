// 01 what is readonly ------------------- //

type myFavHeroProps = {
    readonly name: string;
    age: number;
    movie: string;
};

const myFavHero: myFavHeroProps = {
    name: "christian bell",
    age: 45,
    movie: "ban man",
};

// readonly mens you can only use this value but can't modify it. here is the example/

// without read only i can modify value of my object like this.
// myFavHero.name = "tom cruise";

// but when i use [readonly] keyword before the name on myFavHeroProps type aliases it's give me an error i can't change name of variable like this
// myFavHero.name = "tom cruise"; // error

console.log(myFavHero.name);

// 02 what is optional ------------------- //

type favMovieProps = {
    name: string;
    director: string;
    totalEarn?: number;
};

const favMovie: favMovieProps = {
    name: "avatar",
    director: "james cameron",
};

// in this example i don't know what is totalEarn value so i can assign into variable so type aliases give me an error.
// but when i use [?] before the : colon this property is converted into optional that mean now it's ok if i don't write this property on object.

// how to combine two or more then two type aliases -------------------------------- //

type stuName = {
    name: string;
};
type stuAge = {
    age: number;
};
type stuIsPassed = {
    isPassed: boolean;
};

type stuDetail = stuName &
    stuAge &
    stuIsPassed & {
        rollNum: number;
        favSubject: string;
    };

const studentDetail: stuDetail = {
    name: "John",
    age: 18,
    isPassed: true,
    rollNum: 20,
    favSubject: "Computer",
};

console.log(studentDetail.name + " ||" + studentDetail.age);

// so in this example you see we can combine two or more then two type aliases by using [&].

export {};
