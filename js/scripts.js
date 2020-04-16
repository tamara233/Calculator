let displayNum =  document.getElementById('num-display')
console.log('val', displayNum.value)

function display(n) {
    let d = displayNum.value =displayNum.value + n
    //clear the number display
    if (n === 'c') {
        console.log('clear')
        displayNum.value = ''
    }
    //add decimal pointer
    else if (n === '.'){
        d = d+'.'
    }
}

function equal() {
    let d = displayNum.value
    if(d) {
        displayNum.value = eval(d)
    }
}

function clear(){
    console.log('here')
    displayNum.value = '';
}