// here ...args is not a spread operator but it is a rest operator -> we can pass n number of arguments

function sum(...args) {
  console.log(arguments);
  if (args.length === 0) {
    return "No arguments Provided";
  } else if (args.length === 1) {
    return "Need one more argument";
  } else {
    let summation = [...args].reduce((acc, elem) => acc + Number(elem), 0);
    return summation;
  }
}

module.exports = sum;

// here we cannot write it using es6 because js doesnot support it --> export {sum}
// to do that we need to install babel

[1, 2, 3].reduce((acc, elem) => {
  console.log(acc, elem);
  return (acc = acc + Number(elem));
}, 0);
