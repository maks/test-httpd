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

app.post('/echopost', function(req, res) {
    console.log("GOT BODY:"+JSON.stringify(req.body));
    
    res.statusCode = 200;
    res.send(req.body);
});

app.post('/reg', function(req, res){
    if (req.body) {
        for(var i in req.body) {
            console.log(i +':'+req.body[i]);
        }

        if (req.body.email=== "maks" && req.body.password === "pass1") {
          if (req.body.nickname === "test1") {
              console.log("Sending 406 - nick already used");
              res.statusCode = 406;
              res.send("Device Nickname already in use");
              return;
          }
          res.send(JSON.stringify(resBody, null, 4));

        } else {
            console.log("Sending 403 - invalid login");
            res.statusCode = 403;
            res.send("Invalid Username or Password");
            return;
        }
    } else {
        console.log("no username");
        res.send("{ }\n");
        return;
    }
});

app.listen(PORT);
console.log('Listening on port:'+PORT);

