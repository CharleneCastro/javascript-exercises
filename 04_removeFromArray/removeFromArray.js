/*
const removeFromArray = function(arr, ...args) {
    for(let i=0; i<args.length; i++){
        for(let j=0; j<arr.length; j++){
            if(args[i] === arr[j]){
                arr.splice(j,1);
            }
        }
    }
    return arr;
};
*/

const removeFromArray = function(arr, ...args) {
    //filter() goes through each index of arr (arrVal) &  keeps indexes where !args.includes(arrVal) is True
    //!args.includes(arrVal) checks that arrVal is not a value in args
    return arr.filter((arrVal) => !args.includes(arrVal));
};


// Do not edit below this line
module.exports = removeFromArray;
