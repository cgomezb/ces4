function show() {
  var id = getValueById('id');
  var name = getValueById('name');
  var age = getValueById('age');
  var address = getValueById('address');
  var subjects = getValueById('subjects');  
  var info = "Id: " + id + "\n Name: " + name + "\n Age: " + age + "\n Subjects: " + subjects;
  
  this.setValueById('result', info);
};

function getValueById(id) {
  return document.getElementById(id).value;
}

function setValueById(id, value) {
  return document.getElementById(id).innerHTML = value;
}

function showValue() {
  /* Create a method to:
  - Show on screen
  - Show on console
  - Show on popup
  */
}