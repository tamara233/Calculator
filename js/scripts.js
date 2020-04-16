let displayNum =  document.getElementById('num-display')
console.log('val', displayNum.value)

function display(n) {
    let d = displayNum.value =displayNum.value + n
    console.log('numbers: ', d, 'num legth: ', d.length, 'lastChar: ', d[d.length - 2])
    console.log('what is',typeof(parseFloat(d)))
    //clear the number display
    if (n === 'c') {
        const clearBtn = document.getElementById('#clear');
        console.log('clear')
        displayNum.value = ''
    }
    //add decimal pointer
    else if (n === '.'){
        if (d.length == 1){
            displayNum.value = '0.5'
        } if(d[d.length - 2] === '+' ) {
            console.log('here')
        }
        const clearBtn = document.getElementById('#clear');
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