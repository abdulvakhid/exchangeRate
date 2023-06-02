let fragment = new DocumentFragment();
let elList = document.getElementById("list");
let time = document.getElementById("date");

fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	})
	.then((data) => {
		time.textContent = data[0].Date;
		data.slice(0, 4).forEach((element) => {
			console.log(element);
			let newItem = document.createElement("tr");
			let newItemCurrency = document.createElement("td");
			let newItemRate = document.createElement("td");

			newItemCurrency.textContent = "1 " + element.Ccy;
			newItemRate.textContent = element.Rate + " soum";

			newItemCurrency.style.color = "white";
			newItemRate.style.color = "white";

			newItem.appendChild(newItemCurrency);
			newItem.appendChild(newItemRate);
			fragment.appendChild(newItem);
		});
		elList.appendChild(fragment);
	})
	.catch((error) => {
		console.error("Error:", error);
	});
