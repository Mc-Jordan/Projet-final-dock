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
			ifr.innerHTML = `<iframe
								src="${element.href}"
								class="w-full h-full ${anime}"
								name="iframe_a"
								title="Iframe Example"
							></iframe>`;
	}, 2500);
};
