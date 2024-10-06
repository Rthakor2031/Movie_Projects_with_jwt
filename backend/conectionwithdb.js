const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://127.0.0.0:27017/dummydatabase').then((res)=>console.log("server is Connected"))
.catch((err)=>console.log("server not connected"))



module.exports = connection