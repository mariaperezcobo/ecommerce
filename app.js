let entrada = Number(prompt ("Ingrese el número del articulo a comprar. \n 1. Calza Lisboa \n 2. Calza Londres \n 3. Calza Madrid \n 4. No quiero comprar ningun producto"));


let precioLisboa= 12000;
let precioLondres= 15000;
let precioMadrid= 8000;
let carrito=0;
let nuevoPrecio;
let cuotas;

if(entrada == 1){
    alert ("ha seleccionado la calza Lisboa. Precio "+ `${precioLisboa}`);
    nuevoPrecio = `${precioLisboa}`;
} else if (entrada == 2) {
        alert ("ha seleccionado la calza Londres. Precio "+ `${precioLondres}`);
        nuevoPrecio = `${precioLondres}`;
} else if (entrada == 3) {
    alert ("ha seleccionado la calza Madrid. Precio "+ `${precioMadrid}`);
    nuevoPrecio = `${precioMadrid}`;
} else if (entrada >= 4) {
    alert ("no seleccionó ningun producto");
};

if(entrada <4){
    cuotas = Number(prompt ("Ingrese el número de cuotas. \n 1 \n 2 \n 3"));
}else if (entrada >= 4) {
    alert ("no seleccionó ningun producto");
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
if(entrada <4){
    alert(`El valor del carrito es: ${nuevoPrecio},  la compra se realiza en ${cuotas} cuotas, y cada cuota tiene un valor de ${resultado}`);
} else if (entrada >= 4) {
    alert ("no seleccionó ningun producto");
};

console.log(nuevoPrecio);
console.log(resultado);
console.log(cuotas);





