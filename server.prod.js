var express = require('express');
var rp = require('request-promise');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// views is directory for all template files
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.post('/signup', (req, res) => {
  var obj = {
    'email_address': req.body.email,
    status: 'subscribed',
  };

  rp({
    method: 'POST',
    url: `https://us15.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST}/members`,
    auth: {
      user: 'any',
      password: process.env.MAILCHIMP_API,
    },
    header: {
      'Content-Type': 'application/json',
      'Authorization': `apikey ${process.env.MAILCHIMP_API}`,
    },
    json: obj,
  })
  .then((success) => {
    res.status(200).send(success);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
