
// Seleccionar el boton del DOM
let boton = document.querySelector('#btn');

// Seleccionar Body
let body = document.querySelector('body');

// Seleccionar campo de texto donde agregar el color actual
let texto_color = document.querySelector('#hex-value');
texto_color.innerHTML = "#ffffff";

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

    // Agregar color hexadecimal en el campo de texto
    texto_color.innerHTML = color_hexadecimal;
    
}     

// Llamado de funcion a la hora de hacer click
boton.addEventListener("click", cambioColor);

