const values = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'female'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
];

// A partir de la lista anterior determinar:
// Cantidad de hombres y mujeres.
// Promedio de edades de hombres y mujeres.
// Cuántas personas se llaman igual.

let hombres = 0
let mujeres = 0
let promedioEdad = 0

function obtenerDatos() {
    for(let value of values) {
        value.gender == 'male'
            ? hombres++
            : mujeres++

            promedioEdad += value.age
    }
    console.log(`Existen ${hombres} hombres`)    
    console.log(`Existen ${mujeres} mujeres`)  
    console.log(`el promedio de las edades es de ${promedioEdad/values.length}`)

    const conteo = {}

    for(let value of values) {
        for (const propiedad in value) {
            const valor = value[propiedad]
         
            if (conteo[valor]){
                conteo[valor]++
            } else {
                conteo[valor] = 1
            }
        }
    }

    for (const valor in conteo){
        if(conteo[valor] > 1) {
        console.log(`${valor} se repite ${conteo[valor]} veces`)
        }
    }
}

obtenerDatos()
