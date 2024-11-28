function addNumbers() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = num1 + num2;
  document.getElementById('result').innerText = 'Result: ' + result;
}

function toggleMode() {
  const body = document.body;
  const modeButton = document.getElementById('modeButton');

  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

 
  if (body.classList.contains('dark-mode')) {
    modeButton.innerText = 'Light Mode';
  } else {
    modeButton.innerText = 'Dark Mode';
  }
}
