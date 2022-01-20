var css = document.querySelector("h3");

var color1 = document.querySelector(".color1");

var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");

var button = document.querySelector("button");

function selectColor (){
	body.style.background=
	"linear-gradient(to right, "
	+ color1.value
	+ " , "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", selectColor);

color2.addEventListener("input", selectColor);

button.addEventListener("click", function(){
	color1.value = ("#" + ("000000" + Math.floor(Math.random() * 16777216).toString(16)).substr(-6));
	color2.value = ("#" + ("000000" + Math.floor(Math.random() * 16777216).toString(16)).substr(-6));
	selectColor();
})

selectColor()

