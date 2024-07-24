//initializing app which will allow us to make api requests

const express = require("express") //imports express module into variable
const app = express() //creates instance of express in variable app

app.listen(3001,
    console.log("server running..")
) 