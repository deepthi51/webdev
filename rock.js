
let rand=Math.ceil(3*Math.random());
console.log(rand);
let ans=prompt("1==rock 2==scissors 3==paper enter your choice");
console.log(ans);
 if(ans==1 && rand==2)
    console.log("you lost:( try again");
else if(ans==2 && rand==3)
    console.log("you lost:( try again");
else if(ans==3 && rand==1)
    console.log("you lost:( try again");
else if(ans==rand)
    console.log("tie");
else
console.log("Congrats you won!!");