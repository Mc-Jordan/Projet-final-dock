var perso = document.querySelector(".perso");
var obstacle = document.querySelector(".obstacle");
var stateImage = document.querySelector("#image");
var scoreSpan = document.getElementsByTagName("span");
var imageGif = new Image();
imageGif.src = "coureur.gif";
imageGif.hidden = true;
perso.appendChild(imageGif);
var imageCourant = stateImage.cloneNode(true);

function sauter() {
	if (perso.classList != "animation-one-click") {
		stateImage.hidden = false;
		perso.lastChild.hidden = true;
		perso.classList.add("animation-one-click");
	}
	setTimeout(function () {
		perso.classList.remove("animation-one-click");
		perso.lastChild.hidden = false;
		stateImage.hidden = true;
	}, 700);
}

const start = () => {
	if (obstacle.classList != "roule-animation") {
		obstacle.classList.add("roule-animation");
	}
	var conteur = 0.0;
	perso.lastChild.hidden = false;
	stateImage.hidden = true;
	var element = window.getComputedStyle(obstacle).getPropertyValue("animation");
	var valeur = parseFloat(element.split("s")[0]);

	setInterval(function () {
		var positionPerso = window.getComputedStyle(perso).getPropertyValue("top");
		var positionObstacle = window
			.getComputedStyle(obstacle)
			.getPropertyValue("left");
		if (
			parseInt(positionObstacle) > 0 &&
			parseInt(positionObstacle) < 41 &&
			parseInt(positionPerso) <= 100 &&
			parseInt(positionPerso) >= 78
		) {
			perso.replaceChild(stateImage, perso.lastChild);
			stateImage.hidden = false;
			obstacle.style.left = positionObstacle;
			obstacle.style.animation = "none";

			alert("Vous avez perdu");
			stop();
			obstacle.style.left = "500px";
		} else {
			valeur = valeur - 0.0001;
			obstacle.style.animation = "roule " + valeur + "s infinite";
		}
		if (parseInt(positionObstacle) <= 0 && parseInt(positionObstacle) > -20) {
			conteur = conteur + 0.1;
			scoreSpan[0].innerHTML = "" + Math.round(conteur) + " XP";
		}
	}, 1.0);
};

const stop = () => {
	location.reload();
};
