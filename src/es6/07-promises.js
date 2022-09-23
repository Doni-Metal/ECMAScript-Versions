const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!!!!!!!');
    } else {
      reject('Wooooops!');
    }
  })
}

anotherFunction()
  .then(response => console.log(response)) // se puede tener varios then
  .catch(err => console.log(err));
