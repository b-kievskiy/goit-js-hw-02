'use strict';

let input;
const numbers = [];
const total = (accumulator, currentValue) => accumulator + currentValue;

for (let i = 0; input !== null; i += 1) {
    input = prompt('Введите значение: ');
    numbers.push(Number(input));
}

console.log('Общая сумма чисел: ', numbers.reduce(total));