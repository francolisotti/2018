let lastId = JSON.parse(localStorage.getItem('lastId')) || 0;

function save(people){
  localStorage.setItem('people', JSON.stringify(people));
  localStorage.setItem('lastId', JSON.stringify(lastId));
}

export default {
  getAll() {
    return JSON.parse(localStorage.getItem('people')) || [];
  },

  getOne(id) {
    return new Promise((res, rej) => {
      try {
        let people = this.getAll();
        res(people.find(person => person.id == id));
      } catch (e) {
        rej(e.toString());
      }
    });
  },

  addOne(name, age, sex) {
    let people = this.getAll();
    people.push({
      id: ++lastId,
      name: name,
      age: age,
      sex: sex
    });
    save(people);
  },

  deleteOne(id) {
    let people = this.getAll();
    people = people.filter(person => person.id !== id);
    save(people);
    return people;
  },

  updateOne(person) {
    let people = this.getAll();
    let key = people.indexOf(people.find(p => p.id === person.id));
    people[key] = person;
    save(people);
  }
}