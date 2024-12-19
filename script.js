let inputresult=document.getElementById ("result")
let operator
let number1
let number2
function addnumber(number) {
 inputresult.value=inputresult.value+number
}
function clean() {
    inputresult.value=""
}
function addoperator(_operator) {
    number1=inputresult.value
    operator=_operator
    inputresult.value+=_operator
}
function calculate() {
    number2=inputresult.value.slice(number1.length+1)
    let x=parseFloat(number1)
    let y=parseFloat(number2)
    let result
    switch (operator) {
        case '+':
            result=x+y
            break;
            case '-':
                result=x-y
                break;
                case '*':
                    result=x*y
                    break;
                    case '/':
                        result=x/y
                        break;
        default:
            break;
    }
     inputresult.value=result
}
