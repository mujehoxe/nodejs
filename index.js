console.log('hi');
console.log('hi');

console.log(6);
console.log(-6.56);

console.log(true);
console.log(false);

console.log('6<5', 6 < 5); // false
console.log('6==5', 6 == 5); // false
console.log('6>=5', 6 >= 5); // true
console.log('6!=5', 6 != 5); // true
console.log("6=='6'", 6 == '6'); //true
console.log("6==='6'", 6 === '6'); //false

console.log('5+6', 5 + 6);
console.log('5*6', 5 * 6);
console.log('5/6', 5 / 6);
console.log('5/6', Math.floor(5 / 6));
console.log('5%6', 5 % 6);

console.log('hello'[0]);
console.log('hello'[4]);
console.log('hello'[4]); //OUMAIMA;
console.log('hello'[4]); //rania
console.log('hello'.length);
console.log('hello dskfldsjlfdskklghds'.indexOf(' '));
console.log('hello'.concat(' abc'));
console.log('hello' + ' abc');
console.log('hello'.endsWith('o'));
console.log('hello'.slice(2, 5));
console.log('     hello   '.length);
console.log('     hello   '.trim().length);

console.log([1, 2, 3][2]);
console.log([1, 'hello', 3][2]);
console.log([1, 'hello', [2, 3]][2]);
console.log([1, 'hello', [2, 3]][2]);
console.log([1, 'hello', [2, 3]].length);
console.log([1, 'hello', [2, 3]][2][1]);
console.log([1, 'hello', [2, 3]].slice(1, 3));
console.log([1, 'hello', [2, 3]].join(' abc '));
console.log([1, 'hello', [2, 3]].concat(1, 2));
console.log([1, 'hello', [2, 3]].entries().next());
console.log([1, 'hello', [2, 3, [4, 5]]].flat(2));

console.log({
  name: 'ahmed',
  age: 50,
  adress: 'medea',
});
console.log(
  {
    name: 'ahmed',
    age: 50,
    adress: 'medea',
  }['name'],
);
console.log(
  {
    name: 'ahmed',
    age: 50,
    adress: 'medea',
  }.age,
);

console.log(
  {
    name: 'ahmed',
    age: 50,
    adress: 'medea',
  }.adress,
);

console.log(
  {
    name: 'ahmed',
    age: 50,
    adress: 'medea',
  }.salaire,
);

console.log(
  Object.keys({
    name: 'ahmed',
    age: 50,
    adress: 'medea',
  }),
);

console.log(
  Object.keys({
    1: 'ahmed',
    2: 50,
    3: 'medea',
  }),
);

console.log(
  Object.values({
    1: 'ahmed',
    2: [50, 20],
    3: 'medea',
  }).push(1, 2),
);

var ageDoMohammedLastYear = 5;
console.log(ageDoMohammedLastYear);
ageDoMohammedLastYear = 6;
console.log(ageDoMohammedLastYear);
ageDoMohammedLastYear = ageDoMohammedLastYear + 1;
console.log(ageDoMohammedLastYear);
ageDoMohammedLastYear++;
console.log(ageDoMohammedLastYear);
ageDoMohammedLastYear += 1;
console.log(ageDoMohammedLastYear);

console.log(ageDoMohammedLastYear < 6);

var age = 6;
var name = 'ahmed';
console.log(name, age);

var months = ['january', 'febuary', 'mars', 'april'];

console.log(months.concat('may'));
months = months.concat('may');
console.log(months.push('june'));
console.log(months);

var product = {
  name: 'computer',
  quantity: 40,
  color: 'red',
  sizes: [3, 10, 15],
};

console.log(product.sizes);
product.sizes = product.sizes.concat(16);
console.log(product.sizes);
product.sizes.push(16);
console.log(product.sizes);

product.price = 5000;
product['price'] = 4000;

var products = [
  product,
  {
    name: 'screen',
    quantity: 30,
    color: 'blue',
    sizes: [10, 15],
    price: 3000,
  },
  {
    name: 'printer',
    quantity: 10,
    color: 'blue',
    sizes: [10, 15],
    price: 7000,
  },
];

console.log(products);

if (5 > 6) console.log('5>6');
else console.log('5<6');

if (age < 5) console.log('bebe');
else if (age < 12) console.log('enfant');
else if (age < 18) console.log('adolesent');
else console.log('adulte');

if (5 > 6) {
  console.log('bebe');
  console.log('enfant');
} else {
  console.log('adolesent');
  console.log('adulte');
}

var ages = [1, 6, 13, 20];

for (var i = 0; i < products.length; i++) {
  if (ages[i] < 5) console.log('bebe');
  else if (ages[i] < 12) console.log('enfant');
  else if (ages[i] < 18) console.log('adolesent');
  else console.log('adulte');
}

for (var i = 0; i < 5; i++) console.log(i);

var products = [
  product,
  {
    name: 'screen',
    quantity: 30,
    color: 'blue',
    sizes: [10, 15],
    price: 3000,
  },
  {
    name: 'printer',
    quantity: 10,
    color: 'blue',
    sizes: [10, 15],
    price: 7000,
  },
];

var notDone = true;
while (notDone) {
  if (Math.ceil(Math.random() * 6) === 6) {
    console.log('yay');
    notDone = false;
  } else {
    console.log('oh no');
  }
}

// for(kkdsjfsdlk) => while
// while (kdlsgkhdslk) =x> for

for (var i = 1; i < products.length; i++) {
  if (products[i].quantity <= 10) products[i].price -= 500;
}
console.log(products);

for (var i = 1; i < products.length; i++) {
  if (products[i].quantity <= 10) products[i].price -= 500;
}
console.log(products);

var notDone = true;
while (notDone) {
  if (Math.ceil(Math.random() * 6) === 6) {
    console.log('yay');
    notDone = false;
  } else {
    console.log('oh no');
  }
}

for (var i = 1; i < products.length; i++) {
  if (products[i].quantity <= 10) products[i].price -= 500;
}
console.log(products);

console.log('something');

for (var i = 1; i < products.length; i++) {
  if (products[i].quantity <= 10) products[i].price -= 500;
}
console.log(products);

function saleOnAlmostEndingProducts() {
  for (var i = 1; i < products.length; i++) {
    if (products[i].quantity <= 10) products[i].price -= 500;
  }
}

console.log('before function call', products);
saleOnAlmostEndingProducts();
console.log('after function call', products);
saleOnAlmostEndingProducts();
saleOnAlmostEndingProducts();
saleOnAlmostEndingProducts();
console.log('something');
saleOnAlmostEndingProducts();

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.input.on('keypress', handleKeyPress);

// function handleKeyPress(key, data) {
//   console.log(`Key pressed: ${key}`);

//   if (key === 'q') {
//     console.log('Exiting...');
//     process.exit();
//   }
// }

function add(a, b) {
  return a + b;
}

console.log(add(5, 10), true, 6, [1, 2]);

function positive(a) {
  if (a >= 0) return true;
  else return false;
}

console.log(positive(6));
console.log(positive(7));
console.log(positive(-7));

var fs = require('fs');

fs.readdir('.', {encoding: 'utf-8'}, (err, filesNames) => {
  for (var i = 0; i < filesNames.length; i++)
    if (filesNames[i].endsWith('.txt'))
      fs.readFile(filesNames[i], {encoding: 'utf-8'}, (err, file) => {
        if (err != undefined) console.log(err);
        else console.log(file);
      });
});

// ex1
// lenght t3 chaine de charachtere utilisant un for/while loop
// lenght t3 array utilisant un for/while loop

// ex2
// function getStingLenghtWhile(str)
// function getStingLenghtFor(str)
// function getArrayLenghtFor(arr)
// function getArrayLenghtWhile(arr)
// getStingLenghtWhile('sdfadsf')
// getStingLenghtWhile('')
// getStingLenghtFor('')
// getArrayLenghtFor([1,2,3])
// getArrayLenghtFor([])
// getArrayLenghtWhile([])

// ex3
// getArrayLenghtWhile('dsgds')
// getStingLenghtWhile([1,2,3])
