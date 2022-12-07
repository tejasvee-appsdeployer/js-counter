window.onload = function () {
	var card = document.getElementById("card");

	card.onclick = function () {
		if (card.classList.contains("card-click")) {
			card.classList.remove("card-click");
		} else {
			card.classList.add("card-click");
			var then = new Date("2022-12-31").getTime();
			var x = setInterval(function () {
				var now = new Date().getTime();
				var distance = then - now;

				var days = Math.floor(distance / (1000 * 60 * 60 * 24));
				var hours = Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24)
				);
				var mintues = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = Math.floor((distance % (1000 * 60)) / 1000);

				document.getElementById("card").innerHTML =
					days + "d " + hours + "h " + mintues + "m " + seconds + "s ";

				if (distance < 0) {
					clearInterval(x);
					document.getElementById("card").innerHTML = "EXPIRED";
				}
			}, 1000);
		}
	};
};
