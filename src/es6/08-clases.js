// declarando
class User {};
// instancia de una clase
// const newUser = new User();

class user {
  // métodos
  greeting() {
    return 'Hello';
  };
};

const gndx = new user();
console.log(gndx.greeting());
const bebelop = new user();
console.log(bebelop.greeting());

// constructor

class user {
  constructor() {
    console.log('Nuevo Usuario');
  };
  greeting() {
    return 'Hello';
  };
}

const david = new user();

// this

class user {
  constructor(name) {
    this.name = name;
  };
  // metodos
  speak() {
    return 'Hello';
  };
  greeting() {
    return `${this.speak()} ${this.name}`;
  };
}

const ana = new user('Ana');
console.log(ana.greeting());

// getters & setters

class user {
  // constructor
  constructor(name, age) {
    this.name = name,
    this.age = age
  };
  //metodos
  speak() {
    return 'Hello';
  };
  greeting() {
    return `${this.speak()} ${this.name}`;
  };

  get uAge() {
    return this.age;
  };

  set uAge(n) {
    this.age = n;
  };
};

const bebeloper = new user('David', 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);