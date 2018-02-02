
window.onload = function()
{
	var foot = document.getElementById('footer-text');
	var str = foot.innerHTML;
	var lst = document.lastModified;
	foot.innerHTML = str + "  " + lst;

	lst = window.location;
	foot = document.getElementById('loc-text');
	str = foot.innerHTML;
	foot.innerHTML = str + lst;

}
