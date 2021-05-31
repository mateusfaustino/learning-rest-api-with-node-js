const port = 3000;
const customExpress = require('./config/customExpress');
const conection = require('./infraestrutura/conection');

conection.connect(error=>{
    if(error){
        console.log("Não foi possivel conectar no banco de dados. error: ",error);
    }else{
        console.log("Banco de dados conectado com sucesso!");
    }
});



const app = customExpress();
app.listen(port, ()=>{
    console.log('servidor rodando na porta ', port);
});
