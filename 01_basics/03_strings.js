const name ="rupam"
const repocount = 50
//console.log('hello my name is ${name} and my repocount is ${repocount} ');


const gamename = new String ("rupam-don")

//console.log(gamename[0]);
//console.log(gamename.__proto__);

//console.log(gamename.length);

//console.log(gamename.toUpperCase());

//console.log(gamename.charAt(3));

//console.log(gamename.indexOf('r'))

const newString =gamename.substring(0,4) //we cannot use negative values in substring it can only be used in slice operation 
//console.log(newString)

const anotherstring = gamename.slice(-7,1)
console.log(anotherstring);

const nestr = '  rupam'
console.log(nestr)
console.log(nestr.trim());

const url ="https://rupam.com/rupam%20sarangi"
console.log(url.replace('%20','-'));
console.log(url.includes('rupam'));

console.log(gamename.split('-'));