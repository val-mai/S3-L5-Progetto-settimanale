let prev;
let now;
let operand;
let evaluated;

function appendNum(number) {
    if (number === '.' && document.getElementById('now').value.includes('.')) {
        return
    } else {
        document.getElementById('now').value = document.getElementById('now').value + number;
    }
}
function clearAll() {
    document.getElementById('now').value = "";
    document.getElementById('prev').value = "";
}

function del() {
    document.getElementById('now').value = document.getElementById('now').value.slice(0, -1);
}

function operation(operatore) {
    if (document.getElementById('prev').value === "" && document.getElementById('now').value === "") {
        return
    } else if (document.getElementById('prev').value !== "" && document.getElementById('now').value !== "") {
        eval();
        operand = operatore;
        document.getElementById('prev').value = document.getElementById('now').value + ' ' + operatore + ' ';
        document.getElementById('now').value = "";
        prev = evaluated;
    } else {
        operand = operatore;
        prev = parseFloat(document.getElementById('now').value);
        document.getElementById('prev').value = document.getElementById('prev').value + document.getElementById('now').value + ' ' + operatore + ' ';
        document.getElementById('now').value = "";
    }
}

function eval() {
    if (document.getElementById('prev').value != "") {
        now = parseFloat(document.getElementById('now').value);
        document.getElementById('prev').value = document.getElementById('prev').value + document.getElementById('now').value;
        if (operand == '+') {
            evaluated = prev + now;
            document.getElementById('now').value = evaluated;
        } else if (operand == '-') {
            evaluated = prev - now;
            document.getElementById('now').value = evaluated;
        } else if (operand == '/') {
            evaluated = prev / now;
            document.getElementById('now').value = evaluated;
        } else if (operand == '*') {
            evaluated = prev * now;
            document.getElementById('now').value = evaluated;
        }
    } else {
        return
    }
}

function changeSign() {
    document.getElementById('now').value = document.getElementById('now').value * -1;
}
