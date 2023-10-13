// Calcular Entero a partir de un Binario de 4 dígitos.

// Dada una matriz de unos y ceros, convierta el valor binario equivalente a un número entero.

// Ejemplos:

// Entrada: [0, 0, 0, 1]
// Salida :  1

// Entrada: [0, 0, 1, 0]
// Salida :  2

// Entrada: [0, 1, 0, 1]
// Salida :  5

// Entrada: [1, 0, 0, 1]
// Salida :  9

// Entrada: [0, 0, 1, 0]
// Salida :  2

// Entrada: [0, 1, 1, 0]
// Salida :  6

// Entrada: [1, 1, 1, 1]
// Salida :  15

// Entrada: [1, 0, 0, 1, 1, 1]
// Salida :  11.

binario = [1, 1, 1, 1]
binarioReves = binario.reverse()

calculoList = []
solucion = 0

for (i = binarioReves.length - 1; i >= 0; i--) {
    calculo = (binarioReves[i] * 2) ** i
    calculoList.push(calculo)
}
for (result of calculoList) {
    solucion += result
}
console.log(`el equivalente en decimal del binario: [${binario}] es ${solucion}`)