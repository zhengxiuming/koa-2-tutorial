const HomeService = require('../service/home')
module.exports={
  index:async(ctx,next)=>{
    await ctx.render("home/index", {title: "iKcamp欢迎您"})
  },
  home:async (ctx,next)=>{
    console.log(ctx.request.query)
    console.log(ctx.request.querystring)
    ctx.body = '<h1>home page</h1>'
  },
  user:async(ctx,next)=>{
    await ctx.render('home/login',{
      btnName:'确认'
    })
  },
  register:async(ctx,next)=>{
    let params = ctx.request.body
    let name = params.name
    let password = params.password
    let res = await HomeService.register(name,password)
    if(res.status == "-1"){
      await ctx.render("home/login", res.data)
    }else{
      ctx.state.title = "个人中心"
      await ctx.render("home/success", res.data)
    }
  },
  all:async (ctx,next)=>{
    ctx.body = '<h1>404</h1>'
  }
}