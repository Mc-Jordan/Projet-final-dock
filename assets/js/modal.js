
			var modal = document.getElementById("myModal");
			var btns = document.querySelectorAll(".to-me");
			var span = document.getElementsByClassName("close")[0];
            btns.forEach(element => {
                element.onclick = function() {
			  modal.style.display = "flex";
			}
            });
			
			span.onclick = function() {
			  modal.style.display = "none";
			}
			window.onclick = function(event) {
			  if (event.target == modal) {
				modal.style.display = "none";
			  }
			}