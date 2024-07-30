//initializing app which will allow us to make api requests

const express = require("express") //imports express module into variable
const app = express() //creates instance of express in variable app

app.listen(3001, () => { //begins the express server and listens for incoming connections on the given port numbeer
    console.log("server running..")
}) 

