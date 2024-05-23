var active = false;

function activate()
{
	let inner_circle = document.getElementById("inner_circle");
	if(active)
	{
								inner_circle.classList.remove("shrink");

			active=false;
	}
	else
	{

	inner_circle.classList.add("shrink");
		active=true;
	}
}