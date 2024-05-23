function swap(front)
{
	if(front)
		{
			document.getElementById("front-btn").classList.remove("front");
		document.getElementById("back-btn").classList.remove("back");
			document.getElementById("front-btn").classList.add("back");
		document.getElementById("back-btn").classList.add("front");
		}
	else
		{
			document.getElementById("front-btn").classList.remove("back");
		document.getElementById("back-btn").classList.remove("front");
			document.getElementById("front-btn").classList.add("front");
		document.getElementById("back-btn").classList.add("back");
		}
}