var fs = require("fs");

function runComp(data){
    for(var i = 0; i < data.length; i+=4){
        var [op, left, right, res] = data.slice(i, i+4);
        // console.log("op: ", op, ", left: ", left, ", right: ", right, ", res", res);
        switch (op) {
            case 1:
                data[res] = data[left] + data[right];
                break;
            case 2:
                data[res] = data[left] * data[right];
                break;
            case 99:
                return data[0];
            default:
                break;
        }
        // console.log("new data: ", data);
    }
    
    return data[0];
}


function part1(){
    var data = fs.readFileSync("input/input2.txt").toString().split(",").map(a => Number(a));
    data[1] = 12;
    data[2] =2;
    console.log(runComp(data));
}

function part2() {
    var data = fs.readFileSync("input/input2.txt").toString().split(",").map(a => Number(a));
    for(var i = 0; i <100; i++) {
        for(var j = 0; j < 100; j++) {
            var newData = data.slice();
            newData[1] = i;
            newData[2] = j;
            var res = runComp(newData);
            if( res == 19690720){
                console.log("noun: ", i, ", verb: ", j);
                console.log("result:", (100*i+j));
                return;
            }
        }
    }
}

part1();

part2();