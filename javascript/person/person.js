class Person {
  constructor(id = 0, name = '', age = 0, address = '', email = '') {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  getInfo() {
    return "Id: " + this.id + "\n Name: " + this.name + "\n Age: " + this.age;
  }
}

class Student extends Person {
  constructor(id = 0, name = '', age = 0, address = '', email = '', subjects = []) {
    super(id, name, age, address, email);
    this.subjects = subjects;
  }

  getSubjectList() {
    return this.subjects.sort();
  }

  getInfo() {
    return "Id: " + this.id + "\n Name: " + this.name + "\n Age: " + this.age + "\n Subjects: " + this.subjects.join(',');
  }
}