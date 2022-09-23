const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? resolve('Hey!!!!!!!')
      : reject('Wooooops!');
  })
}

anotherFunction()
  .then(response => console.log(response)) // se puede tener varios then
  .catch(err => console.log(err))
  .finally(() => console.log('Finally!'));
