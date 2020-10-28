function part1(lower, upper){
    let counter = 0;
    for(i = lower; i < upper; i++){
        var str = i.toString();
        const regex = /^0*1*2*3*4*5*6*7*8*9*$/;
        

        if(str.match(regex) && Object.values(charFreqs(str)).find(el => el === 2)){
            console.log("str: ", str,
         ", no lower digits rule: ", str.match(regex)
         );
            console.log( " adjacent chars rule: ", Object.values(charFreqs(str)).find(el => el > 1));
            
            counter++;
        }
    }
    return counter;

}


function charFreqs(str){
    return str.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        console.log("total so far: ", total);
        return total;
      }, {})

}

console.log("answer: ", part1(145852,616942));