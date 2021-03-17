// Implement the following functions

const stringLib = () => {

  function add(a, b) {
    // add a to b
    console.log("Numbers to add: " + a, b);
    return document.getElementById('add').innerHTML = a + b;
  }
  add(321, 654);

  function sub(a, b) {
    // sub a from b
    console.log("Numbers to sub: " + a, b);
    return document.getElementById('sub').innerHTML = b - a;
  }
  sub(321, 654);

  function mul(a, b) {
    // mul a by b
    console.log("Numbers to multiply: " + a, b);
    return document.getElementById('mul').innerHTML = a * b;
  }
  mul(321, 654);

  function div(a, b) {
    // dib a by b
    console.log("Numbers to divide: " + a, b);
    return document.getElementById('divide').innerHTML = a / b;
  }
  div(10, 5);

  function Exponentiation(a, b) {
    // expont a of b
    console.log("Numbers to expo: " + a, b);
    return document.getElementById('expont').innerHTML = a ** b;
  }
  Exponentiation(10, 5);

  function Increment(a, b) { //can be ++
    // inc a by b
    return document.getElementById('increment').innerHTML = add(a, b);
  }
  Increment(34, 56);

  function Decrement(a, b) {
    // dec a by b
    return document.getElementById('decrement').innerHTML = sub(a, b);
  }
  Decrement(420, 42);

  function NumberListA(start, end) {
    // return list of numbers starting at start and ending at end
    console.log("Numbers to list: " + start, end);
    //empty array to store a list of numbers
    let numberListA = [];
    //store all numbers between the starting number and end number, into the array numberlist.
    for (let i = start; i <= end; i++) {
      numberListA.push(i);
    }
    return document.getElementById('listA').innerHTML = numberListA;
  }
  NumberListA(3, 12);

  function NumberListB(start, count, skipEvery) {
    // return list of numbers starting at start and ending at end but skipping every N (ie: skip every 2, or skip every 3)
    let numberListB = [];
    //var to count. If the var is equal to the "skipEvery", then skip the count
    let skipCount = 0;

    //
    for (let i = start; i <= (start + count); i++) {
      // If the var is equal to the "skipEvery" push the number to the empty array. then set skiCount value to zero
      if (skipCount == skipEvery) {
        numberListB.push(i);
        skipCount = 0;
        console.log("Here is your number listB: " + numberListB);
      }
      //since the skipCount is not equal to skipEvery increment skipCount by 1 until is equal to skipevery
      skipCount++;
      //for loop will continue increment skipCount forever, so if skipCount is bigger than skipEvery, set the value to zero again.
      if (skipCount > skipEvery) {
        skipCount = 0;
      }
      return document.getElementById('listB').innerHTML = numberListB;
    }
  }
  NumberListB(1, 15, 4);

  function NumberListC(start, count, shouldBeRandomOrNot) {
    // return list of numbers starting, continuing for (count) and a boolean to determine if the list of numbers should be random or not
    let numberListC = [];

    for (let i = start; i < (start + count); i++) {
      if (shouldBeRandomOrNot === true) {
        numberListC.push(randomNumberBetweenRange(start, (start + count)));
      }
      else if (shouldBeRandomOrNot === false) {
        numberListC.push(i);
      }
    }
    return document.getElementById('listC').innerHTML = numberListC;
  }
  NumberListC(23, 50, true);

  function randomNumberBetweenRange(min, max) {
    console.log("Range of: " + max, min);
    return document.getElementById('randomNum').innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  randomNumberBetweenRange(23, 50);

  function IsOdd(aNumber) {
    // is a number odd? true false
    console.log(aNumber + " is odd");

    if ((aNumber % 2) == 0) {
      return document.getElementById('odd').innerHTML = false;
    }
    else if ((aNumber % 2) != 0) {
      return document.getElementById('odd').innerHTML = true;
    }
  }
  IsOdd(15);

  function IsEven(aNumber) {
    // is a number even? true false
    console.log(aNumber + " is even");
    return document.getElementById('even').innerHTML = (!IsOdd(aNumber));
  }
  IsEven(12);

  function RandomNumberListA(start, end) {
    // return list of random numbers between start and end
    console.log(start, end);
    return document.getElementById('rlistA').innerHTML = NumberListC(start, end, true);
  }
  RandomNumberListA(30, 50);

  function RandomNumberListB(start, end, count, allowDuplicates) {
    // return count number of random numbers, between start and end. use allowDuplicates to choose if we should allow duplicates in the list or not
    let randomB = [];

    for (let i = start; i <= end; i++) {
      if (allowDuplicates === true) {
        randomB.push(Math.floor(Math.random() * count));
      }
      else if (allowDuplicates === false) {
        randomB.push(Math.floor(Math.random() * count));
        for(let i = 0; i<=randomB.length; i++){
          if(i === i){
            randomB.pop(i);
          }
        }
      }
    }
    return document.getElementById("rListB").innerHTML = randomB;
  }
  RandomNumberListB(10, 20, 30, false);
}
