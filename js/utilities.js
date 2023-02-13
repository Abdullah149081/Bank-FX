// Input Function
function getInputFieldValue(inputField) {
  const inputFieldValue = document.getElementById(inputField);
  let inputGetValue = inputFieldValue.value;
  inputGetValue = parseFloat(inputGetValue);
  inputFieldValue.value = "";
  return inputGetValue;
}

//   Amount Function
function getElementAmount(elementAmount) {
  const elementGet = document.getElementById(elementAmount);
  let elementValueGet = elementGet.innerText;
  elementValueGet = parseFloat(elementValueGet);
  return elementValueGet;
}

//   Push Function
function setSumIEamount(elementAmount, sumValue) {
  const set = document.getElementById(elementAmount);
  set.innerText = sumValue;
}
