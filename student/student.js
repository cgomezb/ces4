class student {
  constructor(id = 0, name = '', age = 0, address = '', subjects = []) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.subjects = subjects;
  }

  getNameById(id = 0) {
    return this.id === id ? this.name : '';
  }

  getSubjectList() {
    return this.subjects.sort();
  }

  getAddress() {
    return this.address;
  }
}