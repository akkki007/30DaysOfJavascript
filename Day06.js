let a = [1, 2, 3, 4, 5];
console.log(a);
console.log(a[0]);
console.log(a[a.length - 1]);

let arr = [2, 3, 4, 56, 7];
// arr.map((elem, ind) => {
//   console.log(`Index : ${ind} > Element : ${elem}`);
// });

let result = arr.filter((elem) => elem % 2 == 0);
console.log(result);


const arr_1 = [10,30,20];

const res = arr_1.reduce((prev,acc)=>prev+acc)
