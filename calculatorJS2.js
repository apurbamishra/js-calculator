let input = document.getElementById("inputid");
let buttons = document.querySelectorAll("button");


const title = document.createElement("h1");

title.textContent = "Calculator Program";
title.style.marginBottom = "50px";
title.style.color = "black";
title.style.border = "10px solid darkblue";

document.body.prepend(title);


let inputString = "";
const isOperator = (character) => {
    return ["+", "-", "*", "/", "%"].includes(character);
}       

function lastNumberSegment(expr) {
  return expr.split(/[\+\-\*\/%]/).pop();
}

let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener("click", event => {

    let typedKey = event.target.innerHTML;

    if (input.value === "Error") {
        inputString = "";
        input.value = "";
    }

    if (typedKey === "=") {
      try {
        inputString = eval(inputString);   
        input.value = inputString;
      } catch {
        input.value = "Error";
        inputString = "";
      }
    } 
    else if (typedKey === "AC") {    
      inputString = "";
      input.value = inputString;
    }
     else if (typedKey === "DEL") {
      inputString = inputString.substring(0, inputString.length - 1); 
      input.value = inputString;
    }
     else {

        if (typedKey === "x") {
            typedKey = "*";
        }

        if (inputString === "" && isOperator(typedKey)) {
            input.value = "Invalid input";
            return;
        }

        if (typedKey === ".") {
            const currentNum = lastNumberSegment(inputString);
            if (currentNum.includes(".")) {
                return;
            }
        }

        inputString = inputString + typedKey;
        input.value = inputString
    }
  });
});
