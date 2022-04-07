const sumAll = function(a, b) {
    let finalSum = 0;
    if (((typeof(a)=='number')&&(typeof(b)=='number'))&&(a>0&&b>0)) {
        let endRange = b > a ? b : a;
        for (let i = 0; i < endRange; i++) {
            finalSum += i+1;
        }
        console.log(finalSum);
        return finalSum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
