function interpolation() {
    const name = 'Juan Perez';
    const interpolation = `Hello ${name}!`;
    alert(interpolation);
}

function defaultParameter(x = 1, y = 2, z = 3) {
    alert(x + y + z);
}

function scoping() {
    const a = [1, 2, 3, 4];
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result = result + a[i];
    }
    alert(result);
}

function arrowFunction() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let result = days.map(day => `Today is ${day} \n`);
    alert(result);
}

function personFullName({ name, lastName }) {
    alert(`${name} ${lastName}`);
}

function destructuring() {
    const person = { name: 'Juan', lastName: 'Perez' };
    personFullName(person);
}


