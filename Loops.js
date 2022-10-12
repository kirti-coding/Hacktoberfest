//While Loops

let i=1,sum=0;
while(i<11){
sum+=i;
i++;
}
console.log(sum);

//For Loops:-
//for(intialization;consition;updation)

//For loop

for(let i=1;i<10;i++){
    console.log(i);
}

//Do While
let j=1;
do{
console.log(j);
j++;
}while(j<10);
//There are 2 jumping keywords.
//1.Break:- it will break the loop. It can be used inside only loop and switch.
//2.continue:- it will continue the iteration means it will skip a  particular iteration.
//Examples.
for(let i=1;i<20;i++){
    if(i===15){
        console.log("Let's print "+i);
        break;
    }
}
//When we get 5 then skip it.
for(let i=1;i<15;i++){
    if(i===5){
        continue;
    }
    else{
        console.log(i);
    }
}