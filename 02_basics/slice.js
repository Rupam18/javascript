const myarr =[0,1,2,3,4]
console.log('a',myarr);

const myn1 = myarr.slice(1,3)
console.log(myn1);

console.log("B",myarr);

const myn2 = myarr.splice(1,3)
console.log("c",myarr);
console.log(myn2);


//in slice operation it changes the call by value i.e the copy of an array 
//in splice it changes the original value of the array
