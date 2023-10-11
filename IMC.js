// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, 
// es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula:

// peso / altura^2
// Escribe un programa que le pida al usuario su peso y altura. 
// El programa deberá calcular el BMI e imprimir:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30



function calcularImc (peso, altura) {
    
    peso >= 2 && peso <= 500 && altura > 0.50 && altura < 3
        ? imc = peso / altura ** 2
        : alert('recuerda que el peso debe estar entre los 2 y los 500 kilos y la altura entre 0.51 y 2.9 metros, verifica los datos')
            window.location.reload()

    if (imc < 18.5) {
        alert(`tu BMI es de ${imc}, bajo de peso`)
    } else if (imc <= 24.9) {
        alert(`tu BMI es de ${imc}, normal`)
    } else if (imc <= 29.9) {
        alert(`tu BMI es de ${imc}, sobrepeso`)
    } else {
        alert(`tu BMI es de ${imc}, obeso`)
    }
}

calcularImc(prompt('ingresa tu peso en kilogramos'), prompt('ingresa tu altura en metros'))
window.location.reload()

