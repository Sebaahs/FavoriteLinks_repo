const {array} = require('./data.js');

let aux;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        
        if (array[j] < array[j+1]) {
            aux = array[j];
            array[j] = array[j+1];
            array[j+1] = aux;
        }
    }
}

module.exports = array;