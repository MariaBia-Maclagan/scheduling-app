// var express = require('express');
// var router = express.Router();
// const db = require("../model/helper");

// router.get('/', function(req, res, next) {
//     res.send("Welcome");
//   });

// router.get("/user/hours/:date", (req, res) => {
//   db(`SELECT * FROM schedule WHERE date="${req.params.date}";`) 
//   .then(results =>{
//     res.send(results.data);
//   })
//   .catch(err => res.status(500).send(err));
// });

// router.get("/user/hours/:date/:employee", (req, res) => {
//   db(`SELECT * FROM schedule WHERE date="${req.params.date}" && employee="${req.params.employee}";`) 
//   .then(results =>{
//     res.send(results.data);
//   })
//   .catch(err => res.status(500).send(err));
// });