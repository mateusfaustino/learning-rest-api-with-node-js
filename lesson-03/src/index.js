const port = 3000;
const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conection');

conexao.connect(error=>{
    if(error){
        console.log('error--------------------------------------');
        console.log(error);
        console.log('end error----------------------------------');
    }else{
        console.log("Banco de dados conectado com sucesso!");

        const app = customExpress();
        app.listen(port, ()=>{
            console.log('servidor rodando na porta ', port);
        });
    }
});




