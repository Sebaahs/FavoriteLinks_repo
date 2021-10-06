const {cadena1,cadena2} = require('./data.js');
const {cMod1,cMod2} = require('./validacion.js');
const aMod1 = require('./ordenamiento.js');


console.log(`Array Ordenado: ${aMod1}`);


if (cadena1 === cMod1) {
    console.log('La cadena 1 se escribe igual al revez');
} else {
    console.log('La cadena 1 NO se escribe igual al revez');
}
if (cadena2 === cMod2) {
    console.log('La cadena 2 se escribe igual al revez');
} else {
    console.log('La cadena 2 NO se escribe igual al revez');
}