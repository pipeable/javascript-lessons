
var mouseGame = {};

mouseGame.initialize = function() {
    mouseGame.score = document.getElementById("mg-score");
    mouseGame.squares = document.getElementsByClassName("mg-square");

    for (var i = 0; i < mouseGame.squares.length; i++) {
        mouseGame.squares[i].addEventListener('click', mouseGame.onSquareClick);
    }

    setInterval(mouseGame.update, 1000);
};

mouseGame.onSquareClick = function(event) {
    var target = event.target;
    var classes = target.className;

    if (classes.indexOf("mg-square-selected") > 0) {
        target.className = "mg-square";
        mouseGame.score.innerHTML = parseInt(mouseGame.score.innerHTML) + 100;
    }
};

mouseGame.update = function() {
    var squaresCount = mouseGame.squares.length;
    var randomIndex = Math.floor(Math.random() * squaresCount);

    for (var i = 0; i < mouseGame.squares.length; i++) {
        mouseGame.squares[i].className = randomIndex === i ? "mg-square mg-square-selected" : "mg-square";
    }
};

mouseGame.initialize();
