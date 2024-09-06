console.log('hello');

console.log("hiii")

var x=2;
var y=23;
var z=x+y;

console.log("Value of z is:",z);


const people=[
    {
        id:'1',
        fname:'Kesha',
        lname:'Patel',
        city:'Anand'
    },
    {
        id:'2',
        fname:'Kinjal',
        lname:'Shah',
        city:'Borsad'
    }
]

console.log(people);


//Looping
for(let i=0;i<5;i++)
{
    console.log("value of i:",i)
}

const m=['orange','apple','grapes','kiwi']
console.log(m.map((material)=>material.length));


//function

const square = function(number){
    return number*number;
}

console.log('square of 4 is:',square(4));


const a1=['a','b','c'];
const a2=['d','e','f'];
const a3 = a1.concat(a2);

console.log("Merging two arrays:",a3);


//Time
setTimeout(()=>{
    console.log("This statement is delayed for 5 second.");
},5000)


console.log(`Statement i  line 1
    Stament in line 2`);