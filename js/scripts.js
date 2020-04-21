const displayNum =  document.getElementById('num-display')
const operators = [ '+', '-', '*', '/' ];

function display(n) {
    let d = displayNum.value = displayNum.value + n
    console.log('val', d, displayNum.value)

    //clear the number display
    if (n === 'c') {
        const clearBtn = document.getElementById('#clear');
        displayNum.value = ''
        d.length = 0;
    }

    //toggle operators disabled to enabled   
    let list = document.getElementsByClassName('ops');
    for (let item of list) {
        if(displayNum.value.length < 1 || displayNum.value == 'c'){
            item.disabled = true;
        } else {
            item.disabled = false;
        }
        //prevent outputting multiple operators
        if (operators.includes(d[d.length - 1])){
            //if (item.value == n) {
             item.disabled = true;
            //}
            //  else {
            //     let minusLast = displayNum.value.substring(0, displayNum.value.length - 1)
            //     displayNum.value = minusLast.substring(0, displayNum.value.length - 1) + n
            //     console.log('from else',displayNum.value, 'minus last: ', displayNum.value.substring(0, displayNum.value.length - 1), 'current: ', n)
            // }
        }    
    }
    
    //add decimal pointer
     if (n === '.'){
        if (d.length == 1){
            displayNum.value = '0.5'
        }     
        if(operators.includes(d[d.length - 2])) {
            displayNum.value = displayNum.value.substring(0, displayNum.value.length -1) + '0.5'            
        }
    }
}

function equal() {
    const d = displayNum.value
    if(d) {
        displayNum.value = eval(d)
    }
}

