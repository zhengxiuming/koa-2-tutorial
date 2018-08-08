const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const router = require('./router')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')
const path = require('path')
// 解析POST请求体
app.use(bodyParser())

// 静态资源
app.use(staticFiles(path.resolve(__dirname,'./public')))
// 静态模板
app.use(nunjucks({
  ext:'html',
  path: path.join(__dirname,'views'),
  nunjucksConfig: {
    trimBlocks: true
  }
}))
// 路由
router(app)

app.listen(3000,()=>{
  console.log('Server Inter Online localhost:3000')
});