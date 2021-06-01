class Tables{
    init(conexao){
         this.conexao=conexao;
         this.createAtendimentos();
    }

    createAtendimentos(){
        const sql = 'CREATE TABLE atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observcoes text, PRIMARY KEY(id))'
        this.conexao.query(sql, (error)=>{
            if (error) {
                console.log(error);
                console.log("-------------------------------error");
            } else {
                console.log('Tabela atendimentos criada com sucesso');
            }
        })
    }
}

module.exports = new Tables;