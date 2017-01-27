const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const rp = require('request-promise');

const config = require('./config.js');

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, '/../index.html');
    const publicPath = express.static(path.join(__dirname, '../public'));

    app.use('/public', publicPath);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.get('/', function (_, res) {
      res.sendFile(indexPath);
    });

    app.post('/signup', (req, res) => {
      var obj = {
        'email_address': req.body.email,
        status: 'subscribed',
      };

      console.log(JSON.stringify(obj), 'obj');
      console.log(config.MAILCHIMP_API, 'mailchipm API');

      rp({
        method: 'POST',
        url: `https://us15.api.mailchimp.com/3.0/lists/${config.MAILCHIMP_LIST}/members`,
        auth: {
          user: 'any',
          password: config.MAILCHIMP_API,
        },
        header: {
          'Content-Type': 'application/json',
          'Authorization': `apikey ${config.MAILCHIMP_API}`,
        },
        json: obj,
      })
      .then((success) => {
        res.status(200).send(success);
      }).catch((err) => {
        res.status(500).send(err);
      });
    });

    return app;
  }
};
