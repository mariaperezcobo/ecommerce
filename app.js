
//ARRAY
const productos = [
    {nombre:"Calzas Lisboa", precio: 15000},
    {nombre: "Calzas Londres", precio: 12000}
] 
console.log(productos.join(","));
//para recorrer el array
for (let i=0; i< productos.length; i++){
    console.log(productos[i]);
}

//para agregar productos al array
productos.push(
    {nombre:"Calzas Madrid", precio:10000}); 
console.log(productos);


let entrada = Number(prompt ("Ingrese el número del articulo a comprar. \n 1. Calza Lisboa \n 2. Calza Londres \n 3. Calza Madrid \n 4. No quiero comprar ningun producto"));


let cuotas;
const carritoFinal =[];
let carritoUno=[];
let carritoDos=[];
let precioCarritoUno;
let precioCarritoDos;
let carritoTotal;
let precioCarritoTotal;
let entradaDos;


if(entrada == 1){
    carritoUno = productos.filter((producto) => producto.nombre ==="Calzas Lisboa");
    console.log(carritoUno);
    precioCarritoUno = carritoUno.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
    console.log(precioCarritoUno);
    alert ("Ha seleccionado la calza Lisboa. Precio "+ `${precioCarritoUno}`);
} else if (entrada == 2) {
    carritoUno = productos.filter((producto) => producto.nombre ==="Calzas Londres");
    console.log(carritoUno);
    precioCarritoUno = carritoUno.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
    console.log(precioCarritoUno);
    alert ("Ha seleccionado la calza Londres. Precio "+ `${precioCarritoUno}`);
} else if (entrada == 3) {
    carritoUno = productos.filter((producto) => producto.nombre ==="Calzas Madrid");
    console.log(carritoUno);
    precioCarritoUno = carritoUno.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
    console.log(precioCarritoUno);
    alert ("Ha seleccionado la calza Madrid. Precio "+ `${precioCarritoUno}`);
} else if (entrada >= 4 || entrada == "" ) {
    alert ("No seleccionó ningun producto");
    nuevoPrecio=0;
};


if(entrada == parseInt(1) || entrada == parseInt(2) || entrada == parseInt(3)){
    entradaDos = Number(prompt ("¿quiere agregar otro articulo al carrito? Ingrese el número del articulo a comprar. \n 1. Calza Lisboa \n 2. Calza Londres \n 3. Calza Madrid \n 4. No quiero comprar ningun producto"));
} else {
    alert ("No seleccionó ningun producto");
    };

if (entradaDos == 1){
    carritoDos = productos.filter((producto) => producto.nombre ==="Calzas Lisboa");
    console.log(carritoDos);
    precioCarritoDos = carritoDos.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
    console.log(precioCarritoDos);
    alert ("Ha seleccionado la calza Lisboa. Precio "+ `${precioCarritoDos}`);
} else if (entradaDos == 2) {
    carritoDos = productos.filter((producto) => producto.nombre ==="Calzas Londres");
    console.log(carritoDos);
    precioCarritoDos = carritoDos.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
    console.log(precioCarritoDos);
    alert ("Ha seleccionado la calza Londres. Precio "+ `${precioCarritoDos}`);
} else if (entradaDos == 3) {
    carritoDos = productos.filter((producto) => producto.nombre ==="Calzas Madrid");
    console.log(carritoDos);
    precioCarritoDos = carritoDos.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
    console.log(precioCarritoDos);
    alert ("Ha seleccionado la calza Madrid. Precio "+ `${precioCarritoDos}`);
} else if (entradaDos >= 4 || entradaDos == "" ) {
    alert ("No seleccionó ningun producto");
    precioCarritoDos == 0;
};
console.log(carritoUno);
console.log(precioCarritoUno);
console.log(carritoDos);
console.log(precioCarritoDos),



carritoTotal = carritoUno.concat(carritoDos);
precioCarritoTotal = carritoTotal.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
console.log(precioCarritoTotal);
console.log(carritoTotal);

alert ("El total de la compra es " + precioCarritoTotal);

if(entrada <4 && entrada >=1){
    cuotas = Number(prompt ("Ingrese el número de cuotas. \n 1 \n 2 \n 3"));
}else if (entrada >= 4 || entrada == "") {
    alert ("No seleccionó ningun producto");
};


if (cuotas <=3 && cuotas >=1){
        alert ("La cantidad de cuotas seleccionadas es: " + cuotas);
} else { 
    cuotas =1;
    alert ("La cantidad de cuotas seleccionadas es: " + cuotas);
}

function calculoCuota (precioCarritoTotal, cuotas) {
    return (precioCarritoTotal / cuotas).toFixed(2) ;
}
let resultado = calculoCuota (precioCarritoTotal, cuotas) ;
if(entrada <4 && entrada >=1){
    alert(`El valor del carrito es $: ${precioCarritoTotal},  la compra se realiza en ${cuotas} cuotas, y cada cuota tiene un valor de $ ${resultado}`);
}  else if (entrada >= 4 || entrada == "") {
    alert ("No seleccionó ningun producto");
};

//console.log(document);
//console.log(document.body);

const subtitulo = document.querySelector("h2").textContent = "Productos";
console.log(subtitulo);

const parrafos = document.querySelectorAll("p");
console.log(parrafos);

parrafos[0].innerText= "$15.000";
parrafos[1].innerText= "$12.000";
parrafos[2].innerText= "$10.000";

const tituloProducto = document.querySelectorAll(".card-header");
console.log(tituloProducto);

console.log(document);
//const subtitulo = document.querySelectorAll("h2");
//console.log(subtitulo.innerText);
