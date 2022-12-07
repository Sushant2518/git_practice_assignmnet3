let counter = 0;
let number = 13;

for(let i=1; i<=number; i++)
{
    if(number % i == 0)
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