var somar = require("./somar");// é uma função especifica no node para carregar um modulo
var sub = require("./sub");
var mult = require("./mult");
var div = require("./div");
console.log("")
console.log("Numeros a calcular: 1 e 2")
console.log("")
console.log("Soma:"+""+somar(1,2));
console.log("subtração"+" "+sub(1,2));
console.log("multiplicação"+" "+mult(1,2));
console.log("Divisão"+" "+div(1,2));
