
var calculator = {};

calculator.initialize = function() {
    calculator.display = document.getElementById("c-display");
    calculator.operations = document.getElementById("c-operations");
    calculator.result = document.getElementById("c-result");

    var buttons = document.getElementsByClassName("c-button");

    for (var i = 0; i < buttons.length; i++ ) {
        buttons[i].onclick = calculator.onButtonClick;
    }
};

calculator.resolve = function() {
    var operations = calculator.operations;

    calculator.result.innerHTML = 'Nice!';
};

calculator.onButtonClick = function(event) {
    var operation = event.target.innerHTML;
    var operations = calculator.operations.innerHTML;
    
    if (operation === '=') {
        console.log("calculator - result");
        calculator.resolve();
    } else if (operation === 'erase') {
        console.log("calculator - erase");

        operations = operations.slice(0, -1);
        calculator.operations.innerHTML = operations;
    } else {
        calculator.operations.innerHTML += operation;
    }
}

calculator.initialize();
