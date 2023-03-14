// Simulador de local de ropa

function saludar() {
    alert("Bienvenido a Malibu shop");
    let nombre = prompt("Ingrese su nombre");
    while(nombre === ""){
        let nombre = prompt("Ingrese su nombre");
    }
    return nombre
}
console.log(saludar());


class Producto{
    constructor (prenda, precio){
        this.prenda = prenda;
        this.precio = precio;
    }
}

const remera = new Producto ("Remera", 3500);
const jean = new Producto ("Jean", 9500);
const medias = new Producto ("Medias", 1200);


const arrayProductos = [remera, jean, medias];

console.log(arrayProductos);

arrayProductos.forEach((producto)=>{
    console.log(producto.precio);
})