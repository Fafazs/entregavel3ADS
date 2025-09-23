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

//Iniciando server
app.listen(port, (error)=>{
  if(error){
    console.log(`Servidor nao inicou por conta do error ${error}`);
  }else{
    console.log(`Servidor rodando em http://localhost:${port}`);
  }
});