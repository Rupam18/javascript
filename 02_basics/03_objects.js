//singleton
//object.create

//object literals

const mySym = Symbol("key1")

const jsuser = {
    name : "rupam",
    "full_name" : "rupam sarangi",
    age : 21,
    location : "banglore",
    [mySym] : "mykey1",
    email :"rupam2001@gmail.com",
    isloggedin : false,
    lastloggedin :["monday","tuesday"]

}

//console.log(jsuser.name);
//console.log(jsuser.email)
//console.log(jsuser["email"]);
//console.log(jsuser["full_name"]);
//console.log(jsuser.mySym);
//console.log(typeof jsuser.mySym);
//console.log(jsuser[mySym]);

jsuser.email = "rupamsarangi300@gmail.com"
Object.freeze(jsuser)
jsuser.email = "rupam@30ruppes"
//console.log(jsuser);

jsuser.greeting = function() {
    console.log('Hello js user')
}

jsuser.greetingtwo = function(){
    console.log('Hello js user , ',$,{this:name});
}
console.log(jsuser.greeting);
console.log(jsuser.greetingtwo);