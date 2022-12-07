function setDate() {
	var then = new Date("2022-12-31").getTime();
	var now = new Date().getTime();
	var distance = then - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24)
	);
	var mintues = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	card.innerHTML = days + "d " + hours + "h " + mintues + "m " + seconds + "s ";

	if (distance < 0) {
		clearInterval(x);
		card.innerHTML = "EXPIRED";
	}
}
window.onload = function () {
	var card = document.getElementById("card");
	var x = null;
	card.onclick = function () {
		if (card.classList.contains("card-click")) {
			card.classList.remove("card-click");
			card.innerHTML = "Christmas";
			clearInterval(x);
		} else {
			card.classList.add("card-click");
			x = setInterval(setDate, 1000);
		}
	};
};
