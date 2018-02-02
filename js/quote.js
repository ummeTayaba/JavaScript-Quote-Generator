var array = ["Whatever you are, be a good one.", "Brevity is beautiful.",
			 "Life is a one time offer, use it well.", "Injustice anywhere is a threat to justice everywhere.",
			 "The time is always right to do what is right.", "Fear is stupid. So are regrets.",
			 "Life is short. Live passionately.", "The trouble is you think you have time.",
			 "If you judge people, you have no time to love them.", "Everything is fair in love and war."
			 ];

var maxFontSize = 35;
var minFontSize = 15;

function getRandomQuote()
{
	var index = parseInt((Math.random() * array.length) * (Math.random() * 100)) % array.length;
	return array[index];
}


function getNew(backgroundColor, borderColor, font)
{
	var temp = document.getElementById('paragraph');
	temp.style.backgroundColor = backgroundColor;
	temp.style.borderColor = borderColor;
	temp.style.fontSize = getRandomFontSize();
	temp.style.color = font;
	temp.innerHTML = array[Math.floor(Math.random() * array.length)];
}

function getRandomFontSize()
{
	var range = maxFontSize - minFontSize;
	var size = Math.floor((Math.random() * range) + minFontSize);
	return (size + "px");
}