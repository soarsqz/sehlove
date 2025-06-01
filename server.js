const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/registrar', (req, res) => {
  const { nome, data } = req.body;
  const linha = `${data} - ${nome}\n`;

  fs.appendFile('respostas.txt', linha, err => {
    if (err) {
      console.error('Erro ao salvar:', err);
      return res.status(500).send('Erro ao salvar');
    }
    res.send('Registrado com sucesso');
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
