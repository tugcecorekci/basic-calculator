let screen = document.querySelector('.operationScreen')
screen.textContent = "0"
let currentValue = 0
let firstValue = 0
let secondValue = 0
let operation = null

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
        currentValue = screen.textContent
    }
    else if (screen.textContent == firstValue) {
        screen.textContent = button.value
        currentValue = screen.textContent
    }
    else {
        screen.textContent += button.value
        currentValue = screen.textContent
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
    secondValue = currentValue
    operation()
    firstValue = screen.textContent
}

function add() {
    screen.textContent = parseInt(firstValue) + parseInt(secondValue)
}

function minus() {
    screen.textContent = parseInt(firstValue) - parseInt(secondValue)
}

function multi() {
    screen.textContent = parseInt(firstValue) * parseInt(secondValue)
}

function divide() {
    screen.textContent = parseInt(firstValue) / parseInt(secondValue)
}

function plusFunc() {
    operation = add
    firstValue = currentValue
    currentValue = 0
}

function minusFunc() {
    operation = minus
    firstValue = currentValue
    currentValue = 0
}

function multiFunc() {
    operation = multi
    firstValue = currentValue
    currentValue = 0
}

function divideFunc() {
    operation = divide
    firstValue = currentValue
    currentValue = 0
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

//keyboard events
document.addEventListener('keydown', keyNum)

function keyNum(e) {
    if (isNaN(e.key) != true) {
        if (operation == null) {
            if (screen.textContent == "0") {
                screen.textContent = parseInt(e.key)
            }
            else if (screen.textContent == "-0") {
                screen.textContent = e.key * (-1)
            }
            else {
                screen.textContent += e.key
            }
            currentValue = screen.textContent
        }
        else if (screen.textContent == firstValue) {
            screen.textContent = e.key
            currentValue = screen.textContent
        }
        else {
            screen.textContent += e.key
            currentValue = screen.textContent
        }
    }
    else if (e.key == "+") {
        plusFunc()
    }
    else if (e.key == "-") {
        if (screen.textContent == "0") {
            pmFunc()
        }
        else {
            minusFunc()
        }
    }
    else if (e.key == "*") {
        multiFunc()
    }
    else if (e.key == "/") {
        divideFunc()
    }
    else if (e.key == "=") {
        operation()
    }
    else if (e.key == "Enter") {
        operation()
    }
    else if (e.key == "%") {
        percentFunc()
    }
    else if (e.key == "Escape") {
        clearFunc()
    }
}
