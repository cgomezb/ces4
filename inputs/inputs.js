function show() {
  // Show Info
  var info = "";
  this.setValueById('result', info);
};

function showTextboxValue() {
  var item = 'name';
  var name = getElementById(item);
  var info = "Value: " + name.value;
  this.setValueById('result_' + item, info);
}

function showCheckboxValue() {
  var item = 'approved';
  var approved = getElementById(item);
  var info = "Value: " + approved.checked;
  this.setValueById('result_' + item, info);
}

function showRadioValue() {
  var item = 'gender';
  var genders = getElementByName(item);
  for (var i = 0, len = genders.length; i < len; i++) {
    if (genders[i].checked) {
      var value = genders[i].value;
      break;
    }
  }

  var info = "Value: " + value;
  this.setValueById('result_' + item, value);
}

function showSelectValue() {
  var item = 'languages';
  var languages = getElementById(item);
  var value = languages.options[languages.selectedIndex].value;
  var text = languages.options[languages.selectedIndex].text;
  var info = "Value: " + value + " Text: " + text;
  this.setValueById('result_' + item, info);
}

function getValueById(id) {
  return document.getElementById(id).value;
}

function setValueById(id, value) {
  return document.getElementById(id).innerHTML = value;
}

function getElementById(id) {
  return document.getElementById(id);
}

function getElementByName(id) {
  return document.getElementsByName(id);
}

function showValue() {
  /* Create a method to:
  - Show on screen
  - Show on console
  - Show on popup
  */
}