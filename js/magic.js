var area = null;

function getArea()
{
	if(area === null)
	{
		area = document.getElementById('area');		
	}

	return area;
}

function doClear()
{
	var area = getArea();
	area.value = "";	
	console.log('here');
}

function caps()
{
	var area = getArea();
	area.value = area.value.toUpperCase();
}

function sortIt()
{
	var val = getArea().value;
	
	var cleanText = Array();
	var spliter = (val.split(/\r|\r\n|\n/));
	
	for(var c = 0; c < spliter.length; c++)
	{
		if(spliter[c] != "" && spliter[c] != " ")
		{
			cleanText.push(spliter[c]);
		}
	}

	var array = cleanText.sort(function(a, b){
		return a.localeCompare(b); 
	});

	for(var c = 0; c < spliter.length - 1; c++)
	{
		if(spliter[c] == "" && spliter[c] != " ")
		{
			cleanText.splice(c, 0, spliter[c]);
		}
	}

	var finalVal = "";
	console.log(cleanText);	
	for(var c = 0; c < cleanText.length; c++)
	{
		if(cleanText[c] == "")
		{
			console.log('coming here at  ' + c);
			finalVal += "\r\n";
		}
		else
		{
			finalVal += cleanText[c];
			if(c != cleanText.length - 1)
			{
				finalVal += "\r\n";
			}
		}
	}

	doClear();
	getArea().value = finalVal;
}

function revIt()
{
	var val = getArea().value;
	
	var cleanText = Array();
	var spliter = (val.split(/\r|\r\n|\n/));
	
	for(var c = 0; c < spliter.length; c++)
	{
		if(spliter[c] != "" && spliter[c] != " ")
		{
			cleanText.push(spliter[c]);
		}
	}

	var temp = Array();

	for(var c = cleanText.length - 1; c >= 0; c--)
	{
		temp.push(cleanText[c]);
	}

	cleanText = temp;

	for(var c = 0; c < spliter.length - 1; c++)
	{
		if(spliter[c] == "" && spliter[c] != " ")
		{
			cleanText.splice(c, 0, spliter[c]);
		}
	}

	var finalVal = "";
	console.log(cleanText);	
	for(var c = 0; c < cleanText.length; c++)
	{
		if(cleanText[c] == "")
		{
			console.log('coming here at  ' + c);
			finalVal += "\r\n";
		}
		else
		{
			finalVal += cleanText[c];
			if(c != cleanText.length - 1)
			{
				finalVal += "\r\n";
			}
		}
	}

	doClear();
	getArea().value = finalVal;
}

function strip()
{
	var val = getArea().value;
	
	var cleanText = Array();
	var spliter = (val.split(/\r|\r\n|\n/));
	
	for(var c = 0; c < spliter.length; c++)
	{
		if(spliter[c] != "" && spliter[c] != " ")
		{
			cleanText.push(spliter[c]);
		}
	}


	for(var c = 0; c < spliter.length - 1; c++)
	{
		if(spliter[c] == "" && spliter[c] != " ")
		{
			cleanText.splice(c, 0, spliter[c]);
		}
	}

	var finalVal = "";
	console.log(cleanText);	
	for(var c = 0; c < cleanText.length; c++)
	{
		if(cleanText[c] != "")
		{
			finalVal += cleanText[c];
			if(c != cleanText.length - 1)
			{
				finalVal += "\r\n";
			}
		}
	}

	doClear();
	getArea().value = finalVal;	

}


function numify()
{
	var val = getArea().value;
	
	var cleanText = Array();
	var spliter = (val.split(/\r|\r\n|\n/));
	
	for(var c = 0; c < spliter.length; c++)
	{
		if(spliter[c] != "" && spliter[c] != " ")
		{
			cleanText.push(spliter[c]);
		}
	}


	for(var c = 0; c < spliter.length - 1; c++)
	{
		if(spliter[c] == "" && spliter[c] != " ")
		{
			cleanText.splice(c, 0, spliter[c]);
		}
	}

	var finalVal = "";
	console.log(cleanText);
	var count = 1;	
	for(var c = 0; c < cleanText.length; c++)
	{
		if(cleanText[c] == "")
		{
			console.log('coming here at  ' + c);
			finalVal += "\r\n";
		}
		else
		{
			finalVal += count + ". " + cleanText[c];
			count++;
			if(c != cleanText.length - 1)
			{
				finalVal += "\r\n";
			}
		}
	}

	doClear();
	getArea().value = finalVal;	
}

function shuffle()
{
	var val = getArea().value;
	
	var cleanText = Array();
	var spliter = (val.split(/\r|\r\n|\n/));
	
	for(var c = 0; c < spliter.length; c++)
	{
		if(spliter[c] != "" && spliter[c] != " ")
		{
			cleanText.push(spliter[c]);
		}
	}

	cleanText = shiftArray(cleanText);

	for(var c = 0; c < spliter.length - 1; c++)
	{
		if(spliter[c] == "" && spliter[c] != " ")
		{
			cleanText.splice(c, 0, spliter[c]);
		}
	}

	var finalVal = "";
	console.log(cleanText);
		
	for(var c = 0; c < cleanText.length; c++)
	{
		if(cleanText[c] == "")
		{
			console.log('coming here at  ' + c);
			finalVal += "\r\n";
		}
		else
		{
			finalVal +=  cleanText[c];
			
			if(c != cleanText.length - 1)
			{
				finalVal += "\r\n";
			}
		}
	}

	doClear();
	getArea().value = finalVal;	
}


function shiftArray(array)
{
	var k = Math.floor(Math.random() * 30) % array.length;
	var temp = Array();
	for(var c = array.length - 1; c >= array.length - k; c--)
	{
		temp.push(array[c]);
	}

	for(var c = array.length - k - 1; c >= 0; c--)
	{
		array[c + k] = array[c];
	}

	for(var i = 0, c = 0; c < k; c++, i++)
	{
		array[c] = temp[i];
	}

	return array;
}