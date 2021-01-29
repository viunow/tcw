function temperatureConverter(valNum) {
  valNum = parseInt(valNum);
  var temp = document.getElementById("temperaturas").value;
  
  if (Number.isNaN(valNum))
    {
      valNum  = "";
    }

  if (temp == "celsius") {
    document.getElementById("outputCelsius").innerHTML = (valNum) + " °C";
    document.getElementById("outputFahre").innerHTML = (valNum * 9/5) + (32) + " °F";
    document.getElementById("outputKelvin").innerHTML = (valNum + 273.15) + " K";
    document.getElementById("outputRankine").innerHTML = (valNum * 9/5) + (491.67) + " °Ra";
  } else if (temp == "fahre") {
    document.getElementById("outputCelsius").innerHTML = (valNum - 32) * 5/9 + " °C";
    document.getElementById("outputFahre").innerHTML = (valNum) + " °F";
    document.getElementById("outputKelvin").innerHTML = (valNum - 32) * 5/9 + 273.15 + " K";
    document.getElementById("outputRankine").innerHTML = (valNum + 459.67) + " °Ra";
  } else if (temp == "kelvin") {
    document.getElementById("outputCelsius").innerHTML = (valNum - 273.15) + " °C";
    document.getElementById("outputFahre").innerHTML = (valNum - 273.15) * 9/5 + 32 + " °F";
    document.getElementById("outputKelvin").innerHTML = (valNum) + " K";
    document.getElementById("outputRankine").innerHTML = (valNum * 1.8) + " °Ra";
  } else if (temp == "rankine") {
    document.getElementById("outputCelsius").innerHTML = (valNum - 491.67) * 5/9 + " °C";
    document.getElementById("outputFahre").innerHTML = (valNum - 459.67) + " °F";
    document.getElementById("outputKelvin").innerHTML = (valNum * 5/9) + " K";
    document.getElementById("outputRankine").innerHTML = (valNum) + " °Ra";
  }
}