function saymyname () {
    console.log("R");
    console.log("U");
    console.log("P");
    console.log("A");
    console.log("M");
}
//saymyname()

//function  addtwonumber (number1, number2) {
//    console.log(number1+ number2);
//}

//addtwonumber(3,5)
function  addtwonumber (number1, number2) {
    //let result =number1 + number2
    //return result
}
const result = addtwonumber(3,5)

//console.log("result :", result);

function loginusermessage (username){
 if (username === undefined){
    console.log("please enter a username ");
    return
 }
 else
 return username + " just logged in"
}

//console.log(loginusermessage("rupam"));
//console.log(loginusermessage("RUPAM"))

///////////////////////////////////////////========================================
function calculatecartprice (val1,val2, ...num1){
  return num1
}
//console.log(calculatecartprice(200,400,600,3000));

const user = {
  username: "rupam",
  prices : 200
}
function  handleObject(anyobject){
  console.log('username is ${anyobject.username and price is ${anyobject.price}');

}
handleObject(user)
handleObject({
  username: "sam",
  price : 399

})

const mynewarray = [200,400,100,600]
function returnSecondvalue (getarray){
  return getarray[1]
}

console.log(returnSecondvalue(mynewarray));