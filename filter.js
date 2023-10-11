/** De un listado de personas determinar cuales son mayores a 18 años */

// const personas = [
//     { nombre: 'Luisa', edad: 9 },
//     { nombre: 'Elisa', edad: 17 },
//     { nombre: 'Ana', edad: 21 },
//     { nombre: 'Maria', edad: 13 },
//     { nombre: 'Melisa', edad: 19 }
// ];

// mayoresDeEdad = []

// for (i = 0; i < personas.length; i++) {
//     if (personas[i].edad >= 18) {
//         mayoresDeEdad.push(personas[i].nombre)
//     }
// }
// console.log(mayoresDeEdad)

/** De un listado de frutas determinar cuales son los productos que estan entre 10 y 20 dolares */

const frutas = [
    { nombre: 'Mangostino', precio: 34 },       
    { nombre: 'Mora', precio: 17 },      
    { nombre: 'Banano', precio: 11 },        
    { nombre: 'Papaya', precio: 13 },      
    { nombre: 'Lulo', precio: 8 }      
] 

// Primer metodo

// let frutas10y20 = []

// for (i = 0; i < frutas.length; i++){
//     if(frutas[i].precio <= 20 && frutas[i].precio >= 10 ){
//         frutas10y20.push(frutas[i].nombre)
//     }
// }
// console.log(frutas10y20)

// Usando filter

const result = frutas.filter( fruta => 
    fruta.precio <= 20 && fruta.precio >= 10
    )

    for (i = 0; i < result.length; i++) {
        console.log(result[i].nombre)
    }