// RECUERDA: Plantear paso a paso lo que debe hacer la aplicación; no escribir directamente código JavaScript


// Seleccionar el boton del DOM
let boton = document.querySelector('#btn');

// Seleccionar Body
let body = document.querySelector('body');

// Seleccionar input
let input = document.querySelector('#hex-value');
input.innerHTML = "#ffffff";

// Probar click con mensaje por consola
boton.addEventListener("click", () => {
    console.log("Funciona selector");
});


// Funcion cambio de color de fondo  
cambioColor = () => {  

    // Generar color hexadecimal
    let color_hexadecimal = "#" + Math.floor(Math.random()*12345678).toString(16);

    // Cambio de color
    body.style.backgroundColor = color_hexadecimal;

    // Escribir color hexadecimal en el input
    input.innerHTML = color_hexadecimal;
    
}     

// Llamado de funcion a la hora de hacer click
boton.addEventListener("click", cambioColor);

