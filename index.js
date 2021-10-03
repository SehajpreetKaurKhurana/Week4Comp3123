const { response } = require('express')
let express = require('express')

let app = express()

app.get("/hello",(req, res) =>{
    res.send("<h1>Hello Express JS</h1>")
})


    app.get("/user",(req,res) => {
        var first_name = req.query.fnm
         var last_name = req.query.lnm
        console.log(req.query)
    
    let response ={
        first_name,
        last_name
    }
    res.send(response)
    })
    
    app.post("/user/:first_name/:last_name",(req,res) =>{
        console.log(req.params)
        var fnm = req.params.first_name
        var lnm = req.params.last_name
        
        
        let response ={
            first_name:fnm,
            last_name:lnm
        }
        res.send(response)
        })


let server = app.listen(8089,()=>{
    let host = server.address().address
    let port = server.address().port
    console.log(`Server runnning at ${host}${port}`)
})