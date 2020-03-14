'use strict';

const logItems = function(array) {

    let numberElement = 0;

    for (let i = 0; i < array.length; i += 1) {
        numberElement += 1;
        console.log(String(numberElement),'-', array[i]);
    }
}

console.log('Список имён: ');
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
console.log('Список чисел: ');
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);