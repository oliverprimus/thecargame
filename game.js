var total = 0;
var bonus;

function addToTotal(score) {
  total += score;
  document.getElementById("idiot").innerHTML = total;

    if (bonus) {
        total += score;
        bonus = false;
        document.getElementById("idiot").innerHTML = total;
}
    }
