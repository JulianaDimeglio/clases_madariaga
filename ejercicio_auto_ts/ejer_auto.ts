import * as ReadlineSync from 'readline-sync';

let vueltas: number = 4;
let total: number = 0 ;

for(let i: number = 0; i < vueltas; i++ ){
    let tiempo: number = +ReadlineSync.question('Ingrese tiempo de la vuelta: ');
    total += tiempo;
}

let promedio: number = total / vueltas;
console.log('El tiempo total fue: '+ total + ' El promedio fue: ' + promedio);