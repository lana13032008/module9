//задание1

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

//задание2
let x = 1

while (x <= 10) {
  if (x === 5) {
    x++; 
    continue; 
  }

  if (x === 8) {
    break;
  }

  console.log(x);
  x++;
}

//задание3
let y = 1;

do {
  console.log(y);
  y++;
} while (y <= 5);

//задание4

while (true) {
    let input = prompt("Введите число:");
  
    if (input === "10") {
      console.log("Цикл завершён!");
      break;
    }
  
    console.log("Неверное число");
  }

//задание5

  for (let z = 1; z <= 10; z++) {
    console.log(z);
  }

//задание6
let p = 1;

for (;;) {
  if (p > 100) {
    console.log("Цикл завершён!");
    break;
  }

  console.log(p);
  p++;
}


//задание7
let numbers = [1, 2, 3, 4, 5];

for (let m = 0; m < numbers.length; m++) {
  console.log(numbers[m]);
}

//задание9

for (let k = 10; k >= 1; k--) {
    console.log(k);
  }


//задание10
for (let s = 1; s <= 10; s++) {
    if (s % 2 !== 0) {
      continue; 
    }
    console.log(s);
  }
  