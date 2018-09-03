"use strict"

const numbers = [];
let sum = 0;

do {
    let userInput = prompt("Enter any number");
    if (userInput === null || isNaN(userInput)) {
        break;
    } numbers.push(+userInput);
} while (true);
if (numbers.length > 0) {
    for (let element of numbers) {
         sum = sum + element;
    } alert(`Общая сумма равна ${sum}`);
}
