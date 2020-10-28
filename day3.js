const fs = require("fs");

function getMatrix(steps) {
    var matrix = {};
    var [x, y] = [0, 0];
    var s = 0;
    steps.forEach(function (step) {

        var d = step.slice(0, 1);
        var l = step.slice(1);
        for (var i = 1; i <= l; i++) {
            switch (d) {
                case "L":
                    x -= 1;
                    break;
                case "R":
                    x += 1;
                    break;
                case "U":
                    y += 1;
                    break;
                case "D":
                    y -= 1;
                    break;
                default:
                    break;
            }

            if(!matrix[x]) matrix[x] = [];
            matrix[x].push({x: x, y: y,'steps':++s});
        }

    });
    return matrix;
}

function isIntersect(a, b) {
    return a.x == b.x && a.y == b.y;
}

function findClosestIntersection(cable1, cable2) {
    var intersects = Object.values(cable1).reduce((acc,el)=>{
        var inct = el.reduce((acc2,subEl)=>{
            var rowAcc = cable2[subEl.x].reduce((acc3,a) => {   
                if( isIntersect(subEl,a)) {                    
                    acc3.push({...subEl, "steps2": a.steps, "sum": subEl.steps + a.steps});                    
                }                
                return acc3;
            },[]);
             if(rowAcc.length > 0) {                 
                 acc2.push(...rowAcc);                
                }
            return acc2;
        },[]);

        if(inct.length > 0) {
            acc.push(...inct);
        }
        return acc;
    },[]);

    return intersects.reduce((acc, curr)=>{
        return acc.sum > curr.sum ? curr: acc;   
    });
}

function part1() {
    var [data1, data2] = fs.readFileSync("input/input3.txt").toString().split("\n");
    data1 = getMatrix(data1.split(","));
    data2 = getMatrix(data2.split(","));

    console.log(findClosestIntersection(data1, data2));
}

part1();