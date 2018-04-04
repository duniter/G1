const fs = require('fs');

const content = fs.readFileSync('Logo-G1-June-Noir-2018-CC0.svg','utf8');
const opti = content.replace(/[0-9]+\.[0-9]+/g,n=>Math.round(n*10)/10)
fs.writeFileSync('opti.svg', opti );
