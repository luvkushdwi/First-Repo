// // // // const http = require('http');

// const database = require("mime-db");

// // // // function dataControl(req,res)
// // // // {
// // // //     res.write("<h1>Hello this is pawan dwivedi</h1>");
// // // //     res.end();

// // // // }

// // // // http.createServer(dataControl).listen(4300);


// // // //this is a simple api

// // // // const data=require('./data');
// // // // const http = require('http');
// // // // http.createServer((req, res) => {
// // // //     res.writeHead(200, { 'Content-Type': 'application\json' });
// // // //     res.write(JSON.stringify(data));
// // // //     res.end();
// // // // }).listen(6200);



// // // //console.log(process.argv[3])
// // // const fs = require('fs');
// // // const input = process.argv;
// // // if(input[2]=='add')
// // // {
// // //     fs.writeFileSync(input[3],input[4])

// // // }else if(input[2]=='remove')
// // // {
// // //     fs.unlinkSync(input[3])
// // // }
// // // else{
// // //     console.log("invalid input")
// // // }

// // // fs.writeFileSync(input[2], input[3])





// // //display file list from folder

// // // const fs=require('fs');
// // // const path = require('path');
// // // const dirPath=path.join(__dirname,'files');
// // // for(i=0;i<5;i++)
// // // {
// // //     fs.writeFileSync(dirPath+"/hello"+i+".txt","this is a simple file");


// // const express = require('express');
// // const app = express();

// // const reqFilter = (req, res, next) => {
// //     if (!req.query.age) {
// //         res.send("please provide age")
// //     }
// //     else if (req.query.age < 18) {
// //         res.send("you can not access this page")
// //     }
// //     else {

// //         next();
// //     }
// // }
// // app.use(reqFilter)

// // app.get('/facepak', (req, res) => {
// //     res.send('welcome to home page somnath')
// // })
// // app.listen(5000);

// const mysql = require("mysql");
// const con = mysql.createConnection({
//     host: 'localhost',
//     user: "root",
//     password: "",
//     database: "test"
// });
// con.connect((err) => {
//     if (err) {
//         console.warn("error")
//     }
//     else {
//         console.warn("connected")
//     }
// });

// //  con.query("selecy * form user",(err,result)=>{
// //      console.warn("result",result)
// // })

//  con.query("INSERT INTO user (id,name,password,user_type) VALUES (1, 'Highway 37','pawan',1122)",(err, result)=>{
//  console.warn("Result",result)

//  })





//WE ARE GOING TO MAKE GET API USING MYSQL.....

const { query } = require('express');
const express = require('express');
const con = require("./config")
const app = express();
app.use(express.json())


app.get("/", (req, res) => {
    con.query(" SELECT * FROM user", function (err, result, fields) {
            if (err) {
                res.send("error");
            }
            else {
                res.send(result);
            }


            //   res.writeHead(200, { 'Content-Type': 'application\json' });
            //   res.write(JSON.stringify(user));
            //   res.end();
            //res.send("route done");
        })
});

app.post("/", (req, res) => {
    const data = req.body;
    con.query("insert into user set ?", data, (error, result, fields) => {
        if (error) throw error;
        res.send(result)

    })
});
app.put("/:id", (req, res) => {
    const data = [req.body.name, req.body.password, req.body.user_type, req.params.id];
    con.query("update user set name =?,password=?,user_type=? where id=?", data, (error, result, fields) => {


        if (error) throw error;
        res.send(result)
// Luvkush.....//
// 
    })
});
app.delete("/:id", (req, res) => {
    con.query("delete from user where id=" + req.params.id, (error, result) => {
        if (error) throw error;
        res.send(result)
    })


});

app.listen(5001)

















