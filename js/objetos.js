//CREO OBJETOS
const auto1 = new Vehiculos("Ka", "Ford", "2013", "85000", "620000")
const auto2 = new Vehiculos("gol", "trend", "2016", "35000", "950000")
const auto3 = new Vehiculos("etios", "toyota", "2015", "46000", "1200000")
const auto4 = new Vehiculos("up", "volkswagen", "2020", "15000", "1350000")
const auto5 = new Vehiculos("toro", "fiat", "2017", "150000", "1800000")
const auto6 = new Vehiculos("saveiro", "volkswagen", "2010", "189000", "750000")
const auto7 = new Vehiculos("kics", "nissan", "2021", "5000", "2100000")
const auto8 = new Vehiculos("ranger", "ford", "2012", "250000", "2200000")

//sumo gastos al precio
auto1.sumarGastos()
auto2.sumarGastos()
auto3.sumarGastos()
auto4.sumarGastos()
auto5.sumarGastos()
auto6.sumarGastos()
auto7.sumarGastos()
auto8.sumarGastos()

//creo los arrays
let autos = [auto1, auto2, auto3, auto4]
let pickups = [auto5, auto6, auto7, auto8]
const automotores = autos.concat(pickups)

//Almaceno ARRAY de objetos
const GuardarAutos = (clave, valor) => {localStorage.setItem(clave, valor)};
GuardarAutos("listaAutos", JSON.stringify(autos));
const GuardarPickups = (clave, valor) => {localStorage.setItem(clave, valor)};
GuardarPickups("listaPickups", JSON.stringify(pickups));

//creo elementos desde objetos

let myHTMLStock = document.getElementById("mystock");

for (const Vehiculos of autos) {
    let myitem = document.createElement("li");

    myitem.innerHTML = Vehiculos.getHTML();

    myHTMLStock.appendChild(myitem);
}
