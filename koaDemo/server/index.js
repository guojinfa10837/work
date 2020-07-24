const Koa = require('koa')
const logger = require('koa-logger') //koa 一个专题调试工具
const session = require('koa-session')
const app = new Koa();
app.keys = ['hi luck'];
app.use(logger())
app.use(session(app))

app.use(ctx => {
    // ignore favicon
    if (ctx.path === '/favicon.ico') return;
    if(ctx.path === '/'){
        let n = ctx.session.views || 0;
        ctx.session.views = ++n;
        ctx.body = n + ' views';
    }else if(ctx.path === '/h'){    
       
        ctx.body ='hi 祝建新';
    }else{
        ctx.body = '404'
    }
  });
/* const mid1 = async (ctx,next) =>{
    ctx.body = 'hi';
    await next();
    ctx.body = ctx.body + 'here'
}
const mid2 = async (ctx,next) =>{
    ctx.type = 'text/html; charset=utf-8';
    await next();l
}
const mid3 = async (ctx,next) =>{
    ctx.body = ctx.body + 'Luke';
    await next();
}
app.use(logger());
app.use(mid1);
app.use(mid2)
app.use(mid3) */

app.listen(2333)