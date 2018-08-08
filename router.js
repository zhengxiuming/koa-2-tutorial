const Router = require('koa-router')
const router = new Router()
const HomeController = require('./controller/home')

module.exports = (app) => {
  router.get('/', HomeController.index)

  router.get('/home', HomeController.home)

  router.get('/user', HomeController.user)

  router.post('/user/register', HomeController.register)

  router.all('/*', HomeController.all)
  
  app.use(router.routes()).use(router.allowedMethods())
}