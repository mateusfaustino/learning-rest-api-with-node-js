const conexao =require('../infraestrutura/conection');
class Atendimento {
    add(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?'
        conexao.query(sql, atendimento, (error, results)=>{
            if (error) {
                console.log(error);
            } else {
                console.log(results);
            }
        })
    }
}

module.exports = new Atendimento;