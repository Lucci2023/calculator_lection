const display = document.getElementById(".display");
$btn = document.querySelectorAll(".btn");
let arr = [];
let res = null;
function calculator(btnValue){
    let value = btnValue.innerText;
    if(value === "AC"){
        arr = [];
        display.value = "";
    }
    else if(value === "←"){
        arr.pop();
        display.value = arr.join("");
    }
    else if(value === "="){
        display.value = eval(res);
        arr = [];
    }
    else {
        arr.push = value
        console.log("arr", arr)
        res = arr.join("")
        display.value = arr.join("")
    }
}
$btn.forEach(item =>  item.addEventListener('click', (event) => { 
    let btnValue = event.target; 
    calculator(btnValue)
}));