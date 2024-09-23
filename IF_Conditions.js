var a = 10, b=10, c=9, d=12; //Logical operator

if(a === b) {
    console.log("My a = "+a+" and b = " +b +" Values are equal")
} 

if (c !== b){
    console.log("My c = "+c+" and b = " +b +" Values are Not equal equal")
} 



if (c !== d){
    console.log("My c = "+c+" and b = " +b +" Values are Not equal equal")
}


if (c <= d){
    console.log("value is greater")
}

if (c >= d){
    console.log("value is greater")
}


var f1 = "Apple", f2 ="Orange", f3="Apple"

console.log(f1 === f2)
console.log(f3 === f2)
console.log(f1 === f3)

if((f1 === f2) && (f2 === f3) && (f1===f3)){
console.log("all fruits are same")
} else{
    console.log("all fruits are not same")
}

if((f1 === f2) || (f2 === f3) || (f1===f3)){
console.log("some fruits are same")
} else{
    console.log("all fruits are not same")
}

if((f1 === f2) || (f2 === f3) && (f1===f3)){
console.log("true")
} else{
    console.log("false")
}

if((f1 !== f2) || (f2 === f3) && (f1===f3)){
    console.log("true")
} else{
    console.log("false")
}

if((f1 === f2) || (f2 === f3) && (f1!==f3)){
    console.log("true")
} else{
    console.log("false")
}

var show = "90 days"

if (show === "90 days"){
    console.log("90 days")
} else if(show === "90 days 2" ){
    console.log("90 days 2")
} 
