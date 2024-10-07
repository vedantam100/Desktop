const lib = require('./lib.js');
const fs = require('fs');

const txt = fs.readFileSync('demo.txt', 'utf-8');
console.log(txt);

console.log(lib.sum(6,5));