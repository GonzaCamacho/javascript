let productos = [

    {
    nombre: "Remera",
    precio: 5500,
    id: 1,
    img: "img/remera.jpg"
    },

    {
    nombre: "Pantalon",
    precio: 7500,
    id: 2,
    img: "./img/pantalon.jpg"
    },

    {
    nombre: "medias",
    precio: 1500,
    id: 3,
    img: "./img/medias.jpg"
    },

    {
    nombre: "Zapatillas",
    precio: 9500,
    id: 4,
    img: "./img/zapatillas.jpg"
    },

    {
    nombre: "Boxer",
    precio: 4500,
    id: 5,
    img: "./img/boxer.jpg"
    },

    {
    nombre: "Gorra",
    precio: 3500,
    id: 6,
    img: "./img/gorra.jpg"
    },
]
let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

let main = document.querySelector(".main-box");

let cart = document.querySelector(".carrito");

mostrarCarrito();

function crearCards(){
    productos.forEach((prod) => {
        main.innerHTML += `<div class = "card">
                            <div class = "img-box">
                            <img src="${prod.img}"></img>
                            </div>
                            <span>$${prod.precio}</span>
                            <button id="prod-${prod.id}"Agregar</button>
                            </div>`
    });
    darfuncionalidadBtns();
}

function darfuncionalidadBtns(){
    productos.forEach((prod) => {
        document.getElementById(`prod-${prod.id}`).addEventListener ("click", () => {
            console.log("click");
            agregarAlCarrito(prod);
        });
    });
}

function agregarAlCarrito(prod){
    let existe = carrito.some((element) => element.id == prod.id);
    if(existe === false){
        prod.cantidad = 1;
        carrito.push(prod);
    }else{
        let miProd = carrito.find((element) => element.id == prod.id);
        miProd.cantidad++;
    }
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito);
    mostrarCarrito();
}

function mostrarCarrito(){
    cart.innerHTML = " ";
    carrito.forEach((prod) => {
        cart.innerHTML+= `<div class= "card">
                        <span>$${prod.precio}</span>
                        <p>CANTIDAD: ${prod.cantidad}
                        </p>
                        </div>`;

    });
    precioTotal();
}

function precioTotal(){
    let total = carrito.reduce ((acc, prod) => acc + prod.precio*prod.cantidad, 0);
    console.log("El precio de su compra es:" + total);
}


crearCards();

class Cliente{
    constructor(nombre, apellido, correo, celular){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.celular = celular;
    };
}

const arrayClientes = [];

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
e.preventDefault();
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const celular = document.getElementById("celular");
const cliente = new Cliente (nombre.value, apellido.value, correo.value, celular.value);
arrayClientes.push(cliente);
console.log(arrayClientes);
formulario.reset();


})