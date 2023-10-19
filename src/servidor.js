const porta = 3003;

const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDeDados");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/usuarios", (req, res) => {
  res.send(bancoDeDados.getUsuarios());
});

app.get("/usuarios/:id", (req, res) => {
  res.send(bancoDeDados.getUsuario(req.params.id));
});

app.post("/usuarios", (req, res) => {
  const usuario = bancoDeDados.salvarUsuario({
    nome: req.body.nome,
    idade: req.body.idade,
  });
  res.send(usuario);
});

app.put("/usuarios/:id", (req, res) => {
  const usuario = bancoDeDados.salvarUsuario({
    id: req.params.id,
    nome: req.body.nome,
    idade: req.body.idade,
  });
  res.send(usuario);
});

app.delete("/usuarios/:id", (req, res) => {
  const usuario = bancoDeDados.excluirUsuario(req.params.id);
  res.send(usuario);
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
