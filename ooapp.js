// // person class
// class Person {
//   constructor(name, age, job) {
//     //properties
//     this.name = name;
//     this.age = age;
//     this.job = job;
//   }

//   //methods
//   talks() {
//     console.log(
//       `Hi, my name is ${this.name}, I am ${this.age} and I work as a ${this.job}`
//     );
//   }
//   builderWork() {
//     console.log(`I am going to build a house, because I am a ${this.job}`);
//   }

//   biologistWork() {
//     console.log(
//       `I am going to whrite a Biology book, because I am a ${this.job}`
//     );
//   }
// }

// //create a new instance of the class
// const dave = new Person("Dave", 41, "Builder");
// const Mitch = new Person("Mitch", 29, "Biologist");

// dave.talks();
// dave.builderWork();
// Mitch.talks();
// Mitch.biologistWork();

// class dog

// class dog {
//   constructor(dogName, dogAge, dogBreed) {
//     this.name = dogName;
//     this.age = dogAge;
//     this.breed = dogBreed;
//   }

//   eats() {
//     console.log(`${this.name} the ${this.breed} is eating some food`);
//     return this;
//   }
//   walks() {
//     console.log(
//       `I'm taking ${this.name} the ${this.breed} aged ${this.age} for a walk`
//     );
//     return this;
//   }
//   sleeps() {
//     console.log(`${this.name} the ${this.breed} is taking a nap`);
//     return this;
//   }
// }

// const stanley = new dog("Stanley", 4, "Bulldog");
// const ethel = new dog("Ethel", 15, "Pug");

// // stanley.eats();
// // stanley.walks();
// // stanley.sleeps();
// // ethel.eats();
// // ethel.walks();
// // ethel.sleeps();

// // Chainning methods: better because it's more readable but works only if we return the instance at the end of each method.
// stanley.eats().walks().sleeps();
// ethel.eats().walks().sleeps();

//class inheritance allows you to define a
// subclass that takes all the properties
// and methods from a parent class and
// will enable you to add more

// parent class
class Human {
  constructor(name, bmi, height) {
    this.name = name;
    this.bmi = bmi;
    this.height = height;
  }
  fitness() {
    this.bmi += 1;
    return this;
  }
  eats() {
    this.bmi += 5;
    this.height += 3;
    console.log(`${this.name}'s height is ${this.height}`);
    return this;
  }
  stats() {
    return console.table({
      name: this.name,
      BMI: this.bmi,
      height: this.height,
    });
  }

  warnStats() {
    return console.warn({
      name: this.name,
      BMI: this.bmi,
      height: this.height,
    });
  }

  errStats() {
    return console.error({
      name: this.name,
      BMI: this.bmi,
      height: this.height,
    });
  }
}

const sandy = new human("sandy", 22, 65);

class Child extends human {
  constructor(name, health) {
    super(name, health);
    this.health = health;
  }
  playWool() {
    this.health += 10;
    this.height -= 50;
    console.log(`${this.name} is happy`);
    return this;
  }
  naps() {
    console.log(
      `${this.name} is taking a lovely nap, they are ${this.content}`
    );
    this.health += 10;
    return this;
  }
}

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value) {
    const names = value.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

let person = new Person("Dave", "Jones");
//set it
// person.fullName = "Will Smith";
//get it
console.log(person.fullName);
