const link = document.querySelectorAll("li a");
const linkMobile = document.querySelectorAll("#mobile-nav li a");
const home = document.querySelector(".contenu-home");
const ifr = document.querySelector(".contenu-iframe");
const header = document.querySelectorAll("#to-home");

header.forEach((element) => {
	element.addEventListener("click", (_) => {
		home.style.display = "flex";
		sidebarHandler(true);
		if (ifr) {
			ifr.classList.remove("w-full");
			ifr.classList.remove("h-full");
			ifr.innerHTML = "";
		}
	});
});

link.forEach((element) => {
	element.addEventListener("click", function (event) {
		event.preventDefault();
		home.style.display = "none";
		if (ifr) {
			ifr.classList.add("w-full");
			ifr.classList.add("h-full");
			ifr.innerHTML = "";
		}
		displayIFrames(element);
	});
});

linkMobile.forEach((element) => {
	element.addEventListener("click", function (event) {
		event.preventDefault();
		sidebarHandler2(true);
	});
});

const displayIFrames = (element) => {
	const animations = [
		"anime-nav",
		"anime-side2",
		"anime-photo",
		"anime-gmail",
		"anime-whats",
		"anime-linde",
		"anime-tel",
		"anime-iframe",
	];
	const randomIndex = Math.floor(Math.random() * animations.length);
	let anime = animations[randomIndex];
	const loaders = ["loader", "loader1", "loader2", "loader3", "loader4"];

	const randomIndex1 = Math.floor(Math.random() * loaders.length);
	let loader = loaders[randomIndex1];
	ifr.innerHTML = `<div class="flex justify-center items-center h-full"><span class="w-48 h-48 ${loader}"></span></div>`;

	setTimeout(() => {
		if (element == link[0] || element == link[11]) {
			ifr.innerHTML = `<iframe
								src="./1-chronometre/index.html"
								class="w-full h-full ${anime}"
								name="iframe_a"
								title="Iframe Example"
							></iframe>`;
		} else if (element == link[1] || element == link[12]) {
			ifr.innerHTML = `<iframe
								src="./2-toDoList/index.html"
								class="w-full h-full ${anime}"
								name="iframe_a"
								title="Iframe Example"
							></iframe>`;
		} else if (element == link[2] || element == link[13]) {
			ifr.innerHTML = `<iframe
								src="./3-jeux de saut/index.html"
								class="w-full h-full ${anime}"
								name="iframe_a"
								title="Iframe Example"
							></iframe>`;
		} else if (element == link[3] || element == link[14]) {
			ifr.innerHTML = `<iframe
								src="./4-jeux pierre papier ciseau/index.html"
								class="w-full h-full ${anime}"
								name="iframe_a"
								title="Iframe Example"
							></iframe>`;
		} else if (element == link[4] || element == link[15]) {
			ifr.innerHTML = `<iframe
								src="./5-verification de mot de passe/index.html"
								class="w-full h-full ${anime}"
								name="iframe_a"
								title="Iframe Example"
							></iframe>`;
		} else if (element == link[5] || element == link[16]) {
			ifr.innerHTML = `<iframe
								src="./6-jeu de calcul/index.html"
								class="w-full h-full ${anime}"
								name="iframe_a"
								title="Iframe Example"
							></iframe>`;
		} else if (element == link[6] || element == link[17]) {
			ifr.innerHTML = `<iframe
								src="./7-Code Bar generator/index.html"
								class="w-full h-full ${anime}"
								name="iframe_a"
								title="Iframe Example"
							></iframe>`;
		} else if (element == link[7] || element == link[18]) {
			ifr.innerHTML = `<iframe
								src="./8-Password Generator/index.html"
								class="w-full h-full ${anime}"
								name="iframe_a"
								title="Iframe Example"
							></iframe>`;
		} else if (element == link[8] || element == link[19]) {
			ifr.innerHTML = `<iframe
								src="./9-raccourcisseur-url/index.html"
								class="w-full h-full ${anime}"
								name="iframe_a"
								title="Iframe Example"
							></iframe>`;
		} else if (element == link[9] || element == link[20]) {
			ifr.innerHTML = `<iframe
								src="./10-creer des onglets/index.html"
								class="w-full h-full ${anime}"
								name="iframe_a"
								title="Iframe Example"
							></iframe>`;
		} else if (element == link[10] || element == link[21]) {
			ifr.innerHTML = `<iframe
								src="./11-Calculatrice/index.html"
								class="w-full h-full ${anime}"
								name="iframe_a"
								title="Iframe Example"
							></iframe>`;
		}
	}, 2500);
};
