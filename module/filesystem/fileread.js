// const fs=require('fs');
// let input = "welcome to vjsiddhu vlogs";
// fs.writeFile('dynamic.txt',fInput,(err)=>{
//     if (err)throw err;
//     else{
//         console.log("this file is updated with given data");
//     }
// })

var fs = require ('fs')
fs.appendFile('dynamic.txt', '\n ',(err)=>{
    if (err) throw err;
    console.log('vanakkam!');
});