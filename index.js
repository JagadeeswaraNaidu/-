import express from "express"
const app = express()
// trigger CI/CD pipeline by pushing code to GitHub repository to which this code is connected. This will deploy the code to Heroku and you can see the changes by visiting the URL provided by Heroku after deployment.

app.get("/", (req,res)=>{
res.send("CI/CD example")
})

app.listen(3000)