//jshint esversion:6
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended:true}));

// get request
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {

    var num1 = req.body.num1;
    var num2 = req.body.num2;
    console.log(num1,num2);

    var result = Number(num1) +Number(num2);
    res.send("The result is " + result)
});

// listens to this port address
app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
});