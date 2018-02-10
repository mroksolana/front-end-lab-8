var n = prompt("Please, enter natural number, which is less than 21:", 20);
var i, j, k;

if (n>0 && n<=20) { 

for (i=1; i<=n; i++)
{
    for (j=i; j<n; j++)
    {
        console.log(" ");
    }
    for (k=1; k<(i*2); k++)
    {
        console.log("[~]");
    }
    console.log('\n');
}












} else console.error("Incorect Date")


