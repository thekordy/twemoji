let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
let twemoji = require('twemoji');

app.post('/parse', function(req, res){
  
  if (!parseValidation(req, res)) {
  
    let content = req.body.content;
    let options = req.body.options;
    let results = twemoji.parse(content, options ? options : {});
    res.status(201).json({converted: results});
    
  }
  
});

app.listen(3000, function(){
  console.log('App listening on port 3000!');
});


function parseValidation(req, res) {
  
  let error = {};
  let hasErrors = false;
  
  if (!req.body || !req.body.content) {
    hasErrors = true;
    error.content = 'Content field is required';
  }
  
  if (hasErrors) {
    console.log(req.body);
    console.log(error);
    return res.status(422).json(error);
  }
  
  else return false
}
