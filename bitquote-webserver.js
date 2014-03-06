var express = require('express');
var app = express();
var seneca = require('seneca')().client()



app.get('/', function(req, res){
seneca.use('transport',{
  pins:[ {plugin:'bitquote',cmd:'current'} ]
})

seneca.act( {plugin:'bitquote', cmd:'current'}, 
            function(err,result) {
              if( err ) return console.error( err )
              console.log(result)
           res.send(result);
            })

 
});

app.listen(3000);