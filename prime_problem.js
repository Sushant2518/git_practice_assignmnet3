let counter = 0;

for(let i=0; i<=n-1; i++)
{
    if(num % i == 0)
	{
	    counter++;	
	}
}

if(counter == 2)
{
    console.log("Yes");	
}
else
{
    console.log("No");
}