var images = ["kittenstart.png", "learnToCode.png", "aylmao.png"];
var picture = 0;
function dot_press(x, y){
	picture = y;
	resetImages();
	x.style.opacity = "1";
}
function arrow(x){
	if(x === 1){
		if(picture === 0) picture = 2;
		else picture--;
	}
	else {
		if(picture === 2) picture = 0;
		else picture++;
	}
	resetImages();
	if(picture === 0) document.getElementById("dot1").style.opacity = "1";
	else if(picture === 1) document.getElementById("dot2").style.opacity = "1";
	else document.getElementById("dot3").style.opacity = "1";
}
function resetImages(){
	document.getElementById("slideshow_pic").src = images[picture];
	document.getElementById("dot1").style.opacity = "0.6";
	document.getElementById("dot2").style.opacity = "0.6";
	document.getElementById("dot3").style.opacity = "0.6";
}