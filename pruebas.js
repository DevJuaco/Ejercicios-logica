
let products = [
    { nombre: "Pan", precio: 3, cantidad: 20 },
    { nombre: "Tomate", precio: 8, cantidad: 7 },
    { nombre: "Leche", precio: 0, cantidad: 4 },
    { nombre: "Huevos", precio: 9, cantidad: 0 },
    { nombre: "Arroz", precio: 5, cantidad: 5 },
    { nombre: "Cebolla", precio: 0, cantidad: 10 },
    { nombre: "Naranjas", precio: 12, cantidad: 10 },
];

let cantidades = []
let totalInv = 0


function productos () {
    for(product of products) {
        cantidades.push(product.precio * product.cantidad)
    }
    for(cantidad of cantidades) {
        totalInv += cantidad
    }
    console.log(cantidades)
    console.log(totalInv)
}
    
productos()