

import '../../assets/editor/style.scss'

const  editorWrap = document.getElementById('wrap');

console.log(editorWrap.length);
editorWrap.innerHTML = `<div class="log"></div>`;


const  a = ()=>{
    console.log('4444')
}
a()

function bbb(){
    return new Promise((resolve, reject)=>{
        let sino = parseInt(Math.random() * 6 +1)
        setTimeout(()=>{
           // editorWrap.innerHTML = '333333';
            resolve(sino)
        },3000)
    })
}
async function test(){
    let n =await bbb()
    console.log(n)
}
test()