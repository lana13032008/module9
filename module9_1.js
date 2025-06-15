//задание1

let fruits = ["Яблоко", "Банан", "Апельсин"];

console.log(fruits);

//задание2
console.log("Первый элемент:", fruits[0]);
console.log("Последний элемент:", fruits[fruits.length - 1]);

fruits.push("Груша");

console.log("Обновлённый массив:", fruits);


//задание3
fruits.pop();

fruits.shift();

console.log("Обновлённый массив:", fruits);

//задание4
fruits.forEach(function(fruit) {
    console.log(fruit);
  });

//задание5
let lengths = fruits.map(fruit => fruit.length);

console.log("Массив длин слов:", lengths);


//задание6
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Чётные числа:", evenNumbers);

//задание7
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 

//задание8

let firstGreaterThanFive = numbers.find(num => num > 5);

console.log("Первое число больше 5:", firstGreaterThanFive);

//задание9
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = arr1.concat(arr2);

console.log("Объединённый массив:", combined);


//задание10
let hasBanana = fruits.includes("Банан");

console.log("Есть ли 'Банан' в массиве?:", hasBanana);

//задание11

fruits.reverse();

console.log("Массив в обратном порядке:", fruits);