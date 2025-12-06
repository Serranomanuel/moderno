
let cantAprendices = parseInt(prompt(`Ingrese la cantidad de aprendices`));
let aprendices = []; //Array vacio para almacenar los aprendices

// usamos un for para darle valores al arreglo
for (let i = 0; i < cantAprendices; i++){
    let nombre = prompt(`Ingrese el nombre del aprendiz numero ${i+1}`); // Ingresamos el nombre del aprendiz y lo asignamos en nombre
    aprendices.push(nombre) // se le asigna el valor de nombre a cada posicion
};

let buscar = prompt(`Ingrese el nombre a buscar`)

function validar (aprendices, nombre){
    let pregunta = aprendices.some((valor)=>{
        if (valor == nombre){
            return true
        }
    })
    let mensaje = pregunta ? "El aprendiz si esta inscrito" : "El aprendiz no esta inscrito"
    alert(mensaje)
}

nombre = prompt("Ingrese el nombre del parendiz a encontrar")
validar(aprendices, nombre)
