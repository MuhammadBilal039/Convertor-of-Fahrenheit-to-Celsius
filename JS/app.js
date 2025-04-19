function converter() {
  const textElement = document.getElementById('text').value;
  const type = document.getElementById('types').value;
  const resultDiv = document.getElementById('result');
  let result = "";

  if (isNaN(textElement)) {
    resultDiv.innerText = 'Please enter a valid number.';
    return;
  }

  if (type === 'fahrenheit') {
    const celisus = ((textElement - 32) * 5) / 9;
    result = textElement + '°F = ' + celisus.toFixed(2) + '°C';
  } else {
    const fahrenheit = (textElement * 9) / 5 + 32;
    result = textElement + '°C = ' + fahrenheit.toFixed(2) + '°F';
  }

  resultDiv.innerText = result;
}


