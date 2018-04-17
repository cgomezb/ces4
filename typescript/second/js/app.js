"use strict";
function interpolation() {
    var name = 'Juan Perez';
    var interpolation = "Hello " + name + "!";
    alert(interpolation);
}
function defaultParameter(x, y, z) {
    if (x === void 0) { x = 1; }
    if (y === void 0) { y = 2; }
    if (z === void 0) { z = 3; }
    alert(x + y + z);
}
function scoping() {
    var a = [1, 2, 3, 4];
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        result = result + a[i];
    }
    alert(result);
}
function arrowFunction() {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    var result = days.map(function (day) { return "Today is " + day + " \n"; });
    alert(result);
}
function personFullName(_a) {
    var name = _a.name, lastName = _a.lastName;
    alert(name + " " + lastName);
}
function destructuring() {
    var person = { name: 'Juan', lastName: 'Perez' };
    personFullName(person);
}
//# sourceMappingURL=app.js.map