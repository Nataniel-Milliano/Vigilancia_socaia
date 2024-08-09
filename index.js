const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/routes')
const ejs = require('ejs')
const cookieParser = require('cookie-parser');


// Adicione cookie-parser como middleware
app.use(cookieParser());

//Uso do renderizador HTML ejs, ou seja, view engine´~
app.set('view engine','ejs')

//usar o body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// Uso dos ficheiros estáticos
app.use(express.static('public'))



// usar as rotas
app.use('/',router)

app.listen(3030,() => {
    console.log("Servidor rodando")
});
