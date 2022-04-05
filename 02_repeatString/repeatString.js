const repeatString = function(message, count) {
    let newMessage = '';
    if (count < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < count; i++) {
            newMessage = newMessage+message;
        }
        return newMessage;
    }
};

// Do not edit below this line
module.exports = repeatString;
