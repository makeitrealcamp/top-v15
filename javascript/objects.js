let arr = [1,2,3]

// obtener un elemento
// console.log(arr[0])
// console.log(arr.at(-1))

// copiar el arreglo
// let arr2 = arr.slice()
// let arr3 = [].concat(arr)
// let arr4 = [...arr]

// agregar un elemento
//   Al final
// const n = arr.push(10)
// console.log(n)
// arr.push(4, 5, 6, 7)
// console.log(arr)

// let arr3 = [5,6,7]
// let arr2 = arr.concat(4).concat(arr3)
// console.log(arr2)
// console.log(arr)
// console.log(arr3)

//   Al principio
// arr.unshift(-1, 0)
// console.log(arr)

// let arr2 = [-1, 0].concat(arr)
// console.log(arr2)

//   En el medio
// arr.splice(2, 0, 2.3, 2.4, 2.5)
// console.log(arr)

// let first = arr.slice(0, 1)
// let second = arr.slice(1)

// let arr2 = first.concat([1.1, 1.2, 1.3]).concat(second)
// let arr2 = arr.slice(0, 1).concat([1.1, 1.2, 1.3]).concat(arr.slice(1))
// console.log(arr2)

// modificar un elemento
// arr[0] = 1.1
// console.log(arr)

// arr[7] = 8 // en caso que el indice no exista lo crea (rellena indices intermedios con undefined)
// console.log(arr)

// arr.splice(1, 1, 5) // no recomendado preferible el uso de corchetes
// console.log(arr)

// let arr2 = arr.slice(0, 1).concat(10).concat(arr.slice(2))
// console.log(arr2)

// eliminar un elemento
//   Al final
// const el = arr.pop()
// console.log(el)
// console.log(arr)
// let arr2 = arr.slice(0, -1)
// console.log(arr2)

//   Al principio
// arr.shift()
// console.log(arr)
// let arr2 = arr.slice(1)
// console.log(arr2)

//   En el medio
// arr.splice(1, 1)
// console.log(arr)
// let arr2 = arr.slice(0, 1).concat(arr.slice(2))
// console.log(arr2)

// buscar un elemento?

let obj = { a: 1, b: 2, c: 3, 4: "name" }

// obtener un elemento
// console.log(obj.a)
// console.log(obj['b'])

// const name = 'a'
// console.log(obj[name])

// function getName() {
//   return 'c'
// }
// console.log(obj[getName()])

// console.log(obj[2+2])

// copiar un objeto
// let obj2 = Object.assign({}, obj)
// let obj2 = { ...obj }
// console.log(obj2)

// agregar un elemento
// obj.d = 4 // si la propiedad no existe la agrega
// obj['e'] = 5
// console.log(obj)

// let obj2 = Object.assign({}, obj, { d: 4, e: 5 })
// let obj2 = { ...obj, ...{ d: 4, e: 5 } }
// console.log(obj2)

// modificar un elemento
// obj.a = 7 // si la propiedad existe la modifica
// obj['b'] = 8

// console.log(obj)
// let obj2 = Object.assign({}, obj, { a: 20 })
// let obj2 = { ...obj, ...{ a: 20 } }
// console.log(obj2)

// eleminar un elemento
// delete obj.a
// delete obj[4]

// console.log(obj)

// Asignación por valor
// a = 1 b = 'hola' c = undefined d = null e = true

// Asignación por referencia
a = [1,2,3]
b = [1,2,3]
c = a

// console.log(a === b) // false
// console.log(b === c) // false
// console.log(a === c) // true

a.push(4)
// console.log(c)

// mutable o immutable
