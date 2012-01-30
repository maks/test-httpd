var express = require('express');

var app = express.createServer();

var HOST = 'localhost',
    PORT = 3000;

var resBody = { 
    deviceID : 'ABC123',
    token: 'FDSA9876'
}; 

app.use(express.bodyParser());

app.get('/', function(req, res){
        res.send(JSON.stringify(resBody, null, 4));
});

app.post('/reg', function(req, res){
    if (req.body) {
      console.log("user:"+req.body.username);
      console.log("pass:"+req.body.password);
      console.log("mac:"+req.body.mac);
      console.log("location:"+req.body.location);
      res.send(JSON.stringify(resBody, null, 4));
    } else {
        console.log("no username");
        res.send("{ }\n");
    }
});

app.listen(PORT);
console.log('Listening on port:'+PORT);

