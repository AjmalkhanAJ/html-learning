function show(a)
{
    c=0;
    while(a)
    {
        c++;
        a=Math.floor(a/10);
    }
    document.getElementById('ss').innerHTML=c;

    }
