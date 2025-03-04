var span,
	start,
	ms = 0,
	s = 0,
	min = 0,
	h = 0;

span = document.getElementsByTagName("span");
btnStart = document.getElementById("start");

const updateTime = () => {
	ms++;
	if (ms == 10) {
		s++;
		ms = 0;
	}
	if (s == 60) {
		min++;
		s = 0;
	}
	if (min == 60) {
		h++;
		min = 0;
	}

	span[0].innerHTML = h + "h: ";
	span[1].innerHTML = min + "min: ";
	span[2].innerHTML = s + "s: ";
	span[3].innerHTML = ms + "ms";
};

function start() {
	t = setInterval(updateTime, 100);
	btnStart.disabled = true;
}

const stop = () => {
	clearInterval(t);
	btnStart.disabled = false;
};

const reset = () => {
	clearInterval(t);
	ms = 0;
	s = 0;
	min = 0;
	h = 0;

	span[0].innerHTML = h + "h: ";
	span[1].innerHTML = min + "min: ";
	span[2].innerHTML = s + "s: ";
	span[3].innerHTML = ms + "ms";
	btnStart.disabled = false;
};
