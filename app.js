let screen = document.querySelector('.operationScreen')
screen.textContent = "0"
let firstValue = 0
let secondValue = 0
let operation = null
let isPreviousOperationEqual = false

function getValue() {
    for (let i = 0; i < 10; i++) {
        let val = document.getElementById(i)
        val.addEventListener('click', () => clickNum(i))
    }
}

function clickNum(a) {
    let button = document.getElementById(a)
    if (operation == null) {
        if (screen.textContent == "0") {
            screen.textContent = button.value
        }
        else if (screen.textContent == "-0") {
            screen.textContent = button.value * (-1)
        }
        else {
            screen.textContent += button.value
        }
        firstValue = screen.textContent
    }
    else if (screen.textContent == firstValue) {
        screen.textContent = button.value
        secondValue = screen.textContent
    }
    else {
        screen.textContent += button.value
        secondValue = screen.textContent
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
equalBtn.addEventListener('click', equalFunc)

function equalFunc() {
    operation()
    firstValue = screen.textContent
    isPreviousOperationEqual = true
    console.log(screen.textContent)
    console.log(firstValue)
    console.log(secondValue)
}

function add() {
    screen.textContent = parseFloat(firstValue) + parseFloat(secondValue)
}

function minus() {
    screen.textContent = parseFloat(firstValue) - parseFloat(secondValue)
}

function multi() {
    screen.textContent = parseFloat(firstValue) * parseFloat(secondValue)
}

function divide() {
    screen.textContent = parseFloat(firstValue) / parseFloat(secondValue)
}

function plusFunc() {
    if (operation && isPreviousOperationEqual == false) {
        operation()
    }
    operation = add
    firstValue = screen.textContent
    isPreviousOperationEqual = false
}

function minusFunc() {
    if (operation && isPreviousOperationEqual == false) {
        operation()
    }
    operation = minus
    firstValue = screen.textContent
    isPreviousOperationEqual = false
}

function multiFunc() {
    if (operation && isPreviousOperationEqual == false) {
        operation()
    }
    operation = multi
    firstValue = screen.textContent
    isPreviousOperationEqual = false
}

function divideFunc() {
    if (operation && isPreviousOperationEqual == false) {
        operation()
    }
    operation = divide
    firstValue = screen.textContent
    isPreviousOperationEqual = false
}

const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', clearFunc)

function clearFunc() {
    screen.textContent = "0"
    firstValue = 0
    secondValue = 0
    operation = null
}

const percentBtn = document.querySelector('#percent')
percentBtn.addEventListener('click', percentFunc)

function percentFunc() {
    firstValue = parseFloat(screen.textContent)
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
        currentValue = parseFloat(screen.textContent)
        currentValue = -currentValue
        screen.textContent = currentValue
    }
}

//keyboard events
document.addEventListener('keydown', keyNum)

const keyValues = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "Escape": "clear",
    "%": "percent",
    "+": "plus",
    "-": "minus",
    "*": "multi",
    "/": "divide",
    "=": "equal",
    "Enter": "equal",
    ",": "comma"
}

function keyNum(e) {
    console.log(e.key)
    if (keyValues[e.key] && keyValues[e.key] != "minus") {
        let keyNumberId = keyValues[e.key]
        let keys = document.getElementById(keyNumberId)
        keys.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        }))
    }
    else if (keyValues[e.key] == "minus") {
        if (screen.textContent == "0") {
            pmFunc()
        }
        else {
            minusFunc()
        }
    }
}