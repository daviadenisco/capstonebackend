var express = require('express');
var router = express.Router();
const knex = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('The slash route is working!');
});

router.get('/studentinfotable', (req, res) => {
  // this returns an array of objects representing all the rows in the table and all the columns in the rows
  knex('studentinfotable').then(rows => res.json(rows));
})

router.get('/studentinfotable/:id', (req, res) => {
  // access the request object, tack on parameters and then the id
  const studentinfotableid = req.params.id;
  knex('studentinfotable').where('id', studentinfotableid) // SELECT * from studentinfotable WHERE id=studentinfotableid
  .then(rows => {
    // we want the first thing in the array, which is the id, aka rows[0]
    const foundstudentinfotableid = rows[0];
    // send the res as json
    res.json(foundstudentinfotableid);
  })
})

router.patch('/studentinfotable/:id', (req, res) => {
  // headshot, fullname, github, linkedin, email, personalsite, capstonelink, capstonedesc, q1project, q2project, q3project, bio, funfact, funpic, requestresume, extraspace1, extraspace2, extraspace3, extraspace4, extraspace5
  const studentinfotableid = req.params.id;
  // debug with console.log(`req.body: ${res.body}`);
  const {headshot, fullname, github, linkedin, email, personalsite, capstonelink, capstonedesc, q1project, q2project, q3project, bio, funfact, funpic, requestresume, extraspace1, extraspace2, extraspace3, extraspace4, extraspace5} = req.body;

  knex('studentinfotable')
  .where('id', foundstudentinfotableid)
  .returning('*')
  .update({headshot, fullname, github, linkedin, email, personalsite, capstonelink, capstonedesc, q1project, q2project, q3project, bio, funfact, funpic, requestresume, extraspace1, extraspace2, extraspace3, extraspace4, extraspace5})
  .then (rows => {
    const studentid = rows[0];
    res.json(studentid)
  });
});

router.delete('/studentinfotable/:id', (req, res) => {
  const studentid = req.params.id;
  knex('studentinfotable')
  .where('id', studentid)
  .del()
  .then(res.send('Deleted'));
});

module.exports = router;
