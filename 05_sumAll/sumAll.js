/*
const sumAll = function(a, b) {
    if(a<0 || b<0 || typeof a !== 'number' || typeof b !== 'number'){
        return "ERROR"
    }

    var min=a, max=b, sum=0;
    if(a>b){
        min=b;
        max=a;
    }
    for(let i=min; i<=max; i++){
        sum+=i;
    }
    return sum;
};
*/

const sumAll = function(a, b) {
    if(a<0 || b<0 || typeof a !== 'number' || typeof b !== 'number'){
        return "ERROR"
    }

    //summation formula
    /*
    var n=a+b-1;
    var sum = n*(n+1)/2;
    */

    //simplified version:
    var n=a+b;
    var sum = (n-1)*(n)/2;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
