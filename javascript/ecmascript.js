// let, const
if (true) {
  let bar = 'bar'
  console.log(bar)
}

const foo = 'foo'
// const obj = {}
// obj.name = 'simon'

// console.log(obj.name)

// funciones flecha
// function greet() {
//   console.log('hola mundo')
// }

const greet = () => {
  console.log('hola mundo')
}

// const sum = (a, b) => a + b

// parámetros por defecto
const sum = (a = 0, b = 0) => a + b

sum()
sum(1)
sum(1,2)
sum(1,2,3)

// plantillas literales
// const html = '<div><h1>' + name + '</h1><p>' + description + '</p><img src="' + image.source + '" alt="' + image.alt + '" /></div>'
// const html = `
//   <div>
//     <h1>${name}</h1>
//     <p>${description}</p>
//     <img src="${image.source}" alt="${image.alt}" />
//   </div>
// `

// desctructuración
// let obj = { name: 'ana', age: 24, working: true }

// const name = obj.name

// const { age, name } = obj

// console.log(name, age)

// los tres puntos
// const arr = [1, 2, 3, 4]
// console.log(Math.max(...arr))

// const arr2 = [ ...arr ]

// métodos concisos
function person(name, age, working) {
  const program = 'top'
  const obj = {
    name,
    age,
    working,
    program,
  }

  return obj
}
