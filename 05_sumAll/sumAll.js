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

// Do not edit below this line
module.exports = sumAll;
