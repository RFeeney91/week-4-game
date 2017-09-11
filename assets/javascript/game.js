function myFunction() {
document.getElementById("goal").innerHTML = Math.floor(Math.random() * 121) + 19;
}

function scoreFunction() {
  // this assignment will throw a syntax error since `;` isn't a valid value for assignment
	// document.getElementById("score").innerHTML = ;

}

function buttonFunction() {
	document.getElementById("gem1").addEventListener("click",  function() { Math.floor(Math.random() * 13) + 1; })
	
}

var buttons, text, bLen, i;
buttons = ["gem1", "gem2", "gem3", "gem4"];

// empty assignments like this will cause some funky errors
// bLen = 
// opening this for loop and not closing it out cause JS to think that the next line of code
// it encounters will be part of this for loop definition, which will break your program in this case.
// for (i = 0; i < 

//for Loop though Arrays//
var fruits, text, fLen, i;

fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
// you wanna make sure the element's you're targeting exist in the DOM
// in this case, there isn't an element with an id of demo, so this line
// of code will break your program.
// document.getElementById("demo").innerHTML = text;