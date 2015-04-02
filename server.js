let koa = require("koa"),
    serve = require("koa-static"),
    app = koa();

app.use(serve(__dirname + "/dist"));

let server = app.listen(3000);    