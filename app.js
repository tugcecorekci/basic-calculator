const values = []

function getValue() {
    for (let i = 0; i < 10; i++) {
        let val = document.getElementById(i)
        val.addEventListener('click', () => clickNum(i))
    }
}

getValue()

function clickNum(a) {
    const num = document.querySelector('.operationScreen')
    const button = document.getElementById(a)
    if (num.textContent == 0) {
        num.textContent = button.value
    }
    else {
        num.textContent += button.value
    }
    console.log(values[0] = parseInt(num.textContent))
}


