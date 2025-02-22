const sum = (n) =>{
    let r =0;
    while (n>0){
      r+=n%10;
      n=Math.floor(n/10);
    }
    return r;
    
}
module.exports=sum;