const moment = require('moment');
const conexao =require('../infraestrutura/conection');
class Atendimento {
    add(atendimento, res){
        const dataCriacao = new Date();
        console.log("dataCriacao: ",dataCriacao);
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO Atendimentos SET ?'
        conexao.query(sql, atendimentoDatado, (error, results)=>{
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(201).json(results);
            }
        })
    }
}

module.exports = new Atendimento;