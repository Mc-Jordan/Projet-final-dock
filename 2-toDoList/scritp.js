var addButton = document.getElementById("add");
var listToDo = document.getElementById("listToDo");
var todo = document.getElementById("todo");

addButton.addEventListener("click", function () {
	if (todo.value != "") {
		var paragraph = document.createElement("p");
		var throught = false;
	}
	paragraph.innerHTML = todo.value;
	paragraph.classList.add("paragraph-style");
	listToDo.appendChild(paragraph);
	todo.value = "";
	paragraph.addEventListener("click", function () {
		throught = !throught;
		if (throught) {
			paragraph.classList.add("paragraph-click");
			paragraph.classList.remove("paragraph-reclick");
		} else {
			paragraph.classList.remove("paragraph-click");
			paragraph.classList.add("paragraph-reclick");
		}
	});

	paragraph.addEventListener("dblclick",function(){
		paragraph.remove(paragraph)
	})
});
