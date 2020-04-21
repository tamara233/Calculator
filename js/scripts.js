const displayNum =  document.getElementById('num-display')
const operators = [ '+', '-', '*', '/' ];

function display(n) {
    let d = displayNum.value = displayNum.value + n
    console.log('val', displayNum.value)

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
            if (item.value == n) {
             item.disabled = true;
            }
            //allow changing operator
             else if (operators.includes(d[d.length - 2])) {
                displayNum.value = displayNum.value.substring(0, displayNum.value.length - 2) + n
            return
            }
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

