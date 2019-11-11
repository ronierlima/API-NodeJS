const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir'); 

// iniciando o APP
const app = express();

//permete receber json
app.use(express.json());

// iniciando o DB
 
mongoose.connect('mongodb://localhost:27017/test',  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

// importando models
requireDir('./src/models/');

// primeira rota
app.use("/api", require("./src/routes"));

const porta = process.env.PORT || 3000;
app.listen(porta);
