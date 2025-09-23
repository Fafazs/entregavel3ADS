const express = require('express');
const app = express();
const cors = require('cors');
const port = 3938;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

//rotas
app.get('/', (req,res)=>{
    res.send('<h1>Rota raiz do servidor express</h1>')
})

app.post('/pessoa' , (req,res)=>{
    const pessoa = req.body;
    
    if(pessoa.idade < 0){
        res.send({mensagem: `Parametro invalido a sua idade nao pode ser ${pessoa.idade}`});
    }
    res.send({mensagem: `Olá ${pessoa.nome} seu Post deu certo! Você possui ${pessoa.idade} anos de idade!`});
})

app.post('/somar', (req,res)=>{
    const body = req.body;
    const soma = body.a + body.b;
    res.send(`A soma de ${body.a} e ${body.b} é: ${soma}`);
})
app.post('/multiplicar', (req,res)=>{
    const body = req.body;
    const multi = body.a * body.b;
    res.send(`A multiplicação de ${body.a} e ${body.b} é: ${multi}`);
})
app.post('/dividir', (req,res)=>{
    const body = req.body;
    const div = body.a / body.b;
    res.send(`A divisão de ${body.a} e ${body.b} é: ${div}`);
})

//Iniciando server
app.listen(port, (error)=>{
  if(error){
    console.log(`Servidor nao inicou por conta do error ${error}`);
  }else{
    console.log(`Servidor rodando em http://localhost:${port}`);
  }
});