'hola mundo';

// eslint-disable-next-line no-unused-vars
const foo = 'foo';

// const obj = {
//   name: 'maria',
//   age: 19,
//   working: true,
//   lastname: 'perez',
//   hobby: 'dacing',
// };

const arr = [1, 2, 3];
arr.push(4);

arr
  .map((element) => element * 2)
  .filter((element) => element % 2 === 0)
  .reduce((accumulator, element) => {
    return accumulator + element;
  }, 0);
