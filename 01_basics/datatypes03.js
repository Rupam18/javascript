// 2 types of data primitive and non primitive
// primitive is of 7 types = string , boolean, number, null, undefined, symbol , bigint

const score =100
const scorevalue =100.4

const isloggedin = false
const outtemp = null
let useremail;

const id =Symbol('123')
const anotherid = Symbol('123')
console.log(id ===anotherid);

const bignumber = 234872369823920n


//reference (non primitive )
// array ,object, functions

const heros = ["rupam", "don"];
let myObj ={
    name : "rupam",
    age : 22

}
const myfunction = function(){
    console.log("hello world");
}