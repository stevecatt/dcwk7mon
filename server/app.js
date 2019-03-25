const express = require('express')
var cors = require('cors')
const app = express()
var bodyParser= require('body-parser')
let Todos = []


//app.use (Todo)
app.use(cors())
app.use(bodyParser.json())
app.get('/books/favorite', function(req,res){
    let books = [
        { title: "Lord of the Flies" },
        { title: "scrum"},
        { title: "something else" }
      ]
    
      res.json(books)
})
app.get('/books/:genre/year:year', function(req,res){

    let genre= req.params.genre
    let year = req.params.year

    res.send(`The genre is ${genre} and the year is ${year}`)
})



app.post('/fullname', function (req,res){
    let first = req.body.first
    let last = req.body.last
    console.log(first + last)
    res.send(first+ "," +last)


})

app.listen(3000,function() {
    console.log("Server is running...")
  })

app.get('/todos', function(req,res){
    res.send(Todos)



})

app.post("/todos",function(req,res){
    let title = req.body.title
    let priority = req.body.priority
    let dateCreated = req.body.dateCreated
    let dateCompleted = req.body.dateCompleted
    let isCompleted = req.body.isCompleted
    let todo = {title: title, priority: priority, dateCreated: dateCreated, dateCompleted:dateCompleted, isCompleted:isCompleted}
    Todos.push(todo)

    res.send(Todos)
})

/*app.post('/todos',function(req,res){
    let todo = new Todo
    Todos.push(todo)

    res.send("did this work")
})*/