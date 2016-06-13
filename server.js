var express = require('express');
var mongojs = require('mongojs');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
var port = 5000;
var corsOptions = {
  origin: 'http://localhost:' + port
};

var db = mongojs('ecommerce');
var prodColl = db.collection('products');
var ObjectId = mongojs.ObjectId;

app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(cors(corsOptions));
// app.use(express.static(__dirname + './public'));


app.post('/api/products', function(req, res, next) {
  prodColl.save(req.body, function(err, response) {
    if (err) return res.status(500).send(err);
    res.send(response);
  });
});
app.get('/api/products', function(req, res, next) {
  prodColl.find(req.query, function (err, response) {
    if (!err) res.status(200).json(response);
  });
});


app.get('/api/products/:id', function(req, res, next) {
  prodColl.findOne({_id: ObjectId(req.params.id)}, function (err, response) {
    if (!err) {
      console.log(ObjectId());
      res.status(200).json(response);
    }
  });
});

app.put('/api/products/:id', function(req, res, next) {
  if (!req.params.id) {
    return res.status(400).json('id query needed');
  }
  prodColl.update({_id: ObjectId(req.params.id)}, req.body, function(err, response) {
    if (err) {
      return res.status(500).json(err);
    } else {
      return res.json(response);
    }
  });
});

app.delete('/api/products/:id', function(req, res, next) {
  if (!req.params.id) {
    return res.status(400).json('id query needed');
  }
  prodColl.remove({_id: ObjectId(req.params.id)}, function(err, response) {
    if (err) {
      return res.status(500).json(err);
    } else {
      return res.json(response);
    }
  });
});

db.runCommand({ping: 1}, function (err, res) {
    if(!err && res.ok) console.log('products live');
});
app.listen(port, function() {
  console.log("Listening to port", port);
});
