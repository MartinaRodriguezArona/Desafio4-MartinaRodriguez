function sumarProductos(precioUnitario, cantidadDeseada){
        let TotalGastado = precioUnitario * cantidadDeseada;
        return TotalGastado;
}

const nombreProducto = "PC";
let precioUnitario = 3684920;
let cantidadDeseada = parseInt( prompt(`Coloque la cantidad deseada: \n ${"Cada PC sale $" + precioUnitario} `));

let TotalCompra = sumarProductos(precioUnitario, cantidadDeseada);

console.log("El total gastado en el producto es: $" + TotalCompra);
