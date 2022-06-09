const { CLIENT_LONG_PASSWORD } = require("mysql/lib/protocol/constants/client")

const mysql=require('mysql')
const con=mysql.createConnection({
 host:'localhost',
 user:'root',
 password:"",
 database:"test"

});
con.connect((err)=>{
    if(err)
    {
        console.warn("error in a connection");
    }


})

module.exports=con;

