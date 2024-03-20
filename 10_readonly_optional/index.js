// 01 what is readonly ------------------- //
var myFavHero = {
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
var favMovie = {
    name: "avatar",
    director: "james cameron",
};
var studentDetail = {
    name: "John",
    age: 18,
    isPassed: true,
    rollNum: 20,
    favSubject: "Computer",
};
console.log(studentDetail.name + " ||" + studentDetail.age);
