const sumAll = function(a, b) {
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
