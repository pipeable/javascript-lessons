
var clock = {};

clock.initialize = function() {
    clock.element = document.getElementById('clock');
    setInterval(clock.update, 1000);
};

clock.update = function() {
    var date = new Date();
    var hours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    var minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    var seconds = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    clock.element.innerHTML = hours + ':' + minutes + ':' + seconds;
}

clock.initialize();
