const express = require('express'); // puxando express ele retorna uma função dentro da variavel que função que cria o express

const app = express();//cria uma copia inteira do express dentro dessa const app, usar const e bom para não ter perigo de rescrever o app 


            //ROTAS

app.get("/", (req, res) =>{
    res.send("<h1>Seja bem-vindo<h1/>");//send serve para enviar alguma coisa
})



app.get("/sobre", (req, res) =>{
    // é objeto res vai mandar mensagens pode ser um arquivo de texto etc..
    res.send("<p>Isso é uma pagina feita pelo node <p/>");//send serve para enviar alguma coisa
});

app.get("/blog", (req, res)=>{
res.send("Bem-vindo ao meu blog!");
});

            
              //PORTA
              
app.listen(9090, ()=>{//estou usando função de calback que ocorre sempre que enveto acontece 
    console.log("SERVIDOR RODANDO na url http://localhost:9090")
});//agora servidor já esta rondado porém, deve ser colocado sempre por última linha, (listen esta escutando a porta 9090)