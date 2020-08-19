var mysql = require('mysql');
var express=require('express');
var connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"sneha",
  database:"se"
});
var FacultyLogin=express();
var AdminLogin=express();
var populateTT=express();
var ViewTT= express();
var EditTT=express();
var populateCal=express();
var ViewCal=express();
var EditCal=express();
var Logout=express();
var FacultyReg=express();
connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to database.');
  });
  FacultyLogin.get('/',function(req,res){//Change this!!!!!!!!!!!!!
    var aid=req.param("FIDVal",null);
    var password=req.param("PasswordVal",null);
    var sql="SELECT * FROM FACULTYLOGIN WHERE FID=?";
    var sql2="UPDATE loggedin SET userType='Faculty',UID=? ";
    //var sql3="UPDATE loggedin SET userType='User',UID=0 ";
    connection.query(sql,[aid],function(err,data){
      if(err){
        res.redirect(301, 'http://google.com');
            throw err;
      }
      else{
        if(data.length<1){
          console.log("No faculty with that ID");
          res.write('<font size=5 text-align="center" float="center" color="white"><center><b><center>');
          res.write('<body bgcolor="navy">');
          res.write('</br>');res.write('</br>');
          res.write("Invalid Login Credentials");res.write('</br>');res.write('</br>');
          res.write('<a href="http://localhost:3000/FacultyLogin">Click here to return to Home Page</a>');
          res.write('</b></center></font>')
          res.write('</body>')
          res.end();
        }
        if(data.length>=1){
          console.log("alt v");
          connection.query(sql2,[aid],function(err,data){
            if(err){
              console.log("error in updation");
              res.redirect(301,"http://google.com");
              throw err;
            }
            else{
              console.log("updated2");
              //res.redirect(300,"http://localhost:3003/");
              //res.end();
            }});
        }
        if((data.length>=1) && (data[0].Password===password))
        {
          //res.redirect(300,'http://localhost:8014');///////Doesnt't execute no matter what!!!!why?????
          console.log("verified for right password");
          connection.query(sql2,[aid],function(err,data){
            if(err){
              console.log("error in updation");
              res.redirect(301,"http://google.com");
              throw err;
            }
            else{
              console.log("updated");
              //res.redirect(300,"http://localhost:3000/");
              res.write('<font size=5 text-align="center" float="center" color="white"><center><b><center>');
          res.write('<body bgcolor="navy">');
          res.write('</br>');res.write('</br>');
          res.write("Logged In!!");res.write('</br>');res.write('</br>');
          res.write('<a href="http://localhost:3000/FacultyLogin">Click here to return to Home Page</a>');
          res.write('</b></center></font>')
          res.write('</body>')
          res.end();
              res.end();
            }
          });
        }
        if((data.length>=1) && (data[0].Password!=password)){
          res.write('<font size=5 text-align="center" float="center" color="white"><center><b><center>');
            res.write('<body bgcolor="navy">');
            res.write('</br>');res.write('</br>');
            res.write("Invalid Login Credentials");res.write('</br>');res.write('</br>');
            res.write('<a href="http://localhost:3000/FacultyLogin">Click here to return to Home Page</a>');
            res.write('</b></center></font>')
            res.write('</body>')
            res.end();
        }
      };
    });
    });
  FacultyLogin.listen(8000);
  AdminLogin.get('/',function(req,res){//Change this!!!!!!!1
    var aid=req.param("AIDVal",null);
    var password=req.param("PasswordVal",null);
    var sql="SELECT * FROM ADMINLOGIN WHERE AID=?"
    connection.query(sql,[aid],function(err,data){
      if(err){
        res.redirect(301, 'http://google.com');
            throw err;
      }
      else{
        if(data.length<1)
        {
          res.write('<font size=5 text-align="center" float="center" color="white"><center><b><center>');
            res.write('<body bgcolor="navy">');
            res.write('</br>');res.write('</br>');
            res.write("Invalid Login Credentials");res.write('</br>');res.write('</br>');
            res.write('<a href="http://localhost:3000/">Click here to return to Home Page</a>');
            res.write('</b></center></font>')
            res.write('</body>')
            res.end();
        }
        if((data.length>=1)&&(data[0].Password===password))
        {
          var sql2="UPDATE LOGGEDIN SET USERTYPE='Admin'";
          connection.query(sql2,function(err,data){
            if(err){
              res.redirect(301,"http://google.com");
              throw err;
            }
            else{
              res.redirect(300,"http://localhost:3000/");
              res.end();
            }
          })
        }
        if((data.length>=1)&&(data[0].Password!=password)){
          console.log(data[0].Password);
          console.log(password);
          res.write('<font size=5 text-align="center" float="center" color="white"><center><b><center>');
            res.write('<body bgcolor="navy">');
            res.write('</br>');res.write('</br>');
            res.write("Invalid Login Credentials");res.write('</br>');res.write('</br>');
            res.write('<a href="http://localhost:3000/">Click here to return to Home Page</a>');
            res.write('</b></center></font>')
            res.write('</body>')
            res.end();
        }
      }
    })
  });
  AdminLogin.listen(8001);
  populateTT.get('/', function (req, res)
  { 
      var fid=req.param("FIDVal",null);
      var hour=req.param("HourVal",null);
      var subj=req.param("SubjectVal",null);
      var subjname=req.param("SubjectNameVal",null);
      var locatioon=req.param("LocationVal",null);
      var day=req.param("DayVal",null);
      var sql="INSERT INTO FACULTYTIMETABLE(FID,HOUR,SCODE,LOCATION,DAY) values (?,?,?,?,?)";
      var sql2="INSERT INTO SUBJECTENTRY(SCODE,SNAME) values(?,?)";
      var sql3="SELECT * FROM LOGGEDIN";
      connection.query(sql3,function(err,data){
        if(err){
          res.redirect(301,"http://google.com");
          throw error;
        }
        else{
          if(data[0].userType=="Admin")
          {
            connection.query(sql,[fid,hour,subj,locatioon,day], function (err, result) {
              if (err) {
                    res.redirect(301, 'http://google.com');
                    throw err;
              }
              else
              {
                      connection.query(sql2,[subj,subjname],function(err,result){
                          if(err){
                              res.redirect(301,'http://google.com');
                              throw err
                          }
                      else{console.log("1 record inserted");
                  res.redirect(301, 'http://localhost:3000/ContestAdd');
                      }
                  });
              }
              });
          }
          else{
            res.write('<font size=5 text-align="center" float="center" color="white"><center><b><center>');
            res.write('<body bgcolor="navy">');
            res.write('</br>');res.write('</br>');
            res.write("Only Administrator can change the TimeTable");res.write('</br>');res.write('</br>');
            res.write('<a href="http://localhost:3000/AdminLogin">Click here to Login as Administrator</a>');res.write('</br>');res.write('</br>');
            res.write('<a href="http://localhost:3000/">Click here to return to Home Page</a>');
            res.write('</b></center></font>')
            res.write('</body>')
            res.end();
          }
        }
      })
      
  });
  populateTT.listen(8003);
  populateCal.get('/', function (req, res)
  { 
     
      var date=req.param("DateVal",null);
      var event=req.param("EventVal",null);
      var hw=req.param("HWVal",null);
      var sql="UPDATE DAT SET EVENT=?,HW=? WHERE DATE=?";
      var sql2="select * from loggedin";
      console.log(date);
      console.log(date.substring(0,2));
      console.log(date.substring(3,5));
      console.log(date.substring(6,10));
      var y=date.substring(6,10);
      var m=date.substring(0,2);
      var d=date.substring(3,5);
      var dated=`${y}-${m}-${d}`;
      console.log(dated);
      connection.query(sql2,function(err,data){
        if(err){
          res.redirect(301,"http://google.com");
          throw err;
        }
        else{
          if(data[0].userType=="Admin")
          {
            connection.query(sql,[event,hw,dated], function (err, result) {
              if (err) {
                    res.redirect(301, 'http://google.com');
                    throw err;
              }
              else
              {
                 console.log(date);
                  res.redirect(301, 'http://localhost:3000/');
              }
              });
          }
          else{
            res.write('<font size=5 text-align="center" float="center" color="white"><center><b><center>');
            res.write('<body bgcolor="navy">');
            res.write('</br>');res.write('</br>');
            res.write("Only Administrator can change the Calendar");res.write('</br>');res.write('</br>');
            res.write('<a href="http://localhost:3000/AdminLogin">Click here to Login as Administrator</a>');res.write('</br>');res.write('</br>');
            res.write('<a href="http://localhost:3000/">Click here to return to Home Page</a>');
            res.write('</b></center></font>')
            res.write('</body>')
            res.end();
          }
        }
      })
      
  });
  populateCal.listen(8002);
    ViewTT.get('/', function (req, res)
  { 
      var fid=req.param('FIDVal',null);
      var sql="SELECT * FROM FACULTYTIMETABLE WHERE FID=?";
        connection.query(sql,[fid], function (err,data) {
          if (err) {
            res.redirect(301, 'http://google.com');
            res.write("hey!");
            throw err;
          }
          else{
            res.write('<font size=5 text-align="center" float="center" color="white"><center><b><center>');
            res.write('<body bgcolor="navy">');
            res.write('</br>');res.write('</br>');
            res.write("For Faculty:");
            res.write(JSON.stringify(fid));
            for(i=0;i<data.length;i++)
                {
                    res.write('</br>');res.write('</br>');
                    res.write('</br>');
                    res.write("Day:");
                    res.write(JSON.stringify(data[i].Day));
                    res.write("Hour:");
                    res.write(JSON.stringify(data[i].hour));
                    res.write("SCode:");
                    res.write(JSON.stringify(data[i].SCode));
                    res.write("Location:");
                    res.write(JSON.stringify(data[i].Location));
                }
            res.write('</br>');
            res.write('</br>');
            res.write('</br>');
            res.write('</br>');
            res.write('<a href="http://localhost:3000/">Click here to return to Home Page</a>');
            res.write('</b></center></font>')
            res.write('</body>')
            res.end();
          }
      });
  });
  ViewTT.listen(8004);
  ViewCal.get('/', function (req, res)
  { 
      var date=req.param("DateVal",null);
      var sql="SELECT * FROM DAT WHERE DATE=?";
      var y=date.substring(6,10);
      var m=date.substring(0,2);
      var d=date.substring(3,5);
      var dated=`${y}-${m}-${d}`;
      console.log(dated)
        connection.query(sql,[dated], function (err,data) {
          if (err) {
            res.redirect(301, 'http://google.com');
            res.write("hey!");
            throw err;
          }
          else{
            res.write('<font size=5 text-align="center" float="center" color="white"><center><b><center>');
            res.write('<body bgcolor="navy">');
            res.write('</br>');res.write('</br>');res.write('</br>');
            res.write("Date:");
            res.write(JSON.stringify(dated));
            res.write("Day Of Week:");
            res.write(JSON.stringify(data[0].day));res.write('</br>');
            res.write("Event Name:");
            res.write(JSON.stringify(data[0].event));res.write('</br>');
            res.write("H/W:");
            res.write(JSON.stringify(data[0].HW));
            res.write('</br>');
            res.write('</br>');
            res.write('</br>');
            res.write('</br>');
            res.write('<a href="http://localhost:3000/">Click here to return to Home Page</a>');
            res.write('</b></center></font>')
            res.write('</body>')
            res.end();
          }
      });
  });
  ViewCal.listen(8005);
  EditTT.get('/', function (req, res)
{ 
    var fid=req.param("FIDVal",null);
    var hour=req.param("HourVal",null);
    var subj=req.param("SubjectVal",null);
    var subjname=req.param("SubjectNameVal",null);
    var location=req.param("LocationVal",null);
    var day=req.param("DayVal",null);
    var sql="UPDATE FACULTYTIMETABLE set hour=?,scode=?,location=? where day=? AND fid=?";
    var sql2="select * from loggedin";
    connection.query(sql2,function(err,data){
      if(err){
        res.redirect(301,"http://google.com");
        throw err;
      }
      else{
        if(data[0].userType=="Admin")
        {
          connection.query(sql,[hour,subj,location,day,fid], function (err, result) {
            if (err) {
                  res.redirect(301, 'http://google.com');
                  throw err;
            }
            else
            {
                console.log("1 record updated");
                res.redirect(301, 'http://localhost:3000/');
            }
                });
        }
        else{
          res.write('<font size=5 text-align="center" float="center" color="white"><center><b><center>');
            res.write('<body bgcolor="navy">');
            res.write('</br>');res.write('</br>');
            res.write("Only Administrator can change the TimeTable");res.write('</br>');res.write('</br>');
            res.write('<a href="http://localhost:3000/AdminLogin">Click here to Login as Administrator</a>');res.write('</br>');res.write('</br>');
            res.write('<a href="http://localhost:3000/">Click here to return to Home Page</a>');
            res.write('</b></center></font>')
            res.write('</body>')
            res.end();
        }
      }
    })
    
    });
EditTT.listen(8007);
EditCal.get('/', function (req, res)
{ 
  var date=req.param("DateVal",null);
  var sql="UPDATE DAT SET EVENT=?,HW=? WHERE DATE=?";
  var y=date.substring(6,10);
  var m=date.substring(0,2);
  var d=date.substring(3,5);
  var dated=`${y}-${m}-${d}`;
  var event=req.param("EventVal",null);
  var hw=req.param("HWVal",null);
  var sql2="select * from loggedin";
  console.log(dated);
  connection.query(sql2,function(err,data){
    if(err){
      res.redirect(301,"http://google.com");
      throw err;
    }
    else{
      if(data[0].userType=="Admin")
      {
        connection.query(sql,[event,hw,dated], function (err,data) {
          if (err) {
            res.redirect(301, 'http://google.com');
            res.write("hey!");
            throw err;
          }
          else{
            console.log("1 record updated");
            res.redirect(301, 'http://localhost:3000/');
          }
      });
      }
      else{
        res.write('<font size=5 text-align="center" float="center" color="white"><center><b><center>');
            res.write('<body bgcolor="navy">');
            res.write('</br>');res.write('</br>');
            res.write("Only Administrator can change the Calendar");res.write('</br>');res.write('</br>');
            res.write('<a href="http://localhost:3000/AdminLogin">Click here to Login as Administrator</a>');res.write('</br>');res.write('</br>');
            res.write('<a href="http://localhost:3000/">Click here to return to Home Page</a>');
            res.write('</b></center></font>')
            res.write('</body>')
            res.end();
      }
    }
  })
    
});
EditCal.listen(8006);
  








FacultyReg.get('/', function (req, res)
  { 
     
      var FID=req.param("FIDVal",null);
      var FName=req.param("FNameVal",null);
      var password=req.param("PasswordVal",null);
      var Addr=req.param("AddrVal",null);
      var Phone=req.param("PhoneVal",null);
      var Descr=req.param("DescVal",null);

      var sql="INSERT INTO FacultyDetail(FID,FName,Address,Phone,Descr) values(?,?,?,?,?)";
      var sql2="INSERT INTO facultylogin(FID,Password) values(?,?)";
      connection.query(sql,[FID,FName,Addr,Phone,Descr],function(err,data){
        if(err){
          res.redirect(301,"http://google.com");
          throw err;
        }
        else{
            connection.query(sql2,[FID,password], function (err, result) {
              if (err) {
                    res.redirect(301, 'http://google.com');
                    throw err;
              }
              else
              {
                  res.redirect(301, 'http://localhost:3000/');
              }
              });
          }
        });
      });
  FacultyReg.listen(8008);









Logout.get('/', function (req, res)
{ 
    var sql="UPDATE loggedin set userType='User',UID=NULL";
    connection.query(sql,function(err,data){
      if(err){
        res.redirect(301,"http://google.com");
        throw err;
      }
      else{
        res.redirect(300,"http://localhost:3000");
    }
  });
});
Logout.listen(8013);