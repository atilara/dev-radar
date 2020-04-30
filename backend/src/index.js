const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://atilara:atilara@cluster0-hpeml.mongodb.net/atilamdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET (buscar informação), POST (criar informação), PUT (editar informação), DELETE

// Tipos de parâmetros: 

// Query: request.query (busca, filtros,) traduzidos na URL, utilizado no GET
// Route: request.route (identificar recurso na alteração ou remoção) utilizado no PUT, DELETE
// Body: request.body (dados para criação ou alteração, JSON) utilizado no POST, PUT

// MongoDB (não-relacional)

app.listen(3333);