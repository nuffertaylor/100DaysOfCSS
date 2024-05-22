const avatars = [
	"https://i.imgur.com/MV4NbJv.jpeg",
	"https://i1.sndcdn.com/artworks-KjoDjol2DSXmqkJu-iGsGOQ-t500x500.jpg",
	"https://www.walyou.com/wp-content/uploads/2010/01/obama-avatar.jpg",
	"https://i.etsystatic.com/39063241/r/il/e90cb8/5780840795/il_570xN.5780840795_lyyr.jpg"
];

const main = () => {
	const top = document.getElementById("t");
	const avatar = document.getElementById("a");
	const avImg = document.getElementById("av");
	const bottom = document.getElementById("b");
	const x = document.getElementById("x");
	const imgs = document.getElementsByClassName("row-img");
	
	x.addEventListener("click", () => {
		top.style.transform = "";
			avatar.style.transform = "";
			bottom.style.transform = "";
	});
	
	for (let i = 0; i < imgs.length; i++) {
		imgs[i].addEventListener("click", () => {
		top.style.transform = "translateY(0)";
			avatar.style.transform = "translateY(0)";
			bottom.style.transform = "translateY(0)";
			avImg.src = avatars[i];
		
		});
	}
};

main();

