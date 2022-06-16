"use strict";
exports.__esModule = true;
var fs = require("fs");
var texto = fs.readFileSync('abc.txt', 'utf8');
var palabras = texto.split(' ');
console.log(palabras);
