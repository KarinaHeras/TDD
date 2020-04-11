function letraDni(dni){

if (dni < 0 || dni > 99999999) {
    return "";
} else {
    
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
const resto = dni%23;
const letra = letras[resto];

return letra;
}

}

//const letra = letraDni('03199518');
//console.log(letra);



module.exports = letraDni;
