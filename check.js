const express = require('express');
const app = express();

app.get('/', function(req, res){
  console.log('Get Request Received');
  res.send('Hello World');
});

var p = process.env.PORT || 11221;

app.listen(p, function(){
  console.log('This might not get printed as there is no screen');
})
