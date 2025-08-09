const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.get('/login', (req, res) => {
    const {email, password} = req.body
   res.json(usuarios);
});

app.get('/produtos', (req, res) => {
  const usuarios = [
    { id: 1, nome: 'Alice' },
    { id: 2, nome: 'Bob' }
  ];
  res.json(usuarios);
});

app.get('/movimento', (req, res) => {
  const usuarios = [
    { id: 1, nome: 'Alice' },
    { id: 2, nome: 'Bob' }
  ];
  res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
  const novoUsuario = req.body;
  res.status(201).json({ mensagem: 'Usuário criado', usuario: novoUsuario });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
