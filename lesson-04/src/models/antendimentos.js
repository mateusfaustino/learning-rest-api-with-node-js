const moment = require('moment');
const conexao =require('../infraestrutura/conection');
class Atendimento {
    add(atendimento){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO Atendimentos SET ?'
        conexao.query(sql, atendimentoDatado, (error, results)=>{
            if (error) {
                console.log(error);
            } else {
                console.log(results);
            }
        })
    }
}

module.exports = new Atendimento;