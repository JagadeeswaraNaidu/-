import express from "express"
const app = express()

app.get("/", (req,res)=>{
res.send("CI/CD example")
})

app.listen(3000)