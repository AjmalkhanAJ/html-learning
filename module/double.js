const pal = (num)=>{
    let a = num;
    let r = 0;
   while(num>0){
        r=r*10+num%10;
        num=Math.floor(num/10);
   }
   return a == r?true:false;
}

const pri = (num) =>{
        let i=2,f=true;
    while(i<=Math.floor(num)){
        if(num%i==0){
            f=false;
            break
        }
        i++;
    }
    return f;
}

module.exports={
    prime:pri,
    palind:pal
}