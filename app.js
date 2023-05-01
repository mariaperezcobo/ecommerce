

const productos = [
    {nombre:"Calzas Lisboa", precio: 15000, imagen:"./imagenes/calzas2.png", alt:"calzas estampadas"},
    {nombre: "Calzas Londres", precio: 12000, imagen:"./imagenes/mujer estir.png", alt:"mujer estirando con calzas grises"},
    {nombre:"Calzas Madrid", precio: 10000, imagen:"./imagenes/zapas2.png", alt:"calzas estampadas blancas y azules"},
    {nombre:"Top Miami", precio: 8000, imagen:"./imagenes/remera3.png", alt:"remera banca y gris"},
    {nombre:"Calzas Bariloche", precio:1000, imagen:"./imagenes/calzas3.png", alt:"mujer sentada en la playa, calzas estampadas"},
    {nombre:"Calzas Barcelona", precio:10000, imagen:"./imagenes/ropa960.png", alt:"dos chicas, una calza negra y otra blanca"},
] 
//console.log(productos.join(","));
//para recorrer el array
//for (let i=0; i< productos.length; i++){
 //   console.log(productos[i]);



let cuotas;
let carritoTotal=[];
let precioCarritoTotal;
let entradaDos;
let entrada;
let carrito=[];
let comprar ="si";


while (comprar =="si"){
        entrada = Number(prompt ("Ingrese el número del producto a comprar. \n \n 1. Calza Lisboa. Precio: $15.000 \n 2. Calza Londres. Precio: $12.000\n 3. Calza Madrid. Precio: $10.000 \n 4. No quiero comprar ningun producto"));
        agregarProducto();
        comprar = prompt ("¿Quiere comprar agregar otro producto a su carrito?. \n 1. si \n 2. no").toLowerCase();   
};

if (comprar == "no"){
    alert ("No se agregan mas productos al carrito");
    };

function agregarProducto() {
    
    if(entrada == 1 || entrada == 2 || entrada == 3) {
        switch(entrada){
            case 1:
                nombre= "Calzas Lisboa";
                precio= 15000;
                imagen="";
                    alt="";
                break;
            case 2:
                    nombre= "Calzas Londres";
                    precio= 12000;
                    imagen="";
                    alt="";
                    break;
            case 3:
                    nombre= "Calzas Madrid";
                    precio= 10000;
                    imagen="";
                    alt="";
                    break;
            case 4:
                alert ("No seleccionó ningun producto");
                break;        
        } 
    carrito.push({nombre,precio, imagen, alt});
    } /*else {
        alert ("No seleccionó ningun producto");
    };*/
};


precioCarritoTotal = carrito.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
console.log(precioCarritoTotal);
console.log(carrito);

alert ("El total de la compra es " + precioCarritoTotal);

carrito.forEach ((carritoTotal) => {
    alert(`Producto: ${carritoTotal.nombre}, precio $ ${carritoTotal.precio}`);
}   );



if(entrada <4 && entrada >=1){
    cuotas = Number(prompt ("Ingrese el número de cuotas. \n 1 \n 2 \n 3"));
}/*else if (entrada >= 4 || entrada == "") {
    alert ("No seleccionó ningun producto");
};*/


if (cuotas <=3 && cuotas >=1){
        alert ("La cantidad de cuotas seleccionadas es: " + cuotas);
} else { 
    cuotas =1;
    
}

function calculoCuota (precioCarritoTotal, cuotas) {
    return (precioCarritoTotal / cuotas).toFixed(2) ;
}
let resultado = calculoCuota (precioCarritoTotal, cuotas) ;
if(entrada <4 && entrada >=1){
    alert(`El valor del carrito es $: ${precioCarritoTotal},  la compra se realiza en ${cuotas} cuotas, y cada cuota tiene un valor de $ ${resultado}`);
} ;

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos (producto){
    productos.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML= `
        <div class="card border-dark mb-3" style="max-width: 20rem;">
        <div class="card-header">${producto.nombre}</div>
        <img src="${producto.imagen}" alt="${producto.alt}">
        <div class="card-body">
            <p class="card-text">$ ${producto.precio}</p>
            <button type="button" class="btn btn-dark">Agregar al carrito</button>
        </div>
        `
        contenedorProductos.append(div);
    })
};
cargarProductos();

/*<div class="card border-dark mb-3" style="max-width: 20rem;">
<div class="card-header">Calzas Lisboa</div>
<img src="./imagenes/calzas2.png" alt="calzas estampadas">
<div class="card-body">
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsam rerum eveniet
        adipisci atque explicabo obcaecati nulla incidunt enim veniam..</p>
    <button type="button" class="btn btn-dark">Agregar al carrito</button>
</div>*/