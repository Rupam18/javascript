//objects 

//const tinderuser =new object ()

const tinderuser = {}
tinderuser.id ="123abs"
tinderuser.name = "rupam"
tinderuser.isloggedin = false

//console.log(tinderuser);

const regularuser = {
    email : "rupamsarangi200@gmail.com",
    full_name :{
        username :{
            firstname :"rupam",
            lastname : "sarangi"
        }
    }
}

//console.log(regularuser.full_name);
//console.log(regularuser.full_name.username);
//console.log(regularuser.full_name.username.firstname);

const obj1 ={1: "a", 2:"b"}
const obj2 ={3: "a", 4:"b"}
const obj3 ={5: "a", 6:"b"}

//const obj4 =Object.assign({},obj1,obj2,obj3)

const obj4 ={...obj1,...obj2}

//console.log(obj4);

console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin'));