function showCal(form)
{
	var number = form['value'].value;

	if(isValid(number))
	{
		console.log('success');

		var strArray = number.split(/[,]+/);
		var array = Array();
		console.log('str array' + strArray);
		for(var c = 0; c < strArray.length; c++)
		{
			array.push(parseInt(strArray[c]));
		}

		console.log('at main' + array);
		var revStr = revStringify(array);
	 	array.sort(function(a, b){return a - b;});
	 	console.log(array);
	 	var max = array[array.length - 1];
	 	var min = array[0];

	 	var sum = array.reduce(function(pv, cv){return cv + pv}, 0);
	 	var avg = sum / array.length;

	 	document.getElementById('maxim').innerHTML = max;
	 	document.getElementById('minim').innerHTML = min;
	 	document.getElementById('sum').innerHTML = sum;
	 	document.getElementById('average').innerHTML = avg;
	 	document.getElementById('reverse').innerHTML = revStr;
	 		
	}
	else
	{
		alert("Give number in correct format!");
	}
}

function revStringify(array)
{
	var str = " ";
	
	for(var c = array.length - 1; c >= 0; c--)
	{
		if(c == array.length - 1)
		{
			str += array[c];
		}
		else
		{
			str += ", " + array[c];	
		}
		
	}
	return str;
}

function isValid(str)
{
	var regex = /^[0-9,.-]+$/;
	return regex.test(str);
}