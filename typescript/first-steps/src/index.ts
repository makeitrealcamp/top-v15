let num: number = 1;
let num2 = 2;
// num2 = 'string';
//
let str: string = '';
let bol: boolean = true;

let foo: string | boolean = '';

let notDefined: string | undefined;
let notValue: number | null;

type myString = string;

let faz: myString = '';

let arr: number[] = [1, 2]

let arrOrEmpty: string[] | null = [];

if(!!arrOrEmpty) {
  arrOrEmpty.map(() => 'hola')
}

// tuples
let tup: [number, boolean, string] = [1, true, ''];

// type Person = {
//   name: string,
//   age: number,
//   working?: boolean,
// }
interface IPerson {
  name: string;
  age: number;
  working?: boolean;
}

// Duck Typing
// class Person implements IPerson {}

// class Person {}
// const p1: IPerson = new Person()

let person: IPerson = {
  name: 'Simon',
  age: 30,
  working: true,
}

/**
* This function takes two numbers and returns the sum of those two numbers
*
* @param a must be a positive integer
* @param b must be a negative integer
* @returns number
*/
// function sum(a: number, b: number): number {
//   return a + b;
// }

sum(1, 2)

// Generics
function sum<T>(a: T, b: T): T {
  return a + b;
}

sum<number>(1, 2);
