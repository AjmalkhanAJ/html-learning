let a=6,i=1,s=0,n=0;
do
{
    if(i%2==0)
        s+=i
    else
    n+=i
   i++;
}
while(i<=a)
    console.log("odd sum:"+n)
    console.log("even sum:"+s)