console.log("chai aur code");
const express = require('express');
const app = express()
const port = 3000;
const data = {
  "name": "Sagar",
  "roll_no": "12345", 
    "street": "123 Main St",
    "city": "Pune",
    "state": "Maharashtra",
    "zip": "411001"}
app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.get('/github',(req,res)=>{
  res.json(data);
})
app.get('/login',(req,res)=>{
  res.send('u are logged in');
  })
  app.get('/profile',(req,res)=>{
    res.send('my name is sagar');
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


