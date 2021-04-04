


//document.body.innerHTML = '44444444';

const  a = ()=>{
    console.log('4444')
}
a()

function bbb(){
    return new Promise((resolve, reject)=>{
        let sino = parseInt(Math.random() * 6 +1)
        setTimeout(()=>{
            resolve(sino)
        },3000)
    })
}
async function test(){
    let n =await bbb()
    console.log(n)
}
test()