/* Simulador para entrar al colegio como estudiante nuevo */

let nombre = prompt("Ingrese su nombre: ");
console.log(nombre);

let numeroVacante = parseInt(prompt("Ingrese su numero de vacante: "));
    for(i=0 ; i < 2 ; i=i+1){
    if(numeroVacante >= 1 && numeroVacante <= 50){
        alert("Puede ingresar");
        console.log("Numero de vacante: " + numeroVacante);
        break;
    }
    else {
        alert("No puede ingresar");
        numeroVacante = parseInt(prompt("Ingrese su numero de vacante: "));
    }
}

function contraseñaVacante(){
    let passwordUsuario = parseInt(prompt("Ingrese su contraseña"));
    const password = 434343;
    for (i = 0 ; i < 2 ; i=i+1){
    if (passwordUsuario == password){
        console.log("Contraseña aceptada");
        break;
    }   else {
        passwordUsuario = parseInt(prompt("Ingrese nuevamente la contraseña"))
    }
}
}

contraseñaVacante();

let primerExamen = parseFloat(prompt("Ingrese nota de su primer examen"));
    console.log("La nota de su primer examen es de " + primerExamen);

let segundoExamen = parseFloat(prompt("Ingrese nota de su segundo examen"));
    console.log("La nota de su segundo examen es de " + segundoExamen);

let promedio = (primerExamen + segundoExamen)/2;

let mensaje = ("El promedio final de sus examenes es de: " + promedio);
    console.log(mensaje);

let mensajePromedio = prompt("Ingrese su promedio en letras")
    switch(mensajePromedio){

    case("diez"):
    alert("Felicitaciones, ha aprobado para ingresar como estudiante al colegio");
    console.log("Felicitaciones, ha aprobado para ingresar como estudiante al colegio");
    break;

    case("nueve"):
    alert("Felicitaciones, ha aprobado para ingresar como estudiante al colegio");
    console.log("Felicitaciones, ha aprobado para ingresar como estudiante al colegio");
    break;

    case("ocho"):
    alert("Felicitaciones, ha aprobado para ingresar como estudiante al colegio");
    console.log("Felicitaciones, ha aprobado para ingresar como estudiante al colegio");
    break;

    default:
    alert("Su promedio final fue insuficiente para ingresar como estudiante al colegio");
    console.log("Su promedio final fue insuficiente para ingresar como estudiante al colegio");
    break;
    }
