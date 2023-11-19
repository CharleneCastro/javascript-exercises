const removeFromArray = function(arr, ...args) {
    // var removed=[];
    for(let i=0; i<args.length; i++){
        for(let j=0; j<arr.length; j++){
            if(args[i] === arr[j]){
                arr.splice(j,1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
