function twoNumberOperation(){
    const firstnumber = Number(document.forms.OperationForm.firstnumberoperation.value);
    const secondnumber = Number(document.forms.OperationForm.secondnumberoperation.value);

    const operation = document.forms.OperationForm.numberoperator.value;

    let operationresult = 0;

    //alert(`The result of adding ${firstnumber} and ${secondnumber} is ${operationresult}`);
    
    switch(operation) {
        case 'Addition':
            operationresult = firstnumber +secondnumber;
            alert(`The result of adding ${firstnumber} and ${secondnumber} is ${operationresult}`);
            break;
        case 'Subtraction':
            operationresult = firstnumber-secondnumber;
            alert(`The result of subtracting ${firstnumber} and ${secondnumber} is ${operationresult}`);
            break;
        case 'Multiplication':
            operationresult = firstnumber*secondnumber;
            alert(`The result of Multiplying ${firstnumber} and ${secondnumber} is ${operationresult}`);
            break;
        case 'Division':
            if (secondnumber !=0){
                operationresult = firstnumber/secondnumber;
                alert(`The result of dividing ${firstnumber} and ${secondnumber} is ${operationresult}`);
                break;
            } else {
                alert(`Error! Cannot divide by zero!`);
                break;
            }
    }
}

function IntergerFactorial(){
    const factorialInt = Number(document.forms.FactorialForm.factorialinteger.value);

    let factorialvalue = 1;

    for(let i = 1; i<=factorialInt; i++){
        factorialvalue *= (i);
    }
    alert(`The factorial of ${factorialInt} is ${factorialvalue}`);
}

function fibonacci(){
    const fibnumber = Number(document.forms.FibonacciForm.fibonaccinumber.value);
    
    var thingone = 0;
    var thingtwo = 1;

    for (i = 0; i < fibnumber; i++){
        let tempnum = thingone+thingtwo;
        thingone = thingtwo;
        thingtwo = tempnum;
    }

    alert(`The ${fibnumber}th number in the Fibonacci sequence is: ${thingone}`);

}

function maxminrange(){
    const testnum1 = Number(document.forms.maxMinRangeForm.testnum1.value);
    const testnum2 = Number(document.forms.maxMinRangeForm.testnum2.value);
    const testnum3 = Number(document.forms.maxMinRangeForm.testnum3.value);

    let max = 0;
    let min = 0;
    let range = 0;

    if ((testnum1>testnum2) && (testnum1>testnum3)) {
        max = testnum1;
    } else if ((testnum2>testnum1) && (testnum2>testnum3)){
        max = testnum2;
    } else {
        max = testnum3;
    }

    if ((testnum1<testnum2) && (testnum1<testnum3)) {
        min = testnum1;
    } else if ((testnum2<testnum1) && (testnum2<testnum3)){
        min = testnum2;
    } else {
        min = testnum3;
    }

    range = (max-min);

    alert(`The max is: ${max} \nThe min is: ${min} \nThe range is: ${range}`);
}

function addInfo(){
    var firstName = document.MailingForm.firstname.value;
    var lastName = document.MailingForm.lastname.value;
    var email = document.MailingForm.email.value;
    var ZIP = document.MailingForm.ZIP.value;

    var fullInfo = '<br><div>First Name: ' + firstName + '<br>Lase Name: ' + lastName + '<br>Email: ' + email + '<br>ZIP: ' + ZIP + '</div>';

    document.getElementById("MailList").innerHTML += fullInfo;
}
