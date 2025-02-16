
function aj(a){
    var c=0;
    var d=-1;
    var b=1;
 while(a){
    c=d+b;
    alert(c)
    d=b;
    b=c;
    a--;
 }
}
aj(10)



// function sk(n){
//     if(n==1){
//         return 1;
//     }
//     else{
//         return n*sk(n-1);
//     }
// }
// console.log(sk(3))


// let num=(a,b)=>{return a+b}
// console.log(num(1,2));