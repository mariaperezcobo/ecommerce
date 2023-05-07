
//ARRAY DE PRODUCTOS
const productos = [
    {nombre:"Calzas Lisboa", precio: 15000, imagen:"./imagenes/calzas2.png", alt:"calzas estampadas", id: "lisboa"},
    {nombre: "Calzas Londres", precio: 12000, imagen:"./imagenes/mujer estir.png", alt:"mujer estirando con calzas grises", id: "londres"},
    {nombre:"Calzas Madrid", precio: 10000, imagen:"./imagenes/zapas2.png", alt:"calzas estampadas blancas y azules", id: "madrid"},
    {nombre:"Top Miami", precio: 8000, imagen:"./imagenes/remera3.png", alt:"remera banca y gris",id: "miami"},
    {nombre:"Calzas Bariloche", precio:11000, imagen:"./imagenes/calzas3.png", alt:"mujer sentada en la playa, calzas estampadas", id: "bariloche"},
    {nombre:"Calzas Barcelona", precio:10000, imagen:"./imagenes/ropa960.png", alt:"dos chicas, una calza negra y otra blanca", id: "barcelona"},
] 
//console.log(productos.join(","));
//para recorrer el array
//for (let i=0; i< productos.length; i++){
 //   console.log(productos[i]);


//VARIABLES / ARRAY
let cuotas;
let carritoTotal=[];
let precioCarritoTotal;
let precioCarritoTotal2;
let entradaDos;
let entrada;
let carrito=[];
let comprar ="si";
let preguntaEliminar;
/*
//CONDICIONAL PARA QUE SIGA COMPRANDO LOS PRODUCTOS QUE QUIERA
while (comprar =="si"){
        entrada = Number(prompt ("Ingrese el número del producto a comprar. \n \n 1. Calza Lisboa. Precio: $15.000 \n 2. Calza Londres. Precio: $12.000\n 3. Calza Madrid. Precio: $10.000 \n 4. No quiero comprar ningun producto"));
        agregarProducto();
        comprar = prompt ("¿Quiere comprar agregar otro producto a su carrito?. \n 1. si \n 2. no").toLowerCase();   
};

if (comprar == "no"){
    alert ("No se agregan mas productos al carrito");
    };

//FUNCION PARA AGREGAR PRODUCTOS AL CARRITO DE COMPRAS

function agregarProducto() {
    
    if(entrada == 1 || entrada == 2 || entrada == 3) {
        switch(entrada){
            case 1:
                nombre= "Calzas Lisboa";
                precio= 15000;
                imagen= "./imagenes/calzas2.png";
                alt="calzas estampadas";
                codigo="lisboa";
                break;
            case 2:
                    nombre= "Calzas Londres";
                    precio= 12000;
                    imagen="./imagenes/mujer estir.png";
                    alt="";
                    codigo="londres";
                    break;
            case 3:
                    nombre= "Calzas Madrid";
                    precio= 10000;
                    imagen="./imagenes/zapas2.png";
                    alt="";
                    codigo="";
                    break;
            case 4:
                alert ("No seleccionó ningun producto");
                break;        
        } 
    carrito.push({nombre, precio, imagen, alt, codigo});
    } else {
        alert ("No seleccionó ningun producto");
    };
};
*/
//PARA CALCULAR EL VALOR TOTAL DEL CARRITO DE COMPRAS
/*function calcularCarrito(){
    precioCarritoTotal = carrito.reduce ((acumulado, producto) => {
        return acumulado + producto.precio},0);
}
calcularCarrito();

console.log(precioCarritoTotal);
console.log(carrito);*/
/*
//MOSTRAMOS AL CLIENTE EL VALOR DEL CARRITO
alert ("El total de la compra es $" + precioCarritoTotal);


//CONDICIONAL POR SI QUIERE ELIMINAR EL ULTIMO PRODUCTO
if(precioCarritoTotal>0){
    preguntaEliminar = prompt ("¿Quiere eliminar el ultimo producto que compró? \n 1. si \n 2. no").toLowerCase(); 
    eliminar();
    calcularCarrito();
}
function eliminar (){
    if (preguntaEliminar =="si"){
        carrito.pop({nombre,precio,imagen,alt,codigo})
    }
};

//CALCULA EL NUEVO VALOR DEL CARRITO, EN CASO QUE HAYA ELIMINADO EL ULTIMO ARTICULO
precioCarritoTotal = carrito.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
console.log(precioCarritoTotal);
console.log(carrito);

if(preguntaEliminar =="si"){
    alert ("El total de la compra eliminando el último producto es $" + precioCarritoTotal);
};

//MUESTRA EL DETALLE DEL CARRITO
carrito.forEach ((carritoTotal) => {
    alert(`Producto: ${carritoTotal.nombre}, precio $ ${carritoTotal.precio}`);
}   );


//PREGUNTA AL CLIENTE LAS CANTIDAD DE CUOTAS QUE DESEA PAGAR
if(precioCarritoTotal>0){
    cuotas = Number(prompt ("Ingrese el número de cuotas. \n 1 \n 2 \n 3"));
}/*else if (entrada >= 4 || entrada == "") {
    alert ("No seleccionó ningun producto");
};*/
/*
if (cuotas <=3 && cuotas >=1){
        alert ("La cantidad de cuotas seleccionadas es: " + cuotas);
} else { 
    cuotas =1;
    
}

//CALCULA EL VALOR DE LA CUOTA, DEPENDIENDO DE LA CANTIDAD DE CUOTAS SELECCIONADA
function calculoCuota (precioCarritoTotal, cuotas) {
    return (precioCarritoTotal / cuotas).toFixed(2) ;
}
let resultado = calculoCuota (precioCarritoTotal, cuotas) ;

// MUESTRA EL RESUMEN DE SU COMPRA: PRECIO TOTAL, CANT DE CUOTAS Y VALOR DE CADA CUOTA
if(precioCarritoTotal>0){
    alert(`El valor del carrito es $: ${precioCarritoTotal},  la compra se realiza en ${cuotas} cuotas, y cada cuota tiene un valor de $ ${resultado}`);
} ;
*/

//PARA CARGAR LOS PRODUCTOS AL HTML
const contenedorProductos = document.querySelector("#contenedor-productos");
const container_compra = document.querySelector(".contenedorCarrito");
const resumen = document.querySelector(".resumen");

function cargarProductos (producto){
    productos.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML= `
        <div class="contenedor_principal card border-dark mb-3" style="max-width: 20rem;">
            <div class="card-header">${producto.nombre}</div>
            <img src="${producto.imagen}" alt="${producto.alt}">
        <div class="card-body">
            <p class="card-text">$ ${producto.precio}</p>
            <button id="${producto.id}" type="button" class="btn btn-dark boton botones">Agregar al carrito</button>
        </div>
        </div>
        `
        contenedorProductos.append(div);
    })
};
cargarProductos();

/*
//PARA AGREGAR un producto DESDE EL BOTON AGREGAR////////////////////////////////////////////////////
const cardheader = document.querySelector (".card-header");
const cardtext = document.querySelector (".card-text");
const boton = document.querySelector (".boton");

boton.addEventListener("click", mostrar);

let carrito2=[];

    function mostrar (e){
        const boton = document.querySelector (".boton");

        console.log(cardheader.textContent);
        console.log(cardtext.textContent);
        const productoComprado = cardheader.textContent;
        const buscar = productos.find ((producto) => producto.nombre === productoComprado) ;
        console.log(productoComprado);
        console.log(buscar);
        carrito2.push (buscar);
        console.log(carrito2);
        calcularCarrito2();
        console.log(precioCarritoTotal2);
        carrito2.forEach ((producto) => {
            console.log(`Producto: ${producto.nombre}, precio $ ${producto.precio}`);
        }   );


        for (let productoCarrito of carrito2){
            let listado = document.createElement("div");
            listado.innerHTML = 
            `        <div class="container-cart">
            <div>
            <div class="card border-dark mb-3" style="max-width: 20rem;">
                <div class="card-header">${productoCarrito.nombre}</div>
                <img class= "imagen_chica" src="${productoCarrito.imagen}" alt="${productoCarrito.alt}">
            </div>
            </div>
            <p class="card-text">Precio: ${productoCarrito.precio}</p>
            <button type="button" class="btn btn-outline-primary">Eliminar</button>
            </div>
            `    
            container_carrito.appendChild(listado);  
        }
        const totalCarrito = document.createElement("div");
        totalCarrito.innerHTML = 
        `
        <div class="total_compra">El total de su compra es $ ${precioCarritoTotal2}</div>
        `
        container_carrito.appendChild(totalCarrito);  
    };
  

   

function calcularCarrito2(){
        precioCarritoTotal2 = carrito2.reduce ((acumulado, producto) => {
            return acumulado + producto.precio},0);
    };
calcularCarrito2();

  */
/////////////////////////////////////////////////////////////////////////////////////////////////

//para agregar varios productos con for each


//PARA AGREGAR VARIOS Productos DESDE EL BOTON AGREGAR////////////////////////////////////////////////////
const cardheader = document.querySelectorAll (".card-header");
const cardprincipal = document.querySelectorAll (".contenedor_principal");
const cardtext = document.querySelectorAll (".card-text");
let botonAgregar = document.querySelectorAll (".botones");
console.log(botonAgregar);

function actualizarBotones(){
    botonAgregar = document.querySelectorAll (".botones");
    botonAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    });
    calcularCarrito()
};

console.log(botonAgregar);
botonAgregar.forEach (itemBoton =>{
    itemBoton.addEventListener("click", agregarProductoAlCarrito )
        });

const carritoFinal =[];

function agregarProductoAlCarrito(e) {
    const id = e.currentTarget.id;
    console.log(id);  
    const productoComprar = productos.find (producto => producto.id === id);
    console.log(productoComprar);
    carrito.push(productoComprar); 
    console.log(carrito);
    actualizarCarrito();
    precioCarritoFinal();
    };


//AGREGAR CARRITO A LA SECCION DE CARRITO
function actualizarCarrito(){
    for (let productoCarrito of carrito){
        let listado = document.createElement("div");
        listado.innerHTML = 
        `        <div class="container-cart">
        <div>
        <div class="card border-dark mb-3" style="max-width: 20rem;">
            <div class="card-header">${productoCarrito.nombre}</div>
            <img class= "imagen_chica" src="${productoCarrito.imagen}" alt="${productoCarrito.alt}">
        </div>
        </div>
        <p class="card-text">Precio: ${productoCarrito.precio}</p>
        <button type="button" class="btn btn-outline-primary">Eliminar</button>
        </div>
        `    
        container_compra.appendChild(listado);  
    };  
    
};

precioCarritoFinal();

function precioCarritoFinal(){
    console.log(carrito);
    calcularCarrito();
    const totalCarrito = document.createElement("div");
    totalCarrito.innerHTML = 
    `
    <div class="total_compra">El total de su compra es $ ${precioCarritoTotal}</div>
    `
    resumen.appendChild(totalCarrito);  
    
};


function calcularCarrito(){
        precioCarritoTotal = carrito.reduce ((acumulado, producto) => {
            return acumulado + producto.precio},0);
    };
    

  
/////////////////////////////////////////////////////////////////////////////////////////////////









/*
const botones = document.querySelectorAll (".botones");
console.log(botones);

function agregarProductos(){
    botones.forEach(botones =>{
        botones.addEventListener("click", comprarProductos);
    });
};

const nuevoCarrito=[];

    function comprarProductos (e){
        console.log(cardheader.textContent);
        console.log(cardtext.textContent);
        const productoComprado = cardheader.textContent;
        const productoSeleccionado = productos.find ((producto) => producto.nombre === productoComprado) ;
        console.log(productoComprado);
        console.log(productoSeleccionado);
        nuevoCarrito.push (productoSeleccionado);
        console.log(nuevoCarrito);
    };
*/
    /*
function comprarProductos (e){
const id = e.currentTarget.id;
console.log(id);
};*/


//botones.addEventListener("click", agregar2);

//boton.forEach ((boton)=>
   // boton.addEventListener("click", mostrar);
//);   
/*
    function mostrar (){
        console.log(cardheader.textContent);
        console.log(cardtext.textContent);
    //   const comprarProducto = productos.find{producto => producto.nombre ===};
    };
*/
        
   /* console.log(cardheader.textContent);
    console.log(cardtext.textContent);
    const nombreProd = cardheader.textContent
    const buscarProd = productos.find ((producto) => producto.nombre === nombreProd);
    console.log(buscarProd);*/

  //  const parrafos = document.querySelectorAll(".parrafo");
//console.log(parrafos);

//PARA AGREGAR PRODUCTOS DESDE EL BOTON AGREGAR
/*const comprarProducto = document.querySelector(".lisboa");
comprarProducto.addEventListener ("click", (e) =>{
    console.log("hola mundo");
    
});*/

/*
const agregarProducto = document.querySelector(".lisboa");
agregarProducto.forEach((botonAgregar)=>{
    agregar.addEventListener("click", (e) =>{
console.log(e.target);

    });
});*/

   // const codigoProducto = e.target.codigo;

//console.log (comprarProducto);


/*
const agregar = document.querySelector(".lisboa");
agregar.addEventsListener ("click", hola);


function hola (){ 
    console.log("hola mundo");
    carrito.push
};

*/

//cambiar los titulos del html
const titulo_principal = document.querySelectorAll(".titulo1")
titulo_principal[0].innerText = "Productos";
titulo_principal[1].innerText = "Carrito de compras";


/*for (let productoCarrito of carrito){
    let listado = document.createElement("li");
    listado.innerHTML = productoCarrito;
    container_carrito.appendChild(listado);  
}*/

/*for (let productoCarrito of carrito){
    let listado = document.createElement("div");
    listado.innerHTML = 
    `
    <div class="container-cart">
    <h4 class="card-title">${productoCarrito.nombre}</h4>
    <p class="card-text">Precio: ${productoCarrito.precio}</p>
    <button type="button" class="btn btn-outline-primary">Eliminar</button>
    </div>
    `
    container_carrito.appendChild(listado);  
}*/
/*
const container_carrito = document.querySelector(".contenedorCarrito");
console.log(container_carrito);
*/
//MOSTRAR DETALLE DE PRODUCTOS DEL CARRITO
/*
for (let productoCarrito of carrito2){
    let listado = document.createElement("div");
    listado.innerHTML = 
    `        <div class="container-cart">
    <div>
    <div class="card border-dark mb-3" style="max-width: 20rem;">
        <div class="card-header">${productoCarrito.nombre}</div>
        <img class= "imagen_chica" src="${productoCarrito.imagen}" alt="${productoCarrito.alt}">
    </div>
    </div>
    <p class="card-text">Precio: ${productoCarrito.precio}</p>
    <button type="button" class="btn btn-outline-primary">Eliminar</button>
    </div>
    `    
    container_carrito.appendChild(listado);  
}*/

/*
function cargarProductosCarrito (productoCarrito){
    carrito2.forEach(productoCarrito =>{
        let listado = document.createElement("div");
        listado.innerHTML = 
        `        <div class="container-cart">
        <div>
        <div class="card border-dark mb-3" style="max-width: 20rem;">
            <div class="card-header">${productoCarrito.nombre}</div>
            <img class= "imagen_chica" src="${productoCarrito.imagen}" alt="${productoCarrito.alt}">
        </div>
        </div>
        <p class="card-text">Precio: ${productoCarrito.precio}</p>
        <button type="button" class="btn btn-outline-primary">Eliminar</button>
        </div>
        `    
        container_carrito.appendChild(listado); 
    })
};
cargarProductosCarrito();
*/

//MOSTRAR EL TOTAL DE LA COMPRA
/*const totalCarrito = document.createElement("div");
totalCarrito.innerHTML = 
`
<div class="total_compra">El total de su compra es $ ${precioCarritoTotal}</div>
`
container_carrito.appendChild(totalCarrito);  
*/
/*
//BOTON DE VACIAR EL CARRITO
const contenedorVaciar = document.querySelector(".vaciar_carrito");
const vaciarCarrito = document.createElement("div");
vaciarCarrito.innerHTML = 
`<div>
<button class="btn boton">Vaciar carrito</button>
</div>`
contenedorVaciar.appendChild(vaciarCarrito);  

console.log(carrito);
console.log(container_carrito);

const cuerpoCarrito = document.createElement("div");
cuerpoCarrito.innerHTML = "<div>tu nuevo carrito</div>";
console.log(cuerpoCarrito);
document.body.appendChild(cuerpoCarrito);
*/