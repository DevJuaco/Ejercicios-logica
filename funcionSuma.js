// Amplia la funcionalidad de la función suma()

// La siguiente función es capaz de sumar dos números. 
// ¿qué cambios deben hacerse a la misma para que sea capaz de sumar 2 o más números?

// function suma( numero1, numero2 ) {
//     return numero1 + numero2;
// }

// suma( 3, 6 );   // 9

function suma (...numeros) {
    let result = 0
    for (numero of numeros) {
        result += numero
    }
    return result
}

sumaTotal = console.log(suma(8, 15, 6, 4))