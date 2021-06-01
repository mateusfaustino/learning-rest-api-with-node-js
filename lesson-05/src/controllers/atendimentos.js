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

    app.patch('/atendimentos/:id', (req,res)=>{
        const id = parseInt(req.params.id);
        const values = req.body;

        Atendimento.set(id, values,res);
    })

    app.delete('/atendimentos/:id', (req,res)=>{
        const id = parseInt(req.params.id);
        Atendimento.delete(id, res);
    })
}