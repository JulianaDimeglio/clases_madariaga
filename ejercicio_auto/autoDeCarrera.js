let readline = require('readline-sync');
let vueltas = 4;
let total = 0 ;

for(let i = 0; i < vueltas; i++ ){
    let tiempo = +readline.question('Ingrese tiempo de la vuelta: ');
    total += tiempo;
}
let promedio = total / vueltas;
console.log('El tiempo total fue: '+ total + ' El promedio fue: ' + promedio);