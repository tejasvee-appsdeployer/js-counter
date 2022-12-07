function clickEvent() {
	if (this.classList.contains("card-click")) {
		this.classList.remove("card-click");
		this.innerHTML =
			this.classList[0].charAt(0).toUpperCase() + this.classList[0].slice(1);
		clearInterval(x);
	} else {
		this.classList.add("card-click");
		x = setInterval(function () {
			var then = new Date("2022-12-25").getTime();
			var now = new Date().getTime();
			var distance = then - now;

			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24)
			);
			var mintues = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			this.innerHTML =
				days + "d " + hours + "h " + mintues + "m " + seconds + "s ";

			console.log(this.innerHTML);
			if (distance < 0) {
				clearInterval(x);
				this.innerHTML = "EXPIRED";
			}
		}, 1000);
	}
}
window.onload = function () {
	var cards = document.getElementsByClassName("card");
	var x = null;
	for (let i = 0; i < cards.length; i++) {
		cards[i].onclick = clickEvent;
	}
};
