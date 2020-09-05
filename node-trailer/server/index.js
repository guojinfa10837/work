const  Koa = require('koa')
const ejs = require('ejs')
const  tpl = require('./tpl')
const views = require('koa-views');
const  {resolve} = require('path')

const app = new Koa()
//指定模板目录下的 view pug 文件
app.use(views(resolve(__dirname,'./views'),{
    extension:'pug'
}))

app.use(async function(ctx){
    return await ctx.render('index',{
        you:'zhu',
        me:'guo'
    })
})

/* app.use(async (cxt,next)=>{
    cxt.type = 'text/html;charset=utf-8'
    cxt.body = ejs.render(tpl.ejsTpl,{
        you:'zhu',
        me:'guo'
    })
}); */
app.listen(4455)