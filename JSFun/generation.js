var num = document.getElementById("num1").value;
var btn = document.getElementById("btn1").addEventListener('click', Gen)

function Gen() {
    
    if(num >= 0 || num <= 6) {
        console.log("Generation alpha")
    }else if(num >=6 && num <= 20) {
        console.log("Generation Z")
    }else if(num >=21 && num <=35) {
        console.log("Generation Y")
    }else if(num >= 35 && num <= 50) {
        console.log("Generation X")
    }
}

