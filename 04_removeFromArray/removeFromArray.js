const removeFromArray = function(array, ...arg) {
    let count = arg.length;
    for (let i = 0; i < count; i++) {
        let index = array.lastIndexOf(arg.at(-1));
        if (index > -1) {
            array.splice(index, 1);
            arg.pop();
        } else {
            arg.pop();
        };
    };
    console.log(array);
    return array;
};
////////////////////////
//    let newArray = array.concat(arg);

//    for (let i = 0; i < (newArray.length); i++) {
//        for (let ii = 0; ii < (arg.length); ii++) {    
//            if (newArray[i] == arg[ii]) {
//                console.log(arg[ii])
//                console.log(newArray[i] + ' ' + arg[ii] + ' match found')
//            } else {
//                console.log(newArray[i] + ' ' + arg[ii])
//            }
//        }
//    }

//    return newArray;
//};

// Do not edit below this line
module.exports = removeFromArray;
