/**
 * Author: Mihai-Catalin Arsenescu
 */
var STARTING_NUMBER_OF_FACES = 5;
var IMG_WIDTH = 100;
var IMG_HEIGHT = 100;
var LEFTDIV_TOP = 0;
var LEFTDIV_LEFT = 0;
var RIGHTDIV_TOP = 0;
var RIGHTDIV_LEFT = 500;
var DIV_WIDTH = 500;
var DIV_HEIGHT = 500;

function startGame() {
	var numberOfFaces = STARTING_NUMBER_OF_FACES;
	
	// TODO: add loop
	generateFaces(numberOfFaces);
}

function generateFaces(numberOfFaces) {
	var theLeftSide = document.getElementById("leftSide");
	var theRightSide = document.getElementById("rightSide");
	
	while (theLeftSide.firstChild) {
		theLeftSide.removeChild(theLeftSide.firstChild);
	}
	while (theRightSide.firstChild) {
		theRightSide.removeChild(theRightSide.firstChild);
	}
	
	var img;
	for (var i = 0; i < numberOfFaces; i++) {
		img = document.createElement("img");
		img.src = "resources/smile.png";
		img.style.top = Math.floor(Math.random() * (LEFTDIV_TOP + DIV_HEIGHT - IMG_HEIGHT)) + "px";
		img.style.left = Math.floor(Math.random() * (LEFTDIV_LEFT + DIV_WIDTH - IMG_WIDTH)) + "px";
		theLeftSide.appendChild(img);
		if (i < numberOfFaces - 1)
			theRightSide.appendChild(img.cloneNode(true));
	}
	var theBody = document.getElementsByTagName("body")[0];
	theBody.onclick = function gameOver() {

	    alert("Game Over!");

	    theBody.onclick = null;

	    theLeftSide.lastChild.onclick = null;

	}; 
	theLeftSide.lastChild.onclick=
	    function nextLevel(event){

	        event.stopPropagation();

	        numberOfFaces += 5;

	        generateFaces(numberOfFaces);

	};

	
}
