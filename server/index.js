const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')
// 测试中间件
const mid1 = async (ctx, next) => {
    ctx.body = 'Hi'
    await next()
    ctx.body += ' there'
}
const mid2 = async (ctx, next) => {
    ctx.type = 'text/html; chartset=utf-8'
    await next()
}
const mid3 = async (ctx, next) => {
    ctx.body += ' koa'
    await next()
}
// use的顺序就是中间件执行的顺序，等执行完，则将控制权将给上层中间件
app.use(logger())
app.use(mid1)
app.use(mid2)
app.use(mid3)
app.listen(3333)