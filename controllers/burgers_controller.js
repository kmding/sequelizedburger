var express = require('express');
var router = express.Router();

var burger = require('../models')['Burgers'];
burger.sync();

//get route -> index
router.get('/', function(req,res) {
		res.redirect('/burgers')
});

router.get('/burgers', function(req,res) {
	
	burger.findAll({}).then(function(data){
		var barsObject = {burgers: data};
		res.render('index', barsObject);
	});
});

//post route -> back to index
router.post('/burgers/create', function(req, res) {
	var newBurger = req.body.burger_name;
	console.log(newBurger);
	//takes the request object using it as input for buger.addBurger
	burger.create({
		burger_name: newBurger
	});

		res.redirect('/burgers');
});

//put route -> back to index
router.put('/burgers/update/:id', function(req,res){
	burger.update({
		devoured: [req.body.devoured],
	},{
		where:{
			id: [req.params.id]
		}
	});
		//wrapper for orm.js that using MySQL update callback will return a log to console, render back to index with handle
		console.log(res);
		res.redirect('/burgers');
});

module.exports = router;
