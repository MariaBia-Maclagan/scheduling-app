var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome");
});

router.get("/hours", (req, res) =>{
  db("SELECT * FROM schedule")
  .then(results =>{
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

router.get("/hours/:week", (req, res) => {
  db(`SELECT * FROM schedule WHERE week=${req.params.week}; `) 
  .then(results =>{
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

router.get("/hours/:week/:employee", (req, res) => {
  db(`SELECT * FROM schedule WHERE week=${req.params.week} && employee="${req.params.employee}";`) 
  .then(results =>{
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

router.post("/hours", (req, res) => {
  const {week, employee, start, finish, hour, day, date } = req.body;
  db(`INSERT into schedule (week, employee, start, finish, hour, day, date) VALUES("${week}", "${employee}","${start}","${finish}","${hour}","${day}","${date}")`)
  .then(results =>{
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

router.delete("/hours/:id", async (req, res) => {
  const weekId = await db(`SELECT week FROM schedule WHERE id=${req.params.id};`)
//  (results => { // reutun id from that week
//    JSON.stringify(results)}) 
const results = JSON.stringify(weekId.data[0]["week"]);
console.log(weekId.data, results)
 await 
  db(`DELETE FROM schedule WHERE id=${req.params.id};`)// return 
  await db(`SElECT * FROM schedule WHERE  week="${results}";`)
  .then(result =>{
    res.send(result.data);
  })
  .catch(err => res.status(500).send(err));
});
module.exports = router;
