const express = require('express');
const app = express();
const path = require('path');

//Define o diretorio publico para servir arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Rota para o arquivo HTML
app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
console.log('Servidor iniciado com sucesso!');