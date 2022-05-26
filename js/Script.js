// if user chooses celsius to fahrenheit from radio buttons, celsius field enables and fahrenheit field disables
function chooseCelsius() {
	document.getElementById("celsius").disabled = false;
	document.getElementById("fahrenheit").disabled = true;
	// the unchosen field resets its value
	document.getElementById("fahrenheit").value = "";
}
// if user chooses fahrenheit to celsius from radio buttons, celsius field disables and fahrenheit field enables
function chooseFahrenheit() {
	document.getElementById("celsius").disabled = true;
	document.getElementById("fahrenheit").disabled = false;
	// also the unchosed input field resets its value
	document.getElementById("celsius").value = "";
}
// upon user input the result is calculated
function convertTemperatures() {
	if (document.getElementById("celsius").disabled==false) {
		document.getElementById("result").innerHTML = (document.getElementById("celsius").value*1.8+32).toFixed(1) + "&deg;F";
	} else {
		document.getElementById("result").innerHTML = ((document.getElementById("fahrenheit").value-32)/1.8).toFixed(1) + "&deg;C";
	}
}
// if temperature is lower than absolute zero, error needs to be thrown at the user!

window.onload = function() {
	document.getElementById("c").onclick = chooseCelsius;
	document.getElementById("f").onclick = chooseFahrenheit;
	document.getElementById("celsius").oninput = convertTemperatures;
	document.getElementById("fahrenheit").oninput = convertTemperatures;
}