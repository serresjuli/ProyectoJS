//CONSTRUCTOR
class Vehiculos {
    constructor(modelo, marca, año, kilometros, precio){
        this.modelo = modelo.toUpperCase(); // para que pase a MAYUSCULA
        this.marca = marca.toUpperCase(); // para que pase a MAYUSCULA
        this.año = año
        this.kilometros = kilometros
        this.precio = parseFloat(precio); // para calcular el IVA
    }
    sumarGastos(){
        this.precio = this.precio * 1.05; // agrego el 5% en concepto de gastos
    }
    getHTML(){
        return "<h2>"+ this.modelo + " " + this.año + "</h2>" + "<button id=precio>Ver precio</button>" + "<button id=contacto>Contacto</button>"
    }
}

//Modifico h1 desde JS
let singuph1 = document.body.children[0];

singuph1.innerHTML = "Listado de vehiculos en stock"

//Eventos
let buttonPrecio = document.getElementById("precio");

buttonPrecio.addEventListener("click", myButtonClicked);

function myButtonClicked(){
  console.log("Boton clickeado");
}

