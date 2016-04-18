const koa = require("koa");
const route = require("koa-route");
const app = koa();
const port = +process.argv[2];

app.use(route.get("/", function *(){
  this.body = "hello koa";
}));

app.use(route.get("/404", function *(){
  this.body = "page not found";
}));

app.use(route.get("/500", function *(){
  this.body = "internal server error";
}));

app.listen(port);