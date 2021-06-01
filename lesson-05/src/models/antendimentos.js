const moment = require('moment');
const conexao =require('../infraestrutura/conection');
class Atendimento {
    add(atendimento, res){
        const dataCriacao = new Date(); 
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const isDateValid = moment(data).isSameOrAfter(dataCriacao);
        const isCostumerNameValid = atendimento.cliente.length >= 4;

        
        const validations = [
            {
                name:'data',
                isValid: isDateValid,
                message:'A data deve ser maior ou igual a data atual'
            },
            {
                name:'cliente',
                isValid: isCostumerNameValid,
                message: 'O nome do cliente deve ter pelo menos 4 caracteres'
            }
        ]
        
        const errors = validations.filter(campo => !campo.isValid )
        const isThereErrors = errors.length;

        if (isThereErrors) {
            res.status(400).json(errors)
        } else {
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

    list(res){
        const sql = 'SELECT * FROM Atendimentos';
        conexao.query(sql, (error, results)=>{
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(201).json(results);
            }
        })
    }

    findAtendimentoById(id,res){
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;
        conexao.query(sql, (error, results)=>{
            const atendimento = results[0]
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(201).json(atendimento);
            }
        })
    }

    set(id,values, res){
        if (values.data) {
            values.data = moment(values.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
            
        }
        const sql = `UPDATE Atendimentos SET ? WHERE id=?`;
        conexao.query(sql,[values,id], (error, results)=>{
            
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({...values,id});
            }
        })
    }
    delete(id, res){
        const sql = `DELETE FROM Atendimentos WHERE id=?`;
        conexao.query(sql, id , (error, results)=>{
            
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(id);
            }
        })
    }

    
}

module.exports = new Atendimento;