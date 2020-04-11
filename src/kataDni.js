function letraDni(dni){

    if (dni.length != 8){
    return 'el numero del dni debe  contener 8 digitos, rellene con 0 a la izquierda'
    }

const letras = ['T', 'R', 'W', 'A', 'G', 'M',
'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
const resto = dni%23;
const letra = letras[resto];

return letra;
}
module.exports = letraDni;





