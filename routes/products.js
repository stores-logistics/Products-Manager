var express = require('../node_modules/express');
var router = express.Router();

var Product = require('../models/Product');

router.get('/', function(req, res, next) {
  Product.find(function(err, products){
    res.send(products);
  });
});

router.get('/:id', function(req,res,next){
    Product.findById(req.params.id)
    .exec(function(err, product){
        res.send(product);
    });
});

router.get('/name/:name', function(req,res,next){
    Product.find({name: req.params.name})
    .exec(function(err, product){
        res.send(product);
    });
});


router.get('/type/:type', function(req,res,next){
    Product.find({type: req.params.type})
    .exec(function(err, product){
        res.send(product);
    });
});

router.get('/store/:storeId', function(req,res,next){
    Product.find({storeId: req.params.storeId})
    .exec(function(err, product){
        res.send(product);
    });
});

router.post('/', function(req, res, next){
    const {name, description, quantity, image, cost, storeId, type} = req.body;
    const product = new Product({
        name,
        description,
        type,
        image,
        quantity,
        storeId,
        cost
    });

    product.save()
    .then(function(product){
        res.json(product);
    })
    .catch(function(err){
        res.send(err);
    });
});

router.delete('/:id', function(req,res,next){
    Product.deleteOne({_id: req.params.id})
    .exec(function(err, product){
        res.send("Deleted product")
    })
});

router.patch('/:id', function(req,res,next){
    Product.updateOne({_id: req.params.id}, req.body)
    .exec(function(err, product){
        res.send(req.body);
    })
});

module.exports = router;
