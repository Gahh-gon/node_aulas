var http = require("http");// é um modulo padrão do protocolo http que tem dentro node

//createServer() essa fução vai abrir um  servidor http em seguida chama uma outra função listen() serve para informar em qual porta você que abrir o servidor como a 80, 90, 99, createServer()  temos uma função de callback com parametros req e res pode mudar o nome se quiser

// res e como se fosse uma resposta pare que ta acessao 
http.createServer((req,res) =>{
    res.end('Tudo Bem')//end é para enviar mensagem
}).listen(9090);

//apos a criação do servidor vai aparecer essa mensagem 
console.log("o Servidor rodando na porta 9090");

// para acessar o servidor precisa ir em   algum browser e no caminho colocar localhost:9090 (colocar localhost esta informando para seu navegador que você quer entrar no seu servidor local )