alert ("This is a basic Calculator")
var op = (prompt("Please pick an appropriate operation to perform: \nEnter + for Addition \nEnter - for Subraction \nEnter / for Division \nEnter * for Multiplication"))

let n1 = parseFloat(prompt("First number"))
let n2 = parseFloat(prompt("Second number"))

if (op === '+'){
    answer = n1 + n2
    alert(answer)
} else if (op === '-'){
    answer = n1 - n2
    alert(answer)
} else if (op === '/'){
    answer = n1 / n2
    alert(answer)
} else if (op === '*'){
    answer = n1 * n2
    alert(answer)
} else {
    alert("Oops!!!!!! \nYou have entered an invalid operator \nPlease try again later")
}