function ChangeBgColor(color1 , color2){

	let bod = document.getElementsByTagName("body")[0];
	if(bod.style.backgroundColor != color1)
	{
		bod.style.backgroundColor = color1;
	} 
	else
	{
		bod.style.backgroundColor = color2;
	}
	
	
}