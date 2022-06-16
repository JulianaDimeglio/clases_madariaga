import * as fs from 'fs';
let texto: string = fs.readFileSync('abc.txt', 'utf8');
let palabras: string[] = texto.split(' ');
console.log(palabras);
  