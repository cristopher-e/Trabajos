const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')
const app = express()


// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.set('port', process.env.PORT || 9000)

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'trabajos'
}
//middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
//rutas
app.get('/', (req, res) => {
    res.send("Welcome")
})
app.use('/api', routes)
//Server running
app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
})

/* app.get('/correo', (req,res) => {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'supertrabajoschidos@gmail.com',
            pass: 'elchavadiosdado24'
        }
    });
    
    var mailOptions = {
        from: 'supertrabajoschidos@gmail.com',
        to: 'salvadordiosdado710@gmail.com',
        subject: 'Código de verificacion ',
        text: 'Su código de verificacion es "'+req.query.n1+'"',
    };
    
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.send("Correo enviado con exito")
        }
    });

}) */

/* app.get('/aspirantes', (req, res) => {
    req.getConnection((err,conn)=>{
        if(err){
            return res.send(err)
        }
        conn.query('SELECT * FROM aspirantes', (err,rows)=>{
            if(err){
                return res.send(err)
            }
            res.json(rows)
        })
    })
})

app.post('/aspirantes', (req, res) => {
    req.getConnection((err,conn)=>{
        if(err){
            return res.send(err)
        }
        console.log(req.body)
        conn.query('INSERT INTO aspirantes set ?',[req.body], (err,rows)=>{
            if(err){
                return res.send(err)
            }
            res.json(rows)
        })
    })
}) */