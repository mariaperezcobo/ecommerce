
//ARRAY DE PRODUCTOS
// const productos = [
//     {nombre:"Calzas Lisboa", precio: 15000, imagen:"./imagenes/calzas2.png", alt:"calzas estampadas", id: "lisboa", categoria: "calzas"},
//     {nombre: "Calzas Londres", precio: 12000, imagen:"./imagenes/mujer estir.png", alt:"mujer estirando con calzas grises", id: "londres",categoria: "calzas"},
//     {nombre:"Calzas Madrid", precio: 10000, imagen:"./imagenes/zapas2.png", alt:"calzas estampadas blancas y azules", id: "madrid", categoria: "calzas"},
//     {nombre:"Top Miami", precio: 8000, imagen:"./imagenes/remera3.png", alt:"remera banca y gris",id: "miami", categoria: "remeras"},
//     {nombre:"Calzas Bariloche", precio:11000, imagen:"./imagenes/calzas3.png", alt:"mujer sentada en la playa, calzas estampadas", id: "bariloche", categoria: "calzas"},
//     {nombre:"Remera Buzios", precio: 7500, imagen:"./imagenes/mat(3).png", alt:"remera rosa",id: "buzios", categoria: "remeras"},
//     {nombre:"Calzas Brasil", precio:11000, imagen:"./imagenes/yoga3.png", alt:"mujer elongando, calzas grises", id: "brasil", categoria: "calzas"},
//     {nombre:"Remera Paris", precio: 7500, imagen:"./imagenes/remera1.png", alt:"remera banca y negra",id: "paris", categoria: "remeras"},
//     {nombre:"Remera Roma", precio: 7000, imagen:"./imagenes/conperro.png", alt:"remera verde",id: "roma", categoria: "remeras"},
//     {nombre:"Calzas Barcelona", precio:10000, imagen:"./imagenes/ropa960.png", alt:"dos chicas, una calza negra y otra blanca", id: "barcelona", categoria: "calzas"},
//     {nombre:"Calzas Nueva York", precio:11000, imagen:"./imagenes/zapas.png", alt:"mujer atandose las zapatillas , calzas negras", id: "nueva york", categoria: "calzas"},
//     {nombre:"Calzas Amsterdam", precio:12000, imagen:"./imagenes/estirando.png", alt:"mujer estirando , calzas negras", id: "amsterdam", categoria: "calzas"},
// ] 

//VARIABLES
let carritoTotal=[];
let precioCarritoTotal;
let carrito;
let productosFiltrados;
let verificarPosicion;
let productoComprar;
let productos=[];


//TO SEND THE PRODUCTS TO THE HTML
const contenedorProductos = document.querySelector("#contenedor-productos");
const container_compra = document.querySelector(".contenedorCarrito");
const resumen = document.querySelector(".resumen");
let botonAgregar = document.querySelectorAll (".botones");

const productosJson = async()=>{
    const resp = await fetch ("./data.json")
    const data = await resp.json()
    productos = data;
    cargarProductos(productos);
    };
    productosJson();
    
// fetch("./data.json")
// .then (res => res.json())
// .then (data =>{
//     productos =data;
//     cargarProductos(productos)
//     console.log(data)
// ;})
    
function cargarProductos (productosElegidos){
    productosElegidos.forEach(producto =>{
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
    });
    actualizarBotones (); 
    //console.log(productosElegidos);
    //console.log(botonAgregar);
   
};


function actualizarBotones () {
    botonAgregar = document.querySelectorAll (".botones");
    botonAgregar.forEach (itemBoton =>{
         itemBoton.addEventListener("click", agregarProductoAlCarrito );
    });
    //console.log(botonAgregar);
};


// TO FILTER FOR TYPE OF PRODUCT 

//TO SELECT ALL
cargarProductos(productos);

const producto_todos= document.querySelector(".todos_productos");
producto_todos.addEventListener("click", filtrarTodos );

function filtrarTodos (){
    contenedorProductos.innerHTML="";
    //productosFiltrados = productos;
    // console.log(productosFiltrados);
    cargarProductos(productos);
    
};


//TO SELECT ONLY "CALZAS"

const producto_calzas = document.querySelector(".producto_calzas");
producto_calzas.addEventListener("click", filtrarCalzas );

function filtrarCalzas (){
    contenedorProductos.innerHTML="";
    const productosCalzas = productos.filter (producto => producto.categoria === "calzas");
    console.log(productosCalzas);
    cargarProductos(productosCalzas);
};

//TO SELECT ONLY "REMERAS"

const producto_remeras = document.querySelector(".producto_remeras");
producto_remeras.addEventListener("click", filtrarRemeras );

function filtrarRemeras (){
    contenedorProductos.innerHTML="";
    const productosRemeras = productos.filter (producto => producto.categoria === "remeras");
    console.log(productosRemeras);
    cargarProductos(productosRemeras);
   
};


// TO BRING INFORMATION FOR THE STORAGE
const carritoEnStorage = localStorage.getItem("carritoFinal");
//console.log(carritoEnStorage);
const carritoDeStorageJson = JSON.parse(carritoEnStorage);

traerDeStorage ();

if (carritoDeStorageJson){
    carrito = carritoDeStorageJson;
}    else{
carrito =[];
};

//console.log(carrito);
actualizarCarrito();


//TO ADD PRODUCTS TO THE SHOPPING CART
const cardheader = document.querySelectorAll (".card-header");
const cardprincipal = document.querySelectorAll (".contenedor_principal");
const cardtext = document.querySelectorAll (".card-text");

function agregarProductoAlCarrito(e) {
    {
        const idItem = e.currentTarget.id; 
       // console.log(idItem);
       const productoComprar = productos.find (producto => producto.id === idItem);
       console.log(productoComprar);

       //console.log (carrito.some(producto => producto.id === idItem));
        if (carrito.some(producto => producto.id === idItem)){
            const verificarPosicion = carrito.findIndex ((producto => producto.id === idItem));
         //   console.log(verificarPosicion);
            carrito[verificarPosicion].cantidad++;
        }else {
            productoComprar.cantidad = 1;
            carrito.push(productoComprar); 
        };
    };
    calcularCarrito();
    actualizarCarrito();
    enviarAstorage ();
    traerDeStorage ();
    cartel ();
}; 


function cartel (){
    Toastify({
        text: "Producto agregado al carrito",
        duration: 1500,
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "rgb(30, 159, 116)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
};

function cartelEliminar (){
    Toastify({
        text: "Producto eliminado",
        duration: 1500,
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "rgb(16, 84, 84)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
};

function cartelCarritoVacio (){
    Toastify({
        text: "Productos eliminados",
        duration: 1500,
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "rgb(16, 84, 84)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
};

//console.log(carritoDeStorageJson);

//TO SEND THE SHOPPING CART TO THE STORAGE
function enviarAstorage () {
    const carritoJson = JSON.stringify(carrito);
   // console.log(carritoJson);
    localStorage.setItem("carritoFinal", carritoJson);

    const totalCompraJson = JSON.stringify(precioCarritoTotal);
    //console.log(totalCompraJson);
    localStorage.setItem("totalFinal", totalCompraJson);
};

//TO BRING FOR THE STORAGE TO THE JAVASCRIPT
function traerDeStorage (){
    const carritoEnStorage = localStorage.getItem("carritoFinal");
    //console.log(carritoEnStorage);
    const carritoDeStorageJson = JSON.parse(carritoEnStorage);
    // console.log(carritoDeStorageJson);

    const precioDeStorage = localStorage.getItem("totalFinal");
    const precioDeStorageJson = JSON.parse(precioDeStorage);
    //console.log(precioDeStorageJson);
};


// TO ADD THE CART TO THE HTML
function actualizarCarrito(producto){
    traerDeStorage ();

    container_compra.innerHTML="";
  
    carrito.forEach (producto =>{
        let listado = document.createElement("div");
        listado.innerHTML = 
        `  <div class="container-cart itemParaEliminar">
        <div>
        <div class="card border-dark mb-3" style="max-width: 20rem;">
            <div class="card-header carrito_eliminar">${producto.nombre}</div>
            <img class= "imagen_chica" src="${producto.imagen}" alt="${producto.alt}">
        </div>
        </div>
        <div>
        <p class="card-text">Precio: ${producto.precio}</p>
        <p class="card-text">Cantidad: ${producto.cantidad}</p>
        </div>
        
        <button type="button" class="btn btn-outline-primary boton_eliminar" id="${producto.nombre}">Eliminar</button>
        </div>
        `    
        container_compra.appendChild(listado);  

    });
    precioCarritoFinal();
    eliminarProducto ();
};


//TO SHOW THE PRICE OF THE SHOPPING CART
function precioCarritoFinal(){
    calcularCarrito();
    resumen.innerHTML="";
    const totalCarrito = document.createElement("div");
    totalCarrito.innerHTML = 
    `
    <div class="alert alert-dark" role="alert">
     El total de su compra es $ ${precioCarritoTotal}
    </div>
    `
    resumen.appendChild(totalCarrito);  
   // console.log(precioCarritoTotal);
};


//TO CALCULATE THE PRICE OF THE SHOPPING CART
function calcularCarrito(){
        precioCarritoTotal = carrito.reduce ((acumulado, producto) => {
            return acumulado + (producto.precio * producto.cantidad)},0);
    };
    

//TO DELETE A PRODUCT
const botonEliminarProducto = document.querySelectorAll (".boton_eliminar");

function eliminarProducto (){
    const divParaEliminar = document.querySelectorAll (".itemParaEliminar");
    const botonEliminarProducto = document.querySelectorAll (".boton_eliminar");
    const carrito_eliminar = document.querySelectorAll(".carrito_eliminar");
    //console.log(botonEliminarProducto);

    botonEliminarProducto.forEach (item =>{
        item.addEventListener("click", eliminar);
         });
};

function eliminar (e){
    const idNombre = e.currentTarget.id;
    console.log(idNombre);
    
    const productoEliminar = carrito.find (producto => producto.nombre === idNombre);
    console.log(productoEliminar);
    const verificarPosicionEliminar = carrito.findIndex ((producto => producto.nombre === idNombre));
    console.log(verificarPosicionEliminar);
    if (productoEliminar.cantidad >1){

    carrito[verificarPosicionEliminar].cantidad--;
    }else {carrito.splice(verificarPosicionEliminar,1);

    };
    //console.log(carrito);
    actualizarCarrito();
    enviarAstorage ();
    cartelEliminar ();
}; 


//TO CHANGE THE TITLES OF THE HTML
const titulo_principal = document.querySelectorAll(".titulo1")
titulo_principal[0].innerText = "Productos";
titulo_principal[1].innerText = "Carrito de compras";


//FORMULARIO
const formulario = document.querySelector(".formulario");
const nombre_formulario = document.querySelector("#inputName");
const email_formulario = document.querySelector("#inputEmail");

formulario.addEventListener("submit",(e) =>{
    e.preventDefault();

    Swal.fire({
    icon: 'success',
    title: 'Compra realizada con éxito!',
    text: 'Muchas gracias!',
    footer: '<a href="">Nos contactaremos con vos a la brevedad</a>'
  })
    // alert(`Compra realizada con éxito! Nos contactaremos con vos a la brevedad ${nombre_formulario.value}!!`);
    formulario.reset();
})


//BOTON DE VACIAR EL CARRITO
const contenedorVaciar = document.querySelector(".vaciar_carrito");

const vaciarCarrito = document.createElement("div");
vaciarCarrito.innerHTML = 
`<div>
<button class="btn boton boton_vaciar">Vaciar carrito</button>
</div>`
contenedorVaciar.appendChild(vaciarCarrito);  

const botonVaciar = document.querySelector(".boton_vaciar");
//console.log(botonVaciar);

botonVaciar.addEventListener("click", eliminarCarrito);

function eliminarCarrito(){
carrito = [];
actualizarCarrito();
enviarAstorage ();
cartelCarritoVacio ();

};





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
