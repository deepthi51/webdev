let n=prompt("enter f to conver into fahereheit else c: ")
n=n.toLowerCase()
console.log(n)
let ans=0

if(n=="f")
{
    let n1= prompt("enter in Celsius :")
    console.log(n1)
    ans=(n1 * 9/5)+32
    console.log(ans)
    alert(ans)
     
}
else
{
    let n2=prompt("enter in Fahrenheit:")
    console.log(n2)
    ans=(n2-32)*5/9
    console.log(ans)
    alert(ans)
}



