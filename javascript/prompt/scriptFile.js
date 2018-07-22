function promptUser() {
  var name = window.prompt("Enter your name please...");
  if(name != null && name !== "") {
    document.getElementById('name').innerHTML = "Hello " + name + "!";
  }
}
