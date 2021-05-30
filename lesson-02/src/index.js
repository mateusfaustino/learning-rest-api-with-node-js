const port = 3000;
const customExpress = require('./config/customExpress');



const app = customExpress();
app.listen(port, ()=>{
    console.log('servidor rodando na porta ', port);
});
