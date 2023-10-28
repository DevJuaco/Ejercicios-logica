
// Un héroe se dirige al castillo para completar su misión. Sin embargo, 
// le han dicho que el castillo está rodeado por un par de poderosos dragones. 
// cada dragón necesita 2 balas para ser derrotado, 
// nuestro héroe no tiene idea de cuántas balas debe cargar.

// Responda a la pregunta ¿Va a sobrevivir? y devuelva true si es así, de lo contrario false


function sobrevivir (cantBalas, cantDragones) {
    sobrevive = false
    
    cantBalas >= 2 && cantBalas / 2 >= cantDragones
    ? sobrevive = true
    : sobrevive = false

    return sobrevive
}

console.log(sobrevivir(10, 6))