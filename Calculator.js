const display = document.getElementById('display');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const clearBtn = document.getElementById('ac');
let firstNum = "";
let secondNum = "";
let operator = "";
let firstNumArr = [];
let secondNumArr = [];
let opArr = [];
let result = null;
step = 0;


function getNumber(num) {
  if (step == 0 || step == 1) {   //checks if calculator hasnt received the first number yet
     firstNum += num;
     firstNum.includes(".") ? document.getElementById("decimal").disabled = true : firstNum;        //stops multiple decmials being used
        document.getElementById('display').value += parseFloat(firstNum).toFixed(4);   //updates display
        display.innerText = firstNum.toLocaleString('en');
        firstNumArr.push(firstNum);   //pushes firstNum into firstNum array to be pulled later
          } else if (step == 2) {      //lets the function know that we have the first number
            document.getElementById("decimal").disabled = false; //re-enables demicals 
            secondNum += num;
            secondNum.includes(".") ? document.getElementById("decimal").disabled = true : secondNum;
            document.getElementById('display').value = secondNum;       //updates display
            display.innerText = firstNumArr.at(-1) + opArr.at(-1) + secondNum;           //pulls numbers from array to update display
            secondNumArr.push(secondNum);         //pushes secondNum into secondNum array to be pulled later
        }
}




function getOperator(op) {
  step = 2          //lets us know we have our first number
  operator = op;
    if (secondNum) {
      op = false;
      } else if (op && !firstNum) {
        alert("Please enter a number");   //if no first number  because the operator was pressed first, will reset the calculator
        clearDisplay();
        return;
      } else if (op == "+" || op == "-" || op == "÷" || op == "*") {  
        display.innerText = firstNumArr.at(-1) + op;
        opArr.push(op);  //identifies the op so will update display to show firstNum and op and push it into the array  
       
    }
}



const getResult = () => {
  document.getElementById("decimal").disabled = false;
	if (operator === '+') {
		result = parseFloat(firstNumArr.pop()) + parseFloat(secondNumArr.pop());    //uses pop to retrieve last num from array
    document.getElementById("display").innerText = result.toLocaleString('en');   //minimises numbers shown but will display commas
    firstNumArr.push(result); //this allows the user to carry over the result allowing for ease of use
    secondNum = "";   
    operator = "";
    step = 2;

	    } else if (operator === '-') {
		  result = parseFloat(firstNumArr.pop()) - parseFloat(secondNumArr.pop());
		  document.getElementById("display").innerText = result.toLocaleString('en');
      firstNumArr.push(result);
      secondNum = "";
      operator = "";
      step = 2;

	    } else if (operator === '*') {
		    result = parseFloat(firstNumArr.pop()) * parseFloat(secondNumArr.pop());
		    document.getElementById("display").innerText = result.toLocaleString('en');
        firstNumArr.push(result);
        secondNum = "";
        operator = "";
        step = 2;

	      } else if (operator === '÷') {
		      result = parseFloat(firstNumArr.pop()) / parseFloat(secondNumArr.pop());
		      document.getElementById("display").innerText = result.toLocaleString('en');
          firstNumArr.push(result);
          secondNum = "";
          operator = "";
          step = 2;
	      }
}

  
function clearDisplay() {   //clears all previous data
	  document.getElementById("display").innerText = "";
	  firstNum = "";
	  secondNum = "";
    firstNumArr = [];
	  secondNumArr = [];
	  operation = "";
	  result = 0;
    step = 0;
    document.getElementById("decimal").disabled = false;
}
