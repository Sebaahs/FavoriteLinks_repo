const {cadena1,cadena2} = require('./data.js');

let aux;
let cMod1 = cadena1;
let cMod2 = cadena2;


for (let i = 0; i < cMod1.length; i++) {
    for (let j = 0; j < cMod1.length; j++) {
        aux = cMod1[j];
        cMod1[j] = cMod1[j+1];
        cMod1[j+1] = aux;
    }
    
}
for (let i = 0; i < cMod2.length; i++) {
    for (let j = 0; j < cMod2.length; j++) {
        aux = cadena2[j];
        cMod2[j] = cMod2[j+1];
        cMod2[j+1] = aux;
    }
    
}

module.exports = {
    cMod1,
    cMod2
}
