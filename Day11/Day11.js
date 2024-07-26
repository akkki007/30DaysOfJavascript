// let promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     return res("promise bro");
//   }, 2000);
// });

// promise.then(function (data) {
//   console.log(data);
// });

// let promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     return rej(new Error("Promise rejected after 2 seconds"));
//   }, 2000);
// });

// promise1.catch((error) => {
//   console.error(error);
// });

// let p1 = new Promise(function(res,rej){
//     return res("1st promise")
// })

// let p2 = p1.then(function(data){
//     console.log(data);
//     return new Promise((res,rej)=>{
//         return res("2nd promise")
//     })
// })

// async function promised(){
//     let promise = new Promise((res,rej)=>{
//         return res("Last promise");
//     })
//     await promise.then(function(data){
//         console.log(data);
//     })
// }
// promised();

// async function rejected(){
//     try{
//         await rejectedPart()
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }
// rejected();

// async function rejectedPart(){
//     return new Promise((res,rej)=>{
//         rej(new Error("This promise is rejected due to some reasons"))
//     })
// }
//https://dogapi.dog/api/v2/facts
//fetch api
// let pro = new Promise((resolve, reject) => {
//     fetch('https://dogapi.dog/api/v2/facts')
//       .then(response => {
//         if (!response.ok) {
//           // If the response is not ok, reject the promise
//           reject('Network response was not ok');
//         } else {
//           // Otherwise, parse the response as JSON
//           return response.json();
//         }
//       })
//       .then(data => {
//         // Resolve the promise with the JSON data
//         resolve(data);
//       })
//       .catch(error => {
//         // Catch any errors from fetch or response.json()
//         reject(error);
//       });
//   });
  
//   pro
//     .then(data => {
//       // Log the data received from the promise
//       console.log(data.data[0].attributes.body);
//     })
//     .catch(error => {
//       // Handle any errors from the promise
//       console.error('Error:', error);
//     });
  
//Promise.all
let promise1 = new Promise((res,rej)=>{
    setTimeout(res,100,"hii bro") //here the third argument is passed to resolve container of promise
})
let promise2 = Promise.resolve(3);
let promise3 = 31;
/*
> Promise.all is a static method that takes iterable no of promises as input and returns a single Promise
*/
Promise.all([promise1,promise2,promise3]).then((value)=>{
  console.log(value);
})

/*
> Promise.race is a static method that takes iterable no of promises as input and returns a single promise . This returned
promise settles with the eventual state of the first promise that settles 
> in basic words the first promise that responds will be taken into execution
*/
let player2 = new Promise((resolve,reject)=>{
  setTimeout(resolve,100,"second")
})
let player1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,100,"first")
})


Promise.race(([player1,player2])).then((value)=>{
  console.log(value);
})
//here the player1 will finish first as it resolve in 100 miliseconds which is less then player2
//and if all the promises are resolving at the same time then the promise that is declared first will be executed