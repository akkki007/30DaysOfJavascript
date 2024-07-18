// let string = "javascript";
// const stringCheck = () => {
//   let charCheck = "a";
//   if (string.includes(charCheck)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// if(stringCheck){
//     console.log("apka character hai");
// }
// else{
//     console.log("nahi hai");
// }



//higher order functions
/*
function func1(){
    console.log("Hii");
}

const func = function(exFunc){
    return function(n){
        while(n!=0){
            exFunc();
            n--;
        }
    }
}


const child = func(func1); //this parameter goes to the parent function

child(10);   > this parameter goes to the function returned by the parent fn as per the high order function     
*/

const fn1 = (val)=>{
    return val*val;
}

const fn2 = (result)=>{
    console.log(`Result from function 1 : ${result}`);
}

const high_order = function(fn1,fn2){
    return function(value){
        var result = fn1(value);
        fn2(result);
    }
}

const test = high_order(fn1,fn2);

test(10);



