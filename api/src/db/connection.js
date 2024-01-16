const mongoose= require("mongoose");
const constants= require('constants.js');

// MongoDB connection string
connectingString= ``

mongoose.connect(connectingString).then(()=>{
    console.log("Connection to MongoDB successful.")
}).catch((err)=>{
    console.log("Connection to MongoDB failed!" + err)
});