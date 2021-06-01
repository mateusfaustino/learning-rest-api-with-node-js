const port = 3000;
const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conection');
const Tables = require('./infraestrutura/tables');

conexao.connect(error=>{
    if(error){
        console.log(error);
        }else{
        console.log("Banco de dados conectado com sucesso!");
        Tables.init(conexao);
        const app = customExpress();
        app.listen(port, ()=>{
            console.log('servidor rodando na porta ', port);
        });
    }
});




