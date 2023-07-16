const monitor = document.getElementById("monitor");
const monitorAndResult = document.getElementById("monitorAndResult");


var sound = new Audio ("assets/sounds/click.mp3")
var result = ""

function clearnumber() {

    playsound();
    
    var monitorValue = monitor.innerText;
    
    if (monitorValue.length > 0) {
        var newValue = monitorValue.slice(0, -1);
        monitor.innerText = newValue;
        monitorAndResult.innerText = newValue;
    }
    
}


function clearResult() {
    playsound();
    monitor.innerText = "";
    monitorAndResult.innerText = "";
    
}


function addOfdisplay(id) {
    playsound();
    monitor.innerText += id;
    monitorResult();
    playsound();
}


function calculateResult() {
    playsound();
    result = eval(monitor.innerText);
    monitor.innerText = result;
    monitorAndResult.innerText = "";
}

function monitorResult() {

    monitorAndResult.innerText = monitor.innerText;
    
    try {
        monitorAndResult.innerText = eval(monitorAndResult.innerText);
    }
    catch {
        monitorAndResult.innerText = monitor.innerText;
    }
}

function playsound() {
    sound.play();
}
