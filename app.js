const _ = require('lodash');

var tablica = [1,7,65,37,41,97];
var suma = 0;
var avg = _.mean(tablica)

console.log(avg)

for (var i = 0; i < tablica.length; i++) {
suma += tablica[i];
}
var avg = suma / tablica.length;

console.log(avg)
