/*let entrada = Number(prompt ("Ingrese el número del articulo a comprar. \n 1. Calza Lisboa \n 2. Calza Londres \n 3. Calza Madrid \n 4. No quiero comprar ningun producto"));


let precioLisboa= 18000;
let precioLondres= 12000;
let precioMadrid= 14000;
let carrito=0;
let nuevoPrecio;
let nuevoPrecioDos;
let cuotas;
let totalCompra=0;
const carrito2 =[];

if(entrada == 1){
    alert ("Ha seleccionado la calza Lisboa. Precio "+ `${precioLisboa}`);
    nuevoPrecio = `${precioLisboa}`;
} else if (entrada == 2) {
        alert ("Ha seleccionado la calza Londres. Precio "+ `${precioLondres}`);
        nuevoPrecio = `${precioLondres}`;
} else if (entrada == 3) {
    alert ("Ha seleccionado la calza Madrid. Precio "+ `${precioMadrid}`);
    nuevoPrecio = `${precioMadrid}`;
} else if (entrada >= 4 || entrada == "" ) {
    alert ("No seleccionó ningun producto");
    nuevoPrecio=0;
};
*/
/*let entradaDos = Number(prompt ("¿quiere agregar otro articulo al carrito? Ingrese el número del articulo a comprar. \n 1. Calza Lisboa \n 2. Calza Londres \n 3. Calza Madrid \n 4. No quiero comprar ningun producto"));

if(entradaDos == 1){
    alert ("Ha seleccionado la calza Lisboa. Precio "+ `${precioLisboa}`);
    nuevoPrecioDos = `${precioLisboa}`;
} else if (entradaDos == 2) {
        alert ("Ha seleccionado la calza Londres. Precio "+ `${precioLondres}`);
        nuevoPrecioDos = `${precioLondres}`;
} else if (entradaDos == 3) {
    alert ("Ha seleccionado la calza Madrid. Precio "+ `${precioMadrid}`);
    nuevoPrecioDos = `${precioMadrid}`;
} else if (entradaDos >= 4 || entradaDos == "" ) {
    alert ("No seleccionó ningun producto");
    nuevoPrecioDos=0;
};

function suma (a,b){
    totalCompra = a + b;
};

suma(parseInt(nuevoPrecio),parseInt(nuevoPrecioDos));

alert ("El total de la compra es " + totalCompra);

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

function calculoCuota (totalCompra, cuotas) {
    return (totalCompra / cuotas).toFixed(2) ;
}
let resultado = calculoCuota (totalCompra, cuotas) ;
if(entrada <4 && entrada >=1){
    alert(`El valor del carrito es: ${totalCompra},  la compra se realiza en ${cuotas} cuotas, y cada cuota tiene un valor de ${resultado}`);
}  else if (entrada >= 4 || entrada == "") {
    alert ("No seleccionó ningun producto");
};



*/

//OBJETOS

/*function Producto (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const producto1 = new Producto ("Calzas Lisboa", 15000);
const producto2 = new Producto ("Calzas Londres", 12000);
const producto3 = new Producto ("Calzas Madrid", 10000);
const producto4 = new Producto ("Remera Barcelona", 12000);
const producto5 = new Producto ("Top Miami", 10000);

console.log(producto1);
console.log(producto2);
console.log(producto3);


*/

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


//let entrada = Number(prompt ("Ingrese el número del articulo a comprar. \n 1. Calza Lisboa \n 2. Calza Londres \n 3. Calza Madrid \n 4. No quiero comprar ningun producto"));

let resultado3= productos.filter((producto) => producto.nombre ==="Calzas Lisboa");
console.log(resultado3);

let compra= productos.filter((producto) => producto.nombre ==="Calzas Madrid");
console.log(compra);
let totalCarrito2 = compra.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
console.log(totalCarrito2);

const carrito=[];
let totalcompra;


//carrito.push(compra);
//carrito.push(resultado3);
console.log(carrito);

const carritoFinal2 = compra.concat(resultado3);
console.log(productos);
console.log(carritoFinal2);

const carritoFinal4 = carritoFinal2.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
console.log(carritoFinal4);

const totalCarrito = carrito.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
console.log(totalCarrito);


productos.forEach ((producto)=> {
    console.log(producto.precio);
});
/*
let productoElegido = prompt("ingrese el producto");
console.log (producto.find((producto) => producto.nombre === productoElegido)); 
*/

/*let resultado3 = productos.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
console.log(resultado3);

/*productos.maps((f,i)=>{
    console.log(`${i}:${f}`)
})*/

/*trae el primer valor q encuentra
let resultado3 = productos.find((producto)=> producto.precio >1500);
console.log(resultado3);*/



let resultado4 = productos.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
console.log(resultado4);

let precioProductoUno = productos.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
console.log(precioProductoUno);




//unir dos array
/*const productos2 = ["Remera Barcelona"];
const productosFinal = productos.concat(productos2);
console.log(productos);
console.log(productosFinal);*/

/*productos.indexOf(
{nombre:"Top Miami", precio: 7000});
console.log(productos);
*/

let entrada = Number(prompt ("Ingrese el número del articulo a comprar. \n 1. Calza Lisboa \n 2. Calza Londres \n 3. Calza Madrid \n 4. No quiero comprar ningun producto"));

let nuevoPrecio;
let nuevoPrecioDos;
let cuotas;
let totalCompra=0;
const carrito2 =[];
let primerCarrito;
let precioPrimerCarrito;
let precioCarritoLisboa;
let precioCarritoMadrid;
let precioCarritoLondres;
let carritoLisboa;
let carritoMadrid;
let carritoLondres;

if(entrada == 1){
    carritoLisboa = productos.filter((producto) => producto.nombre ==="Calzas Lisboa");
    console.log(carritoLisboa);
    carrito.push(carritoLisboa);
    precioCarritoLisboa = carritoLisboa.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
    console.log(precioCarritoLisboa);
    alert ("Ha seleccionado la calza Lisboa. Precio "+ `${precioCarritoLisboa}`);
} else if (entrada == 2) {
    carritoLondres = productos.filter((producto) => producto.nombre ==="Calzas Londres");
    console.log(carritoLondres);
    carrito.push(carritoLondres);
    precioCarritoLondres = carritoLondres.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
    console.log(precioCarritoLondres);
    alert ("Ha seleccionado la calza Londres. Precio "+ `${precioCarritoLondres}`);
} else if (entrada == 3) {
    carritoMadrid = productos.filter((producto) => producto.nombre ==="Calzas Madrid");
    console.log(carritoMadrid);
    carrito.push(carritoMadrid);
    precioCarritoMadrid = carritoMadrid.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
    console.log(precioCarritoMadrid);
    alert ("Ha seleccionado la calza Madrid. Precio "+ `${precioCarritoMadrid}`);
} else if (entrada >= 4 || entrada == "" ) {
    alert ("No seleccionó ningun producto");
    nuevoPrecio=0;
};

/*let entradaDos = Number(prompt ("¿quiere agregar otro articulo al carrito? Ingrese el número del articulo a comprar. \n 1. Calza Lisboa \n 2. Calza Londres \n 3. Calza Madrid \n 4. No quiero comprar ningun producto"));

if(entradaDos == 1){
    alert ("Ha seleccionado la calza Lisboa. Precio "+ `${precioLisboa}`);
    nuevoPrecioDos = `${precioLisboa}`;
} else if (entradaDos == 2) {
        alert ("Ha seleccionado la calza Londres. Precio "+ `${precioLondres}`);
        nuevoPrecioDos = `${precioLondres}`;
} else if (entradaDos == 3) {
    alert ("Ha seleccionado la calza Madrid. Precio "+ `${precioMadrid}`);
    nuevoPrecioDos = `${precioMadrid}`;
} else if (entradaDos >= 4 || entradaDos == "" ) {
    alert ("No seleccionó ningun producto");
    nuevoPrecioDos=0;
};*/
