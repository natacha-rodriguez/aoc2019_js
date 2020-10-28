var fs = require("fs");

function calc(a) {
    console.log("a ", a);
    if (a <= 0) return 0;
    var c = (Math.floor(a/3)-2); 
    
    console.log("c ", c);
    if(c <=0) return 0;
    var r = (c + calc(c));
    console.log("r ", r);
    return r;
}


function counterUpper(masses){
    return masses.reduce((acc, curr)=>{
        return  calc(curr)+ acc;
    }, 0);
}


function part1(){
    var data = fs.readFileSync("input/input1.txt").toString().split("\n");
    console.log(counterUpper(data));
    // console.log(calc(1969));
    
}

part1();