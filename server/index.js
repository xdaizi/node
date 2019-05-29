const Koa = require('koa')
const app = new Koa()
app.use(async(ctx, next) => {
    ctx.body = 'Hi Koa2'
    next()
})
app.listen(3333)