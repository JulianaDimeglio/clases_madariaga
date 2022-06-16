"use strict";
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var vueltas = 4;
var total = 0;
for (var i = 0; i < vueltas; i++) {
    var tiempo = +ReadlineSync.question('Ingrese tiempo de la vuelta: ');
    total += tiempo;
}
var promedio = total / vueltas;
console.log('El tiempo total fue: ' + total + ' El promedio fue: ' + promedio);
