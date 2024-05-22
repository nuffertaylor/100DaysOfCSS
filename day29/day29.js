const main = () => {
	const search = document.getElementById("search");
	const sb1 = document.getElementById("sb1");
	const sb2 = document.getElementById("sb2");
	const sb3 = document.getElementById("sb3");
	search.addEventListener("input", (event) => {
		const val = event.target.value;
		if (!!val) {
			sb1.style.opacity = '1';
			sb2.style.opacity = '1';
			sb3.style.opacity = '1';
			sb1.innerHTML = "<span class='bbb'>" + val + "</span>";
			sb2.innerHTML = "Lorem ipsum <span class='bbb'>" + val + '</span>';
			sb3.innerHTML = "dolor <span class='bbb'>" + val + "</span> emet";
		} else {
			sb1.style.opacity = '0';
			sb2.style.opacity = '0';
			sb3.style.opacity = '0';
		}
	});
};

main();
