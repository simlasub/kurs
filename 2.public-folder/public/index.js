var count = 0;

function button_onClick(){
	count ++;
	var elm = document.getElementById("count");
	elm.innerHTML = count;
}