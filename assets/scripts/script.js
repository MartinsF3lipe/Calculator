const monitor = document.getElementById("monitor");
const monitorAndResult = document.getElementById("monitorAndResult");

var result = ""

function clearnumber() {

    var monitorValue = monitor.innerText;
    
    if (monitorValue.length > 0) {
        var newValue = monitorValue.slice(0, -1);
        monitor.innerText = newValue;
        monitorAndResult.innerText = newValue;
    }
    
}


function clearResult() {
    monitor.innerText = "";
    monitorAndResult.innerText = "";
    
}


function addOfdisplay(id) {
    monitor.innerText += id;
    monitorResult();
}


function calculateResult() {
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
