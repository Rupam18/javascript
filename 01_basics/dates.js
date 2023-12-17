// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let mycreateddate = new Date(2023, 0, 23, 5,3)
//console.log(mycreateddate);
//console.log(mycreateddate.toDateString());
//console.log(mycreateddate.toLocaleString());
let mycreateddate = new Date("2023-12-15")
//console.log(mycreateddate.toLocaleString());

let mytimestamp = Date.now()
//console.log(mytimestamp);
//console.log(mycreateddate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday : "long",
})