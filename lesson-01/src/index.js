const port = 3000;
const express = require('express');
const app = express()

app.get('/atendimentos', (req, res)=>{
    res.send("Você está na rota de atendimentos")
})

app.listen(port, ()=>{
    console.log('servidor rodando na porta ', port);
});
