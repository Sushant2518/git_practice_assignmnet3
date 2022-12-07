let factor = 0;
let num = 13;

for(let i=1; i<=num; i++)
{
    if(num % i == 0)
	{
	    factor++;	
	}
}

if(factor == 2)
{
    console.log("Yes");	
}
else
{
    console.log("No");
}