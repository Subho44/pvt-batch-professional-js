//how to print numers from 1 to 10

for(let i=1; i<=10; i++) {
    console.log(i);
}
//how to print even number from 1 to 20
for(let i=2; i<=20;i+=2) {
    console.log(i);
}
//print sum of numbers from 1 to 100
let sum = 0;
for(let i=1;i<=100;i++){
    sum += i;
}
console.log(sum);
//print multiplication table of 5

for(let i=1; i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`);
}
//how to print number 10 to 1
for (let i=10; i>=1 ; i--){
    console.log(i);
}
//loop through array
let arr = [1,2,3,4];
for(let i=0; i<arr.length;i++){
    console.log(i);
}
arr.forEach(x=>console.log(x));
//for.. in loop
let obj = {a:1,b:2,c:3};
for(let x in obj){
    console.log(`${x}=${obj[x]}`);
}
//whats wrong here?

let i = 0;
while (i<10) {
    console.log(i);
    i++;
}

//print only first 5 element from array using loop
for(let i=0; i<5 && i<arr.length; i++){
    console.log(arr[i]);
}

//problem sloving
/*problem : reversed word in " javascript is awesome";
  excepted: "tpircsavaj si emosewa"
*/

let str = "javascript is awesome";
let reversed = str.split(" ").map(x=>x.split("").reverse().join("")).join(" ");
console.log(reversed);

/*
FIND MISSING NUMBER IN ARRAY
PROBLEM: ARRAY [1,2,3,5] FIND MISSING NUMBER 1 TO 5.
EXCEPTED:4
*/
let ar = [1,2,3,5];
let n = 5;
let expectdsum = (n*(n+1))/2;
let actualsum = ar.reduce((acc,num)=>acc+num,0);
console.log("missing: ",expectdsum-actualsum);

//frequency count of elements

/*
let arr = [1,2,2,3,1,4,2]
output: {'1':2,'2':3,'3':1,'4':1}
*/