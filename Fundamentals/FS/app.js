// Creating FS MOdule in NodeJs 
import fs from 'node:fs'

//console.log(fs);

const m= fs.readFileSync('./Fundamentals/FS/index.html')

console.log(m.toString());
