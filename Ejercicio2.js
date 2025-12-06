let cantidadInicial, cantidadVendida, cantidadRecibida;

while (true) {
    cantidadInicial = parseInt(prompt(`Ingrese la cantidad inicial del producto`))
    if(cantidadInicial < 0 || isNaN(cantidadInicial)){
        alert(`Ingresaste algun valor negativo o no es numero, por favor vuelve a ingresarlos`)
        cantidadInicial = parseInt(prompt(`Ingrese la cantidad inicial del producto`))
    }else{
        break;
    }
}
while (true) {
    cantidadVendida = parseInt(prompt(`Ingrese la cantidad vendida del producto`))
    if(cantidadVendida < 0 || isNaN(cantidadVendida)){
        alert(`Ingresaste algun valor negativo o no es numero, por favor vuelve a ingresarlos`)
        cantidadVendida = parseInt(prompt(`Ingrese la cantidad recibida del producto`))  
    }else{
        break;
    }
}
while (true){
    cantidadRecibida = parseInt(prompt(`Ingrese la cantidad recibida del producto`)) 
    if(cantidadRecibida < 0 || isNaN(cantidadRecibida)){
        alert(`Ingresaste algun valor negativo o no es numero, por favor vuelve a ingresarlos`)
        cantidadRecibida = parseInt(prompt(`Ingrese la cantidad recibida del producto`))    
    }else{
        break;
    }
}
function calcularInventario(cantidadInicial, cantidadVendida, cantidadRecibida){
    let producto = 0
    producto = cantidadInicial + cantidadRecibida - cantidadVendida
    return producto
}

let cantidadFinal = calcularInventario(cantidadInicial, cantidadVendida, cantidadRecibida)
let mensaje  = cantidadFinal < 5 ? "inventario critico" : "Inventario estable";
console.log(mensaje)
console.log(`La cantidad de producto es ${cantidadFinal}`);

calcularInventario(cantidadInicial, cantidadVendida, cantidadRecibida)