const express = require("express");
const {homeRouter} = require("./routers/homeRouter")
const {engine} = require("express-handlebars");
const app = express();

app.use(express.static("public"))
app.engine('.hbs', engine({extname: ".hbs"}));
app.set('view engine', '.hbs');


app.use("/", homeRouter)
app.listen(3000);