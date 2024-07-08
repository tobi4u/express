import express from "express"
import data from './data/data.json' assert {type: "json"}


const app = express()
const PORT = 3000
app.use(express.json());

app.get("/", (req, res) => { {
    res.send("Hello World!");
  }
})

app.post("/fruits", (req, res) => {
console.log(req.body);
}
)

app.get("/fruits/:fruitName?", (req, res) => {
  const {fruitName} = req.params;
  if(fruitName) {
    const fruit = data.find((f) => f.name === fruitName);
    if(!fruit){
      res.status(404).send("Fruit not found");
    }
    res.status(200).send(fruit);
  }
else if (!fruitName) {
  res.status(200).send(data)
}
else if(!data) {
  res.status(500).send("server error");
}
});

app.get("/Users/:id?", (req, res) => {
  if (req.params.id) {
    res.send(`User ID: ${req.params.id}`);
  } else {
    res.send("All users");
  }
})

app.get("/", (req, res) => {
  res.send("Hello World!")
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