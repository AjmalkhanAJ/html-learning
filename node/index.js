



function sk(n){
    if(n==1){
        return 1;
    }
    else{
        return n*sk(n-1);
    }
}
console.log(sk(3))


let num=(a,b)=>{return a+b}
console.log(num(1,2));