var express = require('express');
var router = express.Router();
const fs = require('fs');
const https = require('https');
var request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile('index.html', {
        root: 'public'
    });
});

//router.get('/getcity', function (req, res, next) {
//    console.log("In getcity route");
//    fs.readFile(__dirname + '/cities.dat.txt', function (err, data) {
//        if (err) throw err;
//        var cities = data.toString().split("\n");
//        var searchStr = req.query.q;
//        if (searchStr)
//            var myRe = new RegExp("^" + req.query.q); //.toLowerCase());
//        else
//            var myRe = new RegExp("^");
//        console.log(myRe);
//        var jsonresult = [];
//        for (var i = 0; i < cities.length; i++) {
//            var result = cities[i].search(myRe);
//            if (result != -1) {
//                console.log(cities[i]);
//                jsonresult.push({
//                    city: cities[i]
//                });
//            }
//        }
//        res.status(200).json(jsonresult);
//    });
//});
//
//router.get('/word', function (req, res, next) {
//    var result = "";
//    https.get('https://owlbot.info/api/v1/dictionary/' + req.query.w, function (response) {
//        response.on('data', function (d) {
//            result += d;
//        });
//        response.on('end', function () {
//            res.status(200).json(JSON.parse(result));
//        });
//    });
//});

router.post('/question', function (req, res) {
    console.log("in question");
    var myQ = "http://jservice.io/api/random";
    //request(myQ).pipe(res);
    res.end('{"success":"Updated Successfully", "status" : 200}');
});


module.exports = router;
