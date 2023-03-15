const colors =[ 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'black', 'white', 'gray', 'pink']

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener(`click`, function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

/*

Este código JavaScript crea un botón en la página web y le agrega un evento de clic. Cuando el usuario hace clic en el botón, el color de fondo de la página web cambia al azar y se muestra el nombre del color en un elemento de texto.

Aquí está lo que hace cada línea de código:

Este código define un arreglo llamado colors que contiene 10 nombres de colores.

Estas líneas de código obtienen referencias a dos elementos HTML en la página web. La primera línea obtiene una referencia al elemento HTML con el atributo id igual a "btn", que es un botón. La segunda línea obtiene una referencia al primer elemento HTML que tiene una clase CSS específica, en este caso "color".

Este código agrega un evento de clic al botón. Cuando se hace clic en el botón, se ejecuta una función que hace lo siguiente:

Genera un número aleatorio llamando a la función getRandomNumber().
Usa el número aleatorio para seleccionar un color aleatorio del arreglo colors y establecerlo como el color de fondo del elemento body.
Establece el nombre del color seleccionado en el elemento HTML con la clase CSS "color".

Esta función genera un número aleatorio entre 0 y la longitud del arreglo colors. Se utiliza para seleccionar un color aleatorio del arreglo. La función Math.random() genera un número aleatorio entre 0 y 1, y luego se multiplica por la longitud del arreglo colors y se trunca hacia abajo utilizando la función Math.floor().
*/