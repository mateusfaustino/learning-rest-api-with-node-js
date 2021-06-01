const Atendimento = require('../models/antendimentos');
module.exports = app => {
    app.get('/atendimentos', (req, res)=>{
        Atendimento.list(res);
    })

    app.get('/atendimentos/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        
        Atendimento.findAtendimentoById(id,res);
        
    })
    app.post('/atendimentos', (req, res)=>{
        const atendimento = req.body;
        Atendimento.add(atendimento, res);
    })
}