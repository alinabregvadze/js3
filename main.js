// დავალება:
// 1. წინა დავალებიდან გადმოიტანეთ ფუნქცია getRandomNumber რომელიც იღებს a და b პარამეტრებს და აბრუნებს შემთხვევით რიცხვებს a-დან b-მდე
function randomNumBetween(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}

console.log(randomNumBetween(2, 47));
// 2. დაწერეთ ფუნქცია, რომელიც მიიღებს ერთ პარამეტრს (n - ნატურალური რიცხვი) და დააბრუნებს n სიგრძის მასივს, რომელშიც იქნება 0-დან 100-მდე შემთხვევითი რიცხვები. შემთხვევითი რიცხვის მისაღებად გამოიყენეთ უკვე დაწერილი ფუნქცია getRandomNumber. ფუნქციის მიერ დაბრუნებული მასივი შეინახეთ ცვლადში randomNumbers

let randomNumbers = function (n) {
  if (n > 0) {
    Math.floor(n);       //1.5 !== 1,5 დამრგვალებისას არაა ერთი და იგივე???
    var array = [];
    for (let j = 0; j < n; j++) {
    array.push(randomNumBetween(0, 101));
    }
    return array;
  }
}

console.log(randomNumbers(3.4));  // 4 რიცხვი გამოაქვს
console.log(randomNumbers(3,4));  // 3 რიცხვი გამოაქვს
// 3. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს #2 ფუნქციის მიერ დაბრუნებულ მასივს randomNumbers, ამ მასივში იპოვის და დააბრუნებს უდიდეს რიცხვს.
function max(randomNumbers) {
  console.log(randomNumbers);
  return Math.max(...randomNumbers);
}

console.log(max(randomNumbers(5)));
// 4. დაწერეთ ფუნქცია, რომელსაც პარამეტრად გადაეცემა მასივი და აბრუნებს შეტრიალებულ მასივს. მაგალითად თუ პარამეტრად გადავცემთ [1, 2, 3] მასივს, უნდა დააბრუნოს [3, 2, 1] მასივი.
var startArray = [1, 2, "a", "b", 5];  
function revArray(array){
  return array.reverse();
}

console.log(revArray(startArray));

// 5. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ნატურალურ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის მარტივი, ან false -ს თუ რიცხვი არ არის მარტივი. მარტივია რიცხვი, რომელიც მხოლოდ 1-ზე და თავისთავზე იყოფა. მარტივი რიცხვებია: 2, 3, 5, 7, 11 და ა.შ.
function isPrime(x) {
  Math.floor(x);
  if (x > 0) {
    if (x === 1) {
      return false
    }
    else if (x == 2){
      return true;
    }
    else{
      for (let i = 2; i < x; i++) {
        if (x % i === 0) {
          return false;
        }
      }
    }
    return true;
  }
}

console.log(isPrime(17));
// 6. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს (a, b) და დააბრუნებს მასივს, რომელშიც მოქცეული იქნება a -დან b -მდე ყველა მარტივი რიცხვი. მაგალითად თუ პარამეტრად მიიღებს 0 -ს და 12 -ს უნდა დააბრუნოს [2,3,5,7,11]. მარტივი რიცხვის დასადგენად გამოიყენეთ #5 პუნქტში აღწერილი ფუნქცია.
function primeNumBetween(a, b) {
  let primeArray = [];
  for (let i = a; i < b; i++) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  return primeArray;
}

console.log(primeNumBetween(-5, 10));
// 7. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტს გააჩნია name და age ველები. (გაკეთებული გვაქვს #11 დავალებაში). შემდეგ შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა ობიექტს (რომლის age ველიც არის უმცირესი).
let family = [
  {
    name: 'Giorgi',
    age: 18,
  },
  {
    name: 'Nika',
    age: 22,
  },
  {
    name: 'Ana',
    age: 21,
  },
  {
    name: 'Dato',
    age: 12,
  },
  {
    name: 'Mariam',
    age: 15,
  }
]

function youngest(family){
  var ageArray = [];
  for (let i = 0; i < family.length; i++) {
    ageArray.push(family[i].age);
  }
  
  let minAge = Math.min(...ageArray);
  let minAgeindex = ageArray.indexOf(minAge);
  return family[minAgeindex] ;  
}

console.log(youngest(family));

// 8. შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ნატურალურ რიცხვს და დააბრუნებს მასივის სახით ყველა ამ რიცხვის გამყოფს. მაგალითად თუ პარამეტრად მიიღებს რიცხვს 10 უნდა დააბრუნოს [1, 2, 5, 10]
function divisor(n) {
  Math.floor(n)
  var divArray = [];
  for (let i = 1; i <= n; i++) {
    if (n > 0  && n % i === 0) {
      divArray.push(i);
    }
  }
  if (n <= 0) {
    return "enter number more than 0";
  }
  return divArray;
}

console.log(divisor(15));
// 9* დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ ნატურალურ რიცხვს და და დააბრუნებს ამ რიცხვების უმცირეს საერთო ჯერადს (უსჯ). უმცირესი საერთო ჯერადი არის რიცხვი, რომელიც ორივე რიცხვზე იყოფა. მაგალითად 3 -ს და 4-ს უმცირესი საერთო ჯერადია - 12, ხოლო 6 -ის და 18 -ის უმცირესი საერთო ჯერადია 18.

function commonMultiple(x, y) {
  Math.floor(x);
  Math.floor(y);
  let small = Math.min(x, y);
  let large = Math.max(x, y);
  let k = large;
  if (x > 0 && y > 0) {
    if (k % small === 0) {
      return large;
    }else{
      while (k % small !== 0) {
        k += large;
      }
      return k;
    }
  }
  if (x <= 0 || y <= 0) {
    return "enter number more than 0";
  }
}

console.log(commonMultiple(15, 5));
// 10* დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს 0 დან 100 მდე რიცხვს. ეს რიცხვი წარმოადგენს ფულის ერთეულს თეთრებში. ფუნქციამ უნდა დააბრუნოს მასივის სახით მონეტები, რომელთა გამოყენებითაც შეიძლება ამ რიცხვის მიღება. ფუნქციამ უნდა იპოვოს უმცირესი რაოდენობა მონეტებისა, ანუ გამოიყენოს რაც შეიძლება დიდი მონეტები. მონეტების ფასებია: 1, 2, 5, 10, 20, 50.  მაგალითად, თუ ფუნქცია მიიღებს პარამეტრად რიცხვს 72 მან უნდა დააბრუნოს შემდეგი მონეტები მასივის სახით: [ 50, 20, 2 ], ხოლო თუ პარამეტრად მიიღო რიცხვი 45 უნდა დააბრუნოს [ 20, 20, 5 ]
function coins(n) {
  if (n > 0 && n <= 100) {
    let fifty = 50;
    let twenty = 20;
    let ten = 10;
    let five = 5;
    let two = 2;
    let one = 1;
    let coinsArray = [];

    while (n >= 50) {
      n -= 50;
      coinsArray.push(fifty);
    }
    while (n >= 20) {
      n -= 20;
      coinsArray.push(twenty);
    } 
    while (n >= 10) {
      n -= 10;
      coinsArray.push(ten);
    }
    while (n >= 5) {
      n -= 5;
      coinsArray.push(five);
    }
    while (n >= 2) {
      n -= 2;
      coinsArray.push(two);
    }
    while (n >= 1) {
      n--;
      coinsArray.push(one);
    }
    return coinsArray;
  }
  return "enter number between 0 and 100";
}
console.log(coins(43));