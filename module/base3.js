const mul = require("./double.js");

let num = Number(process.argv[2]);

if (mul.kkprime(num) && mul.palind(num)){
    console.log("prime pal");
}
else{
    console.log("not");
}

