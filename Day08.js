//ES6+ features javascript


let name = "john doe";
let age = 18;

console.log(`name : ${name}
age : ${age}
    `);

//destructuring array to extract excat first and the second
const array = [1, 2, 3, 4, 5];
const [x, y] = array;
console.log(`First number : ${x}
Second number : ${y}`);

//destructuring object to extract title and author from book object
let BOOK = {
  title: "Can't Hurt Me",
  author: "David Goggins",
};
const { title, author } = BOOK;
console.log(title);
console.log(author);

//spread operator ...
const arr_1 = [2, 4, 6, 8, 10];
const arr_2 = [...arr_1, 12, 14, 16];
console.log(arr_2);

function arbitary(...a) {
  return a.reduce((acc, curr) => acc + curr, 0);
}

console.log(arbitary(10, 200, 40));

//default parameter

function abc(i, j = 1) {
  return i + j;
}

//when second argument is passed
console.log(abc(1, 2));
//when second argument is not passed
console.log(abc(1));

//enhanced object literals - basically you can add predefined variables in the object

var name_1 = "maharushi";
var age_1 = 89;
var key_1 = 'name';
var key_2 = 'age';
const obj = {
  [key_1]: name_1,
  [key_2]: age_1,
};
console.log(obj);

