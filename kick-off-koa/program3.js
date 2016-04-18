const koa = require("koa");
const app = koa();
const parse = require("co-body");
const port = +process.argv[2];

app.use(function *(next) {
  const body = yield parse(this);
  this.body = body.name.toUpperCase();
});

app.listen(port);