function searchButtonClick(){
	let sb = document.getElementById("searchbox");
	if(sb.style.display == "none"){
		sb.classList.remove("fadeout-sb");
		sb.style.display="";
		sb.classList.add("fadein-sb");
	} else { 
		sb.classList.remove("fadein-sb");
		sb.classList.add("fadeout-sb");
		let newone = sb.cloneNode(true);
		sb.parentNode.replaceChild(newone, sb);
		setTimeout(()=>{newone.style.display="none"}, 500);
	}
}

let menuActive = false;
function openMenu(){
	let box = document.getElementById("box");
	let menu = document.getElementById("menu");
	if(menuActive){
		box.classList.remove("moveBox");
		box.classList.add("returnBox");
		menu.classList.remove("slideLeft");
		menu.classList.add("slideLeftReverse");
		let newone = box.cloneNode(true);
		box.parentNode.replaceChild(newone, box);
		let newtwo = menu.cloneNode(true);
		menu.parentNode.replaceChild(newtwo, menu)
		menuActive = false;
		setTimeout(()=>{
			newone.classList.remove("returnBox");
			newtwo.classList.remove("slideLeftReverse");
		}, 750);
	} else {
		box.classList.add("moveBox");
		menu.classList.add("slideLeft");
		menuActive = true;
	}
}