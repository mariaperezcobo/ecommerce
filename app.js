let entrada = Number(prompt ("Ingrese el número del articulo a comprar. \n 1. Calza Lisboa \n 2. Calza Londres \n 3. Calza Madrid \n 4. No quiero comprar ningun producto"));


let precioLisboa= 15000;
let precioLondres= 12000;
let precioMadrid= 10000;
let carrito=0;
let nuevoPrecio;
let cuotas;

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
};

if(entrada <4 && entrada >=1){
    cuotas = Number(prompt ("Ingrese el número de cuotas. \n 1 \n 2 \n 3"));
}else if (entrada >= 4 || entrada == "") {
    alert ("No seleccionó ningun producto");
};


if (cuotas <=3){
        alert ("La cantidad de cuotas seleccionadas es: " + cuotas);
} else if (cuotas >3) { 
    cuotas =1;
    alert ("La cantidad de cuotas seleccionadas es: " + cuotas);
}

function calculoCuota (nuevoPrecio, cuotas) {
    return (nuevoPrecio / cuotas).toFixed(2) ;
}
let resultado = calculoCuota (nuevoPrecio, cuotas) ;
if(entrada <4 && entrada >=1){
    alert(`El valor del carrito es: ${nuevoPrecio},  la compra se realiza en ${cuotas} cuotas, y cada cuota tiene un valor de ${resultado}`);
} else if (entrada >= 4 || entrada == "") {
    alert ("No seleccionó ningun producto");
};


//OBJETOS

function Producto (nombre, precio){
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



//ARRAY
const productos = [
    "Calzas Lisboa",
    "Calzas Londres",
] 
console.log(productos.join(","));
//para recorrer el array
for (let i=0; i< productos.length; i++){
    console.log(productos[i]);
}

//para agregar productos al array
productos.push("Calzas Madrid");
productos.unshift("Top Miami");

//unir dos array
const productos2 = ["Remera Barcelona"];
const productosFinal = productos.concat(productos2);
console.log(productos);
console.log(productosFinal);
