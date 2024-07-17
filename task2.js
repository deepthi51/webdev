alert("guess the number")
let rand=Math.ceil(100*Math.random())
console.log(rand)
let ans=prompt("enter your guess?")
let count=1
while(1)
{
   
    if(rand==ans)
    {
        count=0
        break
    }
    else if(rand<ans)
    {
        ans=prompt("too high ,enter lesser number")
    }
    else
    {
        ans=prompt("too low, try higher number")
    }
}
if(count==0)
{
    alert("correct guess!!")
    console.log("entered crct")
}