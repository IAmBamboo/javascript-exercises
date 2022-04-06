const reverseString = function(message) {
    let tempArray = [];
    let reverse = '';
    for (let i = 0; i < (message.length*2); i++) {
        if (i>=message.length) {
            reverse += tempArray.pop();
        } else {
            tempArray.push(message.charAt(i));
        }
    }
    //for (let i = 0; i < message.length; i++) {
    //    reverse += tempArray.pop()
    //}
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
