function check()
{
	var text = document.getElementById("input").value;
	if(text == "secret")
	{
			document.getElementById("textbox").classList.add("flip");
		setTimeout(function()
							 { 
			document.getElementById("upperbox").style.opacity = 1; 
							 }, 300);
		
	}
}