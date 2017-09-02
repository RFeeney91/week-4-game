function myFunction() {
document.getElementById("goal").innerHTML = Math.floor(Math.random() * 121) + 19;
}

function scoreFunction() {
	document.getElementById("score").innerHTML = ;

}

function buttonFunction() {
	document.getElementById("gem1").addEventListener("click",  function() { Math.floor(Math.random() * 13) + 1;
	
}

var buttons, text, bLen, i;
buttons = ["gem1", "gem2", "gem3", "gem4"];
bLen = 
for (i = 0; i < 

//for Loop though Arrays//
var fruits, text, fLen, i;

fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;