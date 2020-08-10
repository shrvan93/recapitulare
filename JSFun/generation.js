var age = document.getElementById("num1").value;
var num = document.getElementById("btn1");

num.addEventListener("click", me)

function me() {
    if (age >= 70) {
        alert("Builders")
    }
    else if (age >= 51) {
        alert("Baby Boomers")
    }
    else if (age >= 36) {
        alert("Generation X")
    }
    else if (age >= 21) {
        alert("Generation Y")
    }
    else if (age >= 6) {
        alert("Generaton Z")
    } else {
        alert("Generation Alpha")
    }
}

me();