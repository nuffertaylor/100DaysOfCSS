const main = () => {
	const sendBtn = document.getElementById("send-btn");
	const mail = document.getElementById("mail");
	const mailmotion = document.getElementById("mm");
	const mailbox = document.getElementById("mc");
	sendBtn.addEventListener("click", () => {
		mail.classList.add("mail-small");
		setTimeout(() => {
			sendBtn.setAttribute("style", "transform: scale(0)")
			mm.setAttribute("style", "opacity: 1");
			mailbox.setAttribute("style", "left: -300px !important;");
			mail.setAttribute("style", "animation: bob 1s infinite");
			
		}, 500);
		setTimeout(() => {
			mm.setAttribute("style", "opacity: 0");
			mail.setAttribute("hidden", "true");
			
		}, 2700);
		
		
	});
}

main();