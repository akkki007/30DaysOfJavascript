var num = 10.9;
console.log(num);
let naam = "akshay";
console.log(naam);

const isMale = true;
console.log(isMale);

let arr = [10, 20, 30];
let obj = {
  name: "akki",
  age: 18,
};
let bool = false;
console.log(arr, "is type of > ", typeof arr); // in javascript array is also treated as an object
console.log(obj, "is type of > ", typeof obj);
console.log(bool, "is type of > ", typeof bool);
console.log(naam, "is type of > ", typeof naam);
console.log(num, "is type of > ", typeof num); //here there is only one datatype for every type of number including floating point number

let variable = 10;
console.log(variable);
variable = 203;
console.log(variable);

const val = arr.length;
//constant variable can be assigned a value once
/* 
> val = 10; 
> it will give this error 
=> TypeError: Assignment to constant variable.*/

const behaviour = () => {
    let tara = 10;
    tara = 10/10;
    console.log(tara);
    const varan = 203123/23;
    varan = 10;
    console.log(varan);
};
behaviour()