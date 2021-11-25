function Person(name) {
  this.name = name
}

Person.prototype.greet = function () {
  console.log('hola mi nombre es ' + this.name)
}

const p1 = new Person('juan')
const p2 = new Person('maria')

p1.greet()
p2.greet()

function Mentor(name, program) {
  Person.call(this, name)

  this.program = program
}

Mentor.prototype = new Person()
Mentor.prototype.constructor = Mentor

const m1 = new Mentor('simon', 'top')

m1.greet()

// console.log(m1)
// syntatic sugar
class Car {
  constructor(model) {
    this.model = model
  }

  accelerate() {
    console.log('accelerate')
  }
}

class Bus extends Car {
  constructor(model, wheels) {
    super(model)
    this.wheels = wheels
  }
}

const c1 = new Car(1998)

c1.accelerate()

const b1 = new Bus(1990, 4)
console.log(b1)

b1.accelerate()
