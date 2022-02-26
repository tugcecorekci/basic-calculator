let screen = document.querySelector('.operationScreen')
screen.textContent = "0"
let firstValue = 0
let operation = function () { }

function getValue() {
    for (let i = 0; i < 10; i++) {
        let val = document.getElementById(i)
        val.addEventListener('click', () => clickNum(i))
    }
}

function clickNum(a) {
    let button = document.getElementById(a)
    if (screen.textContent == "0") {
        screen.textContent = button.value
    }
    else {
        screen.textContent += button.value
    }
}

getValue()

function add() {
    let a = parseInt(screen.textContent)
    let result = firstValue + a
    screen.textContent = result
}

function minus() {
    let a = parseInt(screen.textContent)
    let result = firstValue - a
    screen.textContent = result
}

function multi() {
    let a = parseInt(screen.textContent)
    let result = firstValue * a
    screen.textContent = result
}

function divide() {
    let a = parseInt(screen.textContent)
    let result = firstValue / a
    screen.textContent = result
}

const plusBtn = document.querySelector('#plus')
plusBtn.addEventListener('click', plusFunc)

function plusFunc() {
    firstValue = parseInt(screen.textContent)
    operation = add
    screen.textContent = "0"
}
const minusBtn = document.querySelector('#minus')
minusBtn.addEventListener('click', minusFunc)

function minusFunc() {
    firstValue = parseInt(screen.textContent)
    operation = minus
    screen.textContent = "0"
}
const multiBtn = document.querySelector('#multi')
multiBtn.addEventListener('click', multiFunc)

function multiFunc() {
    firstValue = parseInt(screen.textContent)
    operation = multi
    screen.textContent = "0"
}
const divideBtn = document.querySelector('#divide')
divideBtn.addEventListener('click', divideFunc)

function divideFunc() {
    firstValue = parseInt(screen.textContent)
    operation = divide
    screen.textContent = "0"
}

const equalBtn = document.querySelector('#equal')
equalBtn.addEventListener('click', () => operation())