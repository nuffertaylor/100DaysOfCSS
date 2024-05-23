var background = "#bb596b";
var outline = "#ffc4a3";
var previous = null;

function select(num)
{
	var selected = document.getElementById(num);
	selected.style.color = background;
	selected.style.background = outline;
	if(previous != null)
	{
			previous.style.color = outline;
			previous.style.background = background;
	}
	previous = selected;
}