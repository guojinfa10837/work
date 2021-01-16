const fs = require('fs');
let { promisify } = require('util');

promisify(fs.readFile)('./package.json')
.then(JSON.parse)
.then(data=>{
    console.log(data.name);
    console.log(fs)
}).catch(err=>{
    console.log(err);
})


const sleep = promisify(setTimeout)
async function fuc() {
  console.log('before')
  await sleep(2000)
  console.log('after')
}
fuc()