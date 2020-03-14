'use strict';

const formatString = function(string) {
    const maxLength = 40;

    if (string.length > maxLength) {
        const arrayMessage = string.split('');
        arrayMessage.splice(36);
        arrayMessage.push('...');
        const resultMessage = arrayMessage.join('');
        string = resultMessage;
    }
    
    return string;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));

