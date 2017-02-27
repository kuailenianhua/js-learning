var carImg = document.querySelector("#car");
var imgPath = "downloadImg3/";
var idx = 0;

function preLoadImg() {
	for(var i=0; i<60; i++) {
		var img = new Image();
		var imgUrl = imgPath + i + ".jpg";
		img.src = "url("+imgUrl+")";
	}
	changeImg();
}
preLoadImg();

var hammer = new Hammer(carImg);
hammer.on("pan", e => {
	// console.log(e.additionalEvent);
	// console.log(e.type);
	var panType = e.additionalEvent;
	var type = "";
	if(panType == "panleft") {
		type = "clockwise";
	} else if(panType == "panright") {
		type = "anti";
	}
	rotate(type);
});

function rotate(type) {
	if(type == "clockwise") {
		idx++;
		if(idx >= 60) {
			idx = 0;
		}
	} else if(type == "anti") {
		idx--;
		if(idx < 0) {
			idx = 59;
		}
	}
	changeImg();
}

function changeImg() {
	var imgUrl = imgPath + idx + ".jpg";
	carImg.style.backgroundImage = "url("+imgUrl+")";
}