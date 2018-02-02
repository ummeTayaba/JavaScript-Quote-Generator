function convert(form)
{
	var number = parseInt[document.getElementById("value").value];
	
	if(isNull(form) || isNull(number) || isNaN(number) || isNull(form['value']))
	{
		alert("Please enter a number");
	}
	else if(number < 0)
	{
		alert("Please enter a positive value");
	}
	else
	{
		var select = form['dropdown'];
		var index = select.selectedIndex;
		var sp = document.getElementById('result');

		if(index === 0)
		{
			var answer = 0.4536 * number;
			var str =  answer + " kg";
			sp.innerHTML = str;
		}
		else
		{
			var answer = 2.2046 * number;
			var str =   answer + " lb";
			sp.innerHTML = str;
		}
	}
}

function isNull(element)
{
	if(element === null)
	{
		return true;
	}
	return false;
}