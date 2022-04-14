var min = +prompt("в какую четверть часа попадает это число?");

if(min >= 0 && min <= 15) {
    alert("В первую четверть.");
} if (min >= 16 && min <=30){
    alert("Во вторую четверть.");
} if(min >= 31 && min <= 45){
    alert("В третью четверть.");
} if(min >= 46 && min <= 59)
    alert("В четвертую четверть.");


var a = +prompt("чему равна переменная a?", "1");

if(a === 1){
    alert("Верно");
} else {
    alert("Неверно");
}


var test = prompt("чему равна переменная test?", "");

(test !== "true") ? 
    alert ("Верно") : alert ("Неверно");


var test = prompt("чему равна переменная test?", "");

if (test !== "true"){
    alert ("Верно");
} else {
    alert ("Неверно");
}



var a = +prompt("чему равна переменная a?", "")

if(a > 0 && a < 5){
    alert ("Верно");
} else {
    alert ("Неверно");
}


var num = +prompt("какое значение принимает переменная num?", "")
var result;

if (num == 1){
    result = "зима";
} else if(num == 2) {
    result = "весна";
} else if(num == 3) {
    result = "лето";
} else if(num == 4) {
    result = "осень";
}
alert(result);
