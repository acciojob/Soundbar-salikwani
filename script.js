//your JS code here. If required.
var play = document.querySelector(".btn");
var flag = false;
play.addEventListener("click", ()=> {
	if(!flag) {
		document.querySelector("audio").play();
		flag = true;
	}
});
var stop = document.querySelector(".stop");
stop.addEventListener("click", ()=> {
	if(flag) {
		document.querySelector("audio").pause();
		flag = false;
	}
});