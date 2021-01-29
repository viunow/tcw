const outputCelsius = document.getElementById('outputCelsius');
const outputFahre = document.getElementById('outputFahre');
const outputKelvin = document.getElementById('outputKelvin');
const outputRankine = document.getElementById('outputRankine');

function temperatureConverter(valNum) {
	const outputs = [outputCelsius, outputFahre, outputKelvin, outputRankine];
	const temp = document.getElementById('temperaturas').value;

	if (valNum === '' || isNaN(valNum)) {
		outputs.forEach(function (output) {
			output.innerHTML = '';
		});

		return;
	}

	if (temp == 'celsius') {
		outputCelsius.innerHTML = valNum + ' °C';
		outputFahre.innerHTML = (valNum * 9) / 5 + 32 + ' °F';
		outputRankine.innerHTML = valNum + 273.15 + ' K';
		outputKelvin.innerHTML = (valNum * 9) / 5 + 491.67 + ' °Ra';
	} else if (temp == 'fahre') {
		outputCelsius.innerHTML = ((valNum - 32) * 5) / 9 + ' °C';
		outputFahre.innerHTML = valNum + ' °F';
		outputKelvin.innerHTML = ((valNum - 32) * 5) / 9 + 273.15 + ' K';
		outputRankine.innerHTML = valNum + 459.67 + ' °Ra';
	} else if (temp == 'kelvin') {
		outputCelsius.innerHTML = valNum - 273.15 + ' °C';
		outputFahre.innerHTML = ((valNum - 273.15) * 9) / 5 + 32 + ' °F';
		outputKelvin.innerHTML = valNum + ' K';
		outputRankine.innerHTML = valNum * 1.8 + ' °Ra';
	} else if (temp == 'rankine') {
		outputCelsius.innerHTML = ((valNum - 491.67) * 5) / 9 + ' °C';
		outputFahre.innerHTML = valNum - 459.67 + ' °F';
		outputKelvin.innerHTML = (valNum * 5) / 9 + ' K';
		outputRankine.innerHTML = valNum + ' °Ra';
	}
}
