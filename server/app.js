// Importações
const express = require('express');
const cors = require('cors');
const path = require('path');

// Cria app e define porta
const app = express();
const port = process.env.PORT || 3000;

// 🔧 Corrige __dirname para ambiente CommonJS (Node no Railway)
const __dirname = path.resolve();

// Middlewares
app.use(express.json());
app.use(cors());

// Serve arquivos estáticos (HTML, CSS, JS)
app.use(express.static(__dirname));

// Rota principal (serve o index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/pessoa' , (req,res)=>{
    const pessoa = req.body;
    
    if(pessoa.idade < 0){
        res.send({mensagem: `Parametro invalido a sua idade nao pode ser ${pessoa.idade}`});
    }
    res.send({mensagem: `Olá ${pessoa.nome} seu Post deu certo! Você possui ${pessoa.idade} anos de idade!`});
})

app.post('/somar', (req,res)=>{
    const body = req.body;
    const soma = body.num1 + body.num2;
    res.send({resultado: `A soma de ${body.num1} e ${body.num2} é: ${soma}`});
})
app.post('/multiplicar', (req,res)=>{
    const body = req.body;
    const multi = body.num1 * body.num2;
    res.send({resultado: `A multiplicação de ${body.num1} e ${body.num2} é: ${multi}`});
})
app.post('/dividir', (req,res)=>{
    const body = req.body;
    const div = body.num1 / body.num2;
    res.send({resultado:`A divisão de ${body.num1} e ${body.num2} é: ${div}`});
})

//Iniciando server
app.listen(port, '0.0.0.0', (error)=>{
  if(error){
    console.log(`Servidor nao inicou por conta do error ${error}`);
  }else{
    console.log(`Servidor rodando em http://localhost:${port}`);
  }
});