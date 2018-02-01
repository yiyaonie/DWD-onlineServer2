var express = require('express')
var app = express()

//get /, do function
app.get('/', function (req, res) {
  res.send('Hello World!')
})

var count=0;

app;get('/somethingelse',function(req,res){
  count++;
  res.send('<html><body><h1>Something Else' + count + '</h1></body></html>')
})

var submissions = [];

app.get('/formpost',function(req,res){
  console.log("They Submitted: " + req.query.textfield);
  res.send("You submitted: "+req.query.textfield);
  submissions.push(req.query.textfield);
})

app.get('/display',function(req,res){
  var html = "<html><body>";
  for (var i=0;i<submissions.length;i++){
    html=html+submissions[i]+"<br>";
  }
  html=html+"</body></html>";
  res.send()
})

//port number 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
