const quotes = [{
	title: "Did you know?",
	content: "A human hiccup is the same biological signal tadpoles use to breathe."
},
{
	title: "Lightweight Giant",
	content: "Saturn's density is so small that if you put it in a bathtub, it would float."
},
								{
									title: "Friends close",
									content: "Mercury is, on average, the closest planet to EVERY planet in the solar system."
								}
							 ];
let numEl;
let titleEl;
let contentEl;
let cardEl;
let curQuoteIndex = 0;

const init = () => {
	numEl = document.getElementById("num-container");
	titleEl = document.getElementById("quote-title");
	contentEl = document.getElementById("quote-content");
	cardEl = document.getElementById("card");
};

const setQuote = () => {
	numEl.innerHTML = curQuoteIndex + 1;
	titleEl.innerHTML = quotes[curQuoteIndex].title;
	contentEl.innerHTML = quotes[curQuoteIndex].content;
};

const next = () => {
	cardEl.classList.add("fade-out");
	setTimeout(()=>{
		cardEl.classList.remove("fade-out");
		curQuoteIndex += 1;
	if (curQuoteIndex === quotes.length) {
		curQuoteIndex = 0;
	}
	setQuote();
		cardEl.classList.add("fade-in");
	setTimeout(()=>{
		cardEl.classList.remove("fade-in");
	}, 500);
		
	}, 500);
	
};

init();
setQuote();
