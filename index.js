const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
const port =3000;
app.engine('html',ejs.renderFile);

app.use(express.static(path.join(__dirname,'static/startbootstrap-sb-admin-gh-pages/startbootstrap-sb-admin-gh-pages/')));
app.get('/',(req,res)=>res.render(path.resolve("static/startbootstrap-sb-admin-gh-pages/startbootstrap-sb-admin-gh-pages/home.html")));


app.listen(port,()=>console.log('Port is listening..'));