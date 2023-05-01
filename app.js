

const productos = [
    {nombre:"Calzas Lisboa", precio: 15000},
    {nombre: "Calzas Londres", precio: 12000}
] 
//console.log(productos.join(","));
//para recorrer el array
//for (let i=0; i< productos.length; i++){
 //   console.log(productos[i]);


//para agregar productos al array
productos.push(
    {nombre:"Calzas Madrid", precio:10000}); 


let cuotas;
let carritoTotal=[];
let precioCarritoTotal;
let entradaDos;
let entrada;
let carrito=[];
let comprar ="si";


while (comprar =="si"){
        entrada = Number(prompt ("Ingrese el número del articulo a comprar. \n \n 1. Calza Lisboa \n 2. Calza Londres \n 3. Calza Madrid \n 4. No quiero comprar ningun producto"));
        agregarProducto();
        comprar = prompt ("¿Quiere comprar otro articulo?. \n 1. si \n 2. no").toLowerCase();   
};

if (comprar == "no"){
    alert ("No se agregan articulos al carrito");
    };

function agregarProducto() {
    
    if(entrada == 1 || entrada == 2 || entrada == 3) {
        switch(entrada){
            case 1:
                nombre= "Calzas Lisboa";
                precio= 15000;
                break;
            case 2:
                    nombre= "Calzas Londres";
                    precio= 12000;
                    break;
            case 3:
                    nombre= "Calzas Madrid";
                    precio= 10000;
                    break;
            case 4:
                alert ("No seleccionó ningun producto");
                break;        
        } 
    carrito.push({nombre,precio});
    } else {
        alert ("No seleccionó ningun producto");
    };
};


precioCarritoTotal = carrito.reduce ((acumulado, producto) => {
    return acumulado + producto.precio},0);
console.log(precioCarritoTotal);
console.log(carrito);

alert ("El total de la compra es " + precioCarritoTotal);

carrito.forEach ((carritoTotal) => {
    console.log(`Producto: ${carritoTotal.nombre}, precio $ ${carritoTotal.precio}`);
}   );


if(entrada <4 && entrada >=1){
    cuotas = Number(prompt ("Ingrese el número de cuotas. \n 1 \n 2 \n 3"));
}else if (entrada >= 4 || entrada == "") {
    alert ("No seleccionó ningun producto");
};


if (cuotas <=3 && cuotas >=1){
        alert ("La cantidad de cuotas seleccionadas es: " + cuotas);
} else { 
    cuotas =1;
    alert ("Se va a realizar en 1 pago");
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


