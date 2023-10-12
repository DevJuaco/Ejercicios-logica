// A partir de la siguiente lista

let products = [
    { nombre: "Pan", precio: 3, cantidad: 20 },
    { nombre: "Tomate", precio: 8, cantidad: 7 },
    { nombre: "Leche", precio: 0, cantidad: 4 },
    { nombre: "Huevos", precio: 9, cantidad: 0 },
    { nombre: "Arroz", precio: 5, cantidad: 5 },
    { nombre: "Cebolla", precio: 0, cantidad: 10 },
    { nombre: "Naranjas", precio: 12, cantidad: 10 },
];

// Obtener una lista con los nombres de los productos mas baratos, en el entendido que se considera barato un producto que no supera los 5 dólares.
// Calcular el costo promedio de todos productos de la lista cuyo precio y cantidad disponible es mayor a cero
// Calcular el costo total del inventario.

productosBaratos = []
productosMayoresaCero = []
promedioProductos = 0
cantidades = []
totalInv = 0

function productos () {
for(product of products) {
    if(product.precio <= 5){
        productosBaratos.push(product.nombre)
    }
    if(product.precio > 0 && product.cantidad > 0){
        productosMayoresaCero.push(product)
        promedioProductos += product.precio
    }
}

for(product of products) {
    cantidades.push(product.precio * product.cantidad)
}
for(cantidad of cantidades) {
    totalInv += cantidad
}

console.log(`los productos mas baratos son ${productosBaratos}`)
console.log(`el costo promedio de productos disponibles y mayores a cero es de ${promedioProductos / productosMayoresaCero.length}`)
console.log(`y el costo total del inventario es de ${totalInv}`)
}

productos()
