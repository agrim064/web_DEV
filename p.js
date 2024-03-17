let currentOperation = '';
let currentNumber = '';
let previousNumber = '';

const display = document.getElementById('display');

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function setOperation(operation) {
  if (currentNumber === '') return;
  if (previousNumber !== '') {
    calculateResult();
  }
  currentOperation = operation;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);
  if (isNaN(prev) || isNaN(current)) return;
  switch (currentOperation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  currentNumber = result;
  currentOperation = '';
  previousNumber = '';
  updateDisplay();
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  currentOperation = '';
  updateDisplay();
}

function updateDisplay() {
  display.value = currentNumber;
}



// console.log("hello word");
// document.write("hii");

// window.alert("Hello from Graphic Era HILL University");

// function f1(){
//     window.alert("HI");
//     window.confirm("you are human");
//     window.prompt("Name ");
// }

// f1();

// function f2(){
//     window.alert("Agrim Started JS");
// }

// function f3(){
//     // const element = document.getElementById("unique");
//     // console.log(element.textContent);

//     const c = document.getElementsByClassName("customer");
//     for (let element of c) {
//         console.log(c.textContent);
//     }
//     // console.log(c.textContent);

//     const tag = document.getElementsByTagName("ex");
//     for (let element of tag) {
//         console.log(tag.textContent);
//     }
// }


