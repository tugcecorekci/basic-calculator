let screen = document.querySelector('.operationScreen')
screen.textContent = "0"

let firstValue = 0
let secondValue = 0
let operation = null
let isPreviousOperationEqual = false

function fontSizeChange() {
    if (screen.textContent.length < 8) {
        screen.style.fontSize = "4vw"
        screen.style.textAlign = "right"
    }
    else if (screen.textContent.length == 8) {
        screen.style.fontSize = "3vw"
        screen.style.textAlign = "right"
    }
    else if (screen.textContent.length == 10) {
        screen.style.fontSize = "2.7vw"
        screen.style.textAlign = "right"
    }
    else if (screen.textContent.length == 11) {
        screen.style.fontSize = "2.4vw"
        screen.style.textAlign = "right"
    }
    else if (screen.textContent.length == 12) {
        screen.style.fontSize = "2.2vw"
        screen.style.textAlign = "left"
    }
    else if (screen.textContent.length > 12) {
        screen.style.fontSize = "2vw"
        screen.style.textAlign = "left"
    }
}

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
    fontSizeChange()
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
    if (!operation || !firstValue || !secondValue) return
    operation()
    firstValue = screen.textContent
    isPreviousOperationEqual = true
    fontSizeChange()
}

function add() {
    if (!firstValue || !secondValue) return
    let result = parseFloat(firstValue.replace(",", ".")) + parseFloat(secondValue.replace(",", "."))
    screen.textContent = result.toString().replace(".", ",").slice(0, 12)
}

function minus() {
    if (!firstValue || !secondValue) return
    let result = parseFloat(firstValue.replace(",", ".")) - parseFloat(secondValue.replace(",", "."))
    screen.textContent = result.toString().replace(".", ",").slice(0, 12)
}

function multi() {
    if (!firstValue || !secondValue) return
    let result = parseFloat(firstValue.replace(",", ".")) * parseFloat(secondValue.replace(",", "."))
    screen.textContent = result.toString().replace(".", ",").slice(0, 12)
}

function divide() {
    if (!firstValue || !secondValue) return
    let result = parseFloat(firstValue.replace(",", ".")) / parseFloat(secondValue.replace(",", "."))
    screen.textContent = result.toString().replace(".", ",").slice(0, 12)
}

function plusFunc() {
    if (operation && isPreviousOperationEqual == false) {
        operation()
        fontSizeChange()
    }
    operation = add
    firstValue = screen.textContent
    isPreviousOperationEqual = false
    fontSizeChange()
}

function minusFunc() {
    if (operation && isPreviousOperationEqual == false) {
        operation()
        fontSizeChange()
    }
    operation = minus
    firstValue = screen.textContent
    isPreviousOperationEqual = false
    fontSizeChange()
}

function multiFunc() {
    if (operation && isPreviousOperationEqual == false) {
        operation()
        fontSizeChange()
    }
    operation = multi
    firstValue = screen.textContent
    isPreviousOperationEqual = false
    fontSizeChange()
}

function divideFunc() {
    if (operation && isPreviousOperationEqual == false) {
        operation()
        fontSizeChange()
    }
    operation = divide
    firstValue = screen.textContent
    isPreviousOperationEqual = false
    fontSizeChange()
}

const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', clearFunc)

function clearFunc() {
    screen.textContent = "0"
    firstValue = 0
    secondValue = 0
    operation = null
    fontSizeChange()
}

const percentBtn = document.querySelector('#percent')
percentBtn.addEventListener('click', percentFunc)

function percentFunc() {
    firstValue = parseFloat(screen.textContent)
    if (firstValue == 0) return
    let result = firstValue / 100
    let resultString = result.toString()
    if (resultString.length > 9) {
        screen.textContent = result.toFixed(10)
    }
    else {
        screen.textContent = result
    }
    fontSizeChange()
}

const pmBtn = document.querySelector('#pm')
pmBtn.addEventListener('click', pmFunc)

function pmFunc() {
    if (screen.textContent == "0") {
        screen.textContent = "-0"
    }
    else {
        screen.textContent = parseFloat(screen.textContent) * (-1)
    }
    fontSizeChange()
}

const commaBtn = document.querySelector('#comma')
commaBtn.addEventListener('click', commaFunc)

function commaFunc() {
    if (screen.textContent == "0") {
        screen.textContent = "0,"
    }
    else if (screen.textContent == "-0") {
        screen.textContent = "-0,"
    }
    else {
        let screenNum = parseFloat(screen.textContent)
        let screenNumString = screenNum.toString()
        screen.textContent = screenNumString.concat(",")
        fontSizeChange()
    }
}

//keyboard events

const keyboardValues = {
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

document.addEventListener('keydown', keyNum)

function keyNum(e) {
    if (keyboardValues[e.key] && keyboardValues[e.key] != "minus") {
        let keyNumberId = keyboardValues[e.key]
        let keys = document.getElementById(keyNumberId)
        keys.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        }))
    }
    else if (keyboardValues[e.key] == "minus") {
        if (screen.textContent == "0") {
            pmFunc()
        }
        else {
            minusFunc()
        }
    }
    fontSizeChange()
}

document.addEventListener('keydown', backgroundColorFunc)

function backgroundColorFunc(e) {
    let keyNumberId = keyboardValues[e.key]
    let keys = document.getElementById(keyNumberId)
    if (!keyboardValues[e.key]) return
    switch (keyboardValues[e.key]) {
        default:
            keys.style.backgroundColor = "#b0b3be";
            break;
        case "plus":
        case "minus":
        case "multi":
        case "divide":
        case "equal":
            keys.style.backgroundColor = "#c48432";
            break;
        case "clear":
        case "percent":
            keys.style.backgroundColor = "#75777e";
            break;
    }
}

document.addEventListener('keydown', backgroundColorRemoveFunc)

async function backgroundColorRemoveFunc(e) {
    setTimeout(() => {
        let keyNumberId = keyboardValues[e.key]
        let keys = document.getElementById(keyNumberId)
        if (!keyboardValues[e.key]) return
        switch (keyboardValues[e.key]) {
            default:
                keys.style.backgroundColor = "#75777e";
                break;
            case "plus":
            case "minus":
            case "multi":
            case "divide":
            case "equal":
                keys.style.backgroundColor = "#F2A33C";
                break;
            case "clear":
            case "percent":
                keys.style.backgroundColor = "#565759";
                break;
        }
    }, 100);
}

