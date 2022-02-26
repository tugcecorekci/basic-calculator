let screen = document.querySelector('.operationScreen')
screen.textContent = "0"
let firstValue = 0
let operation = null

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
    else if (screen.textContent == "-0") {
        screen.textContent = button.value * (-1)
    }
    else {
        screen.textContent += button.value
    }
}

getValue()

const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const multiBtn = document.querySelector('#multi')
const divideBtn = document.querySelector('#divide')
const equalBtn = document.querySelector('#equal')

plusBtn.addEventListener('click', plusFunc)
minusBtn.addEventListener('click', minusFunc)
multiBtn.addEventListener('click', multiFunc)
divideBtn.addEventListener('click', divideFunc)
equalBtn.addEventListener('click', () => operation())

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

function plusFunc() {
    firstValue = parseInt(screen.textContent)
    operation = add
    screen.textContent = "0"
}

function minusFunc() {
    firstValue = parseInt(screen.textContent)
    operation = minus
    screen.textContent = "0"
}

function multiFunc() {
    firstValue = parseInt(screen.textContent)
    operation = multi
    screen.textContent = "0"
}

function divideFunc() {
    firstValue = parseInt(screen.textContent)
    operation = divide
    screen.textContent = "0"
}

const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', clearFunc)

function clearFunc() {
    screen.textContent = "0"
    firstValue = 0
    operation = null
}

const percentBtn = document.querySelector('#percent')
percentBtn.addEventListener('click', percentFunc)

function percentFunc() {
    firstValue = parseInt(screen.textContent)
    if (firstValue == 0) return
    let result = firstValue / 100
    screen.textContent = result
}

const pmBtn = document.querySelector('#pm')
pmBtn.addEventListener('click', pmFunc)

function pmFunc() {
    if (screen.textContent === "0") {
        screen.textContent = "-0"
    }
    else {
        firstValue = parseInt(screen.textContent)
        firstValue = -firstValue
        screen.textContent = firstValue
    }
} 