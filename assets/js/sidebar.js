const sideBar = document.getElementById("mobile-nav");
const openSideBar = document.getElementById("openSideBar");
const dNone = document.querySelectorAll("#mobile-nav li a span");
const chil = document.querySelectorAll("#mobile-nav .chil");
const paren = document.querySelector("#mobile-nav .paren");

dNone.forEach((element) => {
	element.style.display = "none";
	element.style.transition = "1s";
});

sideBar.style.transform = "translateX(-190px)";
sideBar.style.transition = "1s";
paren.classList.add("px-2");
paren.classList.remove("px-8");
chil.forEach((element) => {
	element.classList.add("justify-end");
	element.classList.remove("justify-between");
	element.classList.remove("hover:scale-120");
});

let moved = true;
function sidebarHandler(val) {
	
	openSideBar.classList.add("hidden")
	if (!moved && !val) {
		sideBar.style.transform = "translateX(-260px)";
		sideBar.style.transition = "1s";
		paren.classList.remove("px-2");
		paren.classList.add("px-8");
		chil.forEach((element) => {
			element.classList.remove("justify-end");
			element.classList.add("justify-between");
			element.classList.add("hover:scale-120");
		});
		dNone.forEach((element) => {
			element.style.display = "flex";
		});
		moved = false;
	} else {
		sideBar.style.transform = "translateX(-190px)";
		sideBar.style.transition = "1s";
		dNone.forEach((element) => {
			element.style.display = "none";
		});

		sideBar.style.transform = "translateX(-190px)";
		sideBar.style.transition = "1s";
		paren.classList.add("px-2");
		paren.classList.remove("px-8");
		chil.forEach((element) => {
			
			element.classList.add("justify-end");
			element.classList.remove("justify-between");
			element.classList.remove("hover:scale-120");
		});
		moved = true;
	}
}
let mov = true;
function sidebarHandler2(val) {
	if (mov && !val) {
		sideBar.style.transform = "translateX(-190px)";
		sideBar.style.transition = "1s";
		mov = false;
	} else {
		sideBar.style.transform = "translateX(-260px)";
		sideBar.style.transition = "1s";
		mov = true;
	openSideBar.classList.remove("hidden")
	}
}
