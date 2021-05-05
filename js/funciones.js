//CONSTRUCTOR
class Vehiculos {
    constructor(modelo, marca, año, kilometros, precio, contacto){
        this.modelo = modelo.toUpperCase(); // para que pase a MAYUSCULA
        this.marca = marca.toUpperCase(); // para que pase a MAYUSCULA
        this.año = año
        this.kilometros = kilometros
        this.precio = parseFloat(precio); // para calcular el IVA
        this.contacto = contacto
    }
    sumarGastos(){
        this.precio = this.precio * 1.05; // agrego el 5% en concepto de gastos
    }
    getHTML(){
        return "<h2>"+ this.modelo + " " + this.año + "</h2>" + "<button id=precio onclick=document.getElementById('valor').innerHTML="+ this.precio +">VER PRECIO</button> <p id='valor'></p>"
    }
}

    //Modifico h1 desde JS
let singuph1 = document.body.children[0];

singuph1.innerHTML = "Listado de vehiculos en stock"


