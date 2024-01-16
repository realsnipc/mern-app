const constants= require('constants.js')
const express = require('express')
const app= express()

require("./db/connection") // Connection to MongoDB

app.listen(constants.port, ()=>{
    console.log("App listening on http://localhost:"+ constants.port)
})