console.log('q')

function print() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('eddds  e');
      resolve();
    }, 1000)
  })
}
async function start() {
  await print()
}

start();
