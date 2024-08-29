const express = require("express");
const cep_endereco = require("./middlewares/cep_endereco.js");
const app = express();
const port = 3800;

app.use(express.json());

app.use((req, res, next) => {
    console.log("middleware 2")
    next()
});

app.post("/barbearia", (req, res, next) => {
    console.log("middleware 3");
    next()
}, cep_endereco, (req, res) => {
    console.log("POST Barbearia")
    res.json(req.body)
});

app.listen(port, () => {
    console.log("Server is running in " + port)
});