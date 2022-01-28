const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname+'/src'))
app.use(express.json())
 const data = [];

app.post('/postData/:temp',(req,res)=>{
    
    data.push(req.params.temp)

    res.send(data);
})
app.get('/getData',(req,res)=>{
    res.json(data);
})
app.get('/',(req,res)=>{
  //  console.log(req.body)

    res.sendFile(__dirname+'/TodoForm.html');  
})


app.post('/',(req,res)=>{
    console.log(req.query);
    res.send("hello")
})

app.get('/addTask',(req,res)=>{
    res.sendFile(__dirname+'/TodoList.html');    

})  
app.get('/newFormat',(req,res)=>{
    res.sendFile(__dirname+'/TodoListNewFormat.html');    

})  


app.listen(3000,()=>{
    console.log("listening in 3000");
})