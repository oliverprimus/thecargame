var total = 0;
var bonus;
var lastValue = [];

function addToTotal(score) {
    if (bonus) {
        score = score * 2;
        bonus = false;
        document.getElementById("idiot").innerHTML = total;
}
total += score;
lastValue.push(score);
document.getElementById("idiot").innerHTML = total;
    }

function myReset(reset){
bonus = false;
total = 0;
document.getElementById("idiot").innerHTML = total;
}

function undoLastAdd(){
total -= lastValue[lastValue.length-1];
lastValue.splice(-1,1);
document.getElementById("idiot").innerHTML = total;
}
