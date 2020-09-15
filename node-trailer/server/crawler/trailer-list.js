const puppeteer = require('puppeteer');
const url = 'https://movie.douban.com/tv/#!type=tv&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0'


const sleep = time => new Promise(resolve=>{
    setTimeout(resolve,time)
})
;(async function(){
    console.log('Start visit the target page')
    const browser = await puppeteer.launch({
        args:['--no-sandbox'],
        dumpio:false,
        headless: false //是否运行在浏览器headless模式，true为不打开浏览器执行，默认为true
    })

    const page = await browser.newPage();
    await page.goto(url,{
        waitUntil:'networkidle2'
    })
    await sleep(3000)

    await page.waitForSelector(".more")

    for(let i=0;i<3;i++){
        await sleep('3000')
        await page.click('.more')
    }

    const result = await page.evaluate(()=>{
        var $ = window.$;
        var items = $('.list-wp > a')
        var links = [];
        if(items.length >= 1){
            items.each((v,i)=>{
                let item = $(v);
                let obj = {
                    id:item.find(".cover-wp").data('id'),
                    title:item.find('p').text(),
                    poster :item.find("img").attr("src")
                }
                links.push(obj);
            })
        }
        return links;
    })

    await browser.close();
    console.log(result);

})()