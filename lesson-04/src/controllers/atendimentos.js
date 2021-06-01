const Atendimento = require('../models/antendimentos');
module.exports = app => {
    app.get('/atendimentos', (req, res)=>{
        res.send("Você está na rota de atendimentos e esta pasta está organizada")
    })
    app.post('/atendimentos', (req, res)=>{
        const atendimento = req.body;
        Atendimento.add(atendimento);
        res.send("Você fez um post")
    })
}