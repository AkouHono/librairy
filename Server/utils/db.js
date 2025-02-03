import mysql from 'mysql'

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'librairy'
})

con.connect(function(err){
    if(err){
        console.log("connection error")

    }else {
        console.log("conected")
    }
})

export default con;