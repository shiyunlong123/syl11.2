var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connect=mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : '123456',
  port:3307
});

/* GET home page. */
router.get('/a', function(req, res, next) {
  connect.query('SELECT * FROM a.jj',function(err,rows){
    res.header('Access-Control-Allow-Origin','*');
    res.send(rows);
  })

});
router.post('/b',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  var va=req.body.va;
  var vb=req.body.vb;
  connect.query(`INSERT INTO a.jj (title,time) VALUES ('${va}','${vb}')`,function(err,rows){
    if (err) throw err;
    // res.send(rows)
    if(rows!=""||rows!=null){
      connect.query("SELECT * FROM a.jj",function(err,rows){
        res.send(rows)
      })
    }
  })
})
module.exports = router;
