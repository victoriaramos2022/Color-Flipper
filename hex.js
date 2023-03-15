const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Genera un color hexadecimal aleatorio
btn.addEventListener(`click`, function(){
    let hexColor = `#`;
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
        
    }
    
   // Muestra el color generado en la página
    color.textContent = hexColor;
    document.body.style.backgroundColor=hexColor;
   
});


function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);

}


/*
Este código es un ejemplo de cómo generar un color hexadecimal aleatorio y aplicarlo al fondo de una página web al hacer clic en un botón.

Aquí está el desglose del código:

1.Se define una matriz de valores hexadecimales posibles, que incluye dígitos numéricos y letras de A a F.
2.Se obtienen referencias al botón y al elemento de la página que mostrará el color generado.
3.Se agrega un evento "click" al botón. Cuando se hace clic en el botón, se ejecuta una función anónima que genera un color hexadecimal aleatorio y lo muestra en la página.
4. La función getRandomNumber() genera un número aleatorio entre 0 y la longitud de la matriz hex, que se utilizará para seleccionar un valor hexadecimales aleatorio de la matriz.

En resumen, este código genera un color hexadecimal aleatorio y lo aplica al fondo de una página web al hacer clic en un botón.
*/