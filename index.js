const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const mysql = require('mysql');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req,res)=>res.json({message:'Funcionando!'}));
app.use('/', router);

app.listen(port);
console.log("API Funcionando")
