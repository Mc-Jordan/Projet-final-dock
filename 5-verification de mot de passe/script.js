const password = document.getElementById("mot-de-passe");
const message = document.getElementById("message");
const paragraph = document.getElementsByTagName("p");
const btn = document.getElementById("send");
password.addEventListener("keyup", (_) => {
	verification();
});
password.addEventListener("focus", (_) => {
	message.style.display = "flex";
});
password.addEventListener("blur", (_) => {
	message.style.display = "none";
});

btn.addEventListener("click", (e) => {
	e.preventDefault();
	if (verification()) {
		if (document.getElementById("utilisateur").value.trim().length > 0) {
			alert("Vos informations sont conformes");
		} else {
			alert("le nom d'utilisateur est vide");
		}
	} else {
		message.style.display = "flex";
	}
});
const verification = () => {
	let lettre = /[a-z]/g;
	let majuscule = /[A-Z]/g;
	let chiffre = /[0-9]/g;
	if (password.value.match(lettre)) {
		paragraph[0].classList.remove("invalid");
		paragraph[0].classList.add("valid");
	} else {
		paragraph[0].classList.add("invalid");
		paragraph[0].classList.remove("valid");
	}
	if (password.value.match(majuscule)) {
		paragraph[1].classList.remove("invalid");
		paragraph[1].classList.add("valid");
	} else {
		paragraph[1].classList.add("invalid");
		paragraph[1].classList.remove("valid");
	}
	if (password.value.match(chiffre)) {
		paragraph[2].classList.remove("invalid");
		paragraph[2].classList.add("valid");
	} else {
		paragraph[2].classList.add("invalid");
		paragraph[2].classList.remove("valid");
	}
	if (password.value.length >= 8) {
		paragraph[3].classList.remove("invalid");
		paragraph[3].classList.add("valid");
	} else {
		paragraph[3].classList.add("invalid");
		paragraph[3].classList.remove("valid");
	}

	return (
		password.value.match(lettre) &&
		password.value.match(majuscule) &&
		password.value.match(chiffre) &&
		password.value.length >= 8
	);
};
