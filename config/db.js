const { default: mongoose} = require('mongoose')

const db = mongoose
.connect("mongodb://localhost:27017/cloth-api")
.then(()=>{
    console.log('database connected 👍')
})
.catch(()=>{
    console.log("database not connected")
})

module.exports = db