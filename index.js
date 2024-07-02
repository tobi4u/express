import express from "express"


const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/users", (req, res) => {
    res.send("tobi.")
  })
  
  app.get("/admin", (req, res) => {
    res.send("tobi4u.")
  })

  app.get("/users/:name", (req, res) => {
    if(!req.params.name.length < 5) res.status(400).send(`<h1> 404 NOT FOUND </h1>`)

        res.status(200)
        res.set('Content-Type', 'text/html')
    res.send(`<html>
        <body> 
        <h1 style='color:Red'>Hello, ${req.params.name}</h1>
        </body>
        </html>`) 
  })
  

app.listen(PORT, () =>{
  console.log(`Server is running on port http://localhost:${PORT}`)
})